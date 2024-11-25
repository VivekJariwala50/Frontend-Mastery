import { svgIcons } from "@const";
import { AKClsx } from "@utils";
import { AKHead } from "@components";
import styles from "./AKIconsPage.module.css";

const AKIconsPage = () => {
  return (
    <>
      <AKHead title="Icons"></AKHead>
      <h3 className="mb-5 title-color">Icons:</h3>
      <div className={AKClsx(styles.AKIconWrapper, "grid")}>
        {Object.entries(svgIcons).map((key, index) => {
          return (
            <div
              className={AKClsx(
                styles.AKIconCard,
                "flex flex-col gap-5 justify-center items-center"
              )}
              key={key[0] + index}
            >
              <span
                className={AKClsx(
                  styles.AKIcon,
                  "flex justify-center items-center"
                )}
              >
                {key[1]}
              </span>
              <span
                className={AKClsx(
                  styles.AKIcon,
                  "flex justify-center items-center h4"
                )}
              >
                {key[0]}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AKIconsPage;
