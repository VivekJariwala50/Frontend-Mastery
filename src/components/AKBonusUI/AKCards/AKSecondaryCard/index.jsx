import AKButton from "@components/AKButton";
import { AKClsx } from "@utils";
import { AKBasicCard } from "..";
import styles from "./AKSecondaryCard.module.css";
export const AKSecondaryCard = ({
  customClass,
  img,
  title,
  subtitle,
  btnTitle,
  imgContainerClass,
  btnPath,
}) => {
  return (
    <AKBasicCard
      customClass={AKClsx(styles.card, customClass, "position-relative flex")}
      header={false}
    >
      <div style={{ display: "flex" }}>
        <div>
          <h3 className="title-color mb-2">{title}</h3>
          <h4 className={AKClsx(styles.subtitle, "text-color mb-4")}>
            {subtitle}
          </h4>
          <AKButton customClass="mr-4" type="fill" size="medium" link={btnPath}>
            {btnTitle}
          </AKButton>
        </div>
        <div className={AKClsx(styles.imgContainer, imgContainerClass)}>
          <img src={img} className={styles.img} />
        </div>
      </div>
    </AKBasicCard>
  );
};
