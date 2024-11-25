import { AKBasicCard, AKTreeView, AKDirectoryTree, AKHead } from "@components";
import { DownOutlined } from "@ant-design/icons";
import styles from "./AKTreeViewPage.module.css";
import { AKClsx } from "@utils";
import { directoryTreeData, treeData } from "@const";

const AKTreeViewPage = () => {
  return (
    <>
      <AKHead title="TreeView"></AKHead>
      <h3 className="mb-5 title-color">Tree Types:</h3>
      <div className={AKClsx(styles.AKTreeViewCard, "grid")}>
        <AKBasicCard cardTitle="Basic Tree View:">
          <AKTreeView
            treeData={treeData}
            defaultExpandedKeys={["0-2", "0-0-2", "0-0"]}
            defaultCheckedKeys={["0-0-0-0-2", "0-0-1-0"]}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Tree View with Custom Icon:">
          <AKTreeView
            treeData={treeData}
            showLine
            switcherIcon={<DownOutlined />}
            defaultExpandedKeys={["0-2", "0-0-2", "0-0", "0-0-0"]}
            defaultCheckedKeys={["0-0-0-0-2"]}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Directory Tree:">
          <AKDirectoryTree
            treeData={directoryTreeData}
            defaultExpandedKeys={["0-0-1"]}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Directory Tree with Custom Icon:">
          <AKDirectoryTree
            treeData={directoryTreeData}
            showLine
            defaultExpandedKeys={["0-0-1"]}
          />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKTreeViewPage;
