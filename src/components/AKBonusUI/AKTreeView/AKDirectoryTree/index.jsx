import { AKClsx } from "@utils";
import { Tree } from "antd";
import styles from "./AKDirectoryTree.module.css";

export const AKDirectoryTree = ({
  treeData,
  defaultExpandedKeys,
  AKDirectoryTreeClassname,
  ...rest
}) => {
  const handleSelect = (keys, info) => {
    console.log("Trigger Select", keys, info);
  };
  const handleExpand = (keys, info) => {
    console.log("Trigger Expand", keys, info);
  };
  return (
    <>
      <div>
        <Tree.DirectoryTree
          multiple
          defaultExpandedKeys={defaultExpandedKeys}
          onSelect={handleSelect}
          onExpand={handleExpand}
          treeData={treeData}
          className={AKClsx(styles.AKDirectoryTree, AKDirectoryTreeClassname)}
          {...rest}
        />
      </div>
    </>
  );
};
