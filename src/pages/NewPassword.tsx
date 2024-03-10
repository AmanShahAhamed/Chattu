import Card from "../Componenet/Card";
import styles from "../styles/common/form.module.css";

function NewPassword() {
  return (
    <section>
      <div className={styles.center_div}>
        <Card>
          <div className={styles.form}>
            <form>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" />
              <label htmlFor="password">Confirm Password</label>
              <input type="text" name="password" />
              <button type="submit" className={styles.btn}>
                Create New Password
              </button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default NewPassword;
