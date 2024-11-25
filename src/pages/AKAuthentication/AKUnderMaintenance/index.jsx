import { Col, Row } from "antd";
import { svgIcons, UnderMaintenance } from "@const";
import { AKClsx } from "@utils";
import styles from "./../../../pages/AKAuthentication/AKAuthentication.module.css";
import { AKHead } from "@components";

const AKUnderMaintenance = () => {
  return (
    <>
      <AKHead title="UnderMaintenance" />
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
                      <img
                        src={UnderMaintenance}
                        alt="under-maintenance"
                        className={styles.authImage}
                      />
                    </div>
                  </Col>
                  <Col xs={24} className="">
                    <h2 className="h1 mb-1 title-color fw-700 text-center">
                      Under Maintenance
                    </h2>
                    <h3 className="mb-0 small text-color fw-400 text-center">
                      Our website is under maintenance, wait for some time.
                    </h3>
                  </Col>
                  <Col xs={24} className="">
                    <div className="flex items-center justify-center">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        className="social-icons blue"
                      >
                        {svgIcons.facebook}
                      </a>
                      <a
                        href="https://google.com"
                        target="_blank"
                        className="social-icons red ml-3"
                      >
                        {svgIcons.google}
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        className="social-icons white ml-3"
                      >
                        {svgIcons.twitter}
                      </a>
                    </div>
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

export default AKUnderMaintenance;
