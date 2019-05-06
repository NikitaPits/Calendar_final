import React, {Component} from 'react';
import '../Header.css';
import {constants} from "../../../utils/constants";
const {angle_down} = constants;
const {angle_up} = constants;

let angle = angle_down;
class SwitchToWeek extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            days_of_week: this.props.days_of_week,
            angle: angle_down
        }
    }

    render() {
        if(this.props.days_of_week) {
            return (
                <div onClick={() => {this.props.updateData(!this.props.days_of_week)}}>
                    <i className={angle_down}></i>
                </div>
            )
        }
        return (
            <div onClick={() => {this.props.updateData(!this.props.days_of_week)}}>
                <i className={angle_up}></i>
            </div>
        )
}
}

export default SwitchToWeek;
