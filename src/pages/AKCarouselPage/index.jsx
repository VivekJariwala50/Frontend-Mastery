import { Col, Row } from "antd";
import { AKCarousal, AKBasicCard, AKHead } from "@components";
import {
  dataOne,
  dataTwo,
  dataThree,
  dataFour,
  dataFive,
  dataSix,
  data,
} from "@const";

const AKCarouselPage = () => {
  return (
    <>
      <AKHead title="Carousel"></AKHead>
      <h2 className="title-color mb-5">Basic Carousel</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard cardTitle="Basic Carousel">
            <AKCarousal data={dataOne}>
              {dataOne &&
                dataOne.map((item, index) => {
                  return (
                    <img src={item.img} style={{ width: "100%" }} key={index} />
                  );
                })}
            </AKCarousal>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard cardTitle="Scroll Automatically Carousel">
            <AKCarousal autoplay={true}>
              {dataTwo &&
                dataTwo.map((item, index) => {
                  return (
                    <img src={item.img} style={{ width: "100%" }} key={index} />
                  );
                })}
            </AKCarousal>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard cardTitle="Fade Transition Carousel">
            <AKCarousal autoplay={true} effect="fade">
              {dataThree &&
                dataThree.map((item, index) => {
                  return (
                    <img src={item.img} style={{ width: "100%" }} key={index} />
                  );
                })}
            </AKCarousal>
          </AKBasicCard>
        </Col>
      </Row>
      <h2 className="title-color mt-5 pt-5 mb-5">Carousel dot position</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard cardTitle="Carousel dot position bottom">
            <AKCarousal dotPosition={"bottom"}>
              {dataFour &&
                dataFour.map((item, index) => {
                  return (
                    <img src={item.img} style={{ width: "100%" }} key={index} />
                  );
                })}
            </AKCarousal>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard cardTitle="Carousel dot position top">
            <AKCarousal dotPosition={"top"}>
              {dataFive &&
                dataFive.map((item, index) => {
                  return (
                    <img src={item.img} style={{ width: "100%" }} key={index} />
                  );
                })}
            </AKCarousal>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard cardTitle="Carousel dot position right ">
            <AKCarousal dotPosition={"right"}>
              {dataSix &&
                dataSix.map((item, index) => {
                  return (
                    <img src={item.img} style={{ width: "100%" }} key={index} />
                  );
                })}
            </AKCarousal>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard cardTitle="Carousel dot position left">
            <AKCarousal dotPosition={"left"}>
              {data &&
                data.map((item, index) => {
                  return (
                    <img src={item.img} style={{ width: "100%" }} key={index} />
                  );
                })}
            </AKCarousal>
          </AKBasicCard>
        </Col>
      </Row>
    </>
  );
};

export default AKCarouselPage;
