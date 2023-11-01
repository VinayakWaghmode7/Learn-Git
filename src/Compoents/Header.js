import { LOGO_URL } from "../utils/Constants"

//Make Header Compoent
 export const  Header = () => {
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
         </div>
        </div>
    )
}
