import { AKClsx } from "@utils";
import styles from "./AKThemePlate.module.css";
export const AKThemePlate = ({ themeColors, handleChange }) => {
  return (
    <>
      {themeColors &&
        themeColors.map((item, index) => {
          return (
            <div
              className={AKClsx(styles.colorPlateContainer, "mb-1")}
              key={index}
            >
              <input
                type="radio"
                id={item.name}
                value={item.value}
                name={item.theme}
                className={styles.colorPlateInput}
                onChange={handleChange}
              />
              <label
                className={AKClsx(styles.colorPlateLabel)}
                htmlFor={item.name}
              >
                {item.bgClass &&
                  item.bgClass.map((childItem, childIndex) => (
                    <span
                      key={childIndex}
                      className={AKClsx(styles.colorPlate)}
                      style={{ backgroundColor: `${childItem}` }}
                    ></span>
                  ))}
              </label>
            </div>
          );
        })}
    </>
  );
};
