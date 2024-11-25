import { AKBasicCard, AKBasicList, AKHead } from "@components";
import { AvatarFour, AvatarOne, AvatarThree, AvatarTwo } from "@const";
import { AKClsx } from "@utils";
import { Col, Row } from "antd";
import styles from "./AKUserTimeline.module.css";
import AKTimeline from "@components/AKBonusUI/AKTimeline";

const AKUserTimeline = () => {
  return (
    <>
      <AKHead title="UserTimeline"></AKHead>
      <AKBasicCard cardTitle="Timeline">
        <Row className="justify-center">
          <Col xs={24} md={20} lg={16}>
            <AKTimeline
              items={[
                {
                  children: (
                    <AKBasicList
                      customClass={AKClsx("pa-4 bg-parrot", styles.list)}
                      data={[
                        {
                          title: "George Johnson",
                          description:
                            "Admin And Other Team Members Accepts Your Work Request",
                          avatar: AvatarThree,
                        },
                      ]}
                    />
                  ),
                },
                {
                  children: (
                    <AKBasicList
                      customClass={AKClsx("pa-4 bg-parrot", styles.list)}
                      data={[
                        {
                          title: "Isabella Davies",
                          description: "Temporary Data  Will Be Deleted",
                          avatar: AvatarTwo,
                        },
                      ]}
                    />
                  ),
                },
                {
                  children: (
                    <AKBasicList
                      customClass={AKClsx("pa-4 bg-parrot", styles.list)}
                      data={[
                        {
                          title: "William Wilson",
                          description: "Changed The 4 Digit Password 1hr Ago",
                          avatar: AvatarOne,
                        },
                      ]}
                    />
                  ),
                },
                {
                  children: (
                    <AKBasicList
                      customClass={AKClsx("pa-4 bg-parrot", styles.list)}
                      data={[
                        {
                          title: "Sophie Robinson",
                          description:
                            "Social Accounts Are At Risk Check Your Login Details ",
                          avatar: AvatarFour,
                        },
                      ]}
                    />
                  ),
                },
                {
                  children: (
                    <AKBasicList
                      customClass={AKClsx("pa-4 bg-parrot", styles.list)}
                      data={[
                        {
                          title: "Thomas Clarke",
                          description:
                            "Project Assigned By The Manager All Files And Folders Were Included",
                          avatar: AvatarThree,
                        },
                      ]}
                    />
                  ),
                },
                {
                  children: (
                    <AKBasicList
                      customClass={AKClsx("pa-4 bg-parrot", styles.list)}
                      data={[
                        {
                          title: "George Johnson",
                          description:
                            "Admin And Other Team Members Accepts Your Work Request",
                          avatar: AvatarTwo,
                        },
                      ]}
                    />
                  ),
                },
              ]}
            />
          </Col>
        </Row>
      </AKBasicCard>
    </>
  );
};

export default AKUserTimeline;
