import { useState, useEffect } from "react";
import "./styles.css";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/Hello";
import { Toast } from "react-bootstrap";

export default function App() {
  // hook useState
  const [showToast, setShowToast] = useState(false);

  // handling with useState hook
  const toggleShowA = () => {
    setShowToast((prevValue) => !prevValue);
    // setShowToast(!showToast);
  };

  useEffect(() => {
    // will be executed always after a chonge of the input selected
    console.log(`Values updated to ${showToast}`);
  }, [showToast]);

  const userInfo = {
    name: "Frank David",
    age: 32
  };

  const hi = () => {
    toggleShowA();
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloWorld userInfo={userInfo} hiFn={hi} />
          <br />
          <p>The state of the toast is: {showToast ? "Active" : "Inactive"}</p>

          <Toast show={showToast} onClose={toggleShowA}>
            <Toast.Header>
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, {userInfo.name}.</Toast.Body>
          </Toast>
        </header>
      </div>
    </>
  );
}
