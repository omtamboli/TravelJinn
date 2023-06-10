import "./App.css";
import FlightBooking from '../src/Pages/FlightBooking/FlightBooking';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/flightbook" element={<FlightBooking />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
