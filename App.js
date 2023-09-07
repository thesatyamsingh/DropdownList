import './App.css';
import Dropdown from "./Dropdown";
import { useState } from 'react';

export default function App() {
  const [selected, setSelected] = useState("Select")
  return (
    <div className="App">
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}


