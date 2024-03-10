import styles from "../styles/common/form.module.css";
import userImage from "../assets/images/profile.png";
import { ChangeEvent, startTransition, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Componenet/Card";
import Avatar from "../Componenet/Avatar";

function Signup() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<string>(userImage);

  const goToSignInPage = () => {
    startTransition(() => navigate("/"));
  };

  const previewImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setUserProfile(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <section>
        <div className={styles.center_div}>
          <Card>
            <div className={styles["form"]}>
              <form action="#">
                <label htmlFor="profile">Profile</label>
                <Avatar imageUrl={userProfile} />
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  onChange={previewImage}
                />
                <label htmlFor="name">Name</label>
                <input type="text" name="username" />
                <br />
                <label htmlFor="username">Email</label>
                <input type="text" name="username" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <br />
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" name="confirm_password" />
                <br />
                <button type="submit" className={styles.btn}>
                  Create An Account
                </button>
              </form>
              <p>
                If you have a already an account click here to{" "}
                <span>
                  <button
                    className={styles.text_btn}
                    onClick={() => goToSignInPage()}
                  >
                    Sign in
                  </button>
                </span>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Signup;
