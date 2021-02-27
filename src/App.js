import "./styles.css";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/Hello";

export default function App() {
  const userInfo = {
    name: "Frank David",
    age: 32
  };
  const hi = (name) => {
    console.log(`Hello ${name}`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld userInfo={userInfo} hiFn={hi} />
      </header>
    </div>
  );
}
