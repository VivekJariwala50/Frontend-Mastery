import {
  AKBasicCard,
  AKChartJSBarChart,
  AKChartJSLineChart,
  AKChartJSPieChart,
  AKDoughnutChart,
  AKHead,
} from "@components";
import { AKClsx } from "@utils";
import { Col, Row } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import styles from "./AKChartPage.module.css";

const AKChartPage = () => {
  const { primaryColor, eagleColor, henColor } = useContext(ThemeContext);

  const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  var rgbPrimaryColor = hex2rgb(primaryColor);

  return (
    <>
      <AKHead title="Chart Js" />
      <h1 className="title-color mb-5">Chart Page</h1>
      <h2 className="title-color mb-5">Basic Chart Types :</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} xl={12}>
          <AKBasicCard
            cardTitle={"Line Chart:"}
            customClass={AKClsx(styles.card)}
          >
            <div className={styles.AKChartContainer}>
              <AKChartJSLineChart
                titleText="Team Data"
                labels={[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ]}
                ticksColorX={henColor}
                ticksColorY={henColor}
                borderColorX={henColor}
                borderColorY={henColor}
                datasets={[
                  {
                    label: "uiux data",
                    data: [0, 100, 50, 100, 15, 80, 100],
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                  },
                ]}
              />
            </div>
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            cardTitle={"Multiple Data Line Chart:"}
            customClass={AKClsx(styles.card)}
          >
            <div className={styles.AKChartContainer}>
              <AKChartJSLineChart
                titleText="Team Data"
                labels={[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ]}
                ticksColorX={henColor}
                ticksColorY={henColor}
                borderColorX={henColor}
                borderColorY={henColor}
                datasets={[
                  {
                    label: "backend data",
                    data: [0, 100, 50, 100, 15, 80, 100],
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                  },
                  {
                    label: "fronted data",
                    data: [0, 30, 40, 10, 5, 20, 40],
                    backgroundColor: eagleColor,
                    borderColor: eagleColor,
                  },
                ]}
              />
            </div>
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            cardTitle={"Line Tension Chart:"}
            customClass={AKClsx(styles.card)}
          >
            <div className={styles.AKChartContainer}>
              <AKChartJSLineChart
                titleText="Backend Team Data Chart"
                labels={[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ]}
                ticksColorX={henColor}
                ticksColorY={henColor}
                borderColorX={henColor}
                borderColorY={henColor}
                datasets={[
                  {
                    label: "backend data",
                    data: [0, 100, 50, 100, 15, 80, 100],
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                    tension: 0.4,
                  },
                ]}
              />
            </div>
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            cardTitle={"Line chart gradient background color:"}
            customClass={AKClsx(styles.card)}
          >
            <div className={styles.AKChartContainer}>
              <AKChartJSLineChart
                titleText=""
                labels={[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ]}
                ticksColorX={henColor}
                ticksColorY={henColor}
                borderColorX={henColor}
                borderColorY={henColor}
                tooltipBg={henColor}
                tooltipColor={primaryColor}
                fill={true}
                datasets={[
                  {
                    label: "Price",
                    data: [0, 50, 150, 80, 60, 120, 60],
                    backgroundColor: (context) => {
                      const bgColor = [
                        `rgba(${rgbPrimaryColor.r},${rgbPrimaryColor.g},${rgbPrimaryColor.b},0.3)`,
                        `rgba(${rgbPrimaryColor.r},${rgbPrimaryColor.g},${rgbPrimaryColor.b},0.2)`,
                        `rgba(${rgbPrimaryColor.r},${rgbPrimaryColor.g},${rgbPrimaryColor.b},0.1)`,
                      ];
                      if (!context.chart.chartArea) {
                        return;
                      }
                      const {
                        ctx,
                        data,
                        chartArea: { top, bottom },
                      } = context.chart;
                      const gradientBg = ctx.createLinearGradient(
                        0,
                        top,
                        0,
                        bottom
                      );
                      gradientBg.addColorStop(0, bgColor[0]);
                      gradientBg.addColorStop(0.5, bgColor[1]);
                      gradientBg.addColorStop(1, bgColor[2]);
                      return gradientBg;
                    },
                    borderColor: primaryColor,
                    tension: 0.4,
                  },
                ]}
              />
            </div>
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            cardTitle={"Multiple Data Line Chart:"}
            customClass={AKClsx(styles.pieChart, styles.card)}
          >
            <AKChartJSPieChart titleText="Team Data Chart" />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            cardTitle={"Multiple Data Line Chart:"}
            customClass={AKClsx(styles.card)}
          >
            <div className={styles.doughnutChartContainer}>
              <AKDoughnutChart
                titleText=""
                labels={["Luggage Bags", "Trolley Bag", "School Bag"]}
                datasets={[
                  {
                    label: "# of Votes",
                    data: [500, 400, 300],
                    backgroundColor: [henColor, eagleColor, primaryColor],
                    borderColor: [henColor, eagleColor, primaryColor],
                    borderWidth: 1,
                  },
                ]}
              />
            </div>
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            cardTitle={"Basic Bar Chart:"}
            customClass={AKClsx(styles.card)}
          >
            <div className={styles.AKChartContainer}>
              <AKChartJSBarChart
                titleText="Team Data"
                labels={[
                  "2010",
                  "2011",
                  "2012",
                  "2013",
                  "2014",
                  "2015",
                  "2016",
                  "2017",
                  "2018",
                  "2019",
                  "2020",
                  "2021",
                  "2022",
                  "2023",
                  "2024",
                ]}
                ticksColorX={henColor}
                ticksColorY={henColor}
                borderColorX={henColor}
                borderColorY={henColor}
                datasets={[
                  {
                    label: "Dataset 1",
                    data: [
                      50, 100, 50, 100, 40, 50, 80, 80, 20, 50, 45, 20, 60, 80,
                      100,
                    ],
                    backgroundColor: [primaryColor],
                  },
                ]}
              />
            </div>
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            cardTitle={"Multiple Data Bar Chart:"}
            customClass={AKClsx(styles.card)}
          >
            <div className={styles.AKChartContainer}>
              <AKChartJSBarChart
                titleText="Team Data"
                labels={[
                  "2010",
                  "2011",
                  "2012",
                  "2013",
                  "2014",
                  "2015",
                  "2016",
                  "2017",
                  "2018",
                  "2019",
                  "2020",
                  "2021",
                  "2022",
                  "2023",
                  "2024",
                ]}
                ticksColorX={henColor}
                ticksColorY={henColor}
                borderColorX={henColor}
                borderColorY={henColor}
                datasets={[
                  {
                    label: "Dataset 1",
                    data: [
                      180, 20, 25, 10, 100, 55, 20, 80, 20, 120, 145, 120, 60,
                      180, 50,
                    ],
                    backgroundColor: [primaryColor, eagleColor],
                  },
                  {
                    label: "Dataset 2",
                    data: [
                      130, 100, 50, 100, 40, 50, 80, 80, 20, 50, 45, 20, 60, 80,
                      100,
                    ],
                    backgroundColor: [eagleColor],
                  },
                ]}
              />
            </div>
          </AKBasicCard>
        </Col>
      </Row>
    </>
  );
};

export default AKChartPage;
