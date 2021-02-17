import React from 'react';
import AppHero from "../components/home/hero";
import AppAbout from "../views/home";

function AppHome() {
    return(
       <div className="main">
           <AppHero/>
           <AppAbout/>
       </div>
    );
}

export default AppHome;