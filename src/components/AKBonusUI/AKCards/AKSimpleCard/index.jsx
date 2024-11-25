import { AKClsx } from "@utils";
import styles from "./AKSimpleCard.module.css";
export const AKSimpleCard = ({
    children,
    title,
    titlePosition,
    customClass
}) => {
    const titlePositionClass = titlePosition == "center" ? "text-center" : titlePosition == "right" ? "text-right" : titlePosition == "left" ? "text-left" : "text-left";
    return (
        <div className={AKClsx(styles.card, titlePositionClass, customClass)}>
            {title && <div>
                <h2 className={AKClsx("title-color mb-2")}>
                    {title}
                </h2>
            </div>}
            <div className={AKClsx(styles.cardBody, "text-color")}>
                {children}
            </div>
        </div>
    )
}
