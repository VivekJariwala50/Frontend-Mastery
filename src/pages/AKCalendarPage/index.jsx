import {
  AKCalendarFull,
  AKHead,
  AKCalendarBasic,
  AKBasicCard,
} from "@components";
const AKCalendarPage = () => {
  return (
    <>
      <AKHead title="Calendar"></AKHead>
      <AKBasicCard cardTitle={"basic calendar"} customClass="mb-5">
        <AKCalendarBasic placeholder={"Select date"} />
      </AKBasicCard>
      <AKBasicCard cardTitle={"full calendar"}>
        <AKCalendarFull />
      </AKBasicCard>
    </>
  );
};

export default AKCalendarPage;
