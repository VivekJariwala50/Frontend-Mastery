import { AKClsx } from "@utils";
import { Col, Row } from "antd";
import AKButton from "@components/AKButton";
import { AKHead } from "@components";
import { Link } from "react-router-dom";
import { svgIcons, verifyEmail } from "@const";
import styles from "../AKAuthentication.module.css";
const AKVerifyEmail = () => {
  return (
    <>
      <AKHead title="Verify Email" />
      <div
        className={AKClsx("d-flex h-m-inherit", styles.authenticationWrapper)}
      >
        <Row className="h-full h-m-inherit my-auto mx-0">
          <Col xs={12} className={styles.authImageCol}>
            <div className="pa-5 p-0 h-full">
              <div className={AKClsx("bg-owl", styles.authCover)}>
                <div
                  className={AKClsx(
                    styles.authImageContainer,
                    styles.authImageBg
                  )}
                >
                  <img
                    src={verifyEmail}
                    alt="annakoot image"
                    className={styles.authImage}
                  />
                </div>
              </div>
            </div>
          </Col>
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
                  <h2 className="h1 mb-1 title-color fw-700">
                    Verify Your <b className="text-kingfisher">Email</b>
                    <span className="inline-flex justify-center items-center ml-2">
                      {svgIcons.lock}
                    </span>
                  </h2>
                  <h3 className="mb-0 small text-color fw-400">
                    Account activation link sent to your email address:
                    hello@example.com Please follow the link inside to continue.
                  </h3>
                </Col>
                <Col xs={24} className="">
                  <AKButton
                    customClass=""
                    type="fill"
                    // handleClick={() => console.log("handleClick")}
                    link="/"
                    size="medium"
                    block
                  >
                    Skip for now
                  </AKButton>
                </Col>
                <Col xs={24} className="">
                  <h3 className="title-color small text-center mx-auto fw-500">
                    Didn&#39;t get the mail?{" "}
                    <Link
                      className="text-kingfisher h3 small"
                      to="/authentication/verify-email"
                    >
                      Resend
                    </Link>
                  </h3>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AKVerifyEmail;
