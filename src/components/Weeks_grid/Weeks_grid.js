import React, {Component} from 'react';
import moment from 'moment';
import '../Days_grid/Days_grid.css'
import DayComponent from "../Days_grid/DayComponent";

class WeeksGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let date = this.props.date;
        let nOfEvents = 0;
            let k;
            let days_arr = [];
            for (k = 0; k <= 6; k++) {
                this.props.nOfEvents.forEach(function(item, i, arr){
                    if (item.date === moment(date).date(moment(date).weekday(k).date()).format('DD-MM-YYYY')) {
                        nOfEvents = item.nOfEvents;
                    }
                });
                    days_arr.push(<DayComponent nOfEvents={nOfEvents} date={date} key={k+'k'} day={moment(date).weekday(k).date()}></DayComponent>);
                    nOfEvents = 0;
                }

            return (
                    <div className='grid days_row'>{days_arr}</div>
            )

    }
}
export default WeeksGrid;
