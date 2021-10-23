import React from "react";
import { NavLink } from "react-router-dom";

const Finances = () => {
    return (
        <>
            <div className="serve">
                <h1>Trophies * 4</h1>
                <h2> 9 times finalists for a reason . To know more contact us.</h2>
                <NavLink to="/Contact" className="btn btn-dark">Contact Us</ NavLink>
            </div>
        </>
    );
};

export default Finances;