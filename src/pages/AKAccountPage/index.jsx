import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Row, Col, Image, Upload } from "antd";
import { AKBasicCard, AKSelect, AKRadio, AKHead } from "@components";
import AKButton from "@components/AKButton";
import { AKClsx } from "@utils";
import {
  countryOption,
  languageOption,
  timeZonOption,
  currencyOption,
  confirmDeleteAccModeItems,
} from "@const";
import styles from "./AKAccountPage.module.css";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import AKTags from "@components/AKUIKits/AKTagPills/AKTags";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const AKAccountPage = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
      className="text-color"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <>
      <AKHead title="Account"></AKHead>
      <section className={AKClsx(styles.myProfileSection)}>
        <Row
          gutter={[
            { xs: 10, sm: 15, md: 20 },
            { xs: 10, sm: 15, md: 20 },
          ]}
        >
          <Col xs={24} xl={6}>
            <AKBasicCard
              cardTitle=""
              header={false}
              customClass={`${styles.profileCard} h-full`}
              customCardBodyClass={AKClsx(styles.accountProfileCard, "pa-0")}
            >
              <h3 className="title-color mb-5 text-center">
                Profile pic change
              </h3>
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              {previewImage && (
                <Image
                  wrapperStyle={{
                    display: "none",
                  }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) =>
                      !visible && setPreviewImage(""),
                  }}
                  src={previewImage}
                />
              )}
              <AKButton
                customClass="mt-4 flex ma-auto"
                type="fill"
                handleClick={() => console.log("handleClick")}
                size="small"
              >
                Save profile picture
              </AKButton>
            </AKBasicCard>
          </Col>
          <Col xs={24} xl={18}>
            <AKBasicCard
              cardTitle=""
              header={false}
              customClass={`${styles.profileCard} h-full`}
              customCardBodyClass={AKClsx(styles.accountProfileCard, "pa-0")}
            >
              <h3 className="title-color mb-4">Profile Details</h3>
              <Row gutter={[14, 14]}>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKInput
                    id={"firstName"}
                    type="text"
                    label={"First Name:"}
                    placeholder={"Enter your name"}
                  />
                </Col>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKInput
                    id={"lastName"}
                    type="text"
                    label={"Last Name:"}
                    placeholder={"Enter your last name"}
                  />
                </Col>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKInput
                    id={"emailAddress"}
                    type="email"
                    label={"E-mail:"}
                    placeholder={"Enter your email"}
                  />
                </Col>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKInput
                    id={"passwordField"}
                    type="password"
                    label={"Password:"}
                    placeholder={"Enter your password"}
                  />
                </Col>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKInput
                    id={"phoneNumber"}
                    type="number"
                    label={"Phone Number:"}
                    placeholder={"Enter your phone number"}
                  />
                </Col>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKInput
                    id={"addressArea"}
                    type="text"
                    label={"Address:"}
                    placeholder={"Enter your address"}
                  />
                </Col>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKInput
                    id={"cityArea"}
                    type="text"
                    label={"City:"}
                    placeholder={"Enter your city"}
                  />
                </Col>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKInput
                    id={"stateArea"}
                    type="text"
                    label={"State:"}
                    placeholder={"Enter your state"}
                  />
                </Col>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKInput
                    id={"zipCode"}
                    type="number"
                    label={"Zip Code:"}
                    placeholder={"Enter your zip code"}
                  />
                </Col>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKSelect
                    label={"Country"}
                    options={countryOption}
                    defaultValue="India"
                  />
                </Col>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKSelect
                    label={"Language"}
                    options={languageOption}
                    defaultValue="English"
                  />
                </Col>
                <Col xs={24} md={12} lg={8} className="mb-4">
                  <AKSelect
                    label={"Timezone"}
                    options={timeZonOption}
                    defaultValue="America/Anguilla"
                  />
                </Col>
                <Col xs={24} md={12} xl={8} className="mb-4">
                  <AKSelect
                    label={"Currency"}
                    options={currencyOption}
                    defaultValue="USD"
                  />
                </Col>
                <Col xs={24}>
                  <AKButton
                    customClass=""
                    type="fill"
                    handleClick={() => console.log("handleClick")}
                    size="small"
                  >
                    Save profile details
                  </AKButton>
                </Col>
              </Row>
            </AKBasicCard>
          </Col>
          <Col xs={24}>
            <AKBasicCard
              cardTitle=""
              header={false}
              customClass={`${styles.profileCard} h-full`}
              customCardBodyClass={AKClsx(styles.accountProfileCard, "pa-0")}
            >
              <h3 className="title-color mb-5">Delete Account</h3>
              <AKTags
                color="orange"
                title={
                  <>
                    <h3 className="mb-2">
                      Are you sure you want to delete your account?
                    </h3>
                    <p className="mb-0">
                      Once you delete your account, there is no going back.
                      Please be certain.
                    </p>
                  </>
                }
                customClass="fw-400 w-full  mb-5"
              />
              <div className="w-full mb-4">
                <h3 className="mb-3 text-color">
                  I confirm my account deactivation
                </h3>
                <AKRadio
                  radioClass="custom-class"
                  defaultValue={confirmDeleteAccModeItems[1].name}
                  direction="vertical"
                  radioItems={confirmDeleteAccModeItems}
                />
              </div>
              <AKButton
                customClass=""
                type="fill"
                handleClick={() => console.log("handleClick")}
                size="small"
              >
                Delete Account
              </AKButton>
            </AKBasicCard>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AKAccountPage;
