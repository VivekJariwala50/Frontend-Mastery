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
import { Bar } from "react-chartjs-2";
import { ThemeContext } from "../../../../contexts/ThemeProvider";
export const AKChartJSBarChart = ({
  labels,
  datasets,
  ticksColorX,
  ticksColorY,
  borderColorX,
  borderColorY,
  titleText = "title",
  legendColor,
  indexAxis = "x",
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
    indexAxis: indexAxis,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: titleText,
      },
      dataLabels: {
        labels: {
          color: legendColor ? legendColor : henColor,
          opacity: 1,
        },
      },
      legend: {
        display: true,
        labels: {
          color: legendColor ? legendColor : henColor,
        },
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
          display: false,
        },
      },
      y: {
        ticks: {
          color: ticksColorY,
        },
        border: {
          color: borderColorY,
        },
        grid: {
          display: false,
        },
      },
    },
  };
  const data = {
    labels,
    datasets: datasets,
  };
  return (
    <div>
      <Bar options={options} data={data} id="barChart" />
    </div>
  );
};
