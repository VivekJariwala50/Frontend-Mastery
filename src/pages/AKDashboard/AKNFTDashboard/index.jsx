import { Col, Row } from "antd";
import {
  AKBasicCard,
  AKBasicList,
  AKTables,
  AKImageCard,
  AKChartJSLineChart,
  AKViewCard,
  AKCarousal,
  AKDropDownSimple,
  AKHead,
} from "@components";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import AKButton from "@components/AKButton";
import {
  nftData,
  topCreatorsData,
  personalListing,
  topCollectorsData,
  trendingNftsData,
  nftViewData,
  nftFeaturedCollections,
  nftShowCaseData,
  svgIcons,
  moreItems,
  moreItemsChart,
} from "@const";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import { AKClsx } from "@utils";
import styles from "./AKNFTDashboard.module.css";

const AKNFTDashboard = () => {
  const { primaryColor, eagleColor, henColor } = useContext(ThemeContext);

  const [pageSize, setPageSize] = useState(6);
  const [creatorPageSize, setCreatorPageSize] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1599) {
        setCreatorPageSize(4);
      } else if (window.innerWidth > 1500) {
        setCreatorPageSize(5);
      } else if (window.innerWidth > 1399) {
        setCreatorPageSize(5);
      } else {
        setCreatorPageSize(5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <AKHead title="NFT Dashboard" />
      <Row
        gutter={[
          { xs: 15, sm: 15, md: 15, lg: 16, xl: 18, xxl: 20 },
          { xs: 15, sm: 15, md: 15, lg: 16, xl: 18, xxl: 20 },
        ]}
      >
        {/* NFT SLIDER CARD START */}
        <Col className={styles.col1} xs={24} xl={13} xxl={14}>
          <AKBasicCard
            customClass={"sliderCard heroSliderCard"}
            customCardBodyClass="nft-slider-body"
            header={false}
          >
            <AKCarousal autoplay={true} customClassname="nft-slider">
              {nftData &&
                nftData.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        className={AKClsx(
                          "flex justify-between",
                          styles.nftHeroSliderFlex
                        )}
                      >
                        <div
                          className={AKClsx(
                            "pr-4",
                            styles.nftHeroSliderContainer
                          )}
                        >
                          <h2 className="title-color mb-1 fw-700">
                            {item.name}
                          </h2>
                          <h3
                            className={AKClsx(
                              "text-color mb-5 fw-400 small",
                              styles.heroSliderDescription
                            )}
                          >
                            {item.description}
                          </h3>
                          <div>
                            <AKButton
                              customClass="mr-4"
                              type="fill"
                              size="small"
                              link={"/dashboard/coming-soon"}
                            >
                              Discover Now
                            </AKButton>
                            <AKButton
                              type="no-fill"
                              size="small"
                              link={"/dashboard/coming-soon"}
                            >
                              Create Yours
                            </AKButton>
                          </div>
                        </div>
                        <div className={styles.nftSliderCardImgContainer}>
                          <img
                            src={item.img}
                            alt={item.name}
                            className={styles.nftSliderCardImg}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </AKCarousal>
          </AKBasicCard>
        </Col>
        {/* NFT SLIDER CARD END */}

        {/* NFT VIEW CARD START */}
        <Col className={styles.col2} xs={24} xl={11} xxl={10}>
          <Row
            gutter={[
              { xs: 15, md: 15, lg: 16, xl: 18, xxl: 20 },
              { xs: 15, md: 15, lg: 16, xl: 18, xxl: 20 },
            ]} className="h-full"
          >
            {nftViewData &&
              nftViewData.map((item, index) => {
                return (
                  <Col xs={24} sm={12} md={12} lg={12} xl={12} key={index}>
                    <AKBasicCard header={false} customClass="h-full">
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
        {/* NFT VIEW CARD END */}

        {/* NFT SHOWCASE CARD START */}
        <Col className={styles.col3} xs={24} lg={24} xxl={13}>
          <Row
            gutter={[
              { xs: 15, sm: 15, md: 15, lg: 16, xl: 18, xxl: 20 },
              { xs: 15, sm: 15, md: 15, lg: 16, xl: 18, xxl: 20 },
            ]}
            className="h-full"
          >
            {nftShowCaseData &&
              nftShowCaseData.map((item, index) => {
                return (
                  <Col xs={24} sm={12} md={12} lg={8} key={index}>
                    <AKImageCard
                      userImg={item.userImg}
                      cardImg={item.img}
                      name={item.name}
                      email={item.email}
                      description={item.description}
                      user={item.user}
                      buttonTitle={item.pathName}
                      link={item.link}
                      block
                      cardImgContainerClass={styles.showCaseImgContainer}
                      customClass="h-full"
                      buttonContainerClass={styles.nftImgCardButtonContainer}
                    ></AKImageCard>
                  </Col>
                );
              })}
          </Row>
        </Col>
        {/* NFT SHOWCASE CARD END */}

        {/* CREATORS CARD START */}
        <Col className={styles.col4} xs={24} md={24} lg={15} xxl={11}>
          <AKBasicCard
            cardTitle="Creators"
            customClass={AKClsx(styles.creatorsCard)}
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
              data={topCreatorsData.row}
              columns={topCreatorsData.columns}
              rowSelection={false}
              pageSize={creatorPageSize}
              customClass={styles.creatorsTable}
            />
          </AKBasicCard>
        </Col>
        {/* CREATORS CARD END */}

        {/* TOP COLLECTORS CARD START */}
        <Col className={styles.col5} xs={24} sm={12} md={12} lg={9} xxl={6}>
          <AKBasicCard
            cardTitle="Top Collectors"
            customClass={AKClsx(styles.topCollectorsCard, styles.card)}
            cardExtraContent={
              <AKDropDownSimple
                items={moreItems}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <AKBasicList data={topCollectorsData} />
          </AKBasicCard>
        </Col>
        {/* TOP COLLECTORS CARD END */}

        {/* NFTS STATISTICS CARD START */}
        <Col className={styles.col6} xs={24} sm={24} md={24} lg={16} xxl={12}>
          <AKBasicCard
            cardTitle="NFTs Statistics"
            customClass={AKClsx(styles.card, styles.statisticsChartCard)}
            customCardBodyClass={styles.statisticsChartCardBody}
            customHeaderClass="mb-0"
            cardExtraContent={
              <AKDropDownSimple
                items={moreItemsChart}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <div className={styles.statisticsChartContainer}>
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
                      150, 180, 150, 180, 150, 180, 140, 150, 180, 150, 135,
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
        {/* NFTS STATISTICS CARD END */}

        {/* FEATURED COLLECTIONS CARD START */}
        <Col className={styles.col7} xs={24} sm={12} md={12} lg={8} xxl={6}>
          <AKBasicCard
            cardTitle="Featured Collections"
            customClass={AKClsx(styles.card, styles.featuredCollectionsCard)}
            cardExtraContent={
              <AKDropDownSimple
                items={moreItems}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <AKCarousal autoplay={true}>
              {nftFeaturedCollections &&
                nftFeaturedCollections.map((item, index) => {
                  return (
                    <div key={index}>
                      <AKImageCard
                        userImg={item.userImg}
                        cardImg={item.img}
                        name={item.name}
                        email={item.email}
                        description={item.description}
                        user={item.user}
                        cardImgContainerClass={styles.featuredImgContainer}
                      />
                    </div>
                  );
                })}
            </AKCarousal>
          </AKBasicCard>
        </Col>
        {/* FEATURED COLLECTIONS CARD END */}

        {/* TRENDING NFTS CARD START */}
        <Col className={styles.col8} xl={17} lg={24} md={24} sm={24}>
          <AKBasicCard
            cardTitle="Trending NFTs"
            customClass="h-full"
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
              data={trendingNftsData.row}
              columns={trendingNftsData.columns}
              rowSelection={false}
              pageSize={pageSize}
              customClass={styles.trendingNftsTable}
            />
          </AKBasicCard>
        </Col>
        {/* TRENDING NFTS CARD END */}

        {/* PERSONAL LISTING CARD START */}
        <Col className={styles.col9} xl={7} lg={12} md={12} sm={12} xs={24}>
          <AKBasicCard
            cardTitle="Personal Listings"
            customClass={"h-full"}
            cardExtraContent={
              <AKDropDownSimple
                items={moreItems}
                icon={svgIcons.more}
                dropMore
              />
            }
          >
            <AKBasicList data={personalListing} />
          </AKBasicCard>
        </Col>
        {/* PERSONAL LISTING CARD END */}
      </Row>
    </>
  );
};

export default AKNFTDashboard;
