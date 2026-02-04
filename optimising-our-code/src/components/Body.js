import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State Variable - Super powerful variable
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // useEffect is js function like useState() hook
  useEffect(() => {
    console.log("useEffect called - BODY");
    fetchData();
  }, []);

  console.log("body rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.34035&lng=81.902497&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // optional chaining  => ?
    const newResList =
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(newResList);
    setFilteredRestaurant(newResList);
  };

  //  using CUSTOM HOOK  here--------------------------------------
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="offline-div">
        <h1>
          Looks like you are offline, Please check your internet connection.
        </h1>
      </div>
    );
  }

  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="submit-btn"
            onClick={() => {
              // filter the restaurant card & update the UI
              // searchText
              console.log(searchText);
              const filteredRestaurantList = restaurantList.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurantList);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurant.map((restaurant) => {
          const resInfo = restaurant.info;

          return <RestaurantCard key={resInfo.id} items={resInfo} />;
        })}
      </div>
    </div>
  );
};

export default Body;
