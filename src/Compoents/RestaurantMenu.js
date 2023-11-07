 import { useEffect, useState } from "react";

 const RestaurantMenu = ()=>{

  const [restaurantMenuList , setRestaurantMenuList] = useState(null);
  

  useEffect(()=>{
    fetchMenu();
},[]);

const fetchMenu = async () =>{
   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5512771&lng=73.92098940000001&restaurantId=140832&catalog_qa=undefined&submitAction=ENTER");
   const json = await data.json();
   console.log(json);
//    setRestaurantMenuList(json?.data?.cards[2]?.groupedCard?.REGULAR?.cards[2]?.card?.card?.itemCards);
   setRestaurantMenuList(json?.data?.cards[0]?.card?.card?.info);

};

// const resMenuList = restaurantMenuList?.cards[0]?.card?.card?.info;


// const {name,cuisines} = resMenuList;




    return(
        <div className="menu">
            <h1>Name of the Restaurants</h1>
            <h2>{restaurantMenuList?.name}</h2>
            <h1>{restaurantMenuList?.cuisines}</h1>
        </div>
    )

};
 

 

export default RestaurantMenu;