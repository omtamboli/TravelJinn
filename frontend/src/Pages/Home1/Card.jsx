import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card">
        <img className="card-img-top" src={props.Linkofimage} alt={props.Linkofimage}></img>
        <div className="card-body">
          <h5 className="card-title">{props.placename}</h5>
          {props.content && <p className="card-text">{props.content}</p>}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  Linkofimage: PropTypes.string.isRequired,
  placename: PropTypes.string.isRequired,
  content: PropTypes.string, // Make content prop optional
};

export default Card;
