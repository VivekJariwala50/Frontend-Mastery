import { Col, Row } from "antd";
import { useContext } from "react";
import { AKClsx } from "@utils";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import {
  AKPrimaryCard,
  AKBasicCard,
  AKViewCard,
  AKTables,
  AKBasicList,
  AKChartJSLineChart,
  AKImageCard,
  AKDropDownSimple,
  AKHead,
} from "@components";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import AKListIcon from "@components/AKUIKits/AKList/AKListIcon";
import {
  aLLCourseListData,
  newStudents,
  academyViewData,
  topCourseCategories,
  topCourseList,
  topInstructorsData,
  svgIcons,
  Webinar,
  moreItems,
  moreItemsChart,
} from "@const";
import styles from "./AKAcademyDashboard.module.css";

const AKAcademyDashboard = () => {
  const { henColor, primaryColor, eagleColor } = useContext(ThemeContext);

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
      <AKHead title="Academy Dashboard" />
      <Row
        gutter={[
          { xs: 15, sm: 15, md: 15, lg: 16, xl: 18, xxl: 20 },
          { xs: 15, sm: 15, md: 15, lg: 16, xl: 18, xxl: 20 },
        ]}
      >
        {/* TOP CATEGORIES CARD START */}
        <Col xs={24} xl={14}>
          <AKBasicCard cardTitle="Top Categories" customClass={styles.card}>
            <Row gutter={[20, 20]}>
              {topCourseCategories &&
                topCourseCategories.map((item, index) => {
                  return (
                    <Col xs={24} sm={12} md={6} key={index}>
                      <AKPrimaryCard
                        customClass={styles.overViewCard}
                        title={item.description}
                        subtitle={item.name}
                        bg={item.backgroundColor}
                        color={item.color}
                        icon={item.icon}
                        size="sm"
                      />
                    </Col>
                  );
                })}
            </Row>
          </AKBasicCard>
        </Col>
        {/* TOP CATEGORIES CARD END */}

        {/* OVERVIEW CARD START */}
        <Col xs={24} xl={10}>
          <Row
            gutter={[
              { xs: 12, md: 14, lg: 16, xl: 18, xxl: 20 },
              { xs: 12, md: 14, lg: 16, xl: 18, xxl: 20 },
            ]}
          >
            {academyViewData &&
              academyViewData.map((item, index) => {
                return (
                  <Col xs={24} sm={12} lg={6} xl={12} key={index}>
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
        <Col xs={24} xl={16}>
          <AKBasicCard
            cardTitle={"Earning Report"}
            customClass={AKClsx(styles.card)}
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
                      80, 130, 100, 160, 100, 80, 120, 100, 60, 100, 130, 100,
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
          </AKBasicCard>
        </Col>
        {/* EARNING CHART END */}

        {/* UPCOMING WEBINAR CARD START */}
        <Col sm={12} xl={8}>
          <AKImageCard
            cardImgContainerClass={styles.cardImgContainer}
            cardImg={Webinar}
            buttonTitle="joint the event"
            title="Upcoming Webinar"
            subTitle="Next Generation Frontend Architecture Using Layout Engine And React Native Web."
            block={true}
            overlayImg
            extraContent={
              <AKViewCard
                title={"15 May 24"}
                subtitle={"Date"}
                iconBg={henColor}
                icon={svgIcons.calenderEvent}
              />
            }
          />
        </Col>
        {/* UPCOMING WEBINAR CARD END */}

        {/* TOP COURSES CARD START */}
        <Col xs={24} sm={12} md={12} xl={7}>
          <AKBasicCard
            cardTitle="Top Courses"
            customClass={styles.card}
            cardExtraContent={
              <AKDropDownSimple
                items={moreItems}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <AKListIcon items={topCourseList} size="sm" />
          </AKBasicCard>
        </Col>
        {/* TOP COURSES CARD END */}

        {/* NEW STUDENTS TABLE START */}
        <Col xs={24} md={24} lg={16} xl={10}>
          <AKBasicCard
            cardTitle="New Students"
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
              data={newStudents.row}
              columns={newStudents.columns}
              rowSelection={false}
              pageSize={5}
              customClass={styles.newStudentsTable}
            />
          </AKBasicCard>
        </Col>
        {/* NEW STUDENTS TABLE END */}

        {/* TOP INSTRUCTORS CARD START */}
        <Col xs={24} sm={24} md={12} lg={8} xl={7}>
          <AKBasicCard
            cardTitle="Top Instructors"
            customClass={styles.card}
            cardExtraContent={
              <AKDropDownSimple
                items={moreItems}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <AKBasicList data={topInstructorsData} />
          </AKBasicCard>
        </Col>
        {/* TOP INSTRUCTORS CARD END */}

        {/* COURSE LIST TABLE START */}
        <Col sm={24}>
          <AKBasicCard
            cardTitle="Course List"
            customClass={styles.courseList}
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
              data={aLLCourseListData.row}
              columns={aLLCourseListData.columns}
              rowSelection={false}
              pageSize={6}
              customClass={styles.courseListTable}
            />
          </AKBasicCard>
        </Col>
        {/* COURSE LIST TABLE END */}
      </Row>
    </>
  );
};

export default AKAcademyDashboard;
