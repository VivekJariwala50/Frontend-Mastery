import { Modal } from "antd";
import styles from "./AKModal.module.css";
export const AKModal = ({
  handleOk,
  title,
  isModalOpen,
  handleCancel,
  children,
  closeIcon,
  customFooter,
  width,
  centered = true,
}) => {
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={styles.modal}
        wrapClassName={styles.modalContainer}
        closeIcon={closeIcon}
        footer={customFooter}
        width={width}
        centered={centered}
      >
        {children}
      </Modal>
    </>
  );
};
