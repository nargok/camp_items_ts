import React from "react";
import Hello from "./Hello";
import Items from "./Items";

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello message="Hello React with TypeScript" />
      <Items />
    </div>
  );
};

export default App;
