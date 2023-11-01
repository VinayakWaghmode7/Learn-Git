import { RestaurantCard } from "./RestaurantCard";
import { resObj } from "../utils/MockData";
//This Body also React Component
export const Body= () =>{
    return (
         <div className='body'>
         <div className="search">Search</div>
         <div className="res-container">
         {/* <RestaurantCard resData = {resObj}/> */}
         {
              resObj?.map((restaurant) =>(
                   <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
              ))
         }
        
         </div>
         </div>
    )
}
