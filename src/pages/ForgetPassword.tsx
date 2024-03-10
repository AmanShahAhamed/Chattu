import { startTransition } from "react";
import styles from "../styles/common/form.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../Componenet/Card";
function ForgetPassword() {
  const navigate = useNavigate();

  const goToSignInPage = () => {
    startTransition(() => navigate("/"));
  };
  return (
    <section>
      <div className={styles.center_div}>
        <Card>
          <div className={styles["form"]}>
            <h2>Please Enter Your registerd email</h2>

            <form action="#">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
              <br />

              <button type="submit" className={styles.btn}>
                Send Email
              </button>
            </form>
            <p>
              If you have remeber your password click here to{" "}
              <span>
                <button
                  className={styles.text_btn}
                  onClick={() => goToSignInPage()}
                >
                  Sign In
                </button>
              </span>
            </p>
            <p>
              Check your email for a password reset link expiring in 10 minutes.
              Change your password if needed, otherwise, ignore it.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default ForgetPassword;
