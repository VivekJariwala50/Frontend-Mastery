import { Tree } from "antd";
import styles from "./AKBasicTree.module.css";
import { AKClsx } from "@utils";

export const AKTreeView = ({
  treeData,
  defaultExpandedKeys,
  defaultSelectedKeys,
  defaultCheckedKeys,
  AKTreeViewClassName,
  ...rest
}) => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  return (
    <div>
      <Tree
        checkable
        defaultExpandedKeys={defaultExpandedKeys}
        defaultSelectedKeys={defaultSelectedKeys}
        defaultCheckedKeys={defaultCheckedKeys}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
        className={AKClsx(styles.AKTreeView, AKTreeViewClassName)}
        {...rest}
      />
    </div>
  );
};
