// import userImage from "../assets/images/profile.png";
import userImage from "../assets/images/afiya.jpg";
import styles from "../styles/common/Group.module.css";
interface GroupProps {
  imageUrls: string[];
}

function Group({ imageUrls }: GroupProps) {
  const image = userImage;
  return (
    <div className={styles.circular_image}>
      <img src={image} className={styles.img1} alt="User Profile Image" />
      <img src={image} className={styles.img2} alt="User Profile Image" />
      <img src={image} className={styles.img3} alt="User Profile Image" />
    </div>
  );
}

export default Group;
