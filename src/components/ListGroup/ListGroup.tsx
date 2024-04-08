import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";
import { CiCalendarDate } from "react-icons/ci";

const List = styled.ul`
  list-styles: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "blue" : null)};
`;

function ListGroup() {
  //   const items = [];
  let items = ["Sri Lanka", "New Zealand", "UK"];
  // let selectedIndex = 0;
  //hook
  // const arr = useState(-1);
  // arr[0] // selected index
  // arr[1] // update function

  const [selectedIndex, setSelectedIndex] = useState(0);

  const getMessage = () => {
    return items.length === 0 && <p> No Items found</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul style={{ backgroundColor: "yellow" }}>
        {items.map((item, index) => (
          <li
            style={{ background: "blue" }}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <CiCalendarDate color="green" size={500} />
    </>
  );
}

export default ListGroup;
