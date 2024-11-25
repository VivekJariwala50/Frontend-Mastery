import { useState } from "react";
import { AKBasicCard, AKModal, AKHead } from "@components";
import AKButton from "@components/AKButton";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import { Col, Row } from "antd";
const AKModalPage = () => {
  // custom modal start

  const [isCustomModalOpen, setCustomModalOpen] = useState(false);
  const showCustomModal = () => {
    setCustomModalOpen(true);
  };

  const handleCustomModalCancel = () => {
    setCustomModalOpen(false);
  };

  // custom modal end

  // custom width start
  const [isCustomWidthModalOpen, setCustomWidthModal] = useState(false);
  const showCustomWidthModal = () => {
    setCustomWidthModal(true);
  };

  const handleCustomWidthModalCancel = () => {
    setCustomWidthModal(false);
  };
  // custom width end

  // center modal start
  const [isCenterModalOpen, setCenterModal] = useState(false);
  const showCenterModal = () => {
    setCenterModal(true);
  };

  const handleCenterModalCancel = () => {
    setCenterModal(false);
  };
  // center modal end

  // custom close icon modal start
  const [isCustomCloseIconModalOpen, setCustomCloseIconModal] = useState(false);
  const showCustomCloseIconModal = () => {
    setCustomCloseIconModal(true);
  };

  const handleCustomCloseIconModalCancel = () => {
    setCustomCloseIconModal(false);
  };
  // custom close icon modal end

  return (
    <>
      <AKHead title="Modal" />
      <h2 className="title-color mb-4">Basic modal:</h2>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} md={12} lg={8}>
          <AKBasicCard cardTitle={"Basic Modal:"}>
            <AKButton
              customClass="mr-2"
              type="fill"
              handleClick={showCustomModal}
            >
              basic modal
            </AKButton>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <AKBasicCard cardTitle={"Custom Width Modal:"}>
            <AKButton
              customClass="mr-2"
              type="fill"
              handleClick={showCustomWidthModal}
            >
              custom width modal
            </AKButton>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <AKBasicCard cardTitle={"Center Modal:"}>
            <AKButton
              customClass="mr-2"
              type="fill"
              handleClick={showCenterModal}
            >
              center modal
            </AKButton>
          </AKBasicCard>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <AKBasicCard cardTitle={"Center Close Icon Modal:"}>
            <AKButton
              customClass="mr-2"
              type="fill"
              handleClick={showCustomCloseIconModal}
            >
              Custom Close Icon Modal
            </AKButton>
          </AKBasicCard>
        </Col>
      </Row>
      <AKModal
        isModalOpen={isCustomModalOpen}
        title="Basic Modal"
        handleCancel={handleCustomModalCancel}
        customFooter={[
          <AKButton
            key={"Basic Modal-one"}
            type="fill"
            size="medium"
            handleClick={handleCustomModalCancel}
          >
            close
          </AKButton>,
        ]}
      >
        <AKInput
          id={"yourName"}
          label={"Enter Your Name:"}
          placeholder={"Enter your name"}
          AKInputClassname="mb-5"
        />
        <AKInput
          id={"emailAddress"}
          label={"Enter your emaill:"}
          placeholder={"Enter your email"}
          AKInputClassname="mb-5"
        />
      </AKModal>

      <AKModal
        closeIcon={"X"}
        isModalOpen={isCustomWidthModalOpen}
        title="Custom Width Modal"
        handleCancel={handleCustomWidthModalCancel}
        width={800}
        customFooter={[
          <AKButton
            type="fill"
            key={"Custom Width Modal one"}
            size="medium"
            handleClick={handleCustomWidthModalCancel}
          >
            close
          </AKButton>,
        ]}
      >
        <p className="title-color h4">
          With temperatures dipping well below freezing, the local weather
          service has issued a cold weather alert for our area. During periods
          of extreme cold, it is crucial to take proper precautions to avoid
          health risks like hypothermia and frostbite. Venturing outside in
          frigid conditions can quickly lead to exposed skin and extremities
          becoming numb and damaged. Dress in layers and cover as much exposed
          skin as possible. Seek shelter indoors as much as you can. If you must
          go outside, wear insulated and waterproof boots, gloves, hats,
          scarves, and coats. Beware of icy sidewalks and roads which can lead
          to dangerous slips and falls. Check on elderly neighbors or relatives
          who may need assistance. Prolonged time outdoors in freezing
          temperatures can also overwork the heart and lead to chest pain,
          shortness of breath, and heart attacks.
        </p>
      </AKModal>

      <AKModal
        closeIcon={"X"}
        centered
        isModalOpen={isCenterModalOpen}
        title="Custom Close Icon Modal"
        handleCancel={handleCenterModalCancel}
        customFooter={[
          <AKButton
            key={"Custom Close Icon Modal"}
            type="fill"
            size="medium"
            handleClick={handleCenterModalCancel}
          >
            close
          </AKButton>,
        ]}
      >
        <p className="title-color h4">
          With temperatures dipping well below freezing, the local weather
          service has issued a cold weather alert for our area. During periods
          of extreme cold, it is crucial to take proper precautions to avoid
          health risks like hypothermia and frostbite. Venturing outside in
          frigid conditions can quickly lead to exposed skin and extremities
          becoming numb and damaged. Dress in layers and cover as much exposed
          skin as possible. Seek shelter indoors as much as you can. If you must
          go outside, wear insulated and waterproof boots, gloves, hats,
          scarves, and coats. Beware of icy sidewalks and roads which can lead
          to dangerous slips and falls. Check on elderly neighbors or relatives
          who may need assistance. Prolonged time outdoors in freezing
          temperatures can also overwork the heart and lead to chest pain,
          shortness of breath, and heart attacks.
        </p>
      </AKModal>

      <AKModal
        closeIcon={"X"}
        isModalOpen={isCustomCloseIconModalOpen}
        title="Custom Close Icon Modal"
        handleCancel={handleCustomCloseIconModalCancel}
        customFooter={[
          <AKButton
            key={"Custom Close Icon Modal two"}
            type="fill"
            size="medium"
            handleClick={handleCustomCloseIconModalCancel}
          >
            close
          </AKButton>,
        ]}
      >
        <p className="title-color h4">
          With temperatures dipping well below freezing, the local weather
          service has issued a cold weather alert for our area. During periods
          of extreme cold, it is crucial to take proper precautions to avoid
          health risks like hypothermia and frostbite. Venturing outside in
          frigid conditions can quickly lead to exposed skin and extremities
          becoming numb and damaged. Dress in layers and cover as much exposed
          skin as possible. Seek shelter indoors as much as you can. If you must
          go outside, wear insulated and waterproof boots, gloves, hats,
        </p>
      </AKModal>

      <AKModal
        closeIcon={"X"}
        centered
        isModalOpen={isCenterModalOpen}
        title="Custom Close Icon Modal"
        handleCancel={handleCenterModalCancel}
        customFooter={[
          <AKButton
            key={"Custom Close Icon Modal"}
            type="fill"
            size="medium"
            handleClick={handleCenterModalCancel}
          >
            close
          </AKButton>,
        ]}
      >
        <p className="title-color h4">
          With temperatures dipping well below freezing, the local weather
          service has issued a cold weather alert for our area. During periods
          of extreme cold, it is crucial to take proper precautions to avoid
          health risks like hypothermia and frostbite. Venturing outside in
          frigid conditions can quickly lead to exposed skin and extremities
          becoming numb and damaged. Dress in layers and cover as much exposed
          skin as possible. Seek shelter indoors as much as you can. If you must
          go outside, wear insulated and waterproof boots, gloves, hats,
          scarves, and coats. Beware of icy sidewalks and roads which can lead
          to dangerous slips and falls. Check on elderly neighbors or relatives
          who may need assistance. Prolonged time outdoors in freezing
          temperatures can also overwork the heart and lead to chest pain,
          shortness of breath, and heart attacks.
        </p>
      </AKModal>

      <AKModal
        closeIcon={"X"}
        isModalOpen={isCustomCloseIconModalOpen}
        title="Custom Close Icon Modal"
        handleCancel={handleCustomCloseIconModalCancel}
        customFooter={[
          <AKButton
            key={"Custom Close Icon Modal two"}
            type="fill"
            size="medium"
            handleClick={handleCustomCloseIconModalCancel}
          >
            close
          </AKButton>,
        ]}
      >
        <p className="title-color h4">
          With temperatures dipping well below freezing, the local weather
          service has issued a cold weather alert for our area. During periods
          of extreme cold, it is crucial to take proper precautions to avoid
          health risks like hypothermia and frostbite. Venturing outside in
          frigid conditions can quickly lead to exposed skin and extremities
          becoming numb and damaged. Dress in layers and cover as much exposed
          skin as possible. Seek shelter indoors as much as you can. If you must
          go outside, wear insulated and waterproof boots, gloves, hats,
          scarves, and coats. Beware of icy sidewalks and roads which can lead
          to dangerous slips and falls. Check on elderly neighbors or relatives
          who may need assistance. Prolonged time outdoors in freezing
          temperatures can also overwork the heart and lead to chest pain,
          shortness of breath, and heart attacks.
        </p>
      </AKModal>
    </>
  );
};
export default AKModalPage;
