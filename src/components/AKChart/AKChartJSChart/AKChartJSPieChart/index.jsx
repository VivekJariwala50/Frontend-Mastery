import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export const AKChartJSPieChart = ({ titleText = "test" }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["frontend", "backend", "uiux"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 15, 12],
        backgroundColor: ["#7367F0", "#5C21A0", "#A02165"],
        borderColor: ["#7367F0", "#5C21A0", "#A02165"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: titleText,
      },
      legend: {
        display: true,
        labels: {
          color: "#ffffff",
        },
      },
    },
  };
  return <Pie data={data} options={options} />;
};
