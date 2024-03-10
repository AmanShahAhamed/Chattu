import Avatar from "../Componenet/Avatar";
import Group from "../Componenet/Group";
import styles from "../styles/UserAndGroup.module.css";

function UserAndGroup() {
  return (
    <>
      <div className={styles.user}>
        <Avatar imageHeight="4rem" />
        <span>Aman Shah Ahamed</span>
      </div>
      <div className={styles.group}>
        <Group imageUrls={[""]} />
        <span>Aman Shah Ahamed</span>
      </div>
      <div className={styles.user}>
        <Avatar imageHeight="4rem" />
        <span>Aman Shah Ahamed</span>
      </div>
      <div className={styles.group}>
        <Group imageUrls={[""]} />
        <span>Aman Shah Ahamed</span>
      </div>
      <div className={styles.user}>
        <Avatar imageHeight="4rem" />
        <span>Aman Shah Ahamed</span>
      </div>
      <div className={styles.group}>
        <Group imageUrls={[""]} />
        <span>Aman Shah Ahamed</span>
      </div>
      <div className={styles.user}>
        <Avatar imageHeight="4rem" />
        <span>Aman Shah Ahamed</span>
      </div>
      <div className={styles.group}>
        <Group imageUrls={[""]} />
        <span>Aman Shah Ahamed</span>
      </div>
      <div className={styles.group}>
        <Group imageUrls={[""]} />
        <span>Aman Shah Ahamed</span>
      </div>
    </>
  );
}

export default UserAndGroup;
