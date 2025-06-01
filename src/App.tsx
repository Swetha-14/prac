import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { useDebounce } from './useDebounce';

function App() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500)

  return (
    <div className="App" style={{ marginTop: 500 }}>

      <input
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Type something"
      />

      <span> Search: {search}</span>
      <span> Debounced Search: {debouncedSearch} </span>
    </div>
  );
}

export default App;
