import { AKBasicCard, AKHead } from "@components";
import AKButton from "@components/AKButton";
import { AKClsx } from "@utils";
import { Col, Row } from "antd";
import styles from "./AKError.module.css";
const AKError = () => {
  return (
    <>
      <AKHead title="Error"></AKHead>
      <h2 className="mb-3 small title-color">Error Page</h2>
      <AKBasicCard header={false} customClass={styles.card}>
        <div
          className={AKClsx(
            styles.sectionWrapper,
            "h-full relative flex justify-center items-center"
          )}
        >
          <Row
            className="h-full text-center"
            gutter={[
              { xs: 10, md: 14, lg: 16, xl: 18, xxl: 20 },
              { xs: 10, md: 14, lg: 16, xl: 18, xxl: 20 },
            ]}
          >
            <Col xs={24}>
              <h2 className={AKClsx(styles.title, " title-color mb-0")}>
                Error
              </h2>
            </Col>
            <Col xs={24}>
              <h2 className="title-color">
                Oops, The page you are looking for is not available
              </h2>
            </Col>
            <Col xs={24}>
              <h3 className={AKClsx("text-color", styles.errorPageDescription)}>
                You can redirect to the home page by clicking below button.
              </h3>
            </Col>
            <Col xs={24}>
              <AKButton
                customClass=""
                type="fill"
                handleClick={() => console.log("handleClick")}
                size="medium"
                link="/"
              >
                BACK TO HOME
              </AKButton>
            </Col>
          </Row>
        </div>
      </AKBasicCard>
    </>
  );
};

export default AKError;
