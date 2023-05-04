import DesignerPdf from "./Pdf/DesignerPdf"
import Pdf from "./Pdf/Pdf"
import NewPdf from "./Pdf/NewPdf"
import ReactPDF, { PDFViewer } from "@react-pdf/renderer"
import { PDFDownloadLink } from "@react-pdf/renderer"
import { useMemo } from "react"

const App = () => {

  const pdfPage = useMemo(() => (
    <NewPdf />
  ), [])

  return (
    <>
      <PDFViewer height={1000} width={1000}>
        <NewPdf />
      </PDFViewer>
      {/* <button onClick={downloadPdf}>Download Pdf</button> */}
      <PDFDownloadLink document={pdfPage} fileName={"test.pdf"}>
        Download
      </PDFDownloadLink>
    </>
  )
}

export default App