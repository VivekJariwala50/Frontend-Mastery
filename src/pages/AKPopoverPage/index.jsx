import { AKBasicCard, AKPopover, AKHead } from "@components";
import { AKClsx } from "@utils";
import { Button } from "antd";
import styles from "./AKPopoverPage.module.css";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const AKPopoverPage = () => {
  return (
    <>
      <AKHead title="Popover" />
      <div className={AKClsx(styles.AKPopoverCardWrapper, "grid")}>
        <AKBasicCard cardTitle="Basic Popover:">
          <AKPopover content={content} title={"Title"}>
            <Button className={styles.AKPopoverButton}>Basic Popover</Button>
          </AKPopover>
        </AKBasicCard>
        <AKBasicCard cardTitle="Popover With Hidden Arrow:">
          <AKPopover content={content} title={"Title"} arrow={false}>
            <Button className={styles.AKPopoverButton}>
              Popover with hidden arrow
            </Button>
          </AKPopover>
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Popover With Trigger Mode:"
          customCardBodyClass="flex gap-4 flex-wrap"
        >
          <AKPopover content={content} title={"Title"} trigger="focus">
            <Button className={styles.AKPopoverButton}>Focus Me</Button>
          </AKPopover>
          <AKPopover content={content} title={"Title"} trigger="click">
            <Button className={styles.AKPopoverButton}>Click Me</Button>
          </AKPopover>
        </AKBasicCard>
        <AKBasicCard cardTitle="Popover With Directions:">
          <h4 className="mb-2 title-color">Popover Direction Top:</h4>
          <div className="flex gap-4 mb-4 flex-wrap">
            <AKPopover content={content} title={"Title"} placement="topLeft">
              <Button className={styles.AKPopoverButton}>
                Top Left Popover
              </Button>
            </AKPopover>
            <AKPopover content={content} title={"Title"} placement="top">
              <Button className={styles.AKPopoverButton}>Top Popover</Button>
            </AKPopover>
            <AKPopover content={content} title={"Title"} placement="topRight">
              <Button className={styles.AKPopoverButton}>
                Top Right Popover
              </Button>
            </AKPopover>
          </div>
          <h4 className="mb-2 title-color">Popover Direction Left & Right:</h4>
          <div
            className={AKClsx(
              styles.tooltipDirectionCard,
              "flex justify-between mb-4 gap-4"
            )}
          >
            <div className="flex flex-col gap-4">
              <AKPopover content={content} title={"Title"} placement="leftTop">
                <Button className={styles.AKPopoverButton}>
                  Left Top Popover
                </Button>
              </AKPopover>
              <AKPopover content={content} title={"Title"} placement="left">
                <Button className={styles.AKPopoverButton}>Left Popover</Button>
              </AKPopover>
              <AKPopover
                content={content}
                title={"Title"}
                placement="leftBottom"
              >
                <Button className={styles.AKPopoverButton}>
                  Left Bottom Popover
                </Button>
              </AKPopover>
            </div>
            <div className="flex flex-col gap-4 text-right">
              <AKPopover content={content} title={"Title"} placement="rightTop">
                <Button className={styles.AKPopoverButton}>
                  Right Top Popover
                </Button>
              </AKPopover>
              <AKPopover content={content} title={"Title"} placement="right">
                <Button className={styles.AKPopoverButton}>
                  Right Popover
                </Button>
              </AKPopover>
              <AKPopover
                content={content}
                title={"Title"}
                placement="rightBottom"
              >
                <Button className={styles.AKPopoverButton}>
                  Right Popover
                </Button>
              </AKPopover>
            </div>
          </div>
          <h4 className="mb-2 title-color">Popover Direction Bottom:</h4>
          <div className="flex gap-4 mb-4 flex-wrap">
            <AKPopover content={content} title={"Title"} placement="bottomLeft">
              <Button className={styles.AKPopoverButton}>
                Bottom Left Popover
              </Button>
            </AKPopover>
            <AKPopover content={content} title={"Title"} placement="bottom">
              <Button className={styles.AKPopoverButton}>Bottom</Button>
            </AKPopover>
            <AKPopover
              content={content}
              title={"Title"}
              placement="bottomRight"
            >
              <Button className={styles.AKPopoverButton}>
                Bottom Right Popover
              </Button>
            </AKPopover>
          </div>
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKPopoverPage;
