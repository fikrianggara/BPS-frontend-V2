import React from "react";
import { Chart } from "chart.js";
const Line = (props) => {
  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };
  const myChart = new Chart(document.getElementById(props.elemId), config);
  return (
    <div>
      <canvas id={props.elemId}></canvas>
    </div>
  );
};

export default Line;
