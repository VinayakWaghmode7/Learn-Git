 import { useEffect, useState } from "react";

 const RestaurantMenu = ()=>{

  const [restaurantMenuList , setRestaurantMenuList] = useState(null);
  const [restaurantRecommdationList , setRestaurantRecommdationList] = useState([]);
  

  useEffect(()=>{
    fetchMenu();
},[]);

const fetchMenu = async () =>{
   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5512771&lng=73.92098940000001&restaurantId=140832&catalog_qa=undefined&submitAction=ENTER");
   const json = await data.json();
   console.log(json);
   setRestaurantRecommdationList(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
   setRestaurantMenuList(json?.data?.cards[0]?.card?.card?.info);
   
};

console.log(restaurantRecommdationList);

// const resMenuList = restaurantMenuList?.cards[0]?.card?.card?.info;


// const {name,cuisines} = resMenuList;

//const {itemCards} = restaurantMenuList?.cards[2]?.groupedCard?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="menu">
            <h1>Name of the Restaurants</h1>
            <h2>{restaurantMenuList?.name}</h2>
            <h1>{restaurantMenuList?.cuisines}</h1>
            <div>
                <ul>
                    {
                        restaurantRecommdationList.map((x)=>(
                            <li key={x?.card?.info?.id}>{x?.card?.info?.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )

};
 

 

export default RestaurantMenu;