import React, { useState } from "react";
import Avatar from "../Componenet/Avatar";
import styles from "../styles/ChatScreen.module.css";
import { IoMdSend } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import ChatBox from "../Componenet/ChatBox";

const Msgs: string[] = [];

function ChatScreen() {
  const [userMsg, setUserMsg] = useState<string>("");
  const [userAllMsgs, setUserAllMsgs] = useState<string[] | []>(Msgs);

  const sendUserMsg = () => {
    setUserAllMsgs((msgs) => [...msgs, userMsg]);
    setUserMsg("");
  };

  const handleMsgKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") sendUserMsg();
  };

  return (
    <>
      <section>
        <nav className={styles.navbar}>
          <Avatar imageHeight="3rem" />
          <div>
            <h3>Aman Shah Ahamed</h3>
            <h5>Last Login</h5>
          </div>
        </nav>

        <div className={styles.content}>
          {userAllMsgs!.map((msg, i) => (
            <ChatBox
              participentName="Aman Shah Ahamed"
              msg={msg}
              time="2 min ago"
              isReciverMsg={i % 2 == 0}
            />
          ))}
          <ChatBox participentName="Aman Shah Ahamed" msg="" time="2 min ago" />
        </div>

        <div className={styles.sticky_pos}>
          <div className={styles.send_msg}>
            <IoMdAdd className={styles.icon_left} />
            <input
              type="text"
              placeholder="Type Your Message Here ..."
              value={userMsg}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserMsg(e.target.value)
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLElement>) =>
                handleMsgKeyPress(e)
              }
            />
            <button className={styles.btn} onClick={sendUserMsg}>
              {" "}
              <IoMdSend />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChatScreen;
