import React from 'react';
import '../Header/DaysOfWeak.css';
import 'moment-timezone';
import './Days_grid.css';
import moment from 'moment'
import {constants} from "../../utils/constants";
import DayComponent from "./DayComponent";

const {MAX_DAYS} = constants;

class DaysGridMoment extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const getLastMonthDay = () => {
            return moment(this.props.date).add('months', 1).date(0).date();
        };
        const getFirstDayOfWeek = () => {
            return moment(this.props.date).date(1).day();
        };
        let days_arr = [];
        let i;
        for (i = 0; i <= getFirstDayOfWeek() - 1; i++) {
            days_arr.push(<div key={'i' + i} className='empty_day'></div>);
        }
        let k;
        let nOfEvents;
        let date = this.props.date;
        for (k = 1; k <= getLastMonthDay(); k++) {
            this.props.nOfEvents.forEach(function(item, i, arr){
                if (item.date === moment(date).date(k).format('DD-MM-YYYY')) {
                    nOfEvents = item.nOfEvents;
                }
            });
            days_arr.push(<DayComponent nOfEvents={nOfEvents} date={this.props.date} key={k + 'k'}
                                        day={k}></DayComponent>);
            nOfEvents = 0;
        }
        if((MAX_DAYS - (getFirstDayOfWeek() + getLastMonthDay()))<=6) {
            for (let f = 0; f <= (MAX_DAYS - (getFirstDayOfWeek() + getLastMonthDay())); f++) {
                days_arr.push(<div key={f + 'f'} className='empty_day'></div>);
            }
        }else{
            for (let s = 0; s <= (34 - (getFirstDayOfWeek() + getLastMonthDay())); s++) {
                days_arr.push(<div key={s + 's'} className='empty_day'></div>);
            }
        }
        return (
            <div className='days_row'>{days_arr}</div>
        )
    }
}

export default DaysGridMoment;
