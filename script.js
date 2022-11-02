"use strict";

import myData from "./data.json" assert { type: "json" };

const labels = [];
const quantity = [];
myData.forEach((data) => {
  const { day, amount } = data;
  labels.push(day);
  quantity.push(amount);
});

const options = {
  scales: {
    ticks: {
      display: false,
    },
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const ctx = document.getElementById("myChart");

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        backgroundColor: [
          "hsl(10,79%, 65%)",
          "hsl(10,79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10,79%, 65%)",
          "hsl(10,79%, 65%)",
          "hsl(10,79%, 65%)",
          "hsl(10,79%, 65%)",
        ],
        borderRadius: 3,
        data: quantity,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
