import React from "react";
import home from "../src/images/home2.jpeg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Today,Forever with" imgsrc={home} visit="/service" btname="Get Started" />
        </>
    );
};

export default Home;