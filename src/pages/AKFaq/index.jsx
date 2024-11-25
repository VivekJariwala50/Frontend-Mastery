import { Faq, faqCustomerSupport, faqGeneralTopics } from "@const";
import { AKAccordion, AKBasicCard, AKTextArea, AKHead } from "@components";
import AKButton from "@components/AKButton";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import styles from "./AKFaq.module.css";
import { Col, Row } from "antd";
const AKFaq = () => {
  return (
    <>
      <AKHead title="FAQ"></AKHead>
      <AKBasicCard cardTitle="FAQ" customClass="h-full bg-parrot">
        <Row
          gutter={[
            { xs: 20, sm: 40, md: 60, lg: 80, xl: 100, xxl: 120 },
            { xs: 20, sm: 40, md: 60, lg: 80, xl: 100 },
          ]}
        >
          <Col xs={24}>
            <Row>
              <Col xs={24}>
                <div className={styles.faqImgContainer}>
                  <img src={Faq} alt="Faq" />
                </div>
                <h2 className="title-color mb-2 fw-700 text-center">
                  Frequently Asked Questions
                </h2>
                <h3 className="text-color fw-400 mb-0 text-center">
                  We have shared some of the most frequently asked questions to
                  help you out!{" "}
                </h3>
              </Col>
            </Row>
          </Col>
          <Col xs={24}>
            <Row
              gutter={[
                { xs: 10, sm: 20, md: 30, lg: 40, xl: 50, xxl: 60 },
                { xs: 10, sm: 20, md: 30, lg: 40 },
              ]}
            >
              <Col xs={24} lg={12}>
                <AKBasicCard cardTitle="General Topics ?" customClass="h-full">
                  <AKAccordion
                    items={faqGeneralTopics}
                    defaultActiveKey={1}
                    AKAccordionClassname="transparent-accordion"
                  />
                </AKBasicCard>
              </Col>
              <Col xs={24} lg={12}>
                <AKBasicCard
                  cardTitle="Customer Support ?"
                  customClass="h-full"
                >
                  <AKAccordion
                    items={faqCustomerSupport}
                    defaultActiveKey={1}
                    AKAccordionClassname="transparent-accordion"
                  />
                </AKBasicCard>
              </Col>
              <Col xs={24}>
                <AKBasicCard
                  cardTitle="Still Have Questions ?"
                  customClass="h-full"
                >
                  <Row
                    gutter={[
                      { xs: 10, sm: 20, md: 30 },
                      { xs: 10, sm: 20, md: 30 },
                    ]}
                  >
                    <Col xs={24} sm={12}>
                      <AKInput
                        id={"labeledInput"}
                        label={"Enter Name:"}
                        placeholder={"Enter your name"}
                      />
                    </Col>
                    <Col xs={24} sm={12}>
                      <AKInput
                        id={"labeledInput"}
                        label={"Email Id:"}
                        placeholder={"Enter email id"}
                      />
                    </Col>
                    <Col xs={24}>
                      <AKTextArea
                        label={"Enter Questions:"}
                        placeholder="Enter your question here"
                        rows={8}
                      />
                    </Col>
                    <Col xs={24}>
                      <AKButton
                        type="fill"
                        handleClick={() => console.log("handleClick")}
                      >
                        Send
                      </AKButton>
                    </Col>
                  </Row>
                </AKBasicCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </AKBasicCard>
    </>
  );
};

export default AKFaq;
