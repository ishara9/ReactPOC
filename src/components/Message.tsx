import { useState } from "react";

let count = 0;

const Message = () => {
  const [drink, setDrink] = useState({
    title: "Pepsi",
    amount: 4,
  });

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    address: {
      city: "Moratuwa",
      zip: 10400,
    },
  });

  const [tags, setTags] = useState(["Pepsi", "Coke", "Fanta", "Sprite"]);

  //   count++;

  const handleClick = () => {
    const newDrink = { ...drink, amount: 6 };
    setDrink(newDrink);
    setPerson({ ...person, address: { city: "Colombo", zip: 1000 } });

    setTags([...tags, "7up"]);
    setTags(tags.filter((tag) => tag !== "Coke"));
    setTags(tags.map((tag) => (tag === "Pepsi" ? "Pepsi Zero" : tag)));
    console.log("Message count:", newDrink);
  };

  return (
    <>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
      {drink.amount}
      {person.firstName +
        " " +
        person.lastName +
        " " +
        person.address.city +
        " " +
        person.address.zip}
      <button onClick={handleClick}>drink customer: </button>
    </>
  );
};

export default Message;
