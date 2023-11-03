import { useState } from "react";
import { LOGO_URL } from "../utils/Constants"

//Make Header Compoent
 export const  Header = () => {
 
    //let btnName = "Login";
    const [login, setLogin] = useState("Login");

    return(
         <div className="header">
         {/* header contains logo and nav-items */}
         <div className="logo-container">
              <img className="logo" src= {LOGO_URL}/>
         </div>
         <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
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
