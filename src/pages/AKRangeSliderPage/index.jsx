import { AKBasicCard, AKRangeSlider, AKHead } from "@components";
import { AKClsx } from "@utils";
import { useState } from "react";
import styles from "./AKRangeSliderPage.module.css";

const marks = {
  0: "0",
  26: "26",
  37: "37",
  100: {
    style: {
      color: "var(--kingfisher)",
    },
    label: <strong>100</strong>,
  },
};

const AKRangeSliderPage = () => {
  const [inputValue, setInputValue] = useState(10);
  const onChange = (newValue) => {
    setInputValue(newValue);
    console.log(newValue);
  };

  return (
    <>
      <AKHead title="Range Slider"></AKHead>
      <div className={AKClsx(styles.AKRangeSliderCard, "grid")}>
        <AKBasicCard
          cardTitle="Basic Range Slider:"
          customCardBodyClass="grid gap-4"
        >
          <AKRangeSlider defaultValue={10} />
          <AKRangeSlider range defaultValue={[10, 40]} />
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Range Slider with Input Number:"
          customCardBodyClass=""
        >
          <AKRangeSlider
            showInput
            handleChange={onChange}
            inputValue={inputValue}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Reverse Slider:" customCardBodyClass="">
          <AKRangeSlider range reverse defaultValue={[5, 20]} />
        </AKBasicCard>
        <AKBasicCard cardTitle="Draggable Track:" customCardBodyClass="">
          <AKRangeSlider
            range={{ draggableTrack: true }}
            defaultValue={[5, 20]}
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Multiple Handle Slider:" customCardBodyClass="">
          <AKRangeSlider range defaultValue={[0, 15, 35]} />
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Graduated Slider:"
          customCardBodyClass="overflow-visible"
        >
          <h4 className="text-color">Marks: </h4>
          <AKRangeSlider marks={marks} defaultValue={40} />
          <AKRangeSlider marks={marks} range defaultValue={[15, 37]} />
          <h4 className="text-color">Marks & Steps: </h4>
          <AKRangeSlider marks={marks} step={10} defaultValue={37} />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKRangeSliderPage;
