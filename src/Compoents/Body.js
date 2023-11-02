import { RestaurantCard } from "./RestaurantCard";
import { resObj } from "../utils/MockData";
import { useState } from "react";
//This Body also React Component
export const Body= () =>{

    const [restaurantList , setListOfRestaurants] = useState(resObj);
    return (
         <div className='body'>
         {/* <div className="search">Search</div> */}
         <div className="filter">
            <button className="filter-btn"
            onClick={() => {
                const filterdData = restaurantList.filter(
                    (res)=>res.info.avgRating > 4);
                    console.log(filterdData);
                    setListOfRestaurants(filterdData);
            } } > Top Rated Restaurants</button>
         </div>
         <div className="res-container">
         
         {/* <RestaurantCard resData = {resObj}/> */}
         {
              restaurantList?.map((restaurant) =>(
                   <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
              ))
         }
        
         </div>
         </div>
    )
}
