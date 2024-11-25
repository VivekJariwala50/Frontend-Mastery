import { Col, Row } from "antd";
import { AKSelect, AKBasicCard, AKHead } from "@components";
import AKTags from "@components/AKUIKits/AKTagPills/AKTags";

const AKSelectPage = () => {
  const options = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "Yiminghe",
      label: "yiminghe",
    },
  ];
  const LabelTypeOptions = [
    {
      value: "jack",
      label: (
        <>
          <div className="flex items-center w-100">
            Jack
            <AKTags
              color="red"
              title="Sample"
              customClass="fw-400 ml-auto"
              pills={true}
            />
          </div>
        </>
      ),
    },
    {
      value: "lucy",
      label: (
        <>
          <div className="flex items-center w-100">
            Lucy
            <AKTags
              color="green"
              title="Sample"
              customClass="fw-400 ml-auto"
              pills={true}
            />
          </div>
        </>
      ),
    },
    {
      value: "Yiminghe",
      label: (
        <>
          <div className="flex items-center w-100">
            yiminghe
            <AKTags
              color="purple"
              title="Sample"
              customClass="fw-400 ml-auto"
              pills={true}
            />
          </div>
        </>
      ),
    },
  ];
  return (
    <div>
      <AKHead title="Select"></AKHead>
      <h2 className="title-color mb-5 ">Basic select types:</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} lg={12}>
          <AKBasicCard cardTitle={"basic select:"}>
            <AKSelect options={options} defaultValue="jack" />
          </AKBasicCard>
        </Col>

        <Col xs={24} lg={12}>
          <AKBasicCard cardTitle={"select with placeholder:"}>
            <AKSelect options={options} placeholder="Placeholder" />
          </AKBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <AKBasicCard cardTitle={"select with custom drop down icon:"}>
            <AKSelect
              options={options}
              placeholder="Placeholder"
              suffixIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="currentColor"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              }
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <AKBasicCard cardTitle={"Label type select:"}>
            <AKSelect
              options={LabelTypeOptions}
              variant="outlined"
              placeholder="Label type select"
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} lg={12}>
          <AKBasicCard cardTitle={"Default  Open:"}>
            <AKSelect options={options} defaultValue="jack" isOpen={true} />
          </AKBasicCard>
        </Col>
      </Row>
    </div>
  );
};

export default AKSelectPage;
