import React from "react";
import { NavLink } from "react-router-dom";

const Education = () => {
    return (
        <>
        <div className="serve">
        <h1>Welcome to the Bowling Squad</h1>
       <h2>We provide various services in destroying the opponent's bowling attack</h2>
         <NavLink to="/Contact" className="btn btn-dark">Contact Us</ NavLink>
        </div>
        </>
    );
};

export default Education;