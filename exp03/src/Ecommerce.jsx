import React from "react";
import { NavLink } from "react-router-dom";

const Ecommerce = () => {
    return (
        <>
            <div className="serve">
                <h1>Welcome to Batting Squad Page</h1>
                <h2 color="black">Let the whitsles begin .To know more click below.</h2>
                <NavLink to="/Contact" className="btn btn-dark">Click Here</ NavLink>
            </div>
        </>
    );
};

export default Ecommerce;