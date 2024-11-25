import { Col, Row } from "antd";
import AKButton from "@components/AKButton";
import { AKHead } from "@components";
import { svgIcons, ComingSoon } from "@const";
import { AKClsx } from "@utils";
import styles from "./../../../pages/AKAuthentication/AKAuthentication.module.css";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";

const AKComingSoon = () => {
  return (
    <>
      <AKHead title="Coming Soon" />
      <div
        className={AKClsx("d-flex h-m-inherit", styles.authenticationWrapper)}
      >
        <Row className="h-full h-m-inherit my-auto mx-0">
          <Col
            xs={24}
            lg={24}
            xl={12}
            className={AKClsx(
              "flex items-center justify-center",
              styles.authContentCol
            )}
          >
            <div className={AKClsx(styles.authContent)}>
              <Row gutter={[20, 20]}>
                <Col xs={24} className="">
                  <h2 className="h1 mb-1 title-color fw-700 text-center">
                    Coming Soon
                  </h2>
                  <h3 className="mb-0 small text-color fw-400 text-center">
                    Our website is currently under construction, enter your
                    email id to get latest updates and notifications about the
                    website.
                  </h3>
                </Col>
                <Col xs={24} className="">
                  <AKInput type={"text"} placeholder={"@xyz"} />
                </Col>
                <Col xs={24} className="">
                  <AKButton
                    customClass=""
                    type="fill"
                    handleClick={() => console.log("handleClick")}
                    size="medium"
                    block
                  >
                    subscribe
                  </AKButton>
                </Col>
                <Col xs={24} className="">
                  <div className="flex items-center justify-center gap-8">
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
                      className="social-icons red"
                    >
                      {svgIcons.google}
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      className="social-icons white"
                    >
                      {svgIcons.twitter}
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} className={styles.authImageCol}>
            <div className="pa-5 p-0 h-full">
              <div className={AKClsx("bg-owl h-m-inherit", styles.authCover)}>
                <div className={styles.authImageContainer}>
                  <img src={ComingSoon} alt="annakoot image" className={styles.authImage} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AKComingSoon;
