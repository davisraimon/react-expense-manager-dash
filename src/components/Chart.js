import { Doughnut } from "react-chartjs-2";
import React from "react";

export default function Chart(props) {
  const state = {
    labels: props.labels,
    datasets: [
      {
        label: "Expense",
        backgroundColor: props.colors,
        hoverBackgroundColor: [],
        data: props.values,
      },
    ],
  };
  return (
    <div>
      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: props.title,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
