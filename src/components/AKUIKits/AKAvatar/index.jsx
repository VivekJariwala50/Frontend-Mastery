import { Avatar } from "antd";
import { AKClsx } from "@utils";
import styles from "./AKAvatar.module.css";

const AKAvatar = ({
  data,
  shape = "",
  size,
  imgContain,
  single = false,
  icon,
  bg,
  img,
  children,
}) => {
  return (
    <>
      {!single ? (
        <Avatar.Group shape={shape}>
          {data &&
            data?.map((item, index) => {
              return (
                <Avatar
                  size={size}
                  style={{ backgroundColor: item.bg }}
                  icon={item.icon && item.icon}
                  key={`avatar${index}`}
                  src={item.img && item.img}
                  className={AKClsx(
                    styles.avatar,
                    imgContain && styles.imgContain
                  )}
                >
                  {item.children}
                </Avatar>
              );
            })}
        </Avatar.Group>
      ) : (
        <Avatar.Group shape={shape}>
          <Avatar
            size={size}
            style={{ backgroundColor: bg }}
            icon={icon && icon}
            src={img && img}
            className={AKClsx(styles.avatar, imgContain && styles.imgContain)}
          >
            {children}
          </Avatar>
        </Avatar.Group>
      )}
    </>
  );
};

export default AKAvatar;
