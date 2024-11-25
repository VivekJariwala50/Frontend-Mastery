import { AKBasicCard, AKTextArea, AKHead } from "@components";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import { svgIcons } from "@const";
import styles from "./AKInputControls.module.css";
const AKInputControls = () => {
  return (
    <>
      <AKHead title="Input Controls"></AKHead>
      <div className="mb-5">
        <h3 className="mb-5 title-color">Input Types:</h3>
        <div className={styles.AKInputCardsContainer}>
          <AKBasicCard cardTitle={"Basic Input:"}>
            <AKInput />
          </AKBasicCard>
          <AKBasicCard cardTitle={"Form input with placeholder:"}>
            <AKInput placeholder={"Enter your name"} />
          </AKBasicCard>
          <AKBasicCard cardTitle={"Form input with label:"}>
            <AKInput
              id={"labeledInput"}
              label={"Enter Email:"}
              placeholder={"Enter your email"}
            />
          </AKBasicCard>
          <AKBasicCard cardTitle={"Form input with prefix:"}>
            <AKInput placeholder={"Enter your name"} prefix={svgIcons.search} />
          </AKBasicCard>
          <AKBasicCard cardTitle={"Type text:"}>
            <AKInput type="text" placeholder={"Text"} />
          </AKBasicCard>
          <AKBasicCard cardTitle={"Type number:"}>
            <AKInput type="number" placeholder={"Number"} />
          </AKBasicCard>
          <AKBasicCard cardTitle={"Type email:"}>
            <AKInput type="email" placeholder={"email@xyz.com"} />
          </AKBasicCard>
          <AKBasicCard cardTitle={"Type tel:"}>
            <AKInput type="tel" placeholder={"+1234-2023-5679"} />
          </AKBasicCard>
          <AKBasicCard cardTitle={"Type password:"}>
            <AKInput type="password" placeholder={"Confirm password"} />
          </AKBasicCard>
          <AKBasicCard cardTitle={"Form input with error and error message:"}>
            <AKInput
              status={"error"}
              errorMessage={"Please enter field"}
              type="tel"
              placeholder={"please enter name"}
            />
          </AKBasicCard>
          <AKBasicCard cardTitle={"Text Area:"}>
            <AKTextArea />
          </AKBasicCard>
          <AKBasicCard cardTitle={"Text Area With label:"}>
            <AKTextArea label={"Enter Text:"} />
          </AKBasicCard>
        </div>
      </div>
    </>
  );
};
export default AKInputControls;
