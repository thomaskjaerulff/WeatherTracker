import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      Enter a city here: <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default App;
