import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <div>
          <Alert text="Hello" onClose={() => setAlertVisible(false)}>
            Child Prop<h1> rock </h1>
          </Alert>
        </div>
      )}
      {/* <div>
        <ListGroup></ListGroup>
      </div> */}
      <div>
        <Button color="primary" onClick={() => setAlertVisible(true)}>
          Custom Button
        </Button>
      </div>
    </>
  );
}

export default App;
