import { Col, Row } from "antd";
import { AKCarousal } from "../../../AKUIKits/AKCarousal/index";
import styles from "./AKDescriptionCard.module.css";

export const AKDescriptionCard = ({ data }) => {
  return (
    <AKCarousal dotPosition="bottom" autoplay={true}>
      {data &&
        data.map((item, index) => {
          return (
            <div
              style={{ height: "100%" }}
              className="flex flex justify-between mb-5 pb-5"
              key={`${item.name}${index}`}
            >
              <div>
                <div className="mb-5">
                  <h3 className="title-color mb-1 fw-600">{item.name}</h3>
                  <p className="text-color mb-0 fw-400">{item.description}</p>
                </div>
                <h3 className="mb-4 fw-600 title-color">{item.subtitle}</h3>
                <Row gutter={[8, 8]}>
                  {item.list &&
                    item.list.map((childItem, childIndex) => {
                      return (
                        <Col sm={12} key={`${childItem.name}${childIndex}`}>
                          <h4 className="text-color mb-0 fw-400">
                            {childItem.name}
                          </h4>
                        </Col>
                      );
                    })}
                </Row>
              </div>
              <div className={styles.analyticsHeroImgContainer}>
                <img
                  src={item.img}
                  alt="annakoot image"
                  className={styles.analyticsHeroImg}
                />
              </div>
            </div>
          );
        })}
    </AKCarousal>
  );
};
