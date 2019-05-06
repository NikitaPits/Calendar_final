import React from 'react';
import '../Header/DaysOfWeak.css';
import 'moment-timezone';
import './Days_grid.css';
import moment from 'moment'
import {constants} from "../../utils/constants";
import DayComponent from "./DayComponent";

const {MAX_DAYS} = constants;
const {day_component_holiday} = constants;
const {day_component_standard} = constants;
const {day_component_today} = constants;
const {day_picked} = constants;


class DaysGridMoment extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const getLastMonthDay = () => {
            return moment(this.props.date).add('months', 1).date(0).date();
        }
        const getFirstDayOfWeek = () => {
            return moment(this.props.date).date(1).day();
        }
        let days_arr = [];
        let i;
        for (i = 0; i <= getFirstDayOfWeek() - 1; i++) {
            days_arr.push(<div key={'i' + i} className='empty_day'></div>);
        }
        let k;
        let style;
        let nOfEvents;
        for (k = 1; k <= getLastMonthDay(); k++) {
            if (moment(this.props.date).date(k).day() === 0 || moment(this.props.date).date(k).day() === 6) {
                style = day_component_holiday;
            } else {
                style = day_component_standard;
            }
            if (moment(this.props.date).date(k).format('DD-MM-YYYY') === moment().format('DD-MM-YYYY')) {
                style = day_component_today;
            }

            if (this.props.nOfEvents.format('DD-MM-YYYY') === moment(this.props.date).date(k).format('DD-MM-YYYY')) {
                nOfEvents = 1;
            } else {
                nOfEvents = 0;
            }
            days_arr.push(<DayComponent nOfEvents={nOfEvents} style={style} date={this.props.date} key={k + 'k'}
                                        day={k}></DayComponent>);
        }
        let f;
        for (let f = 0; f <= (MAX_DAYS - (getFirstDayOfWeek() + getLastMonthDay())); f++) {
            days_arr.push(<div key={f + 'f'} className='empty_day'></div>);
        }
        return (
            <div className='days_row'>{days_arr}</div>
        )
    }
}

export default DaysGridMoment;
