import { AKClsx } from "@utils";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./AKButton.module.css";
const AKButton = ({
  customClass,
  type,
  handleClick,
  borderSize,
  children,
  block,
  icon,
  shape,
  size,
  link,
  ...rest
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(link);
  };
  return (
    <Button
      className={AKClsx(
        styles.button,
        customClass,
        borderSize == "md" ? styles.borderMd : styles.borderSm
      )}
      type={type}
      onClick={link ? handleNavigate : handleClick}
      block={block}
      icon={icon}
      shape={shape}
      size={size}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default AKButton;
