import React, {useState} from "react";

function App() {

  const [items, setItems] = useState([])
  const [inputText, setInputText] = useState("")

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        <button onClick={ () => setItems(prevArray => [...prevArray, inputText]) + setInputText("")}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map( (item, key) => <li key={key}>{item}</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;