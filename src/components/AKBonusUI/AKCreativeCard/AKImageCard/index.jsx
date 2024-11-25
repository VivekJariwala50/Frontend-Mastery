import { AKClsx } from "@utils";
import AKButton from "@components/AKButton";
import styles from "./AKImageCard.module.css";
export const AKImageCard = ({
  customClass,
  cardImg,
  userImg,
  description,
  name,
  email,
  buttonTitle,
  user,
  cardImgContainerClass,
  title,
  subTitle,
  block = false,
  extraContent,
  link,
  overlayImg = false,
  imgOnly = false,
  buttonContainerClass,
}) => {
  return (
    <>
      <div className={AKClsx(styles.card, customClass, "flex flex-col")}>
        <div
          className={AKClsx(
            styles.cardImgContainer,
            cardImgContainerClass,
            overlayImg && styles.cardImgContainerOverlay
          )}
        >
          <div>
            <img src={cardImg} className={styles.cardImg} />
          </div>
        </div>
        {!imgOnly && (
          <div className={AKClsx(styles.cardBody, "flex flex-col")}>
            <div>
              {title && <h2 className="mb-2 title-color small">{title}</h2>}
              {subTitle && (
                <h3 className="mb-5 text-color small">{subTitle}</h3>
              )}
              {user && (
                <div
                  className={AKClsx(
                    styles.cardUserContainer,
                    "inline-flex items-center mb-4 gap-6"
                  )}
                >
                  <span className={AKClsx(styles.cardUserImgContainer, "flex")}>
                    <img src={userImg} className={AKClsx(styles.cardUserImg)} />
                  </span>
                  <span className="flex flex-col title-color">
                    <span className="h4 small mb-1">{name}</span>
                    <span className="h4 small">{email}</span>
                  </span>
                </div>
              )}
              {description && (
                <h4 className="title-color fw-700 mb-1">{description}</h4>
              )}
              {extraContent && extraContent}
            </div>
            {buttonTitle && (
              <div
                className={AKClsx(
                  styles.AKButtonContainer,
                  buttonContainerClass
                )}
              >
                <AKButton
                  customClass="mt-4"
                  type="fill"
                  handleClick={() => console.log("handleChange")}
                  size={"small"}
                  block={block}
                  link={link}
                >
                  {buttonTitle}
                </AKButton>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
