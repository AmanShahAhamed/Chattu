import UserInfo from "./UserInfo";
import styles from "../styles/home.module.css";
import ChatScreen from "./ChatScreen";
import UserAndGroup from "./UserAndGroup";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.red}>
        <UserAndGroup />
      </div>
      <div>
        <ChatScreen />
      </div>
      <div className={styles.grey}>
        <UserInfo />
      </div>
    </div>
  );
}

export default Home;
