import { AKClsx } from "@utils";
import { Dropdown } from "antd";
import styles from "./AKDropDownImg.module.css";
export const AKDropDownImg = ({ items }) => {
    return (
        <Dropdown
            menu={{
                items,
            }}
            placement="bottomLeft"
            arrow
            overlayClassName={styles.customDropdown}
            className={styles.dropDwn}
        >
            <button className={AKClsx(styles.dropDwnButton, "flex gap-5")}>
                <div className={AKClsx(styles.dropdownImgContainer)}>
                    <img src="https://i.pravatar.cc" />
                </div>
                <div className={styles.dropDwnContent}>
                    <div className={AKClsx(styles.dropDwnTitle, "block text-left mb-1 h5")}>
                        Json Taylor
                    </div>
                    <div className={AKClsx(styles.dropDwnSubTitle, "block  text-left h4 small")}>
                        Web Designer
                    </div>
                </div>
            </button>
        </Dropdown>
    )
}
