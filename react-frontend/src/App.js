
import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [markdowntext, setmarkdowntext] = useState("");
  const [convertedHTML, setconvertedHTML] = useState("");

  useEffect(() => {
    const convertText = async () => {
      try {
        console.log(markdowntext)
        const response = await axios.post("http://localhost:5000/markdown", { text: markdowntext });
        setconvertedHTML(response.data.html)
      } catch (error) {
        console.log(error)
      }
    }

    convertText();
  }, [markdowntext])

  const handleChange = (e) => {
    setmarkdowntext(e.target.value);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <textarea
        style={{ width: '50%', padding: '10px', margin: '20px' }}
        value={markdowntext}
        onChange={handleChange}
      />

      <div style={{ width: '50%', padding: '10px', margin: '20px', border: '1px solid #000' }}
        dangerouslySetInnerHTML={{ __html: convertedHTML }}
      />

    </div>
  );
}

export default App;
