import { AKBasicCard, AKBreadcrumb, AKHead } from "@components";
import { AKClsx } from "@utils";
import styles from "./AKBreadcrumbPage.module.css";
import { ItemsWithIcon, ItemsWithSeparator, basicItems } from "@const";

const AKBreadcrumbPage = () => {
  return (
    <div className={AKClsx(styles.AKBreadcrumbCardWrapper, "grid")}>
      <AKHead title="Breadcrumb"></AKHead>
      <AKBasicCard cardTitle="Basic Breadcrumb:">
        <AKBreadcrumb items={basicItems} />
      </AKBasicCard>
      <AKBasicCard cardTitle="Breadcrumb With Custom Separator:">
        <AKBreadcrumb items={basicItems} separator=">" />
      </AKBasicCard>
      <AKBasicCard cardTitle="Breadcrumb With Icon:">
        <AKBreadcrumb items={ItemsWithIcon} separator=">" />
      </AKBasicCard>
      <AKBasicCard cardTitle="Breadcrumb With Independent Separator:">
        <AKBreadcrumb separator="" items={ItemsWithSeparator} />
      </AKBasicCard>
    </div>
  );
};

export default AKBreadcrumbPage;
