// import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
    alert("Login to do Flight booking Hotel booking and ask our experts to make travel journey easy");

  const googleAuth = () => {
    window.open(
      `http://localhost:5000/auth/google/callback`,
      "_self"
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/login.jpg" alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Members Log in</h2>
          {/* <input type="text" className={styles.input} placeholder="Email" />
          <input type="text" className={styles.input} placeholder="Password" /> */}
          {/* <button className={styles.btn}>Log In</button>
          <p className={styles.text}>or</p> */}
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sign in with Google</span>
          </button>
          {/* <p className={styles.text}>
            New Here? <Link to="/signup">Sign Up</Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
