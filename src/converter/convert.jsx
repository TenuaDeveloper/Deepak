import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './main.css';
import dataList from "./data.json";
  
function App() {
  
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("Inches");
  const [to, setTo] = useState("Feet");
  const [output, setOutput] = useState(0);
    
  // Function to convert the Unit
  const  convert = () =>{
    const output = eval(`${input}${dataList[from][to]}`);
    setOutput(output);
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>Unit converter</h1>
      </div>
      <div className="container">
        <div className="left">
          <h3>Unit</h3>
          <input type="text" 
             placeholder="Enter Data " 
             onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className="middle">
          <h3>From</h3>
          <Dropdown options={Object.keys(dataList)} 
                    onChange={(e) => { setFrom(e.value) }}
          value={from} placeholder="From" />
        </div>
        
        <div className="right">
          <h3>To</h3>
          <Dropdown options={Object.keys(dataList[from])} 
                    onChange={(e) => {setTo(e.value)}} 
          value={to} placeholder="To" />
        </div>
      </div>
      <div className="result">
        <button onClick={convert}>Convert</button>
        <h2>Converted Unit</h2>
        <p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
  
      </div>
    </div>
  );
}
  
export default App;

