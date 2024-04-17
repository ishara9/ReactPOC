import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import LikeButton from "./components/LikeButton/LikeButton";
import Message from "./components/Message";
import Bugs from "./components/Bugs";

function App() {
  // const [alertVisible, setAlertVisible] = useState(false);
  // const [like, setLike] = useState(false);

  return (
    <>
      {/* {alertVisible && (
        <div>
          <Alert text="Hello" onClose={() => setAlertVisible(false)}>
            Child Prop<h1> rock </h1>
          </Alert>
        </div>
      )} */}
      {/* <div>
        <ListGroup></ListGroup>
      </div> */}
      {/* <div>
        <Button color="primary" onClick={() => setAlertVisible(true)}>
          Custom Button
        </Button>
      </div> */}
      {/* <LikeButton onClick={() => console.log("liked")} /> */}
      {/* <Message /> */}
      <Bugs />
    </>
  );
}

export default App;
