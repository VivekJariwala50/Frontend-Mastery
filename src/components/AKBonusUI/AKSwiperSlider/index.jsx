import { Swiper } from "swiper/react";
import { AKClsx } from "@utils";
import { AKBasicCard } from "../AKCards";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./AKSwiperSlider.module.css";

export const AKSwiperSlider = ({
  swiperCardTitle,
  defaultClassName = "",
  swiperNavigation,
  pagination = false,
  paginationClickable = true,
  swiperBreakpoints,
  swiperBasicCardClass,
  autoplay = true,
  children,
  spaceBetween,
  slidesPerView,
  centeredSlides,
  direction,
  loop,
  grabCursor,
  freeMode,
  ...rest
}) => {
  return (
    <AKBasicCard cardTitle={swiperCardTitle} customClass={swiperBasicCardClass}>
      <Swiper
        className={AKClsx(styles.customSwiper, defaultClassName)}
        navigation={swiperNavigation}
        pagination={pagination && { clickable: paginationClickable }}
        breakpoints={swiperBreakpoints}
        autoplay={autoplay}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        grabCursor={grabCursor}
        direction={direction}
        loop={loop}
        freeMode={freeMode}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
        {...rest}
      >
        {children}
      </Swiper>
    </AKBasicCard>
  );
};
