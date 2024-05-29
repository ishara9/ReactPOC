import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import axios, { CanceledError } from "axios";
import { string } from "zod";

const connect = () => console.log("Connecting");
const disConnect = () => console.log("Disconnecting");

function App() {
  const [category, setCategory] = useState("");
  // useEffect(() => {
  //   connect();

  //   // Following will be executed when react unmounting the component, in dev mode we can see 2 connecting and 1 disconnect
  //   return () => disConnect();
  // });

  interface User {
    id: number;
    name: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id != user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Ishrav" };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUsers([res.data, ...users]));
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}{" "}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

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
      {/* <FocusInput /> */}

      {/* <div className="mb-3">
        <select
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=""></option>
          <option value="Cloathing">Cloathing</option>
          <option value="Household">Household</option>
        </select>
        <ProductList category={category} />
      </div> */}

      {/* <div>
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(expense) => {
              console.log(expense);
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ]);
            }}
          />
        </div>
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
      </div> */}
    </>
  );
}

export default App;
