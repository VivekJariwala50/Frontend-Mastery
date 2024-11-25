import { Col, Row } from "antd";
import AKButton from "@components/AKButton";
import { AKHead } from "@components";
import { Link } from "react-router-dom";
import { svgIcons, Login } from "@const";
import { AKClsx } from "@utils";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import styles from "./../../../pages/AKAuthentication/AKAuthentication.module.css";
const AkSignIn = () => {
  return (
    <>
      <AKHead title="Sign In" />
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
                  <img src={Login} alt="login" className={styles.authImage} />
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
                    Welcome To <b className="text-kingfisher">Annakoot</b>
                  </h2>
                  <h3 className="mb-0 small text-color fw-400">
                    Please sign-in to your account and start the adventure
                  </h3>
                </Col>
                <Col xs={24} className="">
                  <AKInput
                    type={"text"}
                    placeholder={"enter your email or user name"}
                    label={"Email Or Username:"}
                  />
                </Col>
                <Col xs={24} className="">
                  <AKInput
                    type={"password"}
                    placeholder={"enter your password"}
                    label={"Password:"}
                  />
                </Col>
                <Col xs={24} className="">
                  <AKButton
                    customClass=""
                    type="fill"
                    link="/"
                    size="medium"
                    block
                  >
                    Sign In
                  </AKButton>
                </Col>
                <Col xs={24} className="">
                  <h3 className="title-color small text-center mx-auto fw-500">
                    New on our platform?{" "}
                    <Link
                      className="text-kingfisher h3 small"
                      to="/authentication/register"
                    >
                      {" "}
                      Create an account
                    </Link>
                  </h3>
                </Col>
                <Col xs={24} className="">
                  <h3 className="text-center title-color fw-400">or</h3>
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
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AkSignIn;
