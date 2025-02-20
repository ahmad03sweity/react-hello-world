import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";

function MyButton() {
  const [count, setCount] = useState(0);

  function Increament() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }
  function Reset() {
    setCount(0);
  }
  return (
    <>
      <div className="buttons">
      <span>{count}</span>
      <div className="items">
      <button className="myButton inc" onClick={Increament}>
        Increament
      </button>
      <button className="myButton dec" onClick={Decrement}>
        Decrement
      </button>
      <button className="myButton res" onClick={Reset}>
        Reset
      </button>
      </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      {/* <Header/>
      <Categories/> */}
      <div>
        <div className="myProj">
          <h1 className="title">Hello from my Counter (-_-)</h1>
          <MyButton />
        </div>
        {/* <MyButton /> */}
      </div>
    </>
  );
}

export default App;
