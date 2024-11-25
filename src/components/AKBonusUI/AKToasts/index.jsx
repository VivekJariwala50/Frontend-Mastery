import AKButton from "@components/AKButton";

export const AKToasts = ({
  openNotification,
  contextHolder,
  toastButtonText,
}) => {
  return (
    <div>
      {contextHolder}
      <AKButton type="fill" handleClick={openNotification}>
        {toastButtonText}
      </AKButton>
    </div>
  );
};
