import { Col, Row } from "antd";
import {
  AKBasicCard,
  AKDropDownImg,
  AKDropDownSimple,
  AKHead,
} from "@components";
import { simpleDropDownItems, svgIcons, userDropItems } from "@const";
import styles from "./AKDropdownPage.module.css";
const AKDropdownPage = () => {
  return (
    <>
      <AKHead title="Dropdown"></AKHead>
      <h2 className="mb-5 title-color">Drop Down Types:</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} lg={12}>
          <AKBasicCard
            cardTitle={"Primary Drop Down:"}
            customClass={styles.card}
            customCardBodyClass="flex flex-wrap gap-4"
          >
            <AKDropDownSimple title="primary" items={simpleDropDownItems} />
          </AKBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <AKBasicCard
            cardTitle={"Drop Down Direction:"}
            customClass={styles.card}
            customCardBodyClass="flex flex-wrap gap-5"
          >
            <AKDropDownSimple
              placement="top"
              title="Top"
              items={simpleDropDownItems}
            />
            <AKDropDownSimple
              placement="topLeft"
              title="Top Left"
              items={simpleDropDownItems}
            />
            <AKDropDownSimple
              placement="topRight"
              title="Top Right"
              items={simpleDropDownItems}
            />
            <AKDropDownSimple
              placement="bottomLeft"
              title="Bottom Left"
              items={simpleDropDownItems}
            />
            <AKDropDownSimple
              placement="bottomRight"
              title="Bottom Right"
              items={simpleDropDownItems}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <AKBasicCard cardTitle={"Label:"} customClass={styles.card}>
            <AKDropDownSimple
              title="Label Drop Down"
              label
              items={simpleDropDownItems}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <AKBasicCard
            cardTitle={"Drop With Image:"}
            customClass="mb-5"
            className={styles.card}
          >
            <AKDropDownImg items={userDropItems} />
          </AKBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <AKBasicCard
            cardTitle={"Drop Down Text Only:"}
            customClass={styles.card}
            customCardBodyClass="flex flex-wrap gap-4"
          >
            <AKDropDownSimple
              title="text only"
              textOnly
              items={simpleDropDownItems}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <AKBasicCard
            cardTitle={"Drop Down Icon Only:"}
            customClass={styles.card}
            customCardBodyClass="flex flex-wrap gap-4"
          >
            <AKDropDownSimple items={simpleDropDownItems} />
          </AKBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <AKBasicCard
            cardTitle={"Drop Down Icon Only:"}
            customClass={styles.card}
            customCardBodyClass="flex flex-wrap gap-4"
          >
            <AKDropDownSimple
              items={simpleDropDownItems}
              icon={svgIcons.more}
              dropMore
            />
          </AKBasicCard>
        </Col>
      </Row>
    </>
  );
};

export default AKDropdownPage;
