import { Col, Row } from "antd";
import { AKRadio, AKBasicCard, AKCheckBox, AKHead } from "@components";
import { themeModeItems } from "@const";
import styles from "./AKCheckboxAndRadio.module.css";
const AKCheckboxAndRadio = () => {
  return (
    <div className="mb-3">
      <AKHead title="Checkbox And Radio"></AKHead>
      <h3 className="mb-5 title-color">Radio Types:</h3>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} md={12} lg={8} xl={6}>
          <AKBasicCard
            customClass={styles.checkboxCard}
            cardTitle={"Basic Radio:"}
          >
            <AKRadio
              radioClass="custom-class"
              defaultValue={themeModeItems[0].name}
              radioItems={themeModeItems}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <AKBasicCard
            customClass={styles.checkboxCard}
            cardTitle="Vertical Radio.Group"
          >
            <AKRadio
              radioClass="custom-class"
              defaultValue={themeModeItems[1].name}
              direction="vertical"
              radioItems={themeModeItems}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <AKBasicCard
            customClass={styles.checkboxCard}
            cardTitle="Solid Radio Button"
          >
            <AKRadio
              radioClass="custom-class"
              defaultValue={themeModeItems[0].name}
              buttonStyle="solid"
              direction="vertical"
              radioItems={themeModeItems}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <AKBasicCard
            customClass={styles.checkboxCard}
            cardTitle="Solid Vertical Radio Button"
          >
            <AKRadio
              radioClass="custom-class"
              defaultValue={themeModeItems[1].name}
              buttonStyle="solid"
              radioItems={themeModeItems}
            />
          </AKBasicCard>
        </Col>
      </Row>
      <h3 className="my-5 title-color">Checkbox Types:</h3>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} md={12} lg={8} xl={6}>
          <AKBasicCard
            customClass={styles.checkboxCard}
            cardTitle={"Basic Checkbox:"}
          >
            <AKCheckBox
              defaultValue={"Apple"}
              options={[
                {
                  label: "Apple",
                  value: "Apple",
                },
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <AKBasicCard
            customClass={styles.checkboxCard}
            cardTitle={"Checkbox Group:"}
          >
            <AKCheckBox
              defaultValue={"Apple"}
              options={[
                {
                  label: "Apple",
                  value: "Apple",
                },
                {
                  label: "Pear",
                  value: "Pear",
                },
                {
                  label: "Orange",
                  value: "Orange",
                },
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <AKBasicCard
            customClass={styles.checkboxCard}
            cardTitle={"Checkbox Direction Column:"}
          >
            <AKCheckBox
              column
              defaultValue={"Apple"}
              options={[
                {
                  label: "Apple",
                  value: "Apple",
                },
                {
                  label: "Pear",
                  value: "Pear",
                },
                {
                  label: "Orange",
                  value: "Orange",
                },
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <AKBasicCard
            customClass={styles.checkboxCard}
            cardTitle={"Checkbox  order reverse:"}
          >
            <AKCheckBox
              column
              defaultValue={"Apple"}
              flexReverse
              options={[
                {
                  label: "Apple",
                  value: "Apple",
                },
                {
                  label: "Pear",
                  value: "Pear",
                },
                {
                  label: "Orange",
                  value: "Orange",
                },
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8} xl={6}>
          <AKBasicCard
            customClass={styles.checkboxCard}
            cardTitle={"Checkbox block order reverse:"}
          >
            <AKCheckBox
              column
              defaultValue={"Apple"}
              flexReverse
              block
              options={[
                {
                  label: "Apple",
                  value: "Apple",
                },
                {
                  label: "Pear",
                  value: "Pear",
                },
                {
                  label: "Orange",
                  value: "Orange",
                },
              ]}
            />
          </AKBasicCard>
        </Col>
      </Row>
    </div>
  );
};
export default AKCheckboxAndRadio;
