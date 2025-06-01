import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [firstLineHeight, setFirstLineHeight] = useState<number | null>(null);


  useEffect(() => {

    const paragraph = containerRef.current?.querySelector("p")
    if (paragraph && paragraph.firstChild?.nodeType === Node.TEXT_NODE) {
      const range = document.createRange();
      range.selectNodeContents(paragraph);
      range.setEnd(paragraph.firstChild!, 1)


      const rect = range.getBoundingClientRect()
      setFirstLineHeight(rect.height)
    }

  }, [])

  return (
    <div className="App">
      <div ref={containerRef}>
        <p>
          Hello this is Swetha.
          I really wanna do good on my test tomorrow.
          Jai Shri Krishna
        </p>
      </div>

      {firstLineHeight != null && <div>

        <span>{firstLineHeight}</span>
      </div>
      }
    </div>
  );
}

export default App;
