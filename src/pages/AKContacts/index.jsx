import { Col, Row } from "antd";
import { AKBasicCard, AKAvatarCard, AKHead } from "@components";
import { contactsList } from "@const";

const AKContacts = () => {
  return (
    <>
      <AKHead title="Contacts"></AKHead>
      <AKBasicCard cardTitle="contacts" customClass="h-full">
        <Row
          gutter={[
            { xs: 15, md: 20 },
            { xs: 15, md: 20 },
          ]}
        >
          {contactsList &&
            contactsList.map((item, index) => {
              return (
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={8}
                  xl={6}
                  key={`${index}${item.title}`}
                >
                  <AKAvatarCard
                    img={item.img}
                    title={item.title}
                    subtitleOne={item.subtitleOne}
                    subtitleTwo={item.subtitleTwo}
                  />
                </Col>
              );
            })}
        </Row>
      </AKBasicCard>
    </>
  );
};

export default AKContacts;
