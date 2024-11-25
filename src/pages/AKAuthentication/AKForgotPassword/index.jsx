import { forgotPassword, svgIcons } from "@const";
import { AKClsx } from "@utils";
import { Col, Row } from "antd";
import AKButton from "@components/AKButton";
import { AKHead } from "@components";
import { Link } from "react-router-dom";
import styles from "../AKAuthentication.module.css";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";

const AKForgotPassword = () => {
  return (
    <>
      <AKHead title="Forgot Password" />
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
                  <img src={forgotPassword} alt="annakoot image" className={styles.authImage} />
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
                    Forgot <b className="text-kingfisher">Password?</b>
                    <span className="inline-flex justify-center items-center ml-2">
                      {svgIcons.lock}
                    </span>
                  </h2>
                  <h3 className="mb-0 small text-color fw-400">
                    Enter your email and we&#39;ll send you instructions to
                    reset your password
                  </h3>
                </Col>
                <Col xs={24} className="">
                  <AKInput
                    id="email-for-reset-password"
                    type={"text"}
                    placeholder="Enter Your Email"
                    label="Email"
                  />
                </Col>
                <Col xs={24} className="">
                  <AKButton
                    customClass=""
                    type="fill"
                    handleClick={() => {window.location.href="https://mail.google.com/"}}
                    target="_blank"
                    size="medium"
                    block
                  >
                    SEND RESET LINK
                  </AKButton>
                </Col>
                <Col xs={24} className="">
                  <h3 className="title-color small text-center mx-auto fw-500">
                    <Link
                      className="text-kingfisher h3 small"
                      to="/authentication/login"
                    >
                      Back to login
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

export default AKForgotPassword;
