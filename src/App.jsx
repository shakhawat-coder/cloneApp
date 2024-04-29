import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <h1 className="text-lg text-red-600   ">Hello</h1>
      </div>
      <Navbar />
    </>
  );
}

export default App;
