import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SectionTabs from "../components/SectionTabs/SectionTabs.js";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Parallax from "../components/Parallax/Parallax.js";
import Button from "../components/CustomButtons/Button.js";
import Pricing from "../components/Pricing/Pricing.js";
import ReactSlider from "../components/Slider/ReactSlider.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardCarousel from "../components/Slider/CardSlider.js";
import Footer from "../components/Footer/Footer.js";
import AppInfo from "../components/AppInfo/AppInfo.js";
import About from "../components/About/About.js";
import Testimonial from "../components/Testimonials/Testimonials.js";
import GetInTouch from "../components/GetInTouch/getInTouch.js";
import Contact from "../components/Contact/Contact.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";




// sections for this page

import styles from "../assets/jss/material-kit-react/components/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    return (
        <div>
            <Header
                brand="Well Woman"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
            />
            <Parallax image={require("../assets/img/bg4.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>LOSE YOUR WEIGHT</h1>
                                <h3 className={classes.subtitle}>
                                    WITH ONLY AND ONLY DESI DIET !
                                </h3>
                                <Button
                                    className={classes.startbtn}
                                    color="danger"
                                    size="lg"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-play" /> 
                                    <Link to="/startjourney" className={classes.dropdownLink}>
                                        Start Your Journey
                                    </Link>
                                </Button>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <Card>
                    <CardBody>
                        <ReactSlider />
                    </CardBody>
                </Card>
            </div>
            <div>
                <CardCarousel />
                <AppInfo />
                <About />
                <Testimonial />
                <Pricing />
                <GetInTouch />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}
