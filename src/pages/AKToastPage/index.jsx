import { AKClsx } from "@utils";
import { AKBasicCard, AKToasts, AKHead } from "@components";
import styles from "./AKToastPage.module.css";
import { notification } from "antd";

const AKToastPage = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.open({
      message: `Notification ${placement}`,
      description: "You have a Notification",
      placement: placement !== "" ? placement : "topRight",
      className: "ak-toast",
    });
  };

  const typeNotification = (type) => {
    api[type]({
      message: `Notification ${type}`,
      description: "You have a Notification",
    });
  };
  return (
    <>
      <AKHead title="Toast"></AKHead>
      <div className={AKClsx(styles.AKToastCardWrapper, "grid")}>
        <AKBasicCard cardTitle="Basic Toast:">
          <AKToasts
            openNotification={() => openNotification("")}
            contextHolder={contextHolder}
            toastButtonText="Basic Toast"
          />
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Toast With Placement:"
          customCardBodyClass="flex flex-wrap gap-4"
        >
          <AKToasts
            openNotification={() => openNotification("topLeft")}
            contextHolder={contextHolder}
            toastButtonText="Toast Top-Left"
          />
          <AKToasts
            openNotification={() => openNotification("topRight")}
            contextHolder={contextHolder}
            toastButtonText="Toast Top-Right"
          />
          <AKToasts
            openNotification={() => openNotification("bottom")}
            contextHolder={contextHolder}
            toastButtonText="Toast Bottom"
          />
          <AKToasts
            openNotification={() => openNotification("bottomLeft")}
            contextHolder={contextHolder}
            toastButtonText="Toast Bottom-Left"
          />
          <AKToasts
            openNotification={() => openNotification("bottomRight")}
            contextHolder={contextHolder}
            toastButtonText="Toast Bottom-Right"
          />
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Toast With Status:"
          customCardBodyClass="flex flex-wrap gap-4"
        >
          <AKToasts
            openNotification={() => typeNotification("success")}
            contextHolder={contextHolder}
            toastButtonText="Success Toast"
          />
          <AKToasts
            openNotification={() => typeNotification("info")}
            contextHolder={contextHolder}
            toastButtonText="Info Toast"
          />
          <AKToasts
            openNotification={() => typeNotification("warning")}
            contextHolder={contextHolder}
            toastButtonText="Warning Toast"
          />
          <AKToasts
            openNotification={() => typeNotification("error")}
            contextHolder={contextHolder}
            toastButtonText="Error Toast"
          />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKToastPage;
