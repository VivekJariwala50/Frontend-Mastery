import { AKBasicCard, AKHead } from "@components";
import AKRating from "@components/AKBonusUI/AKRating";
import { AKClsx } from "@utils";
import { useState } from "react";
import styles from "./AKRatingPage.module.css";

const ratingReaction = ["terrible", "bad", "normal", "good", "wonderful"];

const AKRatingPage = () => {
  const [rating, setRating] = useState(2);
  return (
    <>
      <AKHead title="Rating"></AKHead>
      <div className={AKClsx(styles.AKRatingCardWrapper, "grid")}>
        <AKBasicCard cardTitle="Basic Rating:">
          <AKRating />
        </AKBasicCard>
        <AKBasicCard cardTitle="Rating With Half Start:">
          <AKRating allowHalf={true} />
        </AKBasicCard>
        <AKBasicCard cardTitle="Rating With Text:">
          <AKRating
            tooltips={ratingReaction}
            value={rating}
            handleChange={setRating}
          />
          {rating ? (
            <p className="title-color mt-1">{ratingReaction[rating - 1]}</p>
          ) : null}
        </AKBasicCard>
        <AKBasicCard cardTitle="Rating Star With Clear Off:">
          <AKRating allowClear={false} />
        </AKBasicCard>
        <AKBasicCard cardTitle="Rating With Custom Character:">
          <AKRating character={"H"} allowHalf={true} />
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKRatingPage;
