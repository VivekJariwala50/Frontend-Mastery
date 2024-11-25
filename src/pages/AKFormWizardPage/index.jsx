import { useState } from "react";
import { AKFormWizard, AKHead } from "@components";
import AKButton from "@components/AKButton";
import { Col, message, Row } from "antd";
// steps content start
const steps = [
  {
    title: "First",
    content: <p className="title-color">First-content</p>,
  },
  {
    title: "Second",
    content: <p className="title-color">Second-content</p>,
  },
  {
    title: "Last",
    content: <p className="title-color">Last-content</p>,
  },
];
// steps content end
const AKFormWizardPage = () => {
  // step button start
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  // step button end

  // step item start
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  // step item end
  // step onchange start
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  // step onchange end
  return (
    <>
      <AKHead title="Form Wizard" />
      <Row>
        <Col xs={24} className="mb-6">
          {/* basic steps */}
          <AKFormWizard
            cardTitle="Basic steps:"
            stepItems={items}
            stepsCurrent={current}
            stepsData={steps[current].content}
            stepsButton={
              <>
                {current < steps.length - 1 && (
                  <AKButton
                    customClass="mr-4"
                    type="fill"
                    handleClick={() => next()}
                    size="small"
                  >
                    Next
                  </AKButton>
                )}
                {current === steps.length - 1 && (
                  <AKButton
                    customClass="mr-4"
                    type="fill"
                    handleClick={() => message.success("Processing complete!")}
                    size="small"
                  >
                    Done
                  </AKButton>
                )}
                {current > 0 && (
                  <AKButton
                    customClass="mr-4"
                    type="no-fill"
                    handleClick={() => prev()}
                    size="small"
                  >
                    Previous
                  </AKButton>
                )}
              </>
            }
          />
        </Col>
        <Col xs={24} className="mb-6">
          {/* basic steps */}
          <AKFormWizard
            cardTitle="Small size steps:"
            stepSize="small"
            stepItems={items}
            stepsCurrent={current}
            stepsData={steps[current].content}
            stepsButton={
              <>
                {current < steps.length - 1 && (
                  <AKButton
                    customClass="mr-4"
                    type="fill"
                    handleClick={() => next()}
                    size="small"
                  >
                    Next
                  </AKButton>
                )}
                {current === steps.length - 1 && (
                  <AKButton
                    customClass="mr-4"
                    type="fill"
                    handleClick={() => message.success("Processing complete!")}
                    size="small"
                  >
                    Done
                  </AKButton>
                )}
                {current > 0 && (
                  <AKButton
                    customClass="mr-4"
                    type="no-fill"
                    handleClick={() => prev()}
                    size="small"
                  >
                    Previous
                  </AKButton>
                )}
              </>
            }
          />
        </Col>
        <Col xs={24} className="mb-6">
          {/* basic steps */}
          <AKFormWizard
            cardTitle="Vertical steps:"
            stepVertical="vertical"
            stepItems={items}
            stepsCurrent={current}
            stepsData={steps[current].content}
            stepsButton={
              <>
                {current < steps.length - 1 && (
                  <AKButton
                    customClass="mr-4"
                    type="fill"
                    handleClick={() => next()}
                    size="small"
                  >
                    Next
                  </AKButton>
                )}
                {current === steps.length - 1 && (
                  <AKButton
                    customClass="mr-4"
                    type="fill"
                    handleClick={() => message.success("Processing complete!")}
                    size="small"
                  >
                    Done
                  </AKButton>
                )}
                {current > 0 && (
                  <AKButton
                    customClass="mr-4"
                    type="no-fill"
                    handleClick={() => prev()}
                    size="small"
                  >
                    Previous
                  </AKButton>
                )}
              </>
            }
          />
        </Col>
        <Col xs={24} className="mb-6">
          {/* basic steps */}
          <AKFormWizard
            cardTitle="Dot style steps:"
            stepProgressDot={true}
            stepItems={items}
            stepsCurrent={current}
            stepsData={steps[current].content}
            stepsButton={
              <>
                {current < steps.length - 1 && (
                  <AKButton
                    customClass="mr-4"
                    type="fill"
                    handleClick={() => next()}
                    size="small"
                  >
                    Next
                  </AKButton>
                )}
                {current === steps.length - 1 && (
                  <AKButton
                    customClass="mr-4"
                    type="fill"
                    handleClick={() => message.success("Processing complete!")}
                    size="small"
                  >
                    Done
                  </AKButton>
                )}
                {current > 0 && (
                  <AKButton
                    customClass="mr-4"
                    type="no-fill"
                    handleClick={() => prev()}
                    size="small"
                  >
                    Previous
                  </AKButton>
                )}
              </>
            }
          />
        </Col>
        <Col xs={24} className="mb-6">
          {/* basic steps */}
          <AKFormWizard
            cardTitle="Clickable steps:"
            stepOnChange={onChange}
            stepItems={items}
            stepsCurrent={current}
            stepsData={steps[current].content}
            stepsButton={
              <>
                {current < steps.length - 1 && (
                  <AKButton
                    customClass="mr-4"
                    type="fill"
                    handleClick={() => next()}
                    size="small"
                  >
                    Next
                  </AKButton>
                )}
                {current === steps.length - 1 && (
                  <AKButton
                    customClass="mr-4"
                    type="fill"
                    handleClick={() => message.success("Processing complete!")}
                    size="small"
                  >
                    Done
                  </AKButton>
                )}
                {current > 0 && (
                  <AKButton
                    customClass="mr-4"
                    type="no-fill"
                    handleClick={() => prev()}
                    size="small"
                  >
                    Previous
                  </AKButton>
                )}
              </>
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default AKFormWizardPage;
