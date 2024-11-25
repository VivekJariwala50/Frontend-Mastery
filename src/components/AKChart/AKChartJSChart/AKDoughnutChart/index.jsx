import { Doughnut } from "react-chartjs-2";

export const AKDoughnutChart = ({
  titleText = "test",
  labels,
  datasets,
  labelsColor,
}) => {
  const data = {
    labels: labels,
    datasets: datasets,
  };

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
          color: labelsColor,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};
