import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from "./Navbar";
import Footer from './Footer';
import Ecommerce from "./Ecommerce";
import Education from "./Education";
import Marketing from "./Marketing";
import Finances from "./Finances";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return(
        <>
        <div className="parent">
        <Navbar />
        <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/Education" component={Education} />
                <Route exact path="/Ecommerce" component={Ecommerce} />
                <Route exact path="/Marketing" component={Marketing} />
                <Route exact path="/Finances" component={Finances} />
        </Switch>
        <Footer />

        </div>
        </>
    );
};

export default App;