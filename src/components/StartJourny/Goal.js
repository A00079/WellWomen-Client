import React, { Component } from 'react';
import { StartJourney } from "../../actions/StartYourJourney.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class Goal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handelGoal = (goal) => {
        this.props.StartJourney(goal, 'goal');
        this.props.handleNext();
    }
    render() {
        return (
            <React.Fragment>
                <h3 class="text-3xl sm:text-5xl md:mt-0 md:mb-0 md:text-3xl leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
                    WHAT  <span class="text-indigo-600"> IS  YOUR GOAL ?</span>
                </h3>
                <section class="text-gray-700 body-font">
                    <div class="container px-5 py-4 md:py-24 mx-auto">
                        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div class="p-2 sm:w-1/2 w-full cursor-pointer" onClick={() =>this.handelGoal('I want to lose more than 10 kgs')}>
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">I want to lose more than 10 kgs</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full cursor-pointer" onClick={() =>this.handelGoal('I want to tone up my body, may be lose kgs 5-10')}>
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">I want to tone up my body, may be lose kgs 5-10</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full cursor-pointer" onClick={() =>this.handelGoal('I want to lose my postpartum weight')}>
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">I want to lose my postpartum weight</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full cursor-pointer" onClick={() =>this.handelGoal('I want to deal with underlying medical issues through diet and other lifestyles changes')}>
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">I want to deal with underlying medical issues through diet and other lifestyles changes</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full cursor-pointer" onClick={() =>this.handelGoal("I want to add some shape in all the right places becasue I'm too skinny right now")}>
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">I want to add some shape in all the right places becasue I'm too skinny right now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

Goal.propTypes = {
    journeydata: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    journeydata: state.startjourney
});

export default connect(
    mapStateToProps,
    { StartJourney }
)(withRouter(Goal));