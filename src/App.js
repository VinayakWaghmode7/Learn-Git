import React, { useLayoutEffect } from 'react';
import  ReactDOM  from 'react-dom';
import { Header } from './Compoents/Header';
import { Body } from './Compoents/Body';
import { About } from './Compoents/About';
import Contact from './Compoents/ContactUs';
import Error from './Compoents/Error';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


/**
for swiggy app rough structure 
header
-logo 
-navbar
Body:-
-search
-RestaurantContainer:-
   -Restaurantcards 
Footer:-
 -Copyright
 -Contact 
 -About 
 -Address
 */


//Restaurant-Container contains the Restrocards
     

 //Make first Outerlevel compoent which contains all other components such
 //header, body and footer components.
 const AppLayout = () => {
     return (
          <div className="App">
          {/* Render the Header or any  Compoents here because it is a outer-lebvel compoent */}
          <Header/>
          <Body/>
          </div>
     )
 };

//React.CreateElement is the core of React and it creates the heading(h1)
//SO, we want to display the heading on to the broswer so we used a 
//ReactDOM.createroot, whatever you like to render on the browser/display that 
//case we need a DOM
//What is DOM? When we open a developer console on the browser, that
//html tags like head,then body , then h1 tag.
//This tag forms a tree like a structure kwon as DOM tree we will see later on.
// const heading = React.createElement("h1",{},"Hii Eveyone");

//Title compoent
const Title = ()=>(
     <h1>This is the Title</h1> 
);

//Heading compoent
const Heading = ()=>(
     <div id="container">
{/* as below we can render one compoent into another compoent as below(<Title/>) */}
     <Title/>
     <h1>This is the Heading</h1>
     </div>
);

//always create routing in the App.js file.
//here for routing we create routing configuration as below.
const appRouter = createBrowserRouter([
     {
       path: "/",
       element:<AppLayout/>,
       errorElement:<Error/>,
     },
     {
      path: "/about",
      element:<About/>,
     },
     {
     path:"/contact",
     element:<Contact/>,
     },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

// above heading variable is the React element and every react element is the object and 
// this object(heading) -> is convert it into -> the HTML(That's browser understand)

//console.log(heading);
//if we do the console of heading it will show a object in devloper console.

//so, we created the heading using React.createElement but this is not a 
//userfriendly thsi is complex so, for that facebook developer created a JSX
//JSX is a HTML like syntax or it is the comnbination of the javascript and html

//This jsx is not understand the JS engine, js engine only understand 
//javascript i.e React.createElement that we written earlier so how
//jsx is works then , as Babel so a job , Babel is the part of parcel
//Babel convert JSX(transpiled) into code that browser(JS engine) understand
//JSX =>(Babel) React.createElement => ReactElement-js object => HTML(Browser understand)
const jsxheading = <h1>Hii Everyone</h1>;
//as we see above like heading is object same jsxheading variable also a object
//and later on it convrt it into HTML , JSX is not HTML, it is HTML like syntax inside the javascript.

//npm is the main package manager it provides a parcel and parcel provides
// a babel from it's node-modules folder.

//React Functional Compoent
//React Compoent at the end of  the day is the javascript function(arrow function)
//That will return dome piece of JSX as below ...
// const HeadingCompoent = () => {
//     return <h1>MackBook Air</h1>
// }

//React compoent is the whatever you see in website like button , searchbar, Home,Header, Footer
//Everything is the Compoent.   