import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable - Super powerful variable
  const [restaurantList, setRestaurantList] = useState([]);
  console.log("<--- body rendered-0 --->");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // useEffect is js function like useState() hook
  useEffect(() => {
    console.log("<--- IN USEEFFECT : body rendered --->");

    fetchData();
  }, []);

  console.log("<--- body rendered-1 --->");

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

  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {console.log("<--- body rendered-2 --->")}

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
            {console.log("<--- body rendered-3 --->")}
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
          {console.log("<--- body rendered-4 --->")}
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          const resInfo = restaurant.info;

          {
            console.log("<--- body rendered-5 --->");
          }

          return <RestaurantCard key={resInfo.id} items={resInfo} />;
        })}
      </div> 
    </div>
  );
};

export default Body;
