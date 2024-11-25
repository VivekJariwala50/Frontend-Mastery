import { Col, Row } from "antd";
import { AKBasicCard, AKBasicList, AKHead } from "@components";
import {
  AvatarEight,
  AvatarFive,
  AvatarFour,
  AvatarSix,
  AvatarTen,
  AvatarThree,
  AvatarTwo,
} from "@const";
import { AKClsx } from "@utils";
import styles from "./AKNotifications.module.css";
const AKNotifications = () => {
  return (
    <>
      <AKHead title="Notifications" />
      <AKBasicCard cardTitle="Notifications" customClass="h-full">
        <Row className="justify-center">
          <Col xs={24} md={20} lg={16}>
            <AKBasicList
              customClass={AKClsx(styles.list)}
              data={[
                {
                  title: "George Johnson",
                  description:
                    "Admin And Other Team Members Accepts Your Work Request",
                  avatar: AvatarThree,
                },
                {
                  title: "Isabella Davies",
                  description: "Temporary Data  Will Be Deleted",
                  avatar: AvatarTwo,
                },
                {
                  title: "William Wilson",
                  description: "Changed The 4 Digit Password 1hr Ago",
                  avatar: AvatarTen,
                },
                {
                  title: "Sophie Robinson",
                  description:
                    "Social Accounts Are At Risk Check Your Login Details ",
                  avatar: AvatarFour,
                },
                {
                  title: "Thomas Clarke",
                  description:
                    "Project Assigned By The Manager All Files And Folders Were Included",
                  avatar: AvatarEight,
                },
                {
                  title: "George Johnson",
                  description:
                    "Admin And Other Team Members Accepts Your Work Request",
                  avatar: AvatarFive,
                },
                {
                  title: "Isabella Davies",
                  description: "Temporary Data  Will Be Deleted",
                  avatar: AvatarSix,
                },
              ]}
            />
            ,
          </Col>
        </Row>
      </AKBasicCard>
    </>
  );
};

export default AKNotifications;
