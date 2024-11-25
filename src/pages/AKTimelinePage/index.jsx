import { AKBasicCard, AKHead } from "@components";
import { Col, Row } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import AKTimeline from "@components/AKBonusUI/AKTimeline";
const AKTimelinePage = () => {
  return (
    <>
      <AKHead title="Timeline"></AKHead>
      <h2 className="mb-5 title-color">Basic Timeline Types</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col sm={12}>
          <AKBasicCard cardTitle="Basic Timeline">
            <AKTimeline
              items={[
                {
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                },
                {
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                },
                {
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                },
                {
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                },
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col sm={12}>
          <AKBasicCard cardTitle="Custom Color Timeline">
            <AKTimeline
              items={[
                {
                  color: "green",
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                },
                {
                  color: "red",
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                },
                {
                  color: "yellow",
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                },
                {
                  color: "pink",
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                },
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col sm={12}>
          <AKBasicCard cardTitle="Custom Icons Timeline">
            <AKTimeline
              items={[
                {
                  color: "green",
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                  dot: <SmileOutlined />,
                },
                {
                  color: "red",
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                  dot: <SmileOutlined />,
                },
                {
                  color: "yellow",
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                  dot: <SmileOutlined />,
                },
                {
                  color: "pink",
                  children:
                    "The Internet of Things (IoT) refers to the growing network of everyday objects and devices that are embedded with sensors and internet connectivity.",
                  dot: <SmileOutlined />,
                },
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col sm={12}>
          <AKBasicCard cardTitle="Custom Icons Timeline">
            <AKTimeline
              items={[
                {
                  color: "green",
                  children: (
                    <>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                    </>
                  ),
                  dot: <SmileOutlined />,
                },
                {
                  color: "red",
                  children: (
                    <>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                    </>
                  ),
                  dot: <SmileOutlined />,
                },
                {
                  color: "yellow",
                  children: (
                    <>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                    </>
                  ),
                  dot: <SmileOutlined />,
                },
                {
                  color: "pink",
                  children: (
                    <>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                      <div>
                        The Internet of Things (IoT) refers to the growing
                        network of everyday objects and devices that are
                        embedded with sensors and internet connectivity.
                      </div>
                    </>
                  ),
                  dot: <SmileOutlined />,
                },
              ]}
            />
          </AKBasicCard>
        </Col>
      </Row>
    </>
  );
};
export default AKTimelinePage;
