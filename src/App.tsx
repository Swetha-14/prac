import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value
    setInputValue(input)

    if (input.length <= 5) {
      setError("Must contain more than 5 characters")
    } else {
      setError("")
    }

  }


  return (
    <div className="App" style={{ marginTop: 500 }}>

      <label>
        Text Input: <input value={inputValue} name="myInput" onChange={handleChange} />
      </label>

      {error && <span>{error}</span>}
    </div>
  );
}

export default App;
