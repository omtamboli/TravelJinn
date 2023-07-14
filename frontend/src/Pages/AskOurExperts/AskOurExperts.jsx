/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
import { useState } from "react";
import '../AskOurExperts/AskOurExperts.css';
import Navigationbar from "../../Components/Navigationbar/Navigationbar";

const AskOurExperts = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [plan, setPlan] = useState({
    name: "TravelJinn Ask Our Experts Plan",
    img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
    price: 500,
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const initPayment = async (data) => {
    const options = {
      key: "rzp_test_Va7TNOjnzNmXpL",
      amount: data.amount,
      currency: data.currency,
      name: plan.name,
      description: "Test Transaction",
      image: plan.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);

          // Store the payment details, name, and email to the database
          savePaymentDetails(data, user);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#ff677",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const savePaymentDetails = async (paymentData, userData) => {
    try {
      const paymentDetails = {
        paymentId: paymentData.id,
        amount: paymentData.amount,
        currency: paymentData.currency,
        name: userData.name,
        email: userData.email,
      };

      // Make an API call to save payment details to the database
      const savePaymentUrl = "http://localhost:5000/api/payment/save";
      const response = await axios.post(savePaymentUrl, paymentDetails);
      console.log(response.data);
	  alert('Payment Successful Thanks for using our service! we will catch you soon!!')
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const orderUrl = "http://localhost:5000/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: plan.price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
	<>
	<Navigationbar />
    <div className="AskOurExperts">
	  <h1>Ask Our Experts for your dream journey</h1>
      <div className="plan_container">
        <p className="plan_name">{plan.name}</p>
        <p className="plan_price">
          Price: <span>&#x20B9; {plan.price}</span>
        </p>
		<div className="promotion_info">
          <p>Discover the perfect travel experience with TravelJinn</p>
          <p>Our experts are ready to assist you in planning your dream journey</p>
          <p>Get personalized recommendations, itinerary suggestions, and more</p>
        </div>
        <form className="ask">
          <input
           className="askour"
            type="text"
            name="name"
            placeholder="Name"
            required
            value={user.name}
            onChange={handleInputChange}
          />
          <input
          className="askour"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={user.email}
            onChange={handleInputChange}
          />
          <button onClick={handlePayment} className="buy_btn">
            Buy Now
          </button>
        </form>
      </div>
    </div>
	</>
  );
};

export default AskOurExperts;
