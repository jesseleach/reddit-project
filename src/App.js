import "./App.css";
import { List } from "./Components/List";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Restaurants and Bars of Bushwick</h1>
        <input className="searchBar" type="text" placeholder="Search" />
      </div>
      <List />
    </div>
  );
}

export default App;
