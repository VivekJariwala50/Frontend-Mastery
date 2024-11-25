import { AKColorPicker, AKBasicCard, AKHead } from "@components";
import { AKClsx } from "@utils";
import styles from "./AKColorPickerPage.module.css";

const AKColorPickerPage = () => {
  return (
    <>
      <AKHead title="Color Picker"></AKHead>
      <h3 className="mb-5 title-color">Color Picker Types:</h3>
      <div className={AKClsx(styles.AKColorPickerCardWrapper)}>
        <AKBasicCard cardTitle="Basic Color Picker:">
          <AKColorPicker id="AKColorPickerBasic" />
        </AKBasicCard>
        <AKBasicCard cardTitle="Small Color Picker:">
          <AKColorPicker id="AKColorPickerSmall" size={"small"} />
        </AKBasicCard>
        <AKBasicCard cardTitle="Large Color Picker:">
          <AKColorPicker id="AKColorPickerLarge" size={"large"} />
        </AKBasicCard>
        <AKBasicCard cardTitle="Color Picker With Text:">
          <AKColorPicker id="AKColorPickerWithText" showText />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKColorPickerPage;
