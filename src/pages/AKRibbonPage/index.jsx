import { AKClsx } from "@utils";
import styles from "./AKRibbonPage.module.css";
import { AKHead } from "@components";

const AKRibbonPage = () => {
  return (
    <>
      <AKHead title="Ribbon"></AKHead>
      <div>
        <h3 className="title-color mb-5">Basic Ribbon</h3>
        <div className={AKClsx(styles.cardWrapper, "grid mb-5")}>
          <div className={AKClsx(styles.card, "relative")}>
            <div className={AKClsx(styles.ribbon, "absolute text-white")}>
              Primary
            </div>
            <h4 className="title-color mb-5 text-right">Basic Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
          <div className={AKClsx(styles.card, "relative")}>
            <div
              className={AKClsx(
                styles.ribbon,
                styles.success,
                "absolute text-white"
              )}
            >
              Success
            </div>
            <h4 className="title-color mb-5 text-right">Basic Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
          <div className={AKClsx(styles.card, "relative")}>
            <div
              className={AKClsx(
                styles.ribbon,
                styles.info,
                styles.right,
                "absolute text-white"
              )}
            >
              Info
            </div>
            <h4 className="title-color mb-5">Basic Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
        </div>

        <h3 className="title-color mb-5">Filled Ribbon</h3>
        <div className={AKClsx(styles.cardWrapper, "grid mb-5")}>
          <div className={AKClsx(styles.card, "relative overflow-hidden")}>
            <div
              className={AKClsx(
                styles.ribbon,
                styles.filledRibbon,
                "absolute text-white flex justify-center items-end"
              )}
            >
              Primary
            </div>
            <h4 className="title-color mb-5 text-right">Filled Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
          <div className={AKClsx(styles.card, "relative overflow-hidden")}>
            <div
              className={AKClsx(
                styles.ribbon,
                styles.filledRibbon,
                styles.success,
                "absolute text-white flex justify-center items-end"
              )}
            >
              Success
            </div>
            <h4 className="title-color mb-5 text-right">Filled Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
          <div className={AKClsx(styles.card, "relative overflow-hidden")}>
            <div
              className={AKClsx(
                styles.ribbon,
                styles.filledRibbon,
                styles.info,
                styles.right,
                "absolute text-white flex justify-center items-end"
              )}
            >
              Info
            </div>
            <h4 className="title-color mb-5">Filled Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
        </div>

        <h3 className="title-color mb-5">Shape Ribbon</h3>
        <div className={AKClsx(styles.cardWrapper, "grid mb-5")}>
          <div className={AKClsx(styles.card, "relative overflow-hidden")}>
            <div
              className={AKClsx(
                styles.ribbon,
                styles.shapeRibbon,
                "absolute text-white flex justify-center items-end"
              )}
            >
              Primary
            </div>
            <h4 className="title-color mb-5 text-right">Filled Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
          <div className={AKClsx(styles.card, "relative overflow-hidden")}>
            <div
              className={AKClsx(
                styles.ribbon,
                styles.shapeRibbon,
                styles.success,
                "absolute text-white flex justify-center items-end"
              )}
            >
              Success
            </div>
            <h4 className="title-color mb-5 text-right">Filled Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
          <div className={AKClsx(styles.card, "relative overflow-hidden")}>
            <div
              className={AKClsx(
                styles.ribbon,
                styles.shapeRibbon,
                styles.info,
                styles.right,
                "absolute text-white flex justify-center items-end"
              )}
            >
              Info
            </div>
            <h4 className="title-color mb-5">Filled Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
        </div>

        <h3 className="title-color mb-5">Stripe Ribbon</h3>
        <div className={AKClsx(styles.cardWrapper, "grid mb-5")}>
          <div className={AKClsx(styles.card, "relative")}>
            <div
              className={AKClsx(
                styles.stripeShapeRibbon,
                "absolute text-white"
              )}
            >
              <span className="absolute text-center">Basic</span>
            </div>
            <h4 className="title-color mb-5 text-right">Stripe Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
          <div className={AKClsx(styles.card, "relative ")}>
            <div
              className={AKClsx(
                styles.stripeShapeRibbon,
                styles.success,
                "absolute text-white"
              )}
            >
              <span className="absolute text-center">Standard</span>
            </div>
            <h4 className="title-color mb-5 text-right">Stripe Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
          <div className={AKClsx(styles.card, "relative")}>
            <div
              className={AKClsx(
                styles.stripeShapeRibbon,
                styles.info,
                styles.right,
                "absolute text-white"
              )}
            >
              <span className="absolute text-center">Premium</span>
            </div>
            <h4 className="title-color mb-5">Stripe Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
        </div>

        <h3 className="title-color mb-5">Box Ribbon</h3>
        <div className={AKClsx(styles.cardWrapper, "grid mb-5")}>
          <div className={AKClsx(styles.card, "relative")}>
            <div className={AKClsx(styles.boxRibbon, "absolute text-white")}>
              <span className="realtive text-center">Basic</span>
            </div>
            <h4 className="title-color mb-5 text-right">Box Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
          <div className={AKClsx(styles.card, "relative ")}>
            <div
              className={AKClsx(
                styles.boxRibbon,
                styles.success,
                "absolute text-white"
              )}
            >
              <span className="realtive text-center">Standard</span>
            </div>
            <h4 className="title-color mb-5 text-right">Box Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
          <div className={AKClsx(styles.card, "relative")}>
            <div
              className={AKClsx(
                styles.boxRibbon,
                styles.info,
                styles.right,
                "absolute text-white"
              )}
            >
              <span className="realtive text-center">Premium</span>
            </div>
            <h4 className="title-color mb-5">Box Ribbon</h4>
            <p className="text-color">
              The admin theme page is an important part of any website or
              application&#39;s user interface, as it allows site administrators
              to manage and configure various aspects of the site. The admin
              theme typically has a clean, minimalist aesthetic to allow for
              easy scanning and navigation between settings and options.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AKRibbonPage;
