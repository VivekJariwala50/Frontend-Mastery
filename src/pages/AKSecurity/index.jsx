import { Row, Col } from "antd";
import { AKBasicCard, AKAccordion, AKHead } from "@components";
import AKButton from "@components/AKButton";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import { AKClsx } from "@utils";
import { Link } from "react-router-dom";
import { twoStepVerficationAccordionItem } from "@const";
import styles from "./AKSecurity.module.css";
const AKSecurity = () => {
  return (
    <>
      <AKHead title="Security"></AKHead>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} lg={12}>
          <AKBasicCard
            cardTitle=""
            header={false}
            customClass={`${styles.profileCard} h-full`}
            customCardBodyClass={AKClsx(styles.accountProfileCard, "pa-0")}
          >
            <div className="mb-4">
              <h3 className="title-color mb-4">Password Requirements:</h3>
              <ul>
                <li className="title-color mb-4">
                  <b className="mr-3">1.</b>Minimum 8 characters long - the
                  more, the better
                </li>
                <li className="title-color mb-4">
                  <b className="mr-3">2.</b>At least one lowercase character
                </li>
                <li className="title-color mb-4">
                  <b className="mr-3">3.</b>At least one number, symbol, or
                  whitespace character
                </li>
              </ul>
            </div>
            <hr className="mt-5 mb-4 opacity-02" />
            <div className="mb-4">
              <h3 className="title-color mb-4">Two-steps verification:</h3>
              <h3 className="title-color mb-4">
                Two factor authentication is not enabled yet.
              </h3>
              <p className="title-color mb-4 h4 lh-mid">
                Two-factor authentication adds an additional layer of security
                to your account by requiring more than just a password to log
                in. <Link to="/dashboard/security">Learn more</Link>.
              </p>
            </div>
            {/* <AKButton
                        customClass=""
                        type="fill"
                        handleClick={() => console.log("handleClick")}
                        size="small"
                    >
                        Enable two step verification
                    </AKButton> */}
            <AKAccordion
              items={twoStepVerficationAccordionItem}
              defaultActiveKey={1}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <AKBasicCard
            cardTitle=""
            header={false}
            customClass={`${styles.profileCard} h-full`}
            customCardBodyClass={AKClsx(styles.accountProfileCard, "pa-0")}
          >
            <h3 className="title-color mb-4">Change Password</h3>
            <Row gutter={[14, 14]}>
              <Col xs={24} className="mb-4">
                <AKInput
                  id={"currentPassword"}
                  type="password"
                  label={"Current Password:"}
                  placeholder={"Enter current password"}
                />
              </Col>
              <Col xs={24} className="mb-4">
                <AKInput
                  id={"newPassword"}
                  type="password"
                  label={"New Password:"}
                  placeholder={"Enter new password"}
                />
              </Col>
              <Col xs={24} className="mb-4">
                <AKInput
                  id={"confirmPassword"}
                  type="password"
                  label={"Confirm New Password:"}
                  placeholder={"Enter confirm new password"}
                />
              </Col>
              <Col xs={24}>
                <AKButton
                  customClass=""
                  type="fill"
                  handleClick={() => console.log("handleClick")}
                  size="small"
                >
                  Save changes
                </AKButton>
              </Col>
            </Row>
          </AKBasicCard>
        </Col>
      </Row>
    </>
  );
};

export default AKSecurity;
