import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [textNodes, setTextNodes] = useState<string[]>([]);

  useEffect(() => {

    if (containerRef.current) {
      const nodes = containerRef.current.childNodes
      const texts: string[] = []


      nodes.forEach((node) => {
        if (node.nodeType === 3) {

          const text = node.textContent?.trim();
          if (text) {
            texts.push(text)
          }
        }
      })

      setTextNodes(texts)

    }

  }, [])

  return (
    <div className="App">
      <div ref={containerRef}>
        Hello this is some text
        <p>this is paragrph text</p>
        <span>this is span text</span>
        this is last text
      </div>

      <div>
        <ul>
          {textNodes.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
