import { AKBasicCard, AKScrollable, AKHead } from "@components";
import styles from "./AKScrollablePage.module.css";
import { AKClsx } from "@utils";

const AKScrollablePage = () => {
  return (
    <>
      <AKHead title="Scrollable"></AKHead>
      <div className={AKClsx(styles.AKScrollableWrapper, "grid")}>
        <AKBasicCard
          cardTitle="Basic Scroll:"
          customCardBodyClass="overflow-hidden"
        >
          <AKScrollable />
        </AKBasicCard>
        <AKBasicCard cardTitle="Hover Scroll:">
          <AKScrollable AKScrollableCardClassName="scroll-hover" />
        </AKBasicCard>
        <AKBasicCard cardTitle="Wide Scroll:">
          <AKScrollable AKScrollableCardClassName="wide-scroll-bar" />
        </AKBasicCard>
        <AKBasicCard cardTitle="Rounded Scroll:">
          <AKScrollable AKScrollableCardClassName="rounded-scroll-bar" />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKScrollablePage;
