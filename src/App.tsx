import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form/Form";
import MyDocument from "./components/ReactPDF/ReactPDFTool";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "abc", amount: 10, category: "Util" },
    { id: 2, description: "abcd", amount: 5, category: "Util" },
    { id: 3, description: "abcf", amount: 201, category: "Groceries" },
    { id: 4, description: "hghgh", amount: 23, category: "Groceries" },
    { id: 5, description: "qweq", amount: 45, category: "Groceries" },
    { id: 6, description: "axc", amount: 77, category: "Groceries" },
    { id: 7, description: "a123a", amount: 34, category: "Groceries" },
    { id: 8, description: "sss", amount: 156, category: "Entertainment" },
    { id: 9, description: "ggg", amount: 23, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

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
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id: number) =>
            setExpenses(expenses.filter((e) => e.id !== id))
          }
        ></ExpenseList>
      </div>
    </>
  );
}

export default App;
