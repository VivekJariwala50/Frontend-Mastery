import { Col, Row } from "antd";
import { AKBasicCard, AKHead } from '@components';
import AKTags from "@components/AKUIKits/AKTagPills/AKTags";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";
import AKAvatar from "@components/AKUIKits/AKAvatar";
import AKButton from "@components/AKButton";
import { AKClsx } from "@utils";
import { singleUserData, svgIcons, userChatData, userChatListData } from '@const';
import { useState } from "react";
import styles from "./AKChat.module.css";

const AKChat = () => {
  // setting drawer start
  const [openChatSidebarPanel, setOpenChatSidebarPanel] = useState(false);
  const showSettingDrawer = () => {
    setOpenChatSidebarPanel(true);
  };
  const closeSettingDrawer = () => {
    setOpenChatSidebarPanel(false);
  };
  // setting drawer end
  return (
    <>
      <AKHead title="Chat" />
      <AKButton
        type="fill"
        handleClick={showSettingDrawer}
        customClass={AKClsx(styles.openChatSidebarIcon, 
        {
          [styles.closeChatSidebarIcon]: openChatSidebarPanel
        },  
        "pa-0 lh-normal fixed")}
        icon={
          <i class="ri-sidebar-unfold-line"></i>
        }
        size="small"
      >
      </AKButton>
      <Row gutter={[20, 20]}>
        <Col xs={24} lg={8} xl={7} xxl={6} className={AKClsx(styles.chatSidebarPanelWrap, {
          [styles.chatSidebarPanelOpen]: openChatSidebarPanel
        }, "h-full")}>
           <AKButton
            type="fill"
            handleClick={closeSettingDrawer}
            customClass={AKClsx(styles.openChatSidebarIcon, "pa-0 lh-normal fixed")}
            icon={
              <i class="ri-sidebar-unfold-line"></i>
            }
            size="small"
          >
          </AKButton>
          <AKBasicCard customCardBodyClass="pa-0 overflow-unset">
            <AKInput
              placeholder={"Search..."}
              prefix={svgIcons.search}
              AKInputClassname={"mb-5"}
            />
            <div className={AKClsx(styles.userChatListWrap)}>
              <ul>
                {userChatListData.map((item, index) => {
                  return (
                    <li
                      className={AKClsx(
                        styles.userChatList,
                        "flex items-center gap-4 transition-all-03 cursor-pointer"
                      )}
                      key={index}
                    >
                      <div className={AKClsx(styles.userChatImg, "flex-0-auto")}>
                        <AKAvatar
                          data={singleUserData}
                          imgContain="bg-transparent"
                        />
                      </div>
                      <div
                        className={AKClsx(
                          styles.userChatNameContent,
                          "flex gap-3 w-full pl-1"
                        )}
                      >
                        <div className="pr-2">
                          <h4 className="title-color webkit-line-clamp-1 clamp-2 flex items-center gap-3">
                            {item.userName}
                            {item.onlineLabel && (
                              <span
                                className={AKClsx(
                                  styles.onlineLabel,
                                  "visible"
                                )}
                                style={{ background: `${item.onlineLabelBg}` }}
                              ></span>
                            )}
                          </h4>
                          <p className="text-color fw-700 mb-0 webkit-line-clamp-1 clamp-2">
                            {item.userMsg}
                          </p>
                        </div>
                        <div className="ml-auto text-right flex-0-auto">
                          <span className="text-color fw-700">
                            {item.msgTime}
                          </span>
                          <div
                            className={AKClsx(
                              styles.msgNumberText,
                              "text-white flex items-center justify-center bg-kingfisher ml-auto h6"
                            )}
                          >
                            {item.msgNumber}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </AKBasicCard>
        </Col>
        <Col xs={24} lg={16} xl={17} xxl={18} className="h-full">
          <AKBasicCard
            customClass={AKClsx(styles.chatCardBody)}
            customCardBodyClass="pa-0 overflow-unset"
          >
            <div className={AKClsx(styles.chatHead, "flex items-start gap-6")}>
              <div className={AKClsx(styles.userChatImg, "flex-0-auto")}>
                <AKAvatar data={singleUserData} imgContain="bg-transparent" />
              </div>
              <div className="flex items-start justify-center flex-col">
                <h4 className="title-color mb-0 gap-3 flex items-center">
                  Eleanor Pena
                  <span className="text-color fw-700 text-green">Online</span>
                </h4>
                <h6 className="text-color p small">Active 3 hours ago</h6>
              </div>
            </div>
            <div className={AKClsx(styles.userChatContent, "py-5")}>
              <div className="w-full flex justify-center">
                <AKTags
                  color="green"
                  title="Today"
                  customClass="fw-700"
                  pills={true}
                />
              </div>
              {userChatData.map((userChatItem, index) => {
                return (
                  <>
                    {userChatItem.rightSideChat ? <>
                      <div className='mt-5 ml-auto' key={index}>
                        <div className={AKClsx(styles.userChatMsgWrap, "flex flex-col ml-auto")}>
                          <div className="flex items-start gap-4 justify-end">
                            <div className={AKClsx(styles.shareIcon, "flex items-center justify-center h3 cursor-pointer transition-all-03 flex-0-auto")}>
                              <i class="ri-share-forward-fill text-kingfisher"></i>
                            </div>
                            <div className={AKClsx(styles.userChatMsg, "pa-3")}>
                              <h4 className='text-color p big mb-0 word-break text-right'>
                                {userChatItem.msgText}
                              </h4>
                            </div>
                          </div>
                          {userChatItem.msgTimeShow && <h6 className={AKClsx(styles.msgTimeText, "text-color p small mt-1 text-right ml-auto")}>
                            {userChatItem.msgTime}
                          </h6>
                          }
                        </div>
                      </div>
                    </> :
                      <>
                        <div className='mt-5' key={index}>
                          <div className={AKClsx(styles.userChatMsgWrap, "inline-block")}>
                            <div className="flex items-start gap-4">
                              <div className={AKClsx(styles.userChatMsg, "pa-3")}>
                                <h4 className='text-color p big mb-0 word-break'>
                                  {userChatItem.msgText}
                                </h4>
                              </div>
                              <div className={AKClsx(styles.shareIcon, "flex items-center justify-center h3 cursor-pointer transition-all-03 flex-0-auto")}>
                                <i class="ri-share-forward-fill text-kingfisher"></i>
                              </div>
                            </div>
                            {userChatItem.msgTimeShow && <h6 className={AKClsx(styles.msgTimeText, "text-color p small mt-1 text-right")}>
                              {userChatItem.msgTime}
                            </h6>
                            }
                          </div>
                        </div>
                      </>}
                  </>
                );
              })}
            </div>
            <div className={AKClsx(styles.userChatFooter, "flex items-center w-full gap-6")}>
              <AKInput id={"firstName"} type="text" placeholder={"Type your message here..."} class="w-full" />
              <AKButton
                type="fill"
                handleClick={() => console.log("handleClick")}
                customClass={AKClsx(styles.sendMsgBtn, "pa-0 lh-normal")}
                icon={
                  <i class="ri-send-plane-line"></i>
                }
                size="small"
              >
              </AKButton>
            </div>
          </AKBasicCard>
        </Col>
      </Row>
    </>
  );
};

export default AKChat;
