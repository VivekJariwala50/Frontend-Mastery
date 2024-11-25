import { AKBasicCard, AKClipBoard, AKHead } from "@components";
import { AKClsx } from "@utils";
import styles from "./AKClipBoardPage.module.css";

const AKClipBoardPage = () => {
  return (
    <>
      <AKHead title="Clip Board"></AKHead>
      <h3 className="mb-5 title-color">Clip-board Types:</h3>
      <div className={AKClsx(styles.AKClipBoardCardWrapper)}>
        <AKBasicCard cardTitle="Basic Clip-board:">
          <AKClipBoard />
        </AKBasicCard>
        <AKBasicCard cardTitle="Vertical Clip-board:">
          <AKClipBoard AKClipBoardCardClassName={"flex-col"} />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKClipBoardPage;
