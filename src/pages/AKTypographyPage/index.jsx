import { Col, Row } from "antd";
import { AKBasicCard, AKHead } from "@components";
const AKTypographyPage = () => {
  return (
    <div>
      <AKHead title="Typography"></AKHead>
      <h2 className="title-color mb-5">Title in different level:</h2>
      <Row>
        <Col sm={24}>
          <AKBasicCard>
            <h1 className="title-color mb-5">h1. Annakoot admin design</h1>
            <h2 className="title-color mb-5">h2. Annakoot admin design</h2>
            <h2 className="title-color small mb-5">
              h2.small Annakoot admin design
            </h2>
            <h3 className="title-color mb-5">h3. Annakoot admin design</h3>
            <h3 className="title-color small mb-5">
              h3.small Annakoot admin design
            </h3>
            <h4 className="title-color mb-5">h4. Annakoot admin design</h4>
            <h5 className="title-color mb-5">h5. Annakoot admin design</h5>
            <h6 className="title-color mb-5">h6. Annakoot admin design</h6>
            <p className="title-color big mb-5">p.big Annakoot admin design</p>
            <p className="title-color mb-5">p. Annakoot admin design</p>
            <p className="title-color small mb-5">
              p.small Annakoot admin design
            </p>
          </AKBasicCard>
        </Col>
      </Row>
      <h2 className="title-color mb-5 pt-5 mt-5">Basic theme color:</h2>
      <Row>
        <Col xs={24}>
          <AKBasicCard>
            <h3 className="text-white mb-5">
              Annakoot admin design{" "}
              <span className="text-green h3">(white)</span>
            </h3>
            <h3 className="text-black mb-5">
              Annakoot admin design{" "}
              <span className="text-green h3">(black)</span>
            </h3>
            <h3 className="text-color mb-5">
              Annakoot admin design{" "}
              <span className="text-green h3">(text)</span>
            </h3>
            <h3 className="text-parrot mb-5">
              Annakoot admin design{" "}
              <span className="text-green h3">(parrot)</span>
            </h3>
            <h3 className="text-owl mb-5 bg-white">
              Annakoot admin design <span className="text-green h3">(owl)</span>
            </h3>
            <h3 className="text-kingfisher mb-5">
              Annakoot admin design{" "}
              <span className="text-green h3">(kingfisher)</span>
            </h3>
            <h3 className="text-pelican mb-5">
              Annakoot admin design{" "}
              <span className="text-green h3">(pelican)</span>
            </h3>
            <h3 className="text-red mb-5">
              Annakoot admin design <span className="text-green h3">(red)</span>
            </h3>
          </AKBasicCard>
        </Col>
      </Row>
    </div>
  );
};

export default AKTypographyPage;
