import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../HotelSearch/HotelSearchForm.css'
import {cityCodes} from '../../Constants/cityCodes'
import Navigationbar from '../Navigationbar/Navigationbar';

const HotelSearchForm = () => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [adult, setAdult] = useState(null);
  const [children, setChildren] = useState(null);

  


const handleSearch = async () => {
  console.log('Destination:', destination);
  console.log('Start Date:', checkIn);
  console.log('End Date:', checkOut);
  console.log('Adult:', adult);
  console.log('Children:', children);
  
    const destinationCode = cityCodes[destination];

    const baseUrl = 'https://www.makemytrip.com/hotels/hotel-listing/?_uCurrency=INR';
    
  
    let formattedStartDate = checkIn ? checkIn.toLocaleDateString('en-GB') : '';
    let formattedEndDate = checkOut ? checkOut.toLocaleDateString('en-GB') : '';
  
    let parts = formattedStartDate.split('/'); // Split the date string at the slashes
    formattedStartDate = parts[1] + parts[0] + parts[2];

    let parts2 = formattedEndDate.split('/'); // Split the date string at the slashes
    formattedEndDate = parts2[1] + parts2[0] + parts2[2];
    const checkinParam = `checkin=${formattedStartDate}`;
    const checkoutParam = `checkout=${formattedEndDate}`;
    const destinationParam = `city=CT${destinationCode}&country=IN&filterData=HOTEL_PRICE_BUCKET%7C0-2000&locusId=CT${destinationCode}&locusType=city&reference=hotel`;
   
    const adultsParam =`${adult}e`; 
    const childrenParam =`${children}e`; 
  
    // const destParam = `searchText=${destination}%2C%20India`;
 
    const searchUrl = `${baseUrl}&${checkinParam}&${checkoutParam}&${destinationParam}&roomStayQualifier=${adultsParam}${childrenParam}`;
  
    // Open a new tab with the search URL
    window.open(searchUrl, '_blank');
 
  
};

  return (
    <>
   
    <div className="container hotel">
    <Navigationbar />
    <div className="down">
    {/* <p className="heading">Select the affordable Hotels with us!</p> */}
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title mb-4">Hotel Search</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="destination">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="destination"
                    placeholder="Enter Location"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="startDate">Check In Date</label>
                  <DatePicker
                    id="startDate"
                    className="form-control"
                    selected={checkIn}
                    onChange={(date) => setCheckIn(date)}
                    placeholderText="Select Check-In Date"
                    dateFormat="MM-dd-yyyy"
                  />
                </div>
                  <div className="form-group">
                    <label htmlFor="endDate">Check Out date</label>
                    <DatePicker
                      id="endDate"
                      className="form-control"
                      selected={checkOut}
                      onChange={(date) => setCheckOut(date)}
                      placeholderText="Select Check-Out Date"
                      dateFormat="MM-dd-yyyy"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="adults">Adults</label>
                    <select
                    className="form-control"
                    id="adults"
                    placeholder="Select No. of Adults"
                    value={adult}
                    onChange={(e) => setAdult(e.target.value)}
                    >
                    {Array.from({ length: 20 }, (_, i) => (
                    <option key={i} value={i}>{i}</option>
                    ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="adults">Children</label>
                    <select
                    className="form-control"
                    id="children"
                    placeholder="Select No. of Children"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    >
                    {Array.from({ length: 20 }, (_, i) => (
                    <option key={i} value={i}>{i}</option>
                    ))}
                    </select>
                  </div>
                  <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSearch}
                >
                  Search Hotels
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );

};

export default HotelSearchForm;
