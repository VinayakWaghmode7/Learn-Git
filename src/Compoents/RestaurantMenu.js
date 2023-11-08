 import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/Constants";
import { useParams } from "react-router-dom";

 const RestaurantMenu = ()=>{

  const [restaurantMenuList , setRestaurantMenuList] = useState(null);
  const [restaurantRecommdationList , setRestaurantRecommdationList] = useState([]);

  //When I click on any card which will redirect to another page i.e Menu page
  //so, that redirecting every card has restaurantId mapped to it..SO
  //when I click on card that id will map with route and respective page
  //for that cardMenu will open for that we will use the superPower of
  //react-router-dom is useParam hook that hook will automatically map the Id 
  //of the card with route.
  const {resId}=useParams(); 
  

  useEffect(()=>{
    fetchMenu();
},[]);



const fetchMenu = async () =>{
   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5512771&lng=73.92098940000001&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
   const json = await data.json();
   console.log(json);
   setRestaurantRecommdationList(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
   setRestaurantMenuList(json?.data?.cards[0]?.card?.card?.info); 
};

console.log(restaurantRecommdationList);

// const resMenuList = restaurantMenuList?.cards[0]?.card?.card?.info;


// const {name,cuisines} = resMenuList;

//   const {cloudinaryImageId} = restaurantMenuList?.cloudinaryImageId;

    return(
        <div className="menu">
            <h1>Name of the Restaurants</h1>
            <h2>{restaurantMenuList?.name}</h2>
            <h1>{restaurantMenuList?.cuisines}</h1>
            {/* <img className="menuListImage" src={CDN_URL + restaurantMenuList?.cloudinaryImageId}/> */}
            <div className="menuListContainer">
              
                    {
                       
                        restaurantRecommdationList?.map((x)=>(
                            <>
                            
                            {/* <li className="resmenulist" key={x?.card?.info?.id}>{x?.card?.info?.price/100}</li> */}
                            <img className="menuListImage" src={CDN_URL + x?.card?.info?.imageId}/>
                            <li className="resmenulist" key={x?.card?.info?.id}>{x?.card?.info?.name}</li>


                            </>

                        ))
                    
                    }
               
            </div>
        </div>
    )

};
 

 

export default RestaurantMenu;