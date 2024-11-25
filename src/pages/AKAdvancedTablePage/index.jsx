import { productsOrdersData } from "@const";
import { AKTables, AKBasicCard, AKHead } from "@components";
import { Col, Row } from "antd";

const AKAdvancedTablePage = () => {
  const defaultExpandable = {
    expandedRowRender: (record) => (
      <h4 className="py-5">{record.productname}</h4>
    ),
  };
  return (
    <div>
      <AKHead title="Advance Table"></AKHead>
      <h3 className="mb-5 title-color">Advance Table:</h3>
      <Row gutter={[30, 30]} className="mb-5">
        <Col sm={24}>
          <AKBasicCard cardTitle={"Expandable Table:"}>
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
              expandable={defaultExpandable}
            />
          </AKBasicCard>
        </Col>
        <Col sm={24}>
          <AKBasicCard cardTitle={"Hide Header Table:"}>
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
              expandable={defaultExpandable}
              showHeader={false}
            />
          </AKBasicCard>
        </Col>
        <Col sm={24}>
          <AKBasicCard cardTitle={"Loading Table:"}>
            <AKTables
              data={productsOrdersData.row}
              columns={productsOrdersData.columns}
              expandable={defaultExpandable}
              showHeader={false}
              loading={true}
            />
          </AKBasicCard>
        </Col>
      </Row>
    </div>
  );
};

export default AKAdvancedTablePage;
