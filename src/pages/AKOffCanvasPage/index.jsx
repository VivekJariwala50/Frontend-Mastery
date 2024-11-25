import { AKBasicCard, AKDrawer, AKHead } from "@components";
import AKButton from "@components/AKButton";
import { AKClsx } from "@utils";
import { useState } from "react";
import styles from "./AKOffCanvasPage.module.css";

const AKOffCanvasPage = () => {
  const [showBasicDrawer, setShowBasicDrawer] = useState(false);
  const [showDrawerLeft, setShowDrawerLeft] = useState(false);
  const [showDrawerTop, setShowDrawerTop] = useState(false);
  const [showDrawerBottom, setShowDrawerBottom] = useState(false);
  const [showDrawerLarge, setShowDrawerLarge] = useState(false);

  const handleBasicOffCanvasShow = () => {
    setShowBasicDrawer(true);
  };

  const handleBasicOffCanvasClose = () => {
    setShowBasicDrawer(false);
  };

  const handleLeftOffCanvasShow = () => {
    setShowDrawerLeft(true);
  };

  const handleLeftOffCanvasClose = () => {
    setShowDrawerLeft(false);
  };

  const handleTopOffCanvasShow = () => {
    setShowDrawerTop(true);
  };

  const handleTopOffCanvasClose = () => {
    setShowDrawerTop(false);
  };

  const handleBottomOffCanvasShow = () => {
    setShowDrawerBottom(true);
  };

  const handleBottomOffCanvasClose = () => {
    setShowDrawerBottom(false);
  };

  const handleLargeOffCanvasShow = () => {
    setShowDrawerLarge(true);
  };

  const handleLargeOffCanvasClose = () => {
    setShowDrawerLarge(false);
  };

  return (
    <div className={AKClsx(styles.AKOffCanvasCardWrapper, "grid")}>
      <AKHead title="OffCanvas"></AKHead>
      <AKBasicCard cardTitle="Basic OffCanvas:">
        <AKButton
          customClass="mr-2"
          type="fill"
          handleClick={handleBasicOffCanvasShow}
        >
          Basic Off-canvas
        </AKButton>
        <AKDrawer
          handleClose={handleBasicOffCanvasClose}
          setOpen={showBasicDrawer}
        >
          <div>
            <h2 className="title-color mb-4">Basic Off-Canvas</h2>
            <div>
              <p className="text-color">
                The admin theme page is an important part of any website or
                application&#39;s user interface, as it allows site
                administrators to manage and configure various aspects of the
                site. The admin theme typically has a clean, minimalist
                aesthetic to allow for easy scanning and navigation between
                settings and options.
              </p>
            </div>
          </div>
        </AKDrawer>
      </AKBasicCard>
      <AKBasicCard cardTitle="OffCanvas Size Large:">
        <AKButton
          customClass="mr-2"
          type="fill"
          handleClick={handleLargeOffCanvasShow}
        >
          Size Large Off-Canvas
        </AKButton>
        <AKDrawer
          handleClose={handleLargeOffCanvasClose}
          setOpen={showDrawerLarge}
          size="large"
        >
          <div>
            <h2 className="title-color mb-4">Size Large Off-Canvas</h2>
            <div>
              <p className="text-color">
                The admin theme page is an important part of any website or
                application&#39;s user interface, as it allows site
                administrators to manage and configure various aspects of the
                site. The admin theme typically has a clean, minimalist
                aesthetic to allow for easy scanning and navigation between
                settings and options.
              </p>
            </div>
          </div>
        </AKDrawer>
      </AKBasicCard>
      <AKBasicCard
        cardTitle="OffCanvas Placement:"
        customCardBodyClass="flex gap-4 flex-wrap"
      >
        <div>
          <AKButton
            customClass="mr-2"
            type="fill"
            handleClick={handleLeftOffCanvasShow}
          >
            Off-Canvas Left
          </AKButton>
          <AKDrawer
            handleClose={handleLeftOffCanvasClose}
            setOpen={showDrawerLeft}
            placement="left"
          >
            <div>
              <h2 className="title-color mb-4">Off-Canvas Left</h2>
              <div>
                <p className="text-color">
                  The admin theme page is an important part of any website or
                  application&#39;s user interface, as it allows site
                  administrators to manage and configure various aspects of the
                  site. The admin theme typically has a clean, minimalist
                  aesthetic to allow for easy scanning and navigation between
                  settings and options.
                </p>
              </div>
            </div>
          </AKDrawer>
        </div>
        <div>
          <AKButton
            customClass="mr-2"
            type="fill"
            handleClick={handleTopOffCanvasShow}
          >
            Off-Canvas Top
          </AKButton>
          <AKDrawer
            handleClose={handleTopOffCanvasClose}
            setOpen={showDrawerTop}
            placement="top"
          >
            <div>
              <h2 className="title-color mb-4">Off-Canvas Top</h2>
              <div>
                <p className="text-color">
                  The admin theme page is an important part of any website or
                  application&#39;s user interface, as it allows site
                  administrators to manage and configure various aspects of the
                  site. The admin theme typically has a clean, minimalist
                  aesthetic to allow for easy scanning and navigation between
                  settings and options.
                </p>
              </div>
            </div>
          </AKDrawer>
        </div>
        <div>
          <AKButton
            customClass="mr-2"
            type="fill"
            handleClick={handleBottomOffCanvasShow}
          >
            Off-Canvas Bottom
          </AKButton>
          <AKDrawer
            handleClose={handleBottomOffCanvasClose}
            setOpen={showDrawerBottom}
            placement="bottom"
          >
            <div>
              <h2 className="title-color mb-4">Off-Canvas Bottom</h2>
              <div>
                <p className="text-color">
                  The admin theme page is an important part of any website or
                  application&#39;s user interface, as it allows site
                  administrators to manage and configure various aspects of the
                  site. The admin theme typically has a clean, minimalist
                  aesthetic to allow for easy scanning and navigation between
                  settings and options.
                </p>
              </div>
            </div>
          </AKDrawer>
        </div>
      </AKBasicCard>
    </div>
  );
};
export default AKOffCanvasPage;
