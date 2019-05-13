import React, {useState, useContext} from 'react';
import '../Header/DaysOfWeak.css';
import 'moment-timezone';
import './Days_grid.css';
import {constants} from "../../utils/constants";
import Event_marker from "./Event_marker";
import DateContext from "../../utils/DateContext";
import moment from 'moment';
const {day_component_holiday} = constants;
const {day_component_standard} = constants;
const {day_component_today} = constants;
const {day_picked} = constants;


const DayComponent = props => {

    const [day_style, setStyle] = useState(props.style);
    const [clicked, setClick] = useState(false);
    const handleDateSet = useContext(DateContext);
    let date = props.date;
    const day = props.day;
    let holiday = false;
    let today = false;
    const handleClick = () => {
        let month = date.getMonth(date);
        let year = date.getFullYear(date);
        date = new Date(year, month ,day);
        handleDateSet(date);
        setClick(true);
    };
    // if (moment(date).date(props.day).day() === 0 || moment(props.date).date(props.day).day() === 6) {
    //     holiday = true;
    // }
    if (moment(props.date).date(props.day).format('DD-MM-YYYY') === moment().format('DD-MM-YYYY')) {
        today = true;
    }
    const handleBlur = e =>setClick(false);
    return (
        <div>
            <div  tabIndex={0}
                className={
                 clicked?day_picked:holiday?day_component_holiday: today?day_component_today: day_component_standard
                }
                 onClick={handleClick}
                 onBlur={handleBlur}>
                <div className={"number_date"}>{day}</div>
                <Event_marker number = {props.nOfEvents}/>
            </div>
        </div>
    );
};

export default DayComponent;
