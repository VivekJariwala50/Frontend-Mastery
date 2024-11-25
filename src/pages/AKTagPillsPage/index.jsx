import { AKBasicCard, AKHead } from "@components";
import AKTags from "@components/AKUIKits/AKTagPills/AKTags";

const AKTagPillsPage = () => {
  return (
    <>
      <AKHead title="Tag Pills"></AKHead>
      <AKBasicCard
        cardTitle={"Label Tags:"}
        customClass="mb-5"
        customCardBodyClass="flex gap-4 flex-wrap"
      >
        <AKTags color="red" title="red" customClass="fw-400" />
        <AKTags color="green" title="green" customClass="fw-400" />
        <AKTags color="purple" title="purple" customClass="fw-400" />
        <AKTags color="orange" title="orange" customClass="fw-400" />
      </AKBasicCard>
      <AKBasicCard
        cardTitle={"Label Pills:"}
        customClass="mb-5"
        customCardBodyClass="flex gap-4 flex-wrap"
      >
        <AKTags color="red" title="red" customClass="fw-400" pills={true} />
        <AKTags color="green" title="green" customClass="fw-400" pills={true} />
        <AKTags
          color="purple"
          title="purple"
          customClass="fw-400"
          pills={true}
        />
        <AKTags
          color="orange"
          title="orange"
          customClass="fw-400"
          pills={true}
        />
      </AKBasicCard>
    </>
  );
};

export default AKTagPillsPage;
