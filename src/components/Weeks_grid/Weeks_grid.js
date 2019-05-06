import React, {Component} from 'react';
import uuid from "uuid";
import moment from 'moment';
import '../Days_grid/Days_grid.css'
import DayComponent from "../Days_grid/DayComponent";
import {constants} from "../../utils/constants";
const {day_component_holiday} = constants;
const {day_component_standard} = constants;
const {day_component_today} = constants;
const {day_picked} = constants;

class WeeksGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let date = this.props.date;

        function get_days_arr() {
            let k;
            let days_arr = [];
            let now = moment();
            let style;
            for (k = 0; k <= 6; k++) {
                console.log(k);
                if(k===6||k===0){
                    style = day_component_holiday;
                }else {
                    style = day_component_standard;
                }
                if(moment(date).weekday(k).format('DD-MM-YYYY')=== moment().format('DD-MM-YYYY')){
                    style = day_component_today;
                }
                    days_arr.push(<DayComponent style = {style} date={date} key={uuid()}
                                                day={moment(date).weekday(k).get('date')}></DayComponent>);
                }
                return days_arr
            }
            return (
                <div className='grid container'>
                    <div className='days_row'>{get_days_arr()}</div>
                </div>
            )

    }
}
export default WeeksGrid;
