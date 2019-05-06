import React, {Component} from 'react';
import './Header.css';
import HeaderMonths from "./HeaderMonths";
import HeaderDaysOfWeek from "./HeaderDaysOfWeek";
import DOWContext from "../../utils/DateContext";

class HeaderComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            days_of_week: true
        }
    }
    updateData = (value) => {
            this.setState({days_of_week: value})
    };

    render() {
        return (
            <div className='calendar_header center'>
                <HeaderMonths  updateWeek = {this.props.updateWeek} renderGrid = {this.props.renderGrid} days_of_week ={this.state.days_of_week} updateData = {this.updateData}/>
                <HeaderDaysOfWeek days_of_week = {this.state.days_of_week} updateDOW = {this.props.updateDOW}/>
            </div>
        )
    }
}
export default HeaderComponent;
