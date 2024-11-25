import { AKSwiperSlider, AKImageCard, AKHead } from "@components";
import { SwiperSlide } from "swiper/react";
import { AKClsx } from "@utils";
import { basicSwiperSliderData, productCardSwiperData } from "@const";
import { Col, Image, Row } from "antd";
import AKTags from "@components/AKUIKits/AKTagPills/AKTags";
import styles from "./AKSwiperPage.module.css";

const AKSwiperPage = () => {
  return (
    <>
      <AKHead title="Swiper"></AKHead>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col sm={24}>
          <AKSwiperSlider swiperCardTitle="Basic Swiper" defaultClassName="">
            {basicSwiperSliderData.map((item, basicSwiperIndex) => {
              return (
                <SwiperSlide key={basicSwiperIndex}>
                  <div
                    className={AKClsx(
                      styles.fullBannerImg,
                      "ratio full-banner-img"
                    )}
                  >
                    <Image
                      src={item.bannerImg}
                      preview={false}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </AKSwiperSlider>
        </Col>
        <Col xs={24} lg={12}>
          <AKSwiperSlider
            swiperCardTitle="Navigation Swiper"
            defaultClassName=""
            swiperNavigation={true}
          >
            {basicSwiperSliderData.map((item, basicSwiperIndex) => {
              return (
                <SwiperSlide key={basicSwiperIndex}>
                  <div
                    className={AKClsx(
                      styles.fullBannerImg,
                      "ratio full-banner-img"
                    )}
                  >
                    <Image
                      src={item.bannerImg}
                      preview={false}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </AKSwiperSlider>
        </Col>
        <Col xs={24} lg={12}>
          <AKSwiperSlider
            swiperCardTitle="Pagination Swiper"
            defaultClassName=""
            pagination={true}
          >
            {basicSwiperSliderData.map((item, basicSwiperIndex) => {
              return (
                <SwiperSlide key={basicSwiperIndex}>
                  <div
                    className={AKClsx(
                      styles.fullBannerImg,
                      "ratio full-banner-img"
                    )}
                  >
                    <Image
                      src={item.bannerImg}
                      preview={false}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </AKSwiperSlider>
        </Col>
        <Col xs={24} lg={12}>
          <AKSwiperSlider
            swiperCardTitle="Pagination Not Clickable"
            defaultClassName=""
            pagination={true}
            paginationClickable={false}
          >
            {basicSwiperSliderData.map((item, basicSwiperIndex) => {
              return (
                <SwiperSlide key={basicSwiperIndex}>
                  <div
                    className={AKClsx(
                      styles.fullBannerImg,
                      "ratio full-banner-img"
                    )}
                  >
                    <Image
                      src={item.bannerImg}
                      preview={false}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </AKSwiperSlider>
        </Col>
        <Col sm={24}>
          <AKSwiperSlider
            swiperBasicCardClass="bg-transparent"
            swiperCardTitle="Product Images with responsive Swiper"
            defaultClassName=""
            swiperNavigation={true}
            swiperBreakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {productCardSwiperData.map((item, productCardIndex) => {
              return (
                <SwiperSlide key={productCardIndex}>
                  <AKImageCard
                    cardImg={item.cardImg}
                    customClass="h-full"
                    overlayImg
                    imgOnly={true}
                  ></AKImageCard>
                </SwiperSlide>
              );
            })}
          </AKSwiperSlider>
        </Col>
        <Col sm={24}>
          <AKSwiperSlider
            swiperBasicCardClass="bg-transparent"
            swiperCardTitle="Product card with responsive Swiper"
            defaultClassName=""
            swiperNavigation={true}
            swiperBreakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {productCardSwiperData.map((item, productCardIndex) => {
              return (
                <SwiperSlide key={productCardIndex}>
                  <AKImageCard
                    user={true}
                    userImg={item.userImg}
                    cardImg={item.cardImg}
                    name={item.name}
                    email={item.email}
                    description={
                      <>
                        <div className="text-right mb-1">
                          <AKTags
                            color={item.tagColor}
                            title={item.tagTitle}
                            customClass="text-right mx-auto"
                            icon
                          />
                        </div>
                        <p className="mb-1">{item.productLabel}</p>
                        <h3 className="text-kingfisher mb-2">
                          {item.productTitle}
                        </h3>
                        <p className="mb-0">{item.paragraphText}</p>
                      </>
                    }
                    buttonTitle="notify me"
                    link={item.link}
                    cardImgContainerClass={styles.savingDayCardImgContainer}
                    customClass="h-full"
                    overlayImg
                  ></AKImageCard>
                </SwiperSlide>
              );
            })}
          </AKSwiperSlider>
        </Col>
      </Row>
    </>
  );
};

export default AKSwiperPage;
