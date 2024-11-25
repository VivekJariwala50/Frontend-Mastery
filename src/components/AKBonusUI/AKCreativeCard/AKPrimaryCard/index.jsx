import { AKClsx } from "@utils";
import { AKSimpleCard } from "@components";
import styles from "./AKPrimaryCard.module.css";
export const AKPrimaryCard = ({
    title,
    subtitle,
    img,
    customClass,
    icon,
    color,
    bg,
    size = "md"
}) => {
    return (
        <AKSimpleCard
            titlePosition="center"
            customClass={AKClsx(styles.card, customClass)}
        >
            <div className="mx-auto text-center flex justify-center">
                <div className={AKClsx(styles.imgContainer, size === "sm" && styles.imgContainerSm, "mb-3 flex items-center justify-center")} style={{ background: bg, color: color }}>
                    {img ? <img src={img} alt="annakoot image" className={styles.img} /> : icon}
                </div>
            </div>
            {size === "sm" ? (
                <>
                    <div className="h4 title-color mb-1">{title}</div>
                    <div className="h4 small text-color">{subtitle}</div>
                </>
            ) : (
                <>
                    <div className="h3 title-color mb-1">{title}</div>
                    <div className="h4 text-color">{subtitle}</div>
                </>)
            }
        </AKSimpleCard>
    )
}
