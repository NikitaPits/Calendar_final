import React, {Component} from 'react';
import './DaysOfWeak.css';
import This_month_button from "./controls/This_month_button";
import This_week_button from "./controls/This_week_button";
import DOWContext from "../../utils/DOWContext";

class HeaderDaysOfWeek extends React.Component {
    constructor(props){
        super(props);
    }
    change_to_months = (update) => {
        update('months')
    };
    change_to_weeks = (update) => {
        update('weeks')
    };
    render() {

        if(this.props.days_of_week) {
            return (
                <div className='calendar-days-bg container'>
                    <div className='row'>
                        <div className='calendar-days col'>S</div>
                        <div className='calendar-days col'>M</div>
                        <div className='calendar-days col'>T</div>
                        <div className='calendar-days col'>W</div>
                        <div className='calendar-days col'>T</div>
                        <div className='calendar-days col'>F</div>
                        <div className='calendar-days col'>S</div>
                    </div>
                </div>
            )
        }
        return (
            <div className='change_buttons container'>
                <This_month_button updateDOW = {this.props.updateDOW}/>
                <This_week_button updateDOW = {this.props.updateDOW}/>
            </div>
        )
    }
}

export default HeaderDaysOfWeek;
