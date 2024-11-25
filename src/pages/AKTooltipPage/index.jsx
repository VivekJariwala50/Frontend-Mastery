import { AKHead, AKBasicCard, AKTooltip } from "@components";
import { AKClsx } from "@utils";
import { Button } from "antd";
import styles from "./AKTooltipPage.module.css";

const AKTooltipPage = () => {
  return (
    <>
      <AKHead title="Tooltip"></AKHead>
      <div className={AKClsx(styles.AKTooltipCardWrapper, "grid")}>
        <AKBasicCard cardTitle="Basic Tooltip:">
          <AKTooltip title="Basic Tooltip" tooltipText="Basic Tooltip">
            <span className="title-color">Basic Tooltip</span>
          </AKTooltip>
        </AKBasicCard>
        <AKBasicCard cardTitle="Tooltip With Hidden Arrow:">
          <AKTooltip
            title="Tooltip With Hidden Arrow"
            tooltipText="Tooltip With Hidden Arrow"
            arrow={false}
          >
            <span className="title-color">Tooltip With Hidden Arrow</span>
          </AKTooltip>
        </AKBasicCard>
        <AKBasicCard
          cardTitle="Tooltip With Trigger Mode:"
          customCardBodyClass="flex gap-4 flex-wrap"
        >
          <AKTooltip title="Focus Me" tooltipText="Focus Me" trigger="focus">
            <Button className="text-color">Focus Me</Button>
          </AKTooltip>
          <AKTooltip title="Click Me" tooltipText="Click Me" trigger="click">
            <Button className="text-color">Click Me</Button>
          </AKTooltip>
        </AKBasicCard>
        <AKBasicCard cardTitle="Tooltip With Directions:">
          <h4 className="mb-2 text-color">Tooltip Direction Top:</h4>
          <div className="flex gap-4 mb-4 flex-wrap">
            <AKTooltip
              title="Top Left "
              tooltipText="Top Left  Tooltip"
              placement="topLeft"
            >
              <Button className="text-color">Left Top</Button>
            </AKTooltip>
            <AKTooltip title="Top" tooltipText="Top Tooltip" placement="top">
              <Button className="text-color">Top</Button>
            </AKTooltip>
            <AKTooltip
              title="Top Right"
              tooltipText="Top Right Tooltip"
              placement="topRight"
            >
              <Button className="text-color">Top Right</Button>
            </AKTooltip>
          </div>
          <h4 className="mb-2 text-color">Tooltip Direction Left & Right:</h4>
          <div
            className={AKClsx(
              styles.tooltipDirectionCard,
              "flex justify-between mb-4 gap-4"
            )}
          >
            <div className="flex flex-col gap-4">
              <AKTooltip
                title="Left Top"
                tooltipText="Left Top Tooltip"
                placement="leftTop"
              >
                <Button className="text-color">Left Top</Button>
              </AKTooltip>
              <AKTooltip
                title="Left"
                tooltipText="Left Tooltip"
                placement="left"
              >
                <Button className="text-color">Left</Button>
              </AKTooltip>
              <AKTooltip
                title="Left Bottom"
                tooltipText="Left Bottom Tooltip"
                placement="leftBottom"
              >
                <Button className="text-color">Left Bottom</Button>
              </AKTooltip>
            </div>
            <div className="flex flex-col gap-4">
              <AKTooltip
                title="Right Top"
                tooltipText="Right Top Tooltip"
                placement="rightTop"
              >
                <Button className="text-color">Right Top</Button>
              </AKTooltip>
              <AKTooltip
                title="Right"
                tooltipText="Right Tooltip"
                placement="right"
              >
                <Button className="text-color">Right</Button>
              </AKTooltip>
              <AKTooltip
                title="Right Bottom"
                tooltipText="Right Bottom Tooltip"
                placement="rightBottom"
              >
                <Button className="text-color">Right Bottom</Button>
              </AKTooltip>
            </div>
          </div>
          <h4 className="mb-2 text-color">Tooltip Direction Bottom:</h4>
          <div className="flex gap-4 mb-4 flex-wrap">
            <AKTooltip
              title="Bottom Left"
              tooltipText="Bottom Left Tooltip"
              placement="bottomLeft"
            >
              <Button className="text-color">Bottom Left</Button>
            </AKTooltip>
            <AKTooltip
              title="Bottom"
              tooltipText="Bottom Tooltip"
              placement="bottom"
            >
              <Button className="text-color">Bottom</Button>
            </AKTooltip>
            <AKTooltip
              title="Bottom Right"
              tooltipText="Bottom Right Tooltip"
              placement="bottomRight"
            >
              <Button className="text-color">Bottom Right</Button>
            </AKTooltip>
          </div>
        </AKBasicCard>
      </div>
    </>
  );
};

export default AKTooltipPage;
