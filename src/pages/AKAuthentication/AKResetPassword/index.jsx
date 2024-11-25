import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import AKButton from "@components/AKButton";
import { AKHead } from "@components";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import { AKClsx } from "@utils";
import { resetPassword, svgIcons } from "@const";
import styles from "../AKAuthentication.module.css";

const AKResetPassword = () => {
  return (
    <>
      <AKHead title="Reset Password"></AKHead>
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
                  <img src={resetPassword} alt="annakoot image" className={styles.authImage} />
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
              <Row>
                <Col xs={24} className="mb-5">
                  <h2 className="h1 mb-1 title-color fw-700">
                    Reset <b className="text-kingfisher">Password</b>
                    <span className="inline-flex justify-center items-center ml-2">
                      {svgIcons.lock}
                    </span>
                  </h2>
                  <h3 className="mb-0 small text-color fw-400">
                    for john.doe@email.com
                  </h3>
                </Col>
                <Col xs={24} className="mb-5">
                  <AKInput
                    id="newPassword"
                    type={"password"}
                    placeholder="Enter Current password"
                    label="Current Password"
                  />
                </Col>
                <Col xs={24} className="mb-5">
                  <AKInput
                    id="newPassword"
                    type={"password"}
                    placeholder="Enter New password"
                    label="New Password"
                  />
                </Col>
                <Col xs={24} className="mb-5">
                  <AKInput
                    id="confirmPassword"
                    type={"password"}
                    placeholder="Enter Confirm password"
                    label="Confirm Password"
                  />
                </Col>
                <Col xs={24} className="mb-5">
                  <AKButton
                    customClass=""
                    type="fill"
                    // handleClick={() => console.log("handleClick")}
                    link="/authentication/login"
                    size="medium"
                    block
                  >
                    CREATE
                  </AKButton>
                </Col>
                <Col xs={24} className="mb-5">
                  <h3 className="title-color small text-center mx-auto fw-500">
                    <Link
                      className="text-kingfisher h3 small"
                      to="/authentication/otp"
                    >
                      <span className="inline-flex justify-center items-center">
                        {svgIcons.arrowLeft}
                      </span>
                      Resend
                    </Link>
                  </h3>
                </Col>
                <Col xs={24} className="mb-5">
                  <h3 className="text-center title-color fw-400">or</h3>
                </Col>
                <Col xs={24} className="mb-5">
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
        </Row>
      </div>
    </>
  );
};

export default AKResetPassword;
