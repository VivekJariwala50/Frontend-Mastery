import { Otp, svgIcons } from "@const";
import AKButton from "@components/AKButton";
import { AKHead } from "@components";
import { AKClsx } from "@utils";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import styles from "../AKAuthentication.module.css";
import { useState } from "react";
const AKOTP = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <AKHead title="OTP" />
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
                  <img src={Otp} alt="otp" className={styles.authImage} />
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
                    Two Step <b className="text-kingfisher">Verification</b>
                    <span className="inline-flex justify-center items-center ml-2">
                      {svgIcons.lock}
                    </span>
                  </h2>
                  <h3 className="mb-0 small text-color fw-400">
                    We sent a verification code to your mobile. Enter the code
                    from the mobile in the field below. ******1234
                  </h3>
                </Col>
                <Col xs={24} className="">
                  <div className={styles.otpWrapper}>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={4}
                      renderSeparator={<span className="separator">-</span>}
                      renderInput={(props) => <input {...props} />}
                      containerStyle={"otp-container"}
                      inputStyle={"otp-input"}
                    />
                  </div>
                </Col>
                <Col xs={24} className="">
                  <AKButton
                    customClass=""
                    type="fill"
                    link="/authentication/login"
                    size="medium"
                    block
                  >
                    Verify my account
                  </AKButton>
                </Col>
                <Col xs={24} className="">
                  <h3 className="title-color small text-center mx-auto fw-500">
                    Didn&#39;t get the code?{" "}
                    <Link
                      className="text-kingfisher h3 small"
                      to="/authentication/verify-email"
                    >
                      {" "}
                      Resend
                    </Link>
                  </h3>
                </Col>
                <Col xs={24} className="">
                  <h3 className="text-center title-color fw-400">or</h3>
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
        </Row>
      </div>
    </>
  );
};

export default AKOTP;
