import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { RES_MENU } from "../utils/constants.js";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  // console.log("--- Restaurant Menu Rendered-1 ---");

  // to store Restaurant menu data we uss state variable
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    // console.log("useEffect ResMenu called");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU);

    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };

  // console.log("--- Restaurant Menu Rendered-2 ---");

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

  return (
    <div className="res-menu-div">
      {/* {console.log("--- Restaurant Menu Rendered-3 ---")} */}
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <div>
        <h2>Menu</h2>
        <ul className="res-menu-items">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} <br /> - ₹
              {(item.card.info.price / 100).toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
