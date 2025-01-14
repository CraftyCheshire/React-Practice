import React, { useState } from "react";
import handleSubmit from "../controllers/handleSubmit";

function ReactPractice() {
  // Initialize the state for the number input with default value 1
  const [number, setNumber] = useState(1);

  // Handle changes to the number input
  const handleNumberChange = (event) => {
    setNumber(event.target.value); // Update state with the new value
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginTop: "20px", textAlign: "center" }}
    >
      <label
        htmlFor="inputName"
        style={{ fontSize: "18px", marginRight: "10px" }}
      >
        Enter Name:
      </label>
      <input
        id="inputName"
        name="name"
        type="text"
        placeholder="Your name"
        style={{ padding: "5px", fontSize: "16px", marginRight: "10px" }}
      />
      <br />
      <br />

      <label
        htmlFor="dropdown"
        style={{ fontSize: "18px", marginRight: "10px" }}
      >
        Choose an option:
      </label>
      <select
        id="dropdown"
        name="dropdown"
        multiple={false}
        style={{ padding: "5px", fontSize: "16px", marginRight: "10px" }}
      >
        <option value="boolean">Boolean</option>
        <option value="multiple">Multiple</option>
        <option value="none">None</option>
      </select>
      <br />
      <br />

      <label
        htmlFor="numberInput"
        style={{ fontSize: "18px", marginRight: "10px" }}
      >
        Select a number (1-3):
      </label>
      <input
        id="numberInput"
        name="number"
        type="number"
        value={number}
        min="1"
        max="3"
        onChange={handleNumberChange}
        style={{
          padding: "5px",
          fontSize: "16px",
          marginRight: "10px",
          width: "60px",
        }}
      />
      <br />
      <br />

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#61dafb",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default ReactPractice;
