
import { Image, Button } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <>
      <Image src={img} rounded className="w-100" />
      <p>₹{amount}</p>
      <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
    </>
  );
};

export default Card;
