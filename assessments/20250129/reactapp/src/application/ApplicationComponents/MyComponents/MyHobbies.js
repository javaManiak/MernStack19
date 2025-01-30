import React, { useState } from 'react';

function myHobbies() {
  
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>
        Select a hobby:
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="">Hobbies</option>
          <option value="Basketball"> Basketball </option>
          <option value="Photography"> Photography </option>
          <option value="Pingpong"> Pingpong </option>
          <option value="Fixing"> Fixing </option>
        </select>
      </label>
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
}

export default myHobbies;