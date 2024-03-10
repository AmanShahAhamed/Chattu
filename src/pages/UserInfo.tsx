import Avatar from "../Componenet/Avatar";
import { MdAlternateEmail } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import styles from "../styles/userinfo.module.css";

function UserInfo() {
  return (
    <div className={styles.user_info}>
      <div className={styles.user_avatar}>
        {" "}
        <Avatar />
      </div>
      <div className={styles.user_about}>
        <p>
          Some random data, and when you smite the whole wirds ends up states
          for a while cause you are amazing just the way you are
        </p>
      </div>
      <div className={styles.user_address}>
        <p className={styles.info}>
          <MdAlternateEmail style={{ fontSize: "2rem" }} />
          <span>shah6405@gmail.com</span>
        </p>
        <p className={styles.title}>username</p>
        <p className={styles.info}>
          <FaPerson style={{ fontSize: "2rem" }} />
          <span>Aman Shah Ahamed</span>
        </p>
        <p className={styles.title}>name</p>

        <p className={styles.info}>
          <SlCalender style={{ fontSize: "2rem" }} />
          <span>1 month ago</span>
        </p>
        <p className={styles.title}>joined</p>
      </div>
    </div>
  );
}

export default UserInfo;
