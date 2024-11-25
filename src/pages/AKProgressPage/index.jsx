import { Col, Row } from "antd";
import { AKBasicCard, AKProgress, AKHead } from "@components";
import styles from "./AKProgressPage.module.css";
const AKProgressPage = () => {
  return (
    <div>
      <AKHead title="Progress"></AKHead>
      <h2 className="title-color mb-5">Basic Progress Bar</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
        className="mb-5"
      >
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard
            cardTitle={"Progress basic"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <AKProgress percent={50} customClass="mr-4" />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard
            cardTitle={"Progressbar success"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <AKProgress percent={100} customClass="mr-4" />
          </AKBasicCard>
        </Col>

        <Col xs={24} md={12} xl={8}>
          <AKBasicCard
            cardTitle={"Progressbar exception"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <AKProgress percent={50} status="exception" />
          </AKBasicCard>
        </Col>
        <Col xs={24}>
          <AKBasicCard
            cardTitle={"Progressbar hide info"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <AKProgress percent={50} setInfo={false} customClass="mr-4" />
          </AKBasicCard>
        </Col>
        <Col xs={24}>
          <AKBasicCard
            cardTitle={"Gradient color progress"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <AKProgress
              percent={50}
              customClass="mr-4"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
          </AKBasicCard>
        </Col>
      </Row>
      <h2 className="title-color mb-5 mt-5 pt-5">Circle Progress Bar</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
        className="mb-5"
      >
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard
            cardTitle={"Circle Progress basic"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <AKProgress type="circle" percent={50} customClass="mr-4" />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard
            cardTitle={"Circle Progressbar success"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <AKProgress type="circle" percent={100} customClass="mr-4" />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard
            cardTitle={"Circle Progressbar exception"}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <AKProgress type="circle" percent={50} status="exception" />
          </AKBasicCard>
        </Col>
        <Col xs={24}>
          <AKBasicCard
            cardTitle={"Gradient Circle Progress Bar :  "}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <AKProgress
              type="circle"
              percent={85}
              customClass="mr-4"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
          </AKBasicCard>
        </Col>
      </Row>
      <Row>
        <h2 className="title-color mb-5 mt-5 pt-3">
          Dashboard Type Circle Progress Bar
        </h2>
        <Col xs={24}>
          <AKBasicCard
            cardTitle={"Circle Progress Bar dashboard type :  "}
            customClass={styles.card}
            customCardBodyClass={styles.cardBodyClass}
          >
            <AKProgress
              type="dashboard"
              percent={85}
              customClass="mr-4"
              strokeColor={{
                "0%": "#87d068",
                "50%": "#ffe58f",
                "100%": "#ffccc7",
              }}
            />
          </AKBasicCard>
        </Col>
      </Row>
    </div>
  );
};

export default AKProgressPage;
