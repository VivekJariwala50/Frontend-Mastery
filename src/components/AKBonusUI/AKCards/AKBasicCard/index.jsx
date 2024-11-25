import { AKClsx } from "@utils";
import styles from "./AKBasicCard.module.css";
export const AKBasicCard = ({
  cardTitle,
  cardExtraContent,
  customClass,
  children,
  customCardBodyClass,
  header = true,
  removeCardBodySpacing,
  searchInput,
  customHeaderClass,
  graphCard
}) => {

  return (
    <>
      <div className={AKClsx(styles.card, customClass, removeCardBodySpacing && styles.removeCardSpacing, graphCard && styles.graphCard)}>
        <div
          className={AKClsx(
            styles.cardHeader,
            header == false ? "hidden" : "flex",
            searchInput && styles.cardHeaderSearch,
            customHeaderClass
          )}
        >
          <span className={AKClsx("fw-800 h3 mb-0 fw-600", styles.AKCardTitle)}>
            {cardTitle}
          </span>
          <span className={AKClsx(styles.cardExtraContent, "text-color")}>
            {cardExtraContent}
          </span>
        </div>
        <div className={AKClsx(styles.cardBody, "scroll-hover", customCardBodyClass)}>{children}</div>
      </div>
    </>
  );
};
