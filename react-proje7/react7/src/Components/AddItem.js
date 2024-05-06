import React, { useState } from 'react';

const AddItem = ({ add, setDisplay }) => {
  const [activeItem, setActiveItem] = useState(null); 

  const DeleteItem = (index) => {
    if (index >= 0 && index < add.length) { 
      setDisplay(onceki => onceki.filter((item, i) => i !== index));
      setActiveItem(null); 
    }
  };

  return (
    <div className=''>
      
      <ul className="bg-gray-100 p-4 rounded-md">
        {add.map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-between mb-2`}
            onClick={() => setActiveItem(activeItem === index ? null : index)} 
          >
            <span className="flex items-center mr-2">
              <span className="mr-1">•</span>
              <span>{item}</span>
            </span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold"
              onClick={() => DeleteItem(index)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
      </div>
   
  );
};

export default AddItem;