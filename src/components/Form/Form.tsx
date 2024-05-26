import { FormEvent, useRef, useState } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // console.log("submit f2");
    // person.name = nameRef.current?.value || "";
    // person.age = ageRef.current ? +ageRef.current.value : 0;
    console.log(person);
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const [person, setPerson] = useState({ name: "", age: 0 });

  return (
    <form onSubmit={handleSubmit}>
      {/* margin bottom 3 
            div.mb-3>label.form-label+input.form-control
      */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // this will re-render alwaus input value changes
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          ref={nameRef}
          id="name"
          type="text"
          className="form-control"
          value={person.name} //value is updated at component state , not by the DOM
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          ref={ageRef}
          id="age"
          type="number"
          className="form-control"
          value={person.age}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
