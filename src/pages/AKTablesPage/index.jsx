import { Col, Row } from "antd";
import { AKTables, AKBasicCard, AKHead } from "@components";
import { productsOrdersData } from "@const";
export const AKTablesPage = () => {
  return (
    <>
      <AKHead title="Basic Table"></AKHead>
      <h3 className="mb-5 title-color">Table Types:</h3>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20, lg: 25, xl: 30 },
          { xs: 10, sm: 15, md: 20, lg: 25, xl: 30 },
        ]}
        className="mb-5"
      >
        <Col xs={24} xl={12}>
          <AKBasicCard cardTitle={"Table Basic:"}>
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard cardTitle={"Table Row Selection:"}>
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
              rowSelection={true}
            />
          </AKBasicCard>
        </Col>
      </Row>
      <Row
        gutter={[
          { xs: 10, sm: 15, md: 20, lg: 25, xl: 30 },
          { xs: 10, sm: 15, md: 20, lg: 25, xl: 30 },
        ]}
        className="pt-5"
      >
        <Col sm={24}>
          <h3 className="title-color">Table Pagination Position:</h3>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard cardTitle={"Pagination top center:"}>
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
              paginationPosition={"topCenter"}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard cardTitle={"Pagination top left:"}>
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
              paginationPosition={"topLeft"}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard cardTitle={"Pagination top right:"}>
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
              paginationPosition={"topRight"}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard cardTitle={"Pagination bottom center:"}>
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
              paginationPosition={"bottomCenter"}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard cardTitle={"Pagination bottom left:"}>
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
              paginationPosition={"bottomLeft"}
            />
          </AKBasicCard>
        </Col>
        <Col xs={24} xl={12}>
          <AKBasicCard cardTitle={"Pagination bottom right:"}>
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
              paginationPosition={"bottomRight"}
            />
          </AKBasicCard>
        </Col>
      </Row>
    </>
  );
};

export default AKTablesPage;
