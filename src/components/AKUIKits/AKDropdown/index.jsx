import Dragger from "antd/es/upload/Dragger";
import styles from "./AKDropdown.module.css";
import { svgIcons } from "@const";
import { AKClsx } from "@utils";

export const AKDropDown = ({ props }) => {
  return (
    <div>
      <Dragger {...props} className={styles.AKDropzone}>
        <p className="ant-upload-drag-icon">
          <span
            className={AKClsx(
              "inbox-icon flex items-center justify-center ma-auto"
            )}
          >
            {svgIcons.inbox}
          </span>
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
    </div>
  );
};
