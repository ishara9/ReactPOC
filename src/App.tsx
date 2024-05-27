import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form/Form";
import MyDocument from "./components/ReactPDF/ReactPDFTool";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "abc", amount: 10, category: "Util" },
    { id: 2, description: "abcd", amount: 5, category: "Util" },
    { id: 3, description: "abcf", amount: 20, category: "Util" },
  ]);

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
      {/* <Form /> */}
      {/* <PDFViewer>
        <MyDocument />
      </PDFViewer> */}
      <div>
        <ExpenseList
          expenses={expenses}
          onDelete={(id: number) => setExpenses(expenses.filter(e=> e.id !== id))}
        ></ExpenseList>
      </div>
    </>
  );
}

export default App;
