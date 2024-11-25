import { Col, Row } from "antd";
import AKButton from "@components/AKButton";
import { AKHead } from "@components";
import { NotFound } from "@const";
import { AKClsx } from "@utils";
import styles from "./../../../pages/AKAuthentication/AKAuthentication.module.css";
const AKNotFound = () => {
  return (
    <>
      <AKHead title="Not Found" />
      <div
        className={AKClsx("d-flex h-m-inherit", styles.authenticationWrapper)}
      >
        <Row className="h-full h-m-inherit my-auto mx-0">
          <Col xs={24}>
            <div
              className={AKClsx(
                "pa-5 p-0 h-full",
                styles.authSingleColContainer
              )}
            >
              <div
                className={AKClsx("bg-owl h-m-inherit pa-3", styles.authCover)}
              >
                <Row gutter={[20, 20]} className="text-center">
                  <Col xs={24}>
                    <div className={AKClsx(styles.authImageContainer)}>
                      <img src={NotFound} alt="annakoot image" className={styles.authImage} />
                    </div>
                  </Col>
                  <Col xs={24}>
                    <h2 className="h1 mb-0 title-color fw-700 text-center">
                      Page Not Found
                    </h2>
                  </Col>
                  <Col xs={24}>
                    <AKButton
                      customClass=""
                      type="fill"
                      handleClick={() => console.log("handleClick")}
                      size="medium"
                    >
                      BACK TO HOME
                    </AKButton>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AKNotFound;
