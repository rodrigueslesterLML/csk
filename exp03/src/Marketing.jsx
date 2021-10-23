import React from "react";
import { NavLink } from "react-router-dom";

const Marketing = () => {
    return (
        <>
            <div className="serve">
                <h1>Here's where we get our support from</h1>
                <h2>Welcome to the support staff page of CSK.To know more contact us.</h2>
                <NavLink to="/Contact" className="btn btn-dark">Click Here</ NavLink>
            </div>
        </>
    );
};

export default Marketing;