import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { dest } from "../Home1/TextBlock";
import "../Home1/Place.css"
import Navigationbar from "../../Components/Navigationbar/Navigationbar";
function Place() {
  const [jsonplace, setJsonplace] = useState([]);
  const [loadingText, setLoadingText] = useState("Loading"); // Track loading text
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingText((prevText) => {
        if (prevText === "Loading...") {
          return "Loading";
        } else {
          return prevText + ".";
        }
      });
    }, 300); // Change the loading text every 500 milliseconds

    axios
      .get("http://localhost:5000/endpoint")
      .then((response) => {
        setJsonplace(response.data);
        setLoading(false); // Set loading state to false after data is fetched
        clearInterval(loadingInterval); // Stop the loading text interval
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    return () => {
      clearInterval(loadingInterval); // Cleanup: Stop the loading text interval
    };
  }, []);

  return (
    <div>
        <Navigationbar />
      <div className="container-fluid clubcolor">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center white-bg">Place to visit in {dest}</h1>
            {loading ? ( // Conditional rendering based on loading state
              <h1 className="text-center">{loadingText}</h1>
            ) : (
              <>
                <div className="clubsboxes row">
                  {jsonplace.map((val) => {
                    return (
                      <Card
                        key={val.key}
                        placename={val.name}
                        content={val.description}
                        Linkofimage={val.ImageLink}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
