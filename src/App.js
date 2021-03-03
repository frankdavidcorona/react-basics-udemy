import React from "react";
import moment from "moment";
import Chart from "chart.js";
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
    // setShowToast(!showToast);
  };

  const chartRef = React.createRef();
  React.useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      }
    });
  }, [chartRef]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld userInfo={userInfo} hiFn={hi} />
      </header>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
}
