import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form/Form";
import MyDocument from "./components/ReactPDF/ReactPDFTool";

function App() {
  return (
    <>
      {/* <ExpandableText maxChars={20}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error adipisci
        nam beatae illum accusantium molestias ex, dolor provident sunt quam
        incidunt explicabo cumque eum dolorum unde obcaecati accusamus natus
        inventore! Laboriosam corrupti quis eligendi? At in nulla, soluta quidem
        animi quisquam architecto, aperiam, blanditiis ipsum odio eaque fuga. Ea
        harum voluptatum expedita vero alias illum nobis quasi deleniti quo
        eligendi. Quas saepe ratione molestias dignissimos voluptas possimus
        ducimus esse aliquid error exercitationem, est velit. Fugit alias quas
        dignissimos fuga dolorem in modi minima, totam impedit quos ducimus?
        Velit, quaerat eligendi architecto quibusdam provident quis quidem fugit
        totam vitae odio dolorem.
      </ExpandableText> */}
      <Form />
      {/* <PDFViewer>
        <MyDocument />
      </PDFViewer> */}
    </>
  );
}

export default App;
