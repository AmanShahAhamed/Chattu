import styles from "../styles/common/chatBox.module.css";
import { BiCheckDouble } from "react-icons/bi";
interface ChatBaxProps {
  participentName: string;
  msg: string;
  time: string;
  isReciverMsg?: boolean;
  isSeen?: boolean;
}

function ChatBox({ participentName, msg, time, isReciverMsg }: ChatBaxProps) {
  const chatStyle = { marginLeft: isReciverMsg ? "70%" : "2%" };
  return (
    <>
      {msg ? (
        <div className={styles.left_chat} style={chatStyle}>
          <h5>{participentName}</h5>
          <p className={styles.user_msg}>{msg}</p>
          <p>{time}</p>
          <div className={styles.tick}>
            {!isReciverMsg && <BiCheckDouble />}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ChatBox;
