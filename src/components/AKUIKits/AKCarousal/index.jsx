import { Carousel } from "antd";
import styles from "./AKCarousal.module.css";
import { AKClsx } from "@utils";
export const AKCarousal = ({
  children,
  dotPosition = "bottom",
  autoplay = false,
  effect,
  customClassname,
}) => {
  return (
    <Carousel
      dotPosition={dotPosition}
      autoplay={autoplay}
      effect={effect}
      className={AKClsx(styles.carousel, customClassname)}
    >
      {children}
    </Carousel>
  );
};
