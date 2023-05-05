import "./App.css";
import { useState } from "react";
import { List } from "./Components/List";

function App() {
  const [filterValue, setFilterValue] = useState();

  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="Header">
        <h1>Bushwick Brooklyn Reddit Search</h1>
        <input
          onChange={handleChange}
          className="searchBar"
          type="text"
          placeholder="Search"
        />
      </div>
      <List filterValue={filterValue.toLowerCase()}/>
    </div>
  );
}

export default App;
