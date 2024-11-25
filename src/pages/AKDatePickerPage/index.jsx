import {
  AKDatePickerBasic,
  AKRangePicker,
  AKBasicCard,
  AKHead,
} from "@components";
import { AKClsx } from "@utils";
import styles from "./AKDatePickerPage.module.css";

const AKDatePickerPage = () => {
  return (
    <>
      <AKHead title="Date Picker"></AKHead>
      <h3 className="mb-5 title-color">Date Picker Types:</h3>
      <div className={AKClsx(styles.AKDatePickerCardWrapper)}>
        <AKBasicCard cardTitle={"Basic DatePicker:"}>
          <AKDatePickerBasic id="AKDatePickerBasic" placeholder="Select Date" />
        </AKBasicCard>
        <AKBasicCard cardTitle={"DatePicker Type Month:"}>
          <AKDatePickerBasic
            id="AKDatePickerMonth"
            placeholder="Select Month"
            pickerType="month"
          />
        </AKBasicCard>
        <AKBasicCard cardTitle={"DatePicker Type Week:"}>
          <AKDatePickerBasic
            id="AKDatePickerWeek"
            placeholder="Select Week"
            pickerType="week"
          />
        </AKBasicCard>
        <AKBasicCard cardTitle={"DatePicker Type Year:"}>
          <AKDatePickerBasic
            id="AKDatePickerYear"
            placeholder="Select Year"
            pickerType="year"
          />
        </AKBasicCard>
        <AKBasicCard cardTitle={"DatePicker With Label:"}>
          <AKDatePickerBasic
            id="AKDatePickerWithLabel"
            placeholder="Select Date"
            label="Select Date:"
          />
        </AKBasicCard>
        <AKBasicCard cardTitle={"DatePicker With Error:"}>
          <AKDatePickerBasic
            id="AKDatePickerWithError"
            placeholder="Select Date"
            status="error"
            errorMessage="Please select date"
          />
        </AKBasicCard>
        <AKBasicCard cardTitle={"Range Picker:"}>
          <AKRangePicker />
        </AKBasicCard>
        <AKBasicCard cardTitle={"Range Picker:"}>
          <AKRangePicker label="Range Picker With Label" />
        </AKBasicCard>
        <AKBasicCard cardTitle={"Range Picker:"}>
          <AKRangePicker
            status="error"
            errorMessage="Please Select Date Range"
          />
        </AKBasicCard>
      </div>
      <AKHead title="Date Picker"></AKHead>
    </>
  );
};

export default AKDatePickerPage;
