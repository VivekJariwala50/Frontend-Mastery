import { AKClsx } from "@utils";
import { Badge, Space } from "antd";
import { Data } from "iconsax-react";
import styles from "./AKStatusBadge.module.css";
export const AKStatusBadge = ({
    customClass,
    data,
    direction = "vertical",
    size,
    group,
    name,
    color
}) => {
    return (
        <>
            {
                group ? (<Space
                    direction={direction}
                >
                    {data.map((item, index) => {
                        return <>
                            <Badge
                                key={index}
                                status="success"
                                text={item.name}
                                color={item.color}
                                className={AKClsx(styles.badge, customClass)}
                                size={size}
                            />
                        </>
                    })}
                </Space>)
                    :
                    (<Badge
                        status="success"
                        text={name}
                        color={color}
                        className={AKClsx(styles.badge, customClass)}
                        size={size}
                    />)
            }

        </>
    )
}
