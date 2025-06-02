import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { useValidatedInput } from './hooks/useValidatedInput';

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const { errors, validate } = useValidatedInput(name, email)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      alert(`Submitting ${name} and ${email}`)
    }
  }

  return (
    <div className="App" style={{ marginTop: 500 }}>

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type Email" />

        <button type="submit">Submit</button>
      </form>

      {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
    </div>
  );
}

export default App;
