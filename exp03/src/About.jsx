import React from "react";
import abt from "../src/images/about.jpeg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
    return (
        <>
        <Common name="Welcome to" imgsrc={abt} visit="/contact" btname="Contact Now" />
        </>
    );
};

export default About;