import {
  AKBasicCard,
  AKBasicLoader,
  AKCreativeLoader,
  AKHead,
} from "@components";
import { AKClsx } from "@utils";
import styles from "./AKLoaderPage.module.css";

const AKLoaderPage = () => {
  return (
    <>
      <AKHead title="Loader" />
      <h3 className="mb-5 title-color">Basic Loader Types:</h3>
      <div className={AKClsx(styles.AKLoaderCardWrapper, "mb-3")}>
        <AKBasicCard cardTitle="Basic Loader:">
          <AKBasicLoader />
        </AKBasicCard>
        <AKBasicCard cardTitle="Small Loader:">
          <AKBasicLoader size="small" />
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Large Loader:"
          customCardBodyClass="basic-loader-body"
        >
          <AKBasicLoader size="large" />
        </AKBasicCard>
      </div>
      <h3 className="mb-5 title-color">Creative Loader Types:</h3>
      <div className={AKClsx(styles.AKCreativeLoaderCardWrapper)}>
        <AKBasicCard
          cardTitle="Basic Loader:"
          customCardBodyClass="creative-loader-body"
        >
          <AKCreativeLoader />
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Small  Loader:"
          customCardBodyClass="creative-loader-body"
        >
          <AKCreativeLoader size="small" />
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Large  Loader:"
          customCardBodyClass="creative-loader-body"
        >
          <AKCreativeLoader size="large" />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKLoaderPage;
