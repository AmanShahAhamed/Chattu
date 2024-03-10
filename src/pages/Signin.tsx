import { startTransition } from "react";
import styles from "../styles/common/form.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../Componenet/Card";

function Signin() {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    startTransition(() => navigate("signup"));
  };

  const goToForgetPasswordPage = () => {
    startTransition(() => navigate("forget/password"));
  };

  return (
    <section>
      <div className={styles.center_div}>
        <Card>
          <div className={styles["form"]}>
            <form action="#">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" />
              <br />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
              <br />
              <button type="submit" className={styles.btn}>
                Signin
              </button>
            </form>
            <p>
              If you have not account click here to{" "}
              <span>
                <button
                  className={styles.text_btn}
                  onClick={() => goToSignUpPage()}
                >
                  Create A New Account
                </button>
              </span>
            </p>
            <p>
              If you forget your password click here to{" "}
              <span>
                <button
                  className={styles.text_btn}
                  onClick={() => goToForgetPasswordPage()}
                >
                  Generate A New Password
                </button>
              </span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Signin;
