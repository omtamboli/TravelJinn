
import FlightBooking from '../src/Pages/FlightBooking/FlightBooking';
import Home from '../src/Pages/Home/Home';
import Place from '../src/Pages/Home1/Place';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import AskOurExperts from './Pages/AskOurExperts/AskOurExperts';
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/flightbook" element={<FlightBooking />} />
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Place />} />
            <Route path="/askourexperts" element={<AskOurExperts />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
