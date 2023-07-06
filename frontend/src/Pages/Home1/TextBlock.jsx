import { useState } from "react";
import axios from "axios";
import  { useNavigate }  from "react-router-dom"
import "../Home1/Home1.css";
import "../Home1/TextBlock.css";

let dest;
function TextBlock() {
  const [user, setUser] = useState({
    name: "",
  });

  function handleChange(event) {
    const newuser = { ...user };
    newuser[event.target.id] = event.target.value;
    setUser(newuser);
    console.log(newuser);
  }

  const navigate=useNavigate();

  function handleClick(event) {    
    event.preventDefault();
    dest=user.name+ ",India";
    console.log(user.name);
    axios
      .post("http://localhost:5000/endpoint", { value: user.name + ",India" })
      .then((response) => {
        console.log("Response from backend:", response.data.message);
        navigate("/places"); // Redirect to "/places" page
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="textblockdiv" id="textblock">
      <div id="textblock-container">
        <h1 id="textblock-title">Unlock the secrets of travel: </h1>
        <form onSubmit={handleClick} className="mt-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control rounded-start"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Where do you want to unlock your next adventure?"
              aria-label="Where do you want to unlock your next adventure?"
              aria-describedby="search-button"
            />
            <button
              className="btn btn-dark rounded-end"
              type="submit"
              id="search-button"
            >
              <i className="bi bi-search">Search</i>
            </button>
          </div>
        </form>
        <p id="textblock-content">
          <br></br>
          Travel Jinn is a web application that aims to provide you with tourist
          destination suggestions, flight booking functionality, hotel booking
          functionality and expert advice for their travel plans.
          <br></br>
          <br></br>
          You can explore various tourist places, book flights, leave reviews,
          and seek guidance from travel experts. Just search the place you want to visit in above search bar.
        </p>
      </div>
      <footer id="textblock-footer">
        © 2023 Travel Jinn All Rights Reserved.
      </footer>
    </div>
  );
}

export default TextBlock;
export {dest};