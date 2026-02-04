import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  console.log("--- Restaurant Menu Rendered-1 ---");

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log("useEffect ResMenu called");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5877901&lng=83.5783078&restaurantId=918278&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };

  console.log("--- Restaurant Menu Rendered-2 ---");

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // console.log(resInfo?.cards[2]?.card?.card?.info)

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div>
      {console.log("--- Restaurant Menu Rendered-3 ---")}
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} <br /> - ₹{(item.card.info.price / 100).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
