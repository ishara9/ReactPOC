import React, { useState } from "react";
import Button from "./Button/Button";
import produce from "immer";

const Bugs = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);

  const handleButton = (id: number) => {
    // setBugs(
    //   bugs.map((bug) => (bug.id === id ? { ...bug, fixed: !bug.fixed } : bug))
    // );

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === id);
        if (bug) bug.fixed = !bug.fixed;
      })
    );
  };

  return (
    <>
      <div>Bugs</div>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.title} - {bug.fixed ? "Fixed" : "Not fixed"}
            <Button
              key={bug.id}
              color="primary"
              onClick={() => handleButton(bug.id)}
              style={{ marginLeft: "10px" }}
            >
              {bug.fixed ? "Unfix" : "Fix"}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Bugs;
