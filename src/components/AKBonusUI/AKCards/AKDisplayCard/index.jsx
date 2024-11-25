import { AKClsx } from "@utils";
import styles from "./AKDisplayCard.module.css";
import { svgIcons } from "@const";

export const AKDisplayCard = () => {
  return (
    <div className={AKClsx(styles.card, "flex items-center")}>
      <div className={AKClsx(styles.cardImg, "mr-3")}>{svgIcons.bookMark}</div>
      <div>
        <div className="title-color h4 mb-1">Total Assets</div>
        <div className="text-color h4 small mb-1">596</div>
        <div className="text-color h6">
          <span className="text-pelican">0.25%</span>
          <span> This month </span>
        </div>
      </div>
    </div>
  );
};
