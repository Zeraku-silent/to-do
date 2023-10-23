import { useEffect, useState, useRef } from "react";
import { Title, List } from "./components/TaskComponents";

function App() {
  return (
    <div className="App">
      <Title />
      <List />
    </div>
  );
}

export default App;
