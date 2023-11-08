import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

//Make Header Compoent
 export const  Header = () => {
 
    //let btnName = "Login";
    //never use useState hook in if else statements.(Conditional Statments,for loops,inside the functiones)
    //call the useState hook at top of Compoent. 
    const [login, setLogin] = useState("Login");

    //as the state changes Whole Compoent(Header) is re-render(because of diff alogorithem is triggred) as we 
    //we use a login as state variable and whenever there is click on login button
    //state changes (it became logout) and Compoent re-render.
    //so, use used useEffect hook in header compoent. so state changes 
    //useEffect also called. 
    //it is bad practice to call useEffect on every state change , so we need
    //to use empty dependancy array [] , if not use it called every state change
    //when we use empty dependancy array [] , use useEffect hook called on first render,when UI loads on the screen.
   
    useEffect(() => {
      console.log("useEffect is called");
    },[])

    return(
         <div className="header">
         {/* header contains logo and nav-items */}
         <div className="logo-container">
              <img className="logo" src= {LOGO_URL}/>
         </div>
         <div className="nav-items">
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            {/* <li><Link to ="/cart">Cart</Link></li> */}
         </ul>
         <button className="btn-name" onClick={()=>{
             login==="Login"?setLogin("Logout"):setLogin("Login");
             }}>
            {login}
         </button>
         
         </div>
        </div>
    )
}
