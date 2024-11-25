import { AKCounter, AKBasicCard, AKHead } from "@components";
import { AKClsx } from "@utils";
import styles from "./AKCounterPage.module.css";

const AKCounterPage = () => {
  return (
    <>
      <AKHead title="Counter"></AKHead>
      <h3 className="mb-5 title-color">Counter Types:</h3>
      <div className={AKClsx(styles.AKCounterCardWrapper)}>
        <AKBasicCard cardTitle="Basic Counter:">
          <AKCounter />
        </AKBasicCard>
        <AKBasicCard cardTitle="Counter With Reset:">
          <AKCounter showResetBtn AKCounterBtnClassName="ak-counter-btn-card" />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKCounterPage;
