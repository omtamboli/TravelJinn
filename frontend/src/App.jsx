import "./App.css";
import FlightBooking from '../src/Pages/FlightBooking/FlightBooking';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/flightbook" element={<FlightBooking />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
