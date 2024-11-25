import { AKClsx } from "@utils";
import { Table } from "antd";
import styles from "./AKTables.module.css";
export const AKTables = ({
  columns,
  data,
  rowSelection,
  indentSize = 1,
  pageSize = 5,
  paginationPosition = "bottomRight",
  expandable = false,
  showHeader = true,
  loading = false,
  customClass,
  scrollX = true,
}) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        className={AKClsx(styles.table, customClass)}
        rowSelection={rowSelection}
        indentSize={indentSize}
        pagination={{ pageSize: pageSize, position: [paginationPosition] }}
        expandable={expandable}
        showHeader={showHeader}
        loading={loading}
        scroll={{ x: scrollX }}
      />
    </>
  )
}
