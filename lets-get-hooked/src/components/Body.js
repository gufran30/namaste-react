import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable - Super powerful variable
  const [restaurantList, setRestaurantList] = useState(restaurantData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = restaurantList.filter(
              (res) => res.avgRating > 4.3
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((item) => {
          return <RestaurantCard key={item.id} items={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
