import styles from "../styles/common/avatar.module.css";
import userImage from "../assets/images/profile.png";
import afiya from "../assets/images/afiya.jpg";

interface AvatarIntefce {
  imageUrl?: string;
  imageHeight?: string;
}

function Avatar({ imageUrl, imageHeight }: AvatarIntefce) {
  const imageStyle = { height: imageHeight || "10rem" };
  const userProfile = afiya || userImage;
  return (
    <div>
      {" "}
      <div className={styles.circular_image}>
        <img src={userProfile} style={imageStyle} alt="User Profile Image" />
      </div>
    </div>
  );
}

export default Avatar;
