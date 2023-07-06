import styles from "./styles.module.css";
import Navigationbar from "../../Components/Navigationbar/Navigationbar";
// import { useState,useEffect } from "react";
//import axios from "axios";
// import  { useNavigate }  from "react-router-dom";

let isFirstCall = localStorage.getItem("isFirstCall");

function Profile() {

    if (isFirstCall === null) {
        isFirstCall = true;
        localStorage.setItem("isFirstCall", "true");
      } else {
        isFirstCall = false;
      }

 //   const navigate=useNavigate();
//   const [user, setUser] = useState(null);
  const logout = () => {
    window.open(`http://localhost:5000/auth/logout`, "_self");
};


// useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const userQueryParam = urlParams.get('user');
    const user=JSON.parse(decodeURIComponent(userQueryParam));
    console.log(user);
    alert("Welcome " + user._json.name);

console.log("789");
  return (
    <div>
        <Navigationbar />
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img
            className={styles.img}
            src="./images/profile.jpg"
            alt="login"
          />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Profile</h2>
          <img
            src={user._json.picture}
            alt="profile"
            className={styles.profile_img}
          />
          <input
            type="text"
            defaultValue={user._json.name}
            className={styles.input}
            placeholder="Username"
          />
          <input
            type="text"
            defaultValue={user._json.email}
            className={styles.input}
            placeholder="Email"
          />
          {/* <button className={styles.btn} onClick={flight}>
            Flight Book
          </button>
          <button className={styles.btn} onClick={hotel}>
            Hotel Book
          </button> */}
          {/* <button className={styles.btn} onClick={logout}>
            Ask Our Experts
          </button> */}
          <a href="/flightbook" className={styles.btn} >Flight Book</a>
          <a href="/hotelbook" className={styles.btn} >Hotel Book</a>
          <button className={styles.btn} onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
export { isFirstCall }; // Export the isFirstCall variable
export default Profile;
