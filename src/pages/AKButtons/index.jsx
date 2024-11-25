import { Col, Row } from "antd";
import { AKBasicCard, AKHead } from "@components";
import { AKClsx } from "@utils";
import AKButton from "@components/AKButton";
import { svgIcons } from "@const";
import styles from "./AKButtons.module.css";
const AKButtons = () => {
  return (
    <>
      <AKHead title="Buttons"></AKHead>
      <h3 className="mb-5 title-color">Buttons</h3>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} md={12}>
          <AKBasicCard
            cardTitle={"Basic Buttons:"}
            customClass={AKClsx("mb-5", styles.card)}
            customCardBodyClass="flex flex-wrap gap-5 overflow-unset"
          >
            <AKButton
              type="fill"
              handleClick={() => console.log("handleClick")}
              // size="large"
            >
              Primary Button
            </AKButton>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard
            cardTitle={"Basic Buttons size :"}
            customClass={AKClsx("mb-5", styles.card)}
            customCardBodyClass="flex flex-wrap gap-5 overflow-unset"
          >
            <AKButton
              type="fill"
              handleClick={() => console.log("handleClick")}
              size="large"
            >
              Button Large
            </AKButton>
            <AKButton
              type="fill"
              handleClick={() => console.log("handleClick")}
              size="medium"
            >
              Button Medium
            </AKButton>
            <AKButton
              type="fill"
              handleClick={() => console.log("handleClick")}
              size="small"
            >
              Button Small
            </AKButton>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard
            cardTitle={"Label Buttons with no fill:"}
            customClass={AKClsx("mb-5", styles.card)}
            customCardBodyClass="flex flex-wrap gap-5 overflow-unset"
          >
            <AKButton
              type="no-fill"
              handleClick={() => console.log("handleClick")}
              size="large"
            >
              Button Large
            </AKButton>
            <AKButton
              type="no-fill"
              handleClick={() => console.log("handleClick")}
              size="medium"
            >
              Button Medium
            </AKButton>
            <AKButton
              type="no-fill"
              handleClick={() => console.log("handleClick")}
              size="small"
            >
              Button Small
            </AKButton>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard
            cardTitle={"Buttons with Icons:"}
            customClass={AKClsx("mb-5", styles.card)}
            customCardBodyClass="flex flex-wrap gap-5 overflow-unset"
          >
            <AKButton
              type="fill"
              handleClick={() => console.log("handleClick")}
              icon={svgIcons.search}
              size="large"
            >
              button icon
            </AKButton>
            <AKButton
              type="fill"
              handleClick={() => console.log("handleClick")}
              icon={svgIcons.search}
              size="large"
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard
            cardTitle={"Radius Buttons:"}
            customClass={AKClsx("mb-5", styles.card)}
            customCardBodyClass="flex flex-wrap gap-5 overflow-unset"
          >
            <AKButton
              borderSize="md"
              type="fill"
              handleClick={() => console.log("handleClick")}
              size="large"
            >
              button fill
            </AKButton>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard
            cardTitle={"Outline Buttons:"}
            customClass={AKClsx("mb-5", styles.card)}
            customCardBodyClass="flex flex-wrap gap-5 overflow-unset"
          >
            <AKButton
              borderSize="md"
              type="no-fill"
              handleClick={() => console.log("handleClick")}
              size="large"
            >
              button no fill
            </AKButton>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard
            cardTitle={"Block level buttons:"}
            customClass="mb-5"
            customCardBodyClass="flex flex-wrap gap-5 overflow-unset"
          >
            <AKButton
              block
              type="no-fill"
              handleClick={() => console.log("handleClick")}
              size="large"
            >
              Block level button
            </AKButton>
            <AKButton
              block
              type="fill"
              handleClick={() => console.log("handleClick")}
              size="large"
            >
              Block level button
            </AKButton>
          </AKBasicCard>
        </Col>
      </Row>
    </>
  );
};

export default AKButtons;
