import { Row, Col, Image } from "antd";
import styles from "./AKMyProfile.module.css";
import { AKBasicCard, AKProgress, AKHead } from "@components";
import AKListIcon from "@components/AKUIKits/AKList/AKListIcon";
import { Girl1, myProfileProjects, svgIcons } from "@const";
import { AKClsx } from "@utils";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import AKTags from "@components/AKUIKits/AKTagPills/AKTags";

const AKMyProfile = () => {
  const { primaryColor } = useContext(ThemeContext);
  const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };
  var rgbPrimaryColor = hex2rgb(primaryColor);

  return (
    <>
      <AKHead title="My Profile" />
      <section className={AKClsx(styles.myProfileSection)}>
        <Row
          gutter={[
            { xs: 10, sm: 15, md: 20 },
            { xs: 10, sm: 15, md: 20 },
          ]}
        >
          <Col xs={24} md={12} xl={8}>
            <AKBasicCard
              cardTitle=""
              header={false}
              customClass={AKClsx(styles.profileCard, "h-full")}
              customCardBodyClassName="pa-0"
            >
              <div className="text-center">
                <div
                  className={AKClsx(
                    styles.myProfilePic,
                    "overflow-hidden ma-auto mb-4"
                  )}
                >
                  <Image
                    src={Girl1}
                    alt="annakoot image"
                    className="w-full h-full object-fit-cover"
                  />
                </div>
                <div className="w-full">
                  <h3 className="title-color mb-1">Annakoot</h3>
                  <h5 className="title-color">Owner & Founder</h5>
                  <div className="flex justify-center flex-wrap pt-4 gap-12">
                    <h4 className="title-color fw-400">
                      <span className="block mr-2 lh-0 h3">
                        <i className="ri-building-line"></i>
                      </span>
                      Surat, Gujarat
                    </h4>
                    <h4 className="title-color fw-400">
                      <span className="block mr-2 lh-0 h3">
                        <i className="ri-global-line"></i>
                      </span>
                      India
                    </h4>
                  </div>
                  <div className="flex justify-center flex-wrap pt-4 gap-12">
                    <h4 className="title-color fw-400 flex items-center gap-5">
                      <AKTags
                        color="orange"
                        title="15.9 K"
                        customClassName="fw-400 mr-2"
                      />
                      Followers
                    </h4>
                    <h4 className="title-color fw-400 flex items-center gap-5">
                      <AKTags
                        color="green"
                        title="2.8 K"
                        customClassName="fw-400 mr-2"
                      />
                      Following
                    </h4>
                  </div>
                </div>
              </div>
            </AKBasicCard>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <AKBasicCard
              cardTitle=""
              header={false}
              customClass={AKClsx(styles.profileCard, "h-full")}
              customCardBodyClassName="pa-0"
            >
              <h3 className="title-color mb-1">Info</h3>
              <ul className="mt-4">
                <li className="flex gap-4">
                  <span className="text-color p big fw-700 w-40 block">
                    Full Name
                  </span>
                  <span className="text-color p big fw-700 w-60 block">
                    Annakoot
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-color p big fw-700 w-40 block">
                    Mobile
                  </span>
                  <span className="text-color p big fw-700 w-60 block">
                    <a href="tel:084010 93656">084010 93656</a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-color p big fw-700 w-40 block">
                    E-mail
                  </span>
                  <span className="text-color p big fw-700 w-60 block">
                    <a href="mailto:help.omnibubble@gmail.com">
                      help.omnibubble@gmail.com
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-color p big fw-700 w-40 block">
                    Location
                  </span>
                  <span className="text-color p big fw-700 w-60 block">
                    Surat, Gujarat, India
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-color p big fw-700 w-40 block">
                    Joining Date
                  </span>
                  <span className="text-color p big fw-700 w-60 block">
                    09 April 2024
                  </span>
                </li>
              </ul>
            </AKBasicCard>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <AKBasicCard
              cardTitle=""
              header={false}
              customClass={AKClsx(styles.profileCard, "h-full")}
              customCardBodyClassName="pa-0"
            >
              <div className="w-full mb-4">
                <h3 className="title-color mb-1">Complete Your Profile</h3>
                <AKProgress
                  percent={50}
                  customClassName="mr-4 mt-4"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                />
              </div>
              <div className="w-full mb-5">
                <h3 className="title-color mb-1">Social & Portfolio</h3>
                <div className="flex items-center flex-wrap gap-8 mt-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="social-icons blue"
                  >
                    {svgIcons.facebook}
                  </a>
                  <a
                    href="https://google.com"
                    target="_blank"
                    className="social-icons blue"
                  >
                    {svgIcons.google}
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="social-icons blue"
                  >
                    {svgIcons.twitter}
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="social-icons blue"
                  >
                    {svgIcons.instagram}
                  </a>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    className="social-icons blue"
                  >
                    {svgIcons.whatsapp}
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="social-icons blue"
                  >
                    {svgIcons.linkedin}
                  </a>
                </div>
              </div>
              <div className="w-full pt-2">
                <h3 className="title-color mb-1">Skills</h3>
                <div className="flex mt-4 gap-5 flex-wrap">
                  <AKTags color="green" title="HTML" customClassName="fw-400" />
                  <AKTags color="green" title="CSS" customClassName="fw-400" />
                  <AKTags
                    color="green"
                    title="Bootstrap"
                    customClassName="fw-400"
                  />
                  <AKTags
                    color="green"
                    title="Javascript"
                    customClassName="fw-400"
                  />
                  <AKTags
                    color="green"
                    title="React JS"
                    customClassName="fw-400"
                  />
                  <AKTags
                    color="green"
                    title="Next Js"
                    customClassName="fw-400"
                  />
                </div>
              </div>
            </AKBasicCard>
          </Col>
          <Col xs={24} md={12}>
            <AKBasicCard
              cardTitle=""
              header={false}
              customClass={AKClsx(styles.profileCard, "h-full")}
              customCardBodyClassName="pa-0"
            >
              <h3 className="title-color mb-1">About</h3>
              <p className="text-color p big fw-500 w-40 w-full mt-4">
                Our journey began with a shared love for design and technology.
                Over the years, we&#39;ve honed our skills and embraced emerging
                trends to stay at the forefront of the ever-evolving digital
                landscape. Whether you&#39;re a startup looking to make your
                mark or an established business seeking a fresh perspective,
                we&#39;re here to bring your vision to life.
              </p>
              <p className="text-color p big fw-500 w-40 w-full mt-4">
                What sets us apart is our commitment to collaboration and client
                satisfaction. We believe in working closely with our clients
                every step of the way, from initial concept to final delivery.
                Your input and feedback are invaluable to us, and we strive to
                exceed your expectations with every project.
              </p>
              <div className="flex pt-4 gap-12 flex-wrap">
                <div className="flex align-center">
                  <span className="title-color block mr-3 lh-0 h3">
                    <i className="ri-color-filter-line"></i>
                  </span>
                  <div className="w-full">
                    <h6 className="text-color h4 small fw-400 mb-1">
                      Designation
                    </h6>
                    <h6 className="title-color h4 small fw-400">
                      Lead Designer
                    </h6>
                  </div>
                </div>
                <div className="flex align-center">
                  <span className="title-color block mr-3 lh-0 h3">
                    <i className="ri-pages-line"></i>
                  </span>
                  <div className="w-full">
                    <h6 className="text-color h4 small fw-400 mb-1">Website</h6>
                    <h6 className="title-color h4 small fw-400">
                      <a
                        href="https://themeforest.net/user/omnibubble"
                        target="_blank"
                      >
                        Omnibubble
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </AKBasicCard>
          </Col>
          <Col xs={24} md={12}>
            <AKBasicCard
              cardTitle=""
              header={false}
              customClass={AKClsx(styles.profileCard, "h-full")}
              customCardBodyClassName="pa-0"
            >
              <h3 className="title-color mb-5">Projects </h3>
              <AKListIcon items={myProfileProjects} size="sm" />
            </AKBasicCard>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AKMyProfile;
