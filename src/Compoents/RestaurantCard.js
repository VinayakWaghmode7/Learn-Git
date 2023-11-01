import { CDN_URL } from "../utils/Constants";

//This is react component is the at end of day javascript function.
export const RestaurantCard = (props) => {
    // or we can do ({resName, cusines}) object distructuring...
    //or const {resName, cusines} = props;
    const {resData} = props;
    const {name , cloudinaryImageId,cuisines,avgRating,areaName} = resData?.info;

    return(
         <div className="res-card">
         <img className="rescard-img" src={ CDN_URL + cloudinaryImageId }/>
           <div className=" rescard-details">
           <h3>{name}</h3>
           <h4>{cuisines}</h4>
           <h4>{avgRating}</h4>
           <h4>{areaName}</h4>
           </div>
         </div>
    );
};
