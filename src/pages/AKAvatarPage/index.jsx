import { Col, Row } from "antd";
import { AKBasicCard, AKHead } from "@components";
import AKAvatar from "@components/AKUIKits/AKAvatar";
import { singleUserData, avatarUserData } from "@const";

const AKAvatarPage = () => {
  return (
    <div>
      <AKHead title="Avatar"></AKHead>
      <h2 className="mb-5 title-color">Avatar</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} md={12}>
          <AKBasicCard cardTitle="Basic Avatar">
            <AKAvatar data={singleUserData} />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard cardTitle="Square Avatar">
            <AKAvatar data={singleUserData} shape="square" />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard cardTitle="Avatar Group">
            <AKAvatar data={avatarUserData} />
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12}>
          <AKBasicCard cardTitle="Square Avatar Group">
            <AKAvatar shape="square" data={avatarUserData} />
          </AKBasicCard>
        </Col>
      </Row>
    </div>
  );
};

export default AKAvatarPage;
