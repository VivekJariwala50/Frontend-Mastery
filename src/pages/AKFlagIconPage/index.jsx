import { flagIconImgData } from "@const";
import { AKClsx } from "@utils";
import styles from "./AKFlagIconPage.module.css";
import { AKHead } from "@components";

const AKFlagIconPage = () => {
  return (
    <>
      <AKHead title="FlagIcon"></AKHead>
      <h3 className="mb-5 title-color">Country Flags:</h3>
      <div className={AKClsx(styles.AKFlagCardWrapper, "grid")}>
        {flagIconImgData.map((flag, index) => {
          return (
            <div
              key={index}
              className={AKClsx(
                styles.AKFlagImgWrapper,
                "flex justify-center items-center"
              )}
            >
              <div className={AKClsx(styles.AKFlagImgCard, "overflow-hidden")}>
                <img
                  src={flag.imgSrc}
                  alt={flag.imgAlt}
                  className="w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AKFlagIconPage;
