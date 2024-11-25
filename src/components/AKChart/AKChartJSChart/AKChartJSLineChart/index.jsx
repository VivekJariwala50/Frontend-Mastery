import { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { ThemeContext } from "../../../../contexts/ThemeProvider";
export const AKChartJSLineChart = ({
  labels,
  datasets,
  ticksColorX,
  ticksColorY,
  borderColorX,
  borderColorY,
  titleText = "title",
  legendColor,
  tooltipColor,
  tooltipBg,
  fill = false,
}) => {
  const { henColor } = useContext(ThemeContext);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: titleText,
      },
      legend: {
        display: true,
        labels: {
          color: legendColor ? legendColor : henColor,
        },
      },
      tooltip: {
        backgroundColor: tooltipBg,
        padding: 10,
        color: tooltipColor,
      },
    },
    scales: {
      x: {
        ticks: {
          color: ticksColorX,
        },
        border: {
          color: borderColorX,
        },
        grid: {
          display: true,
        },
        beginAtZero: true,
      },
      y: {
        ticks: {
          color: ticksColorY,
          beginAtZero: true,
          max: 50,
          stepSize: 50,
        },
        border: {
          color: borderColorY,
        },
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    fill: fill,
  };

  const data = {
    labels,
    datasets: datasets,
  };

  return <Line options={options} data={data} />;
};
