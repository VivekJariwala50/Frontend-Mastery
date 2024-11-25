import { Col, Row } from "antd";
import { useContext } from "react";
import { AKClsx } from "@utils";
import {
  AKTables,
  AKBasicCard,
  AKChartJSLineChart,
  AKBasicList,
  AKPrimaryCard,
  AKProgress,
  AKImageCard,
  AKChartJSBarChart,
  AKDropDownSimple,
  AKHead,
} from "@components";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import AKTags from "@components/AKUIKits/AKTagPills/AKTags";
import {
  recordsData,
  salesByCountryList,
  productsOverviewData,
  productsOrdersData,
  topCustomersList,
  topSellingProductData,
  recentCommentsList,
  BagShowcase,
  customerGrowth,
  svgIcons,
  moreItemsChart,
  moreItems,
} from "@const";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import styles from "./AKECommerceDashboard.module.css";

const AKECommerceDashboard = () => {
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
      <AKHead title="E-Commerce Dashboard" />
      <Row
        gutter={[
          { xs: 12, md: 14, lg: 16, xl: 18, xxl: 20 },
          { xs: 12, md: 14, lg: 16, xl: 18, xxl: 20 },
        ]}
      >
        {/* OVERVIEW CARD START */}
        <Col sm={24}>
          <Row gutter={[20, 20]} className={styles.overViewRow}>
            {recordsData &&
              recordsData.map((item, index) => {
                return (
                  <Col xs={24} sm={12} lg={4} key={index}>
                    <AKPrimaryCard
                      customClass={styles.overViewCard}
                      title={item.description}
                      subtitle={item.name}
                      bg={item.backgroundColor}
                      color={item.color}
                      icon={item.icon}
                    />
                  </Col>
                );
              })}
          </Row>
        </Col>
        {/* OVERVIEW CARD END */}

        {/* BIG SAVING DAYS CARD START */}
        <Col sm={24} lg={7}>
          <AKImageCard
            cardImg={BagShowcase}
            description={
              <>
                <div className="text-right mb-1">
                  <AKTags
                    color="purple"
                    title="15 MAY 2014"
                    customClass="text-right mx-auto"
                    icon
                  />
                </div>
                <p className="mb-1">BIG SAVING DAYS</p>
                <p className="text-kingfisher h3 mb-2">Biggest sale is back.</p>
                <p className="mb-0">
                  Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On
                  orders of $500 and above
                </p>
              </>
            }
            buttonTitle="notify me"
            link={"/dashboard/coming-soon"}
            cardImgContainerClass={styles.savingDayCardImgContainer}
            customClass="h-full"
            overlayImg
          />
        </Col>
        {/* BIG SAVING DAYS CARD END */}

        {/* EARNING CHART START */}
        <Col xs={24} lg={17}>
          <AKBasicCard
            cardTitle={"Earnings Overview"}
            customClass={AKClsx(styles.card, styles.orderStatisticsCard)}
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
            <div className={styles.orderStatistics}>
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
                fill={true}
                datasets={[
                  {
                    label: "Earnings",
                    data: [
                      80, 130, 110, 120, 120, 150, 100, 120, 100, 130, 120, 100,
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
        {/* EARNING CHART END */}

        {/* RECENT ORDER TABLE START */}
        <Col xs={24} xl={17}>
          <AKBasicCard
            customClass={AKClsx(styles.card, styles.recentOrdersCard)}
            cardTitle="Recent orders"
            removeCardBodySpacing
            customCardBodyClass="pa-0"
            searchInput
            cardExtraContent={
              <AKInput
                placeholder="Search Product"
                AKInputContainerClassName={"search-input-md"}
                prefix={svgIcons.search}
              />
            }
          >
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
              pageSize={4}
              customClass={styles.recentOrdersTable}
            ></AKTables>
          </AKBasicCard>
        </Col>
        {/* RECENT ORDER TABLE END */}

        {/* CUSTOMER GROWTH CARD START */}
        <Col xs={24} lg={12} xl={7}>
          <AKBasicCard
            cardTitle={"Customer Growth"}
            customClass="h-full"
            cardExtraContent={
              <AKDropDownSimple
                items={moreItems}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <Row gutter={[15, 15]}>
              {customerGrowth &&
                customerGrowth.map((item, index) => {
                  return (
                    <Col xs={24} key={index}>
                      <h4 className="text-color mb-1">
                        {item.title}
                        <span className="title-color h4 inline-flex ml-3">
                          {item.growth}
                        </span>
                      </h4>
                      <AKProgress
                        percent={item.percentage}
                        customClass="mr-4"
                      />
                    </Col>
                  );
                })}
            </Row>
          </AKBasicCard>
        </Col>
        {/* CUSTOMER GROWTH CARD END */}

        {/* SALE BY CATEGORY CHART START */}
        <Col xs={24} sm={24} lg={12} xl={10}>
          <AKBasicCard
            cardTitle={"Sale by category"}
            customClass={"h-full"}
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
            <div className={styles.saleByCategoryChartContainer}>
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
                    label: "Hand Bag",
                    data: [
                      400, 300, 150, 520, 480, 400, 500, 100, 200, 230, 500,
                      400,
                    ],
                    backgroundColor: primaryColor,
                    borderWidth: 2,
                    borderRadius: 6,
                  },
                  {
                    label: "Travel Bag",
                    data: [
                      500, 200, 100, 440, 300, 500, 450, 350, 200, 150, 500,
                      350,
                    ],
                    backgroundColor: eagleColor,
                    borderWidth: 2,
                    borderRadius: 6,
                  },
                ]}
              />
            </div>
          </AKBasicCard>
        </Col>
        {/* SALE BY CATEGORY CHART END */}

        {/* TOP SELLING PRODUCTS TABLE START */}
        <Col sm={24} xl={14}>
          <AKBasicCard
            cardTitle={"Top Selling Products"}
            customClass={"h-full"}
            removeCardBodySpacing
            customCardBodyClass="pa-0"
            searchInput
            cardExtraContent={
              <AKInput
                placeholder="Search Product"
                AKInputContainerClassName={"search-input-md"}
                prefix={svgIcons.search}
              />
            }
          >
            <AKTables
              data={topSellingProductData.row}
              columns={topSellingProductData.columns}
              pageSize={4}
              customClass={styles.topSellingProducts}
            />
          </AKBasicCard>
        </Col>
        {/* TOP SELLING PRODUCTS TABLE END */}

        {/* TOP CUSTOMERS CARD START */}
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard
            cardTitle="Top Customers"
            customClass={styles.card}
            cardExtraContent={
              <AKDropDownSimple
                items={moreItems}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <AKBasicList data={topCustomersList} />
          </AKBasicCard>
        </Col>
        {/* TOP CUSTOMERS CARD END */}

        {/* TOP COUNTRIES BY SALES CARD START */}
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard
            cardTitle="Top Countries By Sales"
            customClass={styles.card}
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
        {/* TOP COUNTRIES BY SALES CARD END */}

        {/* NEW COMMENTS CARD START */}
        <Col xs={24} md={24} xl={8}>
          <AKBasicCard
            cardTitle="New Comments"
            customClass={styles.card}
            cardExtraContent={
              <AKDropDownSimple
                items={moreItems}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <AKBasicList data={recentCommentsList} />
          </AKBasicCard>
        </Col>
        {/* NEW COMMENTS CARD END */}

        {/* PRODUCTS OVERVIEW TABLE START */}
        <Col sm={24}>
          <AKBasicCard
            cardTitle={"Products Overview"}
            removeCardBodySpacing
            customCardBodyClass="pa-0"
            searchInput
            cardExtraContent={
              <AKInput
                placeholder="Search Product"
                AKInputContainerClassName={"search-input-md"}
                prefix={svgIcons.search}
              />
            }
          >
            <AKTables
              data={productsOverviewData.row}
              columns={productsOverviewData.columns}
              rowSelection={false}
              pageSize={6}
              customClass={styles.productOverviewTable}
            />
          </AKBasicCard>
        </Col>
        {/* PRODUCTS OVERVIEW TABLE END */}
      </Row>
    </>
  );
};

export default AKECommerceDashboard;
