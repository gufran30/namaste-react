import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
    costForTwo,
  } = props.items;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img className="res-image" src={`${CDN_URL}${cloudinaryImageId}`} />
        <div className="overlay">
          <div className="row">
            <h3 className="res-name">{name}</h3>
            <p className="avgRating">&#9733; {avgRating}</p>
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <p className="cuisines">{cuisines.join(", ")}</p>
        <div className="row">
          <p className="price">{costForTwo}</p>
          <p className="delivery-time">{deliveryTime} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
