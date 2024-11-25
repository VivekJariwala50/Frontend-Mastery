import { Col, Row } from "antd";
import { AKBasicCard, AKTabs,AKHead } from "@components";
import styles from "./AKTabPage.module.css";
const AKTabPage = () => {
  return (
    <>
      <AKHead title="Tab"></AKHead>
      <h3 className="mb-5 title-color">Tab Types:</h3>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20 },
          { xs: 10, sm: 15, md: 20 },
        ]}
      >
        <Col xs={24} xl={12}>
          <AKBasicCard cardTitle="Tab Position Left" customClass={styles.card}>
            <AKTabs
              tabPosition="left"
              handleChange={() => console.log("tab")}
              items={[
                {
                  key: "1",
                  label: "Theme Style",
                  children: (
                    <>
                      <h4 className="title-color mb-0">
                        &ldquo;Oat cake chupa chups dragée donut toffee. Sweet
                        cotton candy jelly beans macaroon gummies cupcake gummi
                        bears cake chocolate. Cake chocolate bar cotton candy
                        apple pie tootsie roll ice cream apple pie brownie
                        cake.Sweet roll icing sesame snaps caramels danish
                        toffee.Brownie biscuit dessert dessert.Pudding jelly
                        jelly- o tart brownie jelly.&rdquo;
                      </h4>
                    </>
                  ),
                },
                {
                  key: "2",
                  label: "Theme Colors",
                  children: (
                    <>
                      <h4 className="title-color mb-0">
                        &ldquo;Oat cake chupa chups dragée donut toffee. Sweet
                        cotton candy jelly beans macaroon gummies cupcake gummi
                        bears cake chocolate. Cake chocolate bar cotton candy
                        apple pie tootsie roll ice cream apple pie brownie
                        cake.&rdquo;
                      </h4>
                    </>
                  ),
                },
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard cardTitle="Tab Position Right" customClass={styles.card}>
            <AKTabs
              tabPosition="right"
              handleChange={() => console.log("tab")}
              items={[
                {
                  key: "1",
                  label: "Theme Style",
                  children: (
                    <>
                      <h4 className="title-color mb-0">
                        &ldquo;Oat cake chupa chups dragée donut toffee. Sweet
                        cotton candy jelly beans macaroon gummies cupcake gummi
                        bears cake chocolate. Cake chocolate bar cotton candy
                        apple pie tootsie roll ice cream apple pie brownie
                        cake.Sweet roll icing sesame snaps caramels danish
                        toffee.Brownie biscuit dessert dessert.Pudding jelly
                        jelly- o tart brownie jelly.&rdquo;
                      </h4>
                    </>
                  ),
                },
                {
                  key: "2",
                  label: "Theme Colors",
                  children: (
                    <>
                      <h4 className="title-color mb-0">
                        &ldquo;Oat cake chupa chups dragée donut toffee. Sweet
                        cotton candy jelly beans macaroon gummies cupcake gummi
                        bears cake chocolate. Cake chocolate bar cotton candy
                        apple pie tootsie roll ice cream apple pie brownie
                        cake.Sweet roll icing sesame snaps caramels danish
                        toffee&rdquo;
                      </h4>
                    </>
                  ),
                },
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard cardTitle="Tab Position Top" customClass={styles.card}>
            <AKTabs
              handleChange={() => console.log("tab")}
              items={[
                {
                  key: "1",
                  label: "Theme Style",
                  children: (
                    <>
                      <h4 className="title-color mb-0">
                        &ldquo;Oat cake chupa chups dragée donut toffee. Sweet
                        cotton candy jelly beans macaroon gummies cupcake gummi
                        bears cake chocolate. Cake chocolate bar cotton candy
                        apple pie tootsie roll ice cream apple pie brownie
                        cake.Sweet roll icing sesame snaps caramels danish
                        toffee.Brownie biscuit dessert dessert.Pudding jelly
                        jelly- o tart brownie jelly.&rdquo;
                      </h4>
                    </>
                  ),
                },
                {
                  key: "2",
                  label: "Theme Colors",
                  children: (
                    <>
                      <h4 className="title-color mb-0">
                        &ldquo;Oat cake chupa chups dragée donut toffee. Sweet
                        cotton candy jelly beans macaroon gummies cupcake gummi
                        bears cake chocolate. Cake chocolate bar cotton candy
                        apple pie tootsie roll ice cream apple pie brownie
                        cake.Sweet roll icing sesame snaps caramels danish
                        toffee&rdquo;
                      </h4>
                    </>
                  ),
                },
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            cardTitle="Tab Position Bottom"
            customClass={styles.card}
          >
            <AKTabs
              tabPosition="bottom"
              handleChange={() => console.log("tab")}
              items={[
                {
                  key: "1",
                  label: "Theme Style",
                  children: (
                    <>
                      <h4 className="title-color mb-0">
                        &ldquo;Oat cake chupa chups dragée donut toffee. Sweet
                        cotton candy jelly beans macaroon gummies cupcake gummi
                        bears cake chocolate. Cake chocolate bar cotton candy
                        apple pie tootsie roll ice cream apple pie brownie
                        cake.Sweet roll icing sesame snaps caramels danish
                        toffee.Brownie biscuit dessert dessert.Pudding jelly
                        jelly- o tart brownie jelly.&rdquo;
                      </h4>
                    </>
                  ),
                },
                {
                  key: "2",
                  label: "Theme Colors",
                  children: (
                    <>
                      <h4 className="title-color mb-0">
                        &ldquo;Oat cake chupa chups dragée donut toffee. Sweet
                        cotton candy jelly beans macaroon gummies cupcake gummi
                        bears cake chocolate. Cake chocolate bar cotton candy
                        apple pie tootsie roll ice cream apple pie brownie
                        cake.&rdquo;
                      </h4>
                    </>
                  ),
                },
              ]}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard
            cardTitle="Tab Default Active Key"
            customClass={styles.card}
          >
            <AKTabs
              handleChange={() => console.log("tab")}
              defaultActiveKey="2"
              items={[
                {
                  key: "1",
                  label: "Theme Style",
                  children: (
                    <>
                      <h4 className="title-color mb-0">
                        &ldquo;Oat cake chupa chups dragée donut toffee. Sweet
                        cotton candy jelly beans macaroon gummies cupcake gummi
                        bears cake chocolate. Cake chocolate bar cotton candy
                        apple pie tootsie roll ice cream apple pie brownie
                        cake.Sweet roll icing sesame snaps caramels danish
                        toffee.Brownie biscuit dessert dessert.Pudding jelly
                        jelly- o tart brownie jelly.&rdquo;
                      </h4>
                    </>
                  ),
                },
                {
                  key: "2",
                  label: "Theme Colors",
                  children: (
                    <>
                      <h4 className="title-color mb-0">
                        &ldquo;Oat cake chupa chups dragée donut toffee. Sweet
                        cotton candy jelly beans macaroon gummies cupcake gummi
                        bears cake chocolate. Cake chocolate bar cotton candy
                        apple pie tootsie roll ice cream apple pie brownie
                        cake.&rdquo;
                      </h4>
                    </>
                  ),
                },
              ]}
            />
          </AKBasicCard>
        </Col>
      </Row>
    </>
  );
};

export default AKTabPage;
