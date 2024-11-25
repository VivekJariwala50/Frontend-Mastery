import { AKBasicCard, AKSweetAlert, AKHead } from "@components";
import { AKClsx } from "@utils";
import swal from "sweetalert";
import styles from "./AKSweetAlertPage.module.css";

const AKSweetAlertPage = () => {
  const handleBasicAlert = () => {
    swal({
      className: "custom-sweet-alert",
      title: "Basic Sweet Alert",
      text: "You clicked the button!",
    });
  };

  const handleSuccessAlert = () => {
    swal({
      className: "custom-sweet-alert",
      title: "Good Job!",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  const handleWarningAlert = () => {
    swal({
      className: "custom-sweet-alert",
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: {
        cancel: true,
        confirm: true,
      },
      dangerMode: true,
    });
  };

  const handleErrorAlert = () => {
    swal({
      className: "custom-sweet-alert",
      title: "Error Alert!",
      text: "You clicked the button!",
      icon: "error",
    });
  };

  const handleInfoAlert = () => {
    swal({
      className: "custom-sweet-alert",
      title: "Info Alert!",
      text: "You clicked the button!",
      icon: "info",
    });
  };

  return (
    <>
      <AKHead title="Sweet Alert"></AKHead>
      <div className={AKClsx(styles.AKSweetAlertWrapper, "grid")}>
        <AKBasicCard cardTitle="Basic Sweet-alert:">
          <AKSweetAlert
            handleAlert={handleBasicAlert}
            btnText={"Open Basic Alert"}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Success Sweet-alert:">
          <AKSweetAlert
            handleAlert={handleSuccessAlert}
            btnText={"Open Success Alert"}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Warning Sweet-alert:">
          <AKSweetAlert
            handleAlert={handleWarningAlert}
            btnText={"Open Warning Alert"}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Error Sweet-alert:">
          <AKSweetAlert
            handleAlert={handleErrorAlert}
            btnText={"Open Error Alert"}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Info Sweet-alert:">
          <AKSweetAlert
            handleAlert={handleInfoAlert}
            btnText={"Open Info Alert"}
          />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKSweetAlertPage;
