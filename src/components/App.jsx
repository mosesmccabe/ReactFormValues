import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {submit ? name : null} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={() => setSubmit(true)}>Submit</button>
    </div>
  );
}

export default App;
