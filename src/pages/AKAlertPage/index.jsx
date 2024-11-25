import { AKAlert, AKBasicCard, AKHead } from "@components";
import { Col, Row } from "antd";
import styles from "./AKAlertPage.module.css";
const AKAlertPage = () => {
  return (
    <div>
      <AKHead title="Alert"></AKHead>
      <h2 className="title-color mb-5">Basic Alert : </h2>

      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} md={12}>
          <AKBasicCard cardTitle="Basic Alert" customClass={styles.card}>
            <AKAlert
              type="success"
              message="Basic Alert"
              handleClose={() => console.log("ak alert close")}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard
            cardTitle="Basic Alert with closable"
            customClass={styles.card}
          >
            <AKAlert
              type="success"
              message="Basic Alert With Closable"
              handleClose={() => console.log("ak alert close")}
              isClosable
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard
            cardTitle="Basic Alert With Description"
            customClass={styles.card}
          >
            <AKAlert
              type="success"
              message="file is being deleted"
              description="file is being deleted, are you sure!"
              handleClose={() => console.log("ak alert close")}
              isClosable={false}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard cardTitle="Alert Types" customClass={styles.card}>
            <AKAlert
              customClass="mb-5"
              type="success"
              message="Success Text"
              handleClose={() => console.log("ak alert close")}
              isClosable
            />
            <AKAlert
              customClass="mb-5"
              type="info"
              message="Info Text"
              handleClose={() => console.log("ak alert close")}
              isClosable
            />
            <AKAlert
              customClass="mb-5"
              type="warning"
              message="Warning Text"
              handleClose={() => console.log("ak alert close")}
              isClosable
            />
            <AKAlert
              customClass="mb-5"
              type="error"
              message="Error Text"
              handleClose={() => console.log("ak alert close")}
              isClosable
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard cardTitle="Alert With Icons" customClass={styles.card}>
            <AKAlert
              customClass="mb-5"
              type="success"
              message="Success Text"
              handleClose={() => console.log("ak alert close")}
              isClosable
              isIcon
            />
            <AKAlert
              customClass="mb-5"
              type="info"
              message="Info Text"
              handleClose={() => console.log("ak alert close")}
              isClosable
              isIcon
            />
            <AKAlert
              customClass="mb-5"
              type="warning"
              message="Warning Text"
              handleClose={() => console.log("ak alert close")}
              isClosable
              isIcon
            />
            <AKAlert
              customClass="mb-5"
              type="error"
              message="Error Text"
              handleClose={() => console.log("ak alert close")}
              isClosable
              isIcon
            />
          </AKBasicCard>
        </Col>
      </Row>
    </div>
  );
};
export default AKAlertPage;
