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
    <div className="res-card w-[200px] p-3 m-5 bg-stone-300 rounded-xl">
      <div className="res-img-containerbg-red-400 rounded-lg overflow-hidden  ">
        <img
          className="res-image h-40 w-full object-cover"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
      </div>
      <div className="bottom-content mt-2">
        <h3 className="res-name font-semibold text-lg">{name}</h3>
        <p className="avgRating">&#9733; {avgRating}</p>
        <div className="row">
          <p className="price">{costForTwo}</p>
          <p className="delivery-time">{deliveryTime} minutes</p>
        </div>
      </div>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label>Open</label>
        <RestaurantCard />
      </div>
    );
  };
};

export default RestaurantCard;
