import { AKBasicCard, AKSwitch, AKHead } from "@components";
import { AKClsx } from "@utils";
import styles from "./AKSwitchPage.module.css";

const AKSwitchPage = () => {
  return (
    <>
      <AKHead title="Switch"></AKHead>
      <h3 className="mb-5 title-color">Switch Types:</h3>
      <div className={AKClsx(styles.AKSwitchCardWrapper)}>
        <AKBasicCard cardTitle="Basic Switch:">
          <AKSwitch
            defaultChecked
            handleChange={() => console.log("Basic Switch")}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Switch With Default Off:">
          <AKSwitch
            handleChange={() => console.log("Switch With Default Off")}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Small Switch:">
          <AKSwitch
            defaultChecked
            size={"small"}
            handleChange={() => console.log("Small Switch")}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Disabled Switch:">
          <AKSwitch
            defaultChecked
            disabled
            handleChange={() => console.log("Disabled Switch")}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Switch With Text:">
          <AKSwitch
            defaultChecked
            checkedChildren={1}
            unCheckedChildren={0}
            handleChange={() => console.log("Switch With Text")}
          />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKSwitchPage;
