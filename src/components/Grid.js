import React, {Component} from 'react';
import WeeksGrid from "./Weeks_grid/Weeks_grid";
import DaysGridMoment from "./Days_grid/DaysGridMoment";

class Grid extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        if(this.props.renderGrid === 'weeks') {
            return (
                <WeeksGrid nOfEvents = {this.props.nOfEvents} date = {this.props.date}/>
            )
        }
        return(
            <DaysGridMoment nOfEvents = {this.props.nOfEvents} date = {this.props.date}/>
        )
    }

}

export default Grid;
