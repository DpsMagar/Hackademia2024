import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/hello/')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl">{message} I am Dipesh</h1>
    </div>
  );
}

export default App;
