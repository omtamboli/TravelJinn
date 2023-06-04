
import FlightBooking from '../src/Pages/FlightBooking/FlightBooking';
import Home from '../src/Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
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
