import { AKClsx } from "@utils";
import styles from "./AKListIcon.module.css";

const AKListIcon = ({ items, size = "md" }) => {
  return (
    <div>
      <ul className={styles.lists}>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={AKClsx(
                  "flex items-center justify-between title-color mb-5",
                  styles.list
                )}
                key={index}
              >
                <div className="flex items-center gap-5">
                  <span
                    className={AKClsx(styles.icon)}
                    style={{ background: item.background, color: item.color }}
                  >
                    {item.icon}
                  </span>
                  {size == "sm" ? (
                    <>
                      <span className="h4 mb-0 small">{item.title}</span>
                    </>
                  ) : (
                    <>
                      <span className="h4 mb-0">{item.title}</span>
                    </>
                  )}
                </div>
                {size == "sm" ? (
                  <>
                    <div className="h4 mb-0 small">{item.extraContent}</div>
                  </>
                ) : (
                  <>
                    <div className="h4 mb-0">{item.extraContent}</div>
                  </>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AKListIcon;
