import AKButton from "@components/AKButton";
export const AKSweetAlert = ({ handleAlert, btnText }) => {
  return (
    <div>
      <AKButton handleClick={handleAlert} type="fill">
        {btnText}
      </AKButton>
    </div>
  );
};
