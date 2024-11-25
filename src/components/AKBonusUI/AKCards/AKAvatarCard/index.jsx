import { AKClsx } from "@utils";
import styles from "./AKAvatarCard.module.css";

export const AKAvatarCard = ({ img, title, customClass, subtitleOne, subtitleTwo }) => {
    return (
        <div className={AKClsx("flex", customClass, styles.list)}>
            <div className={styles.imgContainer}>
                <img src={img} alt={title} />
            </div>
            <div className="ml-4">
                <h3 className="mb-1 text-color small">{title}</h3>
                <p className="mb-1">{subtitleOne}</p>
                <p className="mb-0">{subtitleTwo}</p>
            </div>
        </div>
    )
}
