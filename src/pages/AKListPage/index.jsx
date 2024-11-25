import { Col, Row } from "antd";
import { AKBasicCard, AKBasicList, AKSimpleList, AKHead } from "@components";
import AKTags from "@components/AKUIKits/AKTagPills/AKTags";
import styles from "./AKListPage.module.css";

const AKListPage = () => {
  return (
    <>
      <AKHead title="List"></AKHead>
      <h3 className="mb-5 title-color">List Types:</h3>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} xl={12}>
          <AKBasicCard
            customClass={styles.card}
            cardTitle={"Simple list Default Size"}
          >
            <AKSimpleList
              customClass="mb-1"
              data={[
                "Racing car sprays burning fuel into crowd.",
                "Japanese princess to wed commoner.",
                "Australian walks 100km after outback crash.",
                "Man charged over missing wedding girl.",
                "Los Angeles battles huge wildfires.",
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            customClass={styles.card}
            cardTitle={"Simple list Small Size"}
          >
            <AKSimpleList
              customClass="mb-1"
              size="small"
              data={[
                "Racing car sprays burning fuel into crowd.",
                "Japanese princess to wed commoner.",
                "Australian walks 100km after outback crash.",
                "Man charged over missing wedding girl.",
                "Los Angeles battles huge wildfires.",
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            customClass={styles.card}
            cardTitle={"Simple list Large Size"}
          >
            <AKSimpleList
              customClass="mb-1"
              size="large"
              data={[
                "Racing car sprays burning fuel into crowd.",
                "Japanese princess to wed commoner.",
                "Australian walks 100km after outback crash.",
                "Man charged over missing wedding girl.",
                "Los Angeles battles huge wildfires.",
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            customClass={styles.card}
            cardTitle={"Simple list with tag"}
          >
            <AKSimpleList
              customClass="mb-1"
              typographyText={<AKTags color="green" title="green" />}
              data={[
                "Racing car sprays burning fuel into crowd.",
                "Japanese princess to wed commoner.",
                "Australian walks 100km after outback crash.",
                "Man charged over missing wedding girl.",
                "Los Angeles battles huge wildfires.",
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            customClass={styles.card}
            cardTitle={"Simple list with tag"}
          >
            <AKSimpleList
              customClass="mb-1"
              typographyText={"number"}
              data={[
                "Racing car sprays burning fuel into crowd.",
                "Japanese princess to wed commoner.",
                "Australian walks 100km after outback crash.",
                "Man charged over missing wedding girl.",
                "Los Angeles battles huge wildfires.",
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            customClass={styles.card}
            cardTitle={"Simple list with avatar"}
          >
            <AKBasicList
              data={[
                {
                  title: "Ant Design Title 1",
                  description:
                    "Ant Design, a design language for background applications, is refined by Ant UED Team",
                  avatar: "https://i.pravatar.cc/300",
                },
                {
                  title: "Ant Design Title 2",
                  description:
                    "Ant Design, a design language for background applications, is refined by Ant UED Team",
                  avatar: "https://i.pravatar.cc/300",
                },
                {
                  title: "Ant Design Title 3",
                  description:
                    "Ant Design, a design language for background applications, is refined by Ant UED Team",
                  avatar: "https://i.pravatar.cc/300",
                },
                {
                  title: "Ant Design Title 4",
                  description:
                    "Ant Design, a design language for background applications, is refined by Ant UED Team",
                  avatar: "https://i.pravatar.cc/300",
                },
              ]}
            />
          </AKBasicCard>
        </Col>
      </Row>
    </>
  );
};

export default AKListPage;
