import { useState } from "react";

function ListGroup() {
  //   const items = [];
  let items = ["Sri Lanka", "New Zealand", "UK"];
  // let selectedIndex = 0;
  //hook
  // const arr = useState(-1);
  // arr[0] // selected index
  // arr[1] // update function

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p> No Items found</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
