import { Line } from "@ant-design/plots";

export const AKAntdChart = () => {
  const data = [
    { name: 0, scale: 2000 },
    { name: 100, scale: 1800 },
    { name: 200, scale: 1500 },
    { name: 300, scale: 100 },
    { name: 400, scale: 900 },
    { name: 500, scale: 1000 },
    { name: 800, scale: 1500 },
    { name: 1000, scale: 600 },
    { name: 1200, scale: 500 },
    { name: 1400, scale: 1800 },
    { name: 1500, scale: 2000 },
    { name: 2000, scale: 2000 },
  ];

  const config = {
    data,
    padding: "auto",
    xField: "name",
    yField: "scale",
    color: "red",
    style: {
      stroke: "#7367F0",
      cursor: "pointer",
      color: "#7367F0",
    },
  };

  return (
    <div
      style={{
        background: "rgb(255 255 255 / 53%)",
        width: "500px",
      }}
    >
      <Line {...config} />
    </div>
  );
};
