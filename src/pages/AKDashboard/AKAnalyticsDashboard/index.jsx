import { Col, Row } from "antd";
import { useContext } from "react";
import { AKClsx } from "@utils";
import {
  AKTables,
  AKBasicCard,
  AKBasicList,
  AKProgress,
  AKChartJSLineChart,
  AKViewCard,
  AKChartJSBarChart,
  AKDropDownSimple,
  AKHead,
} from "@components";
import AKListIcon from "@components/AKUIKits/AKList/AKListIcon";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import {
  salesByCountryList,
  analyticsProjectsList,
  sourceVisits,
  ticketsList,
  monthlyCampaignStateList,
  analyticsViewData,
  analyticsProgressData,
  svgIcons,
  moreItems,
  moreItemsChart,
} from "@const";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import styles from "./AKAnalyticsDashboard.module.css";

const AKAnalyticsDashboard = () => {
  const { primaryColor, henColor, eagleColor } = useContext(ThemeContext);

  const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  var rgbPrimaryColor = hex2rgb(primaryColor);
  var rgbEagleColor = hex2rgb(eagleColor);

  return (
    <>
      <AKHead title="Analytics Dashboard" />
      <Row
        gutter={[
          { xs: 12, md: 14, lg: 16, xl: 18, xxl: 20 },
          { xs: 12, md: 14, lg: 16, xl: 18, xxl: 20 },
        ]}
      >
        {/* PROGRESS CARD START */}
        <Col sm={24} xl={11} xxl={12}>
          <Row
            gutter={[
              { xs: 12, md: 14, lg: 16, xl: 18, xxl: 20 },
              { xs: 12, md: 14, lg: 16, xl: 18, xxl: 20 },
            ]}
            className="h-full"
          >
            {analyticsProgressData &&
              analyticsProgressData.map((item, index) => {
                return (
                  <Col
                    xs={24}
                    sm={12}
                    md={8}
                    className="text-center"
                    key={index}
                  >
                    <AKBasicCard
                      customClass={AKClsx(
                        styles.analyticsProgressCard,
                        "text-center h-full"
                      )}
                      header={false}
                      key={index}
                    >
                      <AKProgress
                        type="circle"
                        percent={item.percentage}
                        customClass="mx-auto mb-3"
                        strokeColor={{
                          "0%": eagleColor,
                          "68%": primaryColor,
                        }}
                      />
                      <h2 className="title-color mb-1 fw-700 small">
                        {item.totalItems}
                      </h2>
                      <h4 className="text-color mb-0 mb-1 fw-500">
                        {item.name}
                      </h4>
                      <h4 className="text-green fw-700">{item.percentage}%</h4>
                    </AKBasicCard>
                  </Col>
                );
              })}
          </Row>
        </Col>
        {/* PROGRESS CARD END */}

        {/* OVERVIEW CARD START */}
        <Col sm={24} xl={13} xxl={12}>
          <Row
            gutter={[
              { xs: 12, md: 14, lg: 16, xl: 18, xxl: 20 },
              { xs: 12, md: 14, lg: 16, xl: 18, xxl: 20 },
            ]}
          >
            {analyticsViewData &&
              analyticsViewData.map((item, index) => {
                return (
                  <Col xs={24} sm={12} md={8} key={index}>
                    <AKBasicCard header={false}>
                      <AKViewCard
                        title={item.value}
                        subtitle={item.name}
                        path={item.path}
                        pathname={item.pathname}
                        iconBg={item.bg}
                        icon={item.icon}
                      />
                    </AKBasicCard>
                  </Col>
                );
              })}
          </Row>
        </Col>
        {/* OVERVIEW CARD END */}

        {/* EARNING CHART START */}
        <Col sm={24} xl={14}>
          <AKBasicCard
            cardTitle={"Earning Reports"}
            customClass={AKClsx(styles.card, styles.earningChartCard)}
            graphCard
            customHeaderClass="mb-0"
            cardExtraContent={
              <AKDropDownSimple
                items={moreItemsChart}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <div className={styles.earningChart}>
              <div className={styles.earningChartContainer}>
                <AKChartJSLineChart
                  titleText=""
                  labels={[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Now",
                    "Dec",
                  ]}
                  ticksColorX={henColor}
                  ticksColorY={henColor}
                  borderColorX={henColor}
                  borderColorY={henColor}
                  fill={true}
                  datasets={[
                    {
                      label: "Price",
                      data: [
                        80, 130, 110, 120, 120, 150, 100, 120, 100, 130, 120,
                        100,
                      ],
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
                    {
                      label: "Volume",
                      data: [
                        165, 180, 150, 180, 150, 180, 140, 150, 180, 150, 135,
                        140,
                      ],
                      backgroundColor: (context) => {
                        const bgColor = [
                          `rgba(${rgbEagleColor.r},${rgbEagleColor.g},${rgbEagleColor.b},0.5)`,
                          `rgba(${rgbEagleColor.r},${rgbEagleColor.g},${rgbEagleColor.b},0.3)`,
                          `rgba(${rgbEagleColor.r},${rgbEagleColor.g},${rgbEagleColor.b},0.2)`,
                        ];
                        if (!context.chart.chartArea) {
                          return;
                        }
                        const {
                          ctx,
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
                      borderColor: `rgba(${rgbEagleColor.r},${rgbEagleColor.g},${rgbEagleColor.b},0.5)`,
                      tension: 0.4,
                    },
                  ]}
                />
              </div>
            </div>
          </AKBasicCard>
        </Col>
        {/* EARNING CHART END */}

        {/* RECENT EARNINGS CARD STAR */}
        <Col sm={24} xl={10}>
          <AKBasicCard
            customClass={AKClsx(styles.card, styles.recentEarningCard)}
            cardTitle={"Recent Earnings"}
            cardExtraContent={
              <AKDropDownSimple
                items={moreItemsChart}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <Row gutter={[20, 20]}>
              <Col xs={24} sm={24} md={12} lg={8} xl={12} xxl={11}>
                <div className={styles.recentEarningDetails}>
                  <h2 className="title-color mb-2">$429536</h2>
                  <h4 className="title-color mb-5 pb-3">Total Tickets : 164</h4>
                  <AKListIcon items={ticketsList} />
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={13}>
                <AKProgress
                  type="dashboard"
                  percent={85}
                  size={280}
                  setInfo={true}
                  customClass={AKClsx(styles.trackProgressBar)}
                  strokeColor={{
                    "0%": eagleColor,
                    "68%": primaryColor,
                  }}
                />
              </Col>
            </Row>
          </AKBasicCard>
        </Col>
        {/* RECENT EARNINGS CARD END */}

        {/* SALES BY COUNTRIES CARD START */}
        <Col xs={24} lg={8}>
          <AKBasicCard
            customClass={styles.card}
            cardTitle={"Sales by Countries"}
            cardExtraContent={
              <AKDropDownSimple
                items={moreItems}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <AKBasicList data={salesByCountryList} />
          </AKBasicCard>
        </Col>
        {/* SALES BY COUNTRIES CARD END */}

        {/* monthly campaign state start */}
        <Col xs={24} sm={12} lg={8}>
          <AKBasicCard
            customClass={AKClsx(styles.card, styles.monthlyCampaignCard)}
            cardTitle={"Monthly Campaign State"}
            cardExtraContent={
              <AKDropDownSimple
                items={moreItems}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <AKListIcon items={monthlyCampaignStateList} />
          </AKBasicCard>
        </Col>
        {/* monthly campaign state end */}

        {/* SOURCE VISITS CARD START */}
        <Col xs={24} sm={12} lg={8}>
          <AKBasicCard
            cardTitle="Source Visits"
            customClass={AKClsx(styles.sourceVisitsCard, styles.card)}
            cardExtraContent={
              <AKDropDownSimple
                items={moreItems}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <AKBasicList data={sourceVisits} />
          </AKBasicCard>
        </Col>
        {/* SOURCE VISITS CARD END */}

        {/* EARNING BY CATEGORY CHART START */}
        <Col xs={24}>
          <AKBasicCard
            customClass="h-full"
            cardTitle="Earning By Category"
            graphCard
            customHeaderClass="mb-0"
            cardExtraContent={
              <AKDropDownSimple
                items={moreItemsChart}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <div className={styles.monthlyEarningChartContainer}>
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
                  " August",
                  "September",
                  "October",
                  "November",
                  "December",
                ]}
                ticksColorX={henColor}
                ticksColorY={henColor}
                borderColorX={henColor}
                borderColorY={henColor}
                fill={false}
                datasets={[
                  {
                    label: "Admin Template",
                    data: [
                      80, 130, 110, 120, 120, 150, 100, 120, 100, 130, 120, 100,
                    ],
                    backgroundColor: henColor,
                    borderColor: henColor,
                    tension: 0.4,
                  },
                  {
                    label: "Angular APIs",
                    data: [
                      165, 180, 150, 180, 150, 180, 140, 150, 180, 150, 135,
                      140,
                    ],
                    backgroundColor: eagleColor,
                    borderColor: eagleColor,
                    tension: 0.4,
                  },
                  {
                    label: "App Design",
                    data: [
                      70, 100, 130, 100, 85, 200, 123, 160, 100, 80, 145, 120,
                    ],
                    backgroundColor: primaryColor,
                    borderColor: primaryColor,
                    tension: 0.4,
                  },
                ]}
              />
            </div>
          </AKBasicCard>
        </Col>
        {/* EARNING BY CATEGORY CHART END */}

        {/* VISITORS CHART START */}
        <Col xs={24} xl={10}>
          <AKBasicCard
            customClass={AKClsx(styles.customersGraphCard)}
            cardTitle="Visitors"
            graphCard
            customHeaderClass="mb-0"
            cardExtraContent={
              <AKDropDownSimple
                items={moreItemsChart}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <div className={styles.customersGraph}>
              <AKChartJSBarChart
                titleText=""
                labels={[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Now",
                  "Dec",
                ]}
                ticksColorX={henColor}
                ticksColorY={henColor}
                borderColorX={henColor}
                borderColorY={henColor}
                datasets={[
                  {
                    label: "Visitors",
                    data: [
                      100, 124, 128, 180, 220, 120, 280, 200, 320, 326, 380,
                      400,
                    ],
                    backgroundColor: primaryColor,
                    borderWidth: 2,
                    borderRadius: 6,
                  },
                ]}
              />
            </div>
          </AKBasicCard>
        </Col>
        {/* VISITORS CHART END */}

        {/* PROJECTS TABLE START */}
        <Col xs={24} xl={14}>
          <AKBasicCard
            customClass="h-full"
            cardTitle="Projects"
            removeCardBodySpacing
            customCardBodyClass="pa-0"
            searchInput
            cardExtraContent={
              <AKInput
                placeholder="Search"
                AKInputContainerClassName={"search-input-md"}
                prefix={svgIcons.search}
              />
            }
          >
            <AKTables
              data={analyticsProjectsList.row}
              columns={analyticsProjectsList.columns}
              rowSelection={false}
              customClass={styles.projectsTable}
            />
          </AKBasicCard>
        </Col>
        {/* PROJECTS TABLE END */}
      </Row>
    </>
  );
};

export default AKAnalyticsDashboard;
