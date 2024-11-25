import { Col, Row } from "antd";
import { AKAvatarCard, AKHead, AKBasicCard, AKSimpleCard } from "@components";
import AKButton from "@components/AKButton";
import styles from "./AKBasicCardPage.module.css";
import { AvatarOne } from "@const";
import { AKClsx } from "@utils";

const AKBasicCardPage = () => {
  return (
    <div>
      <AKHead title="BasicCard"></AKHead>
      <h2 className="my-5 title-color">Cards Basic</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
        className="mb-5"
      >
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard cardTitle="Basic Card" customClass={styles.card}>
            <p className="text-color h4">
              This is some text within a card body. Jelly lemon drops tiramisu
              chocolate cake cotton candy soufflé oat cake sweet roll. Sugar
              plum marzipan dragée topping cheesecake chocolate bar. Danish
              muffin icing donut.
            </p>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKSimpleCard
            title="Text Left"
            titlePosition="left"
            customClass={styles.card}
          >
            <p className="h3 small mb-5">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <AKButton
              customClass="mr-3"
              type="fill"
              handleChange={() => console.log("handleChange")}
              size="large"
            >
              Go Somewhere
            </AKButton>
          </AKSimpleCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKSimpleCard
            title="Text Center"
            titlePosition="center"
            customClass={styles.card}
          >
            <p className="h3 small mb-5">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <AKButton
              customClass="mr-3"
              type="fill"
              handleChange={() => console.log("handleChange")}
              size="large"
            >
              Go Somewhere
            </AKButton>
          </AKSimpleCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKSimpleCard
            title="Text Right"
            titlePosition="right"
            customClass={styles.card}
          >
            <p className="h3 small mb-5">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <AKButton
              customClass="mr-3"
              type="fill"
              handleChange={() => console.log("handleChange")}
              size="large"
            >
              Go Somewhere
            </AKButton>
          </AKSimpleCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKSimpleCard
            title="Card With No-Fill Button"
            titlePosition="left"
            customClass={styles.card}
          >
            <p className="h3 small mb-5">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <AKButton
              customClass="mr-3"
              type="no-fill"
              handleChange={() => console.log("handleChange")}
              size="large"
            >
              Go Somewhere
            </AKButton>
          </AKSimpleCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKSimpleCard
            title="Card With Radius Button"
            titlePosition="left"
            customClass={styles.card}
          >
            <p className="h3 small mb-5">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <AKButton
              customClass="mr-3"
              type="no-fill"
              handleChange={() => console.log("handleChange")}
              size="large"
              borderSize="md"
            >
              Go Somewhere
            </AKButton>
          </AKSimpleCard>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <AKBasicCard
            cardTitle="Avatar card"
            customClass={AKClsx(styles.card)}
          >
            <AKAvatarCard
              img={AvatarOne}
              title="George Johnson"
              subtitleOne={
                <a className="custom-link" href="mailto:someone@example.com">
                  georgejohnson123@gmail.com
                </a>
              }
              subtitleTwo={<a href="tel:+4733378901">+47 333 78 901</a>}
            />
          </AKBasicCard>
        </Col>
      </Row>
    </div>
  );
};

export default AKBasicCardPage;
