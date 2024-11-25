import { AKClsx } from "@utils"
import styles from "./AKCreativeLoader.module.css"

export const AKCreativeLoader = ({
  size,
}) => {
  return (
    <>
      <div
        className={AKClsx(styles.AKCreativeLoader,
          {
            [styles.smallLoader]: size === "small",
            [styles.largeLoader]: size === "large"
          })}
      >
      </div>
    </>
  )
}