import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../FlightSearch/FlightSearchForm.css'
// import Amadeus from 'amadeus';
import {cityCodes} from '../../Constants/cityCodes'
import Navigationbar from '../Navigationbar/Navigationbar';


const FlightSearchForm = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  


const handleSearch = async () => {
  console.log('Departure:', departure);
  console.log('Destination:', destination);
  console.log('Start Date:', startDate);
  console.log('End Date:', endDate);
  console.log('Is Round Trip:', isRoundTrip);
  
    // Perform the flight search here
    const departureCode = cityCodes[departure];
    const destinationCode = cityCodes[destination];
  
    // Example code to construct the search URL
    const baseUrl = 'https://www.cleartrip.com/flights/results?';
    const adultsParam = 'adults=1'; // Assuming 1 adult by default
    const childsParam = 'childs=0'; // Assuming 0 children by default
    const infantsParam = 'infants=0'; // Assuming 0 infants by default
    const classParam = 'class=Economy'; // Assuming Economy class by default
  
    const formattedStartDate = startDate ? startDate.toLocaleDateString('en-GB') : '';
    const formattedEndDate = endDate ? endDate.toLocaleDateString('en-GB') : '';
  
    const departDateParam = `depart_date=${formattedStartDate}`;
    const returnDateParam = `return_date=${formattedEndDate}`;
    const fromParam = `from=${departureCode}`;
    const toParam = `to=${destinationCode}`;
    const originParam = `origin=${departureCode} - ${departure}, IN`;
    const destinationParam = `destination=${destinationCode} - ${destination}, IN`;
  
    const searchUrl = `${baseUrl}${adultsParam}&${childsParam}&${infantsParam}&${classParam}&${departDateParam}&${fromParam}&${toParam}&intl=n&${originParam}&${destinationParam}&sft=&sd=${Date.now()}&rnd_one=R&sourceCountry=${departure}&destinationCountry=${destination}&${returnDateParam}`;
  
    // Open a new tab with the search URL
    window.open(searchUrl, '_blank');
 
  
};

  return (
    <>
   
    <div className="container flyt">
    <Navigationbar />
    <h1 className="heading">Search the affordable flights with us!</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title mb-4">Flight Search</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="departure">Departure</label>
                  <input
                    type="text"
                    className="form-control"
                    id="departure"
                    placeholder="Enter departure airport"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="destination">Destination</label>
                  <input
                    type="text"
                    className="form-control"
                    id="destination"
                    placeholder="Enter destination airport"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="startDate">Start Date</label>
                  <DatePicker
                    id="startDate"
                    className="form-control"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Select start date"
                    dateFormat="yyyy-MM-dd"
                  />
                </div>
                {isRoundTrip && (
                  <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <DatePicker
                      id="endDate"
                      className="form-control"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      placeholderText="Select end date"
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                )}
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="roundTrip"
                    checked={isRoundTrip}
                    onChange={(e) => setIsRoundTrip(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="roundTrip">
                    Round Trip
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSearch}
                >
                  Search Flights
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );

};

export default FlightSearchForm;





// Initialize Amadeus with your API credentials
// const amadeus = new Amadeus({
//   clientId: 'Ke4fMeD5TMbmPLHaGwuMhC5Py8n0FOXu',
//   clientSecret: 'ZXk80pPEEOudBmUl',
// });



