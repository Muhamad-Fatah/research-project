import { BLANK_PDF, generate } from '@pdfme/generator';
import { useEffect, useState } from 'react';
import img from "../poster.jpeg"
// import { Template, BLANK_PDF } from '@pdfme/ui'; <- Template types and BLANK_PDF can also be imported from @pdfme/ui.

const Pdf = () => {

    const [bufferImg, setBufferImg] = useState()

    const template = {
        basePdf: BLANK_PDF,
        schemas: [
            {
                a: {
                    type: 'text',
                    position: { x: 0, y: 0 },
                    width: 10,
                    height: 10,
                    backgroundColor : "#4287f5"
                },
                b: {
                    type: 'text',
                    position: { x: 10, y: 10 },
                    width: 10,
                    height: 10,
                },
                c: {
                    type: 'text',
                    position: { x: 20, y: 20 },
                    width: 10,
                    height: 10,
                },
                d: {
                    type: 'image',
                    position: { x: 30, y: 30 },
                    width: 300,
                    height: 20,
                }
            },
        ],
    };    

    const inputs = [{ a: 'a1', b: 'b1', c: 'c1'}];


    useEffect(() => {
        fetch(img)
            .then(res => res.blob())
            .then(blob => {
                let reader = new FileReader()
                reader.readAsArrayBuffer(blob)
                reader.onload = (e) => {
                    var buffer = e.target.result
                    console.log(new DataView(buffer).getUint16(0));
                }
            })

        generate({ template, inputs }).then((pdf) => {
            // Browser
            const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
            window.open(URL.createObjectURL(blob));

            // Node.js
            // fs.writeFileSync(path.join(__dirname, `test.pdf`), pdf);
        });
    }, [])

    return (
        <p>PDF</p>
    )
}

export default Pdf