import { AKClsx } from "@utils";
import { Link } from "react-router-dom";
import styles from "./AKViewCard.module.css";

export const AKViewCard = ({
  title,
  subtitle,
  path = "/",
  pathname,
  iconBg,
  icon,
}) => {
  const iconBgClass =
    iconBg === "purple"
      ? styles.purpleBg
      : iconBg === "orange"
      ? styles.orangeBg
      : iconBg === "skyblue"
      ? styles.skyBlueBg
      : iconBg === "green"
      ? styles.greenBg
      : iconBg === "pink"
      ? styles.pinkBg
      : iconBg === "yellow"
      ? styles.yellowBg
      : styles.defaultIconBg;
  const linkColorClass =
    iconBg === "purple"
      ? styles.purpleColor
      : iconBg === "orange"
      ? styles.orangeColor
      : iconBg === "skyblue"
      ? styles.skyBlueColor
      : iconBg === "green"
      ? styles.greenColor
      : iconBg === "pink"
      ? styles.pinkColor
      : iconBg === "yellow"
      ? styles.yellowColor
      : styles.defaultIconBg;
  return (
    <div className={AKClsx("flex gap-8")}>
      <div className={AKClsx(styles.iconContainer, iconBgClass)}>{icon}</div>
      <div>
        <h4 className="text-color fw-400 mb-1">{subtitle}</h4>
        <h3 className="title-color mb-0 fw-500">{title}</h3>
        {pathname && (
          <Link
            className={AKClsx(
              "small fw-400 mb-0 mt-2 visible",
              linkColorClass,
              styles.link
            )}
            href={path}
          >
            {pathname}
          </Link>
        )}
      </div>
    </div>
  );
};
