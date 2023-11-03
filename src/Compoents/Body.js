import { RestaurantCard } from "./RestaurantCard";
import { resObj } from "../utils/MockData";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
//This Body also React Component
export const Body= () =>{
    
const [restaurantList , setListOfRestaurants] = useState([]);
const [filteredRestaurants,setListOfFilteredRestaurants] = useState([]);
const [searchtext, setSearchText] = useState("");

//what is the Hook at end of the day it is a Javascript function which 
//has specific purpose. like useState hook has a purpose is to change the state
// of the component & triggers the diff algorithem .
// as we know whatever we need to change on the UI we need a state to change
//React works on state as we se previous example of filter when we click
//on the filter button it filters the cards on depends on whatever code 
//written on the filter method . But the filtered cards are not displys
//on the UI, it shows on developer console but not on the UI.
//So ,we need a state , we create a new state restaurantList using 
//useState hook and then it changes by set function as (setListOfRestaurants)
//as soon as this function (set) function called , state changes and whatever 
//result display on the UI.
//why we use useEffect, as when we click on link our browser loads the data then 
//call api and renders the page then we see on screen, but  this approach
//needs a call api 500ms, then we need to wait 500ms and see output.
//but this is poor approach, we a doo a approach loads the page and then 
//renders HTML,CSS data and then call api,it makes some structure on web
//and call api , so we see whole output on screen , that approch we need useEffect
//useEffect , call it's callback function when the react finish its JSX part(design part)
//we call api using useEffect, useEffect is a hook and it purpose is to make api call
//after rendering of basic HTML  done(this first render) after api is called by useEffect 
//& then then second render happens with all CSS & js files.
//Loads => Render(first)=>Api call(useEffect)=>second Render(CSS & JS)
useEffect(()=>{
    //console.log("Hii How are you doing ?");
    fetchData();
},[]);

const fetchData = async () =>{
     const data = await fetch("https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.5512771%26lng%3D73.92098940000001%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");

     const json = await data.json();
     console.log(json);
   
     setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setListOfFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
}

//conditional rendering
 if(restaurantList?.length===0){
    //At initial lenth of restaurants cards is 0 , so return the shimmer
   return <Shimmer/>
 }

    return (
         <div className='body'>
         {/* <div className="search">Search</div> */}
         <div className="filter">
         
         <div className="Search">
            <input type="text" className="search-box" value={searchtext}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
            />
             <button onClick={()=>{
               //filter the restaurants cards by name and update the UI.
               //searchtext.
               
               const filteredRestaurants=restaurantList?.filter((res)=>res?.info?.name.toLowerCase().includes(searchtext.toLowerCase()));
               
               setListOfFilteredRestaurants(filteredRestaurants); 
              
                }}>Search</button>
         </div>   

         

         <button className="filter-btn"
            onClick={() => {
                const filterdData = restaurantList?.filter(
                    (res)=>res?.info?.avgRating > 4);
                    console.log(filterdData);
                    setListOfRestaurants(filterdData);
            } } > Top Rated Restaurants</button>
         </div>
       
         <button onClick={()=> {
           console.log("Hii");
         }}>Hii</button>
        
         <div className="res-container">
         
         {/* <RestaurantCard resData = {resObj}/> */}
         {
             filteredRestaurants?.map((restaurant) =>(
                   <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
              ))
         }
        
         </div>
         </div>
    )
}
