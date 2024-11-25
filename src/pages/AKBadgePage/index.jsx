import { AKStatusBadge, AKBasicCard, AKHead } from "@components";
import { topisInterested } from "@const";
import { Col, Row } from "antd";

const AKBadgePage = () => {
  return (
    <div>
      <AKHead title="Badge"></AKHead>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} md={12}>
          <AKBasicCard cardTitle={"Group Of Badge"}>
            <AKStatusBadge group customClass={""} data={topisInterested} />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard cardTitle={"Single Badge"}>
            <AKStatusBadge name="Animation" color="green" />
          </AKBasicCard>
        </Col>
      </Row>
    </div>
  );
};

export default AKBadgePage;
