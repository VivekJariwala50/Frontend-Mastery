import { AKBasicCard, AKAccordion, AKHead } from "@components";
import { AKClsx } from "@utils";
import { accordionItems, svgIcons } from "@const";
import styles from "./AKAccordionPage.module.css";

const AKAccordionPage = () => {
  return (
    <>
      <AKHead title="Accordion"></AKHead>
      <div className={AKClsx(styles.AKAccordionCardWrapper, "grid")}>
        <AKBasicCard cardTitle="Basic Accordion:">
          <AKAccordion items={accordionItems} defaultActiveKey={1} />
        </AKBasicCard>
        <AKBasicCard cardTitle="Borderless Accordion:">
          <AKAccordion
            items={accordionItems}
            defaultActiveKey={1}
            AKAccordionClassname="borderless-accordion"
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Accordion With Custom Position Icon:">
          <AKAccordion
            items={accordionItems}
            defaultActiveKey={1}
            expandIconPosition="end"
            AKAccordionClassname="custom-icon-accordion"
            expandIcon={({ isActive }) =>
              isActive ? (
                <span>{svgIcons.rightArrow}</span>
              ) : (
                <span>{svgIcons.downArrow}</span>
              )
            }
          />
        </AKBasicCard>
        <AKBasicCard cardTitle="Basic Accordion:">
          <AKAccordion
            items={accordionItems}
            defaultActiveKey={1}
            AKAccordionClassname="transparent-accordion"
          />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKAccordionPage;
