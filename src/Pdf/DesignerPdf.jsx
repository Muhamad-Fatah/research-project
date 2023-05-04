import { BLANK_PDF, generate } from '@pdfme/generator';
import { useEffect } from 'react';
import img from "../poster.jpeg"
import { Template, Form } from '@pdfme/ui';
// import { Template, BLANK_PDF } from '@pdfme/ui'; <- Template types and BLANK_PDF can also be imported from @pdfme/ui.

const DesignerPdf = () => {

    const domContainer = document.getElementById('container');
    const template = {
        basePdf: BLANK_PDF,
        schemas: [
            {
                a: {
                    type: 'text',
                    position: { x: 0, y: 0 },
                    width: 10,
                    height: 10,
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
                // d: {
                //     type: 'image',
                //     position: { x: 30, y: 30 },
                //     width: 300,
                //     height: 20,
                // }
            },
        ],
    };
    // This is initial data.
    const inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];

    const form = new Form({ domContainer, template, inputs });

    useEffect(() => {
        generate({ template, inputs: form.getInputs() }).then((pdf) => {
            const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
            window.open(URL.createObjectURL(blob));
        });
    }, [])

    return (
        <div id="container">
            {/* <p>generate DesignerPdf</p> */}
        </div>
    )
}

export default DesignerPdf