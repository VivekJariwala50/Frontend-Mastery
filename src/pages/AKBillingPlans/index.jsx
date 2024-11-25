import { Row, Col } from "antd";
import { AKBasicCard, AKSwitch, AKHead } from "@components";
import AKButton from "@components/AKButton";
import { billingPlanData } from "@const";
import styles from "./AKBillingPlans.module.css";
import AKTags from "@components/AKUIKits/AKTagPills/AKTags";
import { AKClsx } from "@utils";

const AKBillingPlans = () => {
  return (
    <section className={AKClsx(styles.myProfileSection)}>
      <AKHead title="Billing Plan"></AKHead>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        {billingPlanData.map((item, index) => {
          return (
            <Col xs={24} md={12} xl={8} key={index}>
              <AKBasicCard
                cardTitle=""
                header={false}
                customClass={`${styles.profileCard} h-full`}
                customCardBodyClass={AKClsx(styles.accountProfileCard)}
              >
                <AKTags
                  color={item.color}
                  title={item.label}
                  customClass="fw-400 mb-6"
                />
                <h2 className="title-color mb-6">
                  {item.price} <small>/&nbsp;{item.year}</small>
                </h2>
                <AKButton
                  customClass="mb-6"
                  type="fill"
                  handleClick={() => console.log("handleClick")}
                  size="small"
                >
                  Get started
                </AKButton>
                <ul className="ma-auto text-left pl-5">
                  {item.billingPlanListData.map((children, listIndex) => {
                    return (
                      <li
                        className="text-color h3 small list-style-none"
                        key={listIndex}
                      >
                        {children}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex align-items-center absolute top-15 right-15">
                  <AKSwitch
                    // defaultChecked
                    handleChange={() => console.log("Basic Switch")}
                    AKSwitchClassName="mr-3"
                  />
                  <h4 className="title-color">Active plan</h4>
                </div>
              </AKBasicCard>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default AKBillingPlans;
