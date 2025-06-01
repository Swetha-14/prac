import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { useDebounce } from './useDebounce';
import { StarRating } from './StarRating';

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div className="App" style={{ marginTop: 500 }}>

      <h3>Your Rating: {rating}</h3>
      <StarRating max={5} onChange={setRating} />
    </div>
  );
}

export default App;
