import React, { useState } from 'react';
import AddItem from './Components/AddItem';
import './input.css'; 

function App() {
  const [item, setItem] = useState(""); 
  const [displayItem, setDisplayItem] = useState([]); 

  const addItems = () => {
    if (item.trim()) { 
      setDisplayItem(prev => [...prev, item]);
      setItem(""); 
    } else {
      alert('Lütfen Yapılacak Ekleyin!.'); 
    }
  };

  return (
    <div className='bg-gradient-to-b from-red-500 to-blue-500 font-krm text-center rounded-xl font-bold p-8'>
      <div className="border-4 border-white inline-block rounded-xl">
        <h1 className='text-white transition duration-500 hover:shadow-lg hover:text-yellow-400 text-6xl p-4'>To Do App</h1>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="rounded-xl p-8 bg-white shadow-md">
          <input
            type="text"
            placeholder="Yapılacak Ekle"
            className="bg-blue-500 rounded-xl h-20 w-full focus:outline-none font-bold mb-4 px-4 text-white placeholder-white"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            className="bg-black text-white font-bold rounded-xl h-14 w-full mb-4 hover:bg-gray-900 transition duration-300 ease-in-out"
            onClick={addItems}
          >
            Ekle
          </button>

          <AddItem add={displayItem} setDisplay={setDisplayItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
