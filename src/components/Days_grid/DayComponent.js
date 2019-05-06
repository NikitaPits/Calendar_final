import React, {useState, useContext} from 'react';
import '../Header/DaysOfWeak.css';
import 'moment-timezone';
import './Days_grid.css';
import {constants} from "../../utils/constants";
import Event_marker from "./Event_marker";
import {days} from "../../utils/events";
import moment from "moment";
import DateContext from "../../utils/DateContext";
const {day_component_holiday} = constants;
const {day_component_standard} = constants;
const {day_component_today} = constants;
const {day_picked} = constants;

const DayComponent = props => {

    const [day_style, setStyle] = useState(props.style);
    const handleDateSet = useContext(DateContext);
    let date = props.date;
    const day = props.day;
    const handleClick = () => {
        let month = date.getMonth(date);
        let year = date.getFullYear(date);
        date = new Date(year, month ,day);
        handleDateSet(date);
        setStyle(day_picked);
    };
    const handleBlur = e =>setStyle(day_component_standard);

    return (
        <div>
            <div tabIndex={0}
                className={props.style}
                 onClick={handleClick}
                 onBlur={handleBlur}>
                {day}
                <Event_marker number = {props.nOfEvents}/>
            </div>
        </div>
    );
};

export default DayComponent;
