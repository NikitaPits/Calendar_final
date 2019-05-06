import React from 'react'
import DateContext from "../../../utils/DateContext";
import moment from "moment";

const PrevButton = (props) => {

    let monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const get_prev_month = (dateSetMethod) => {
        let {date, setDate} = props;
        let month = moment(date).month();
        let year =  moment(date).year();
        if(month==0){
            date = moment().year(year-1).toDate();
        }
        date = moment(date).month(month-1).toDate();
        dateSetMethod(date);
        setDate(date);
    };

     const prev_month = () => {
         let {date} = props;
         let prev_month = monthsArr[date.getMonth() - 1];
         if (typeof (prev_month) !== "string") {
            prev_month = 'Dec'
         }
         return prev_month
    };

    const prev_button_value = () => {
        if(props.renderGrid === 'months'){
            return prev_month();
        }
        return 'PREV'
    };

    const prev_week = (dateSetMethod) => {
        let {date, setDate} = props;
        let week = moment(date).week();
        date = moment().week(week-1).toDate();
        dateSetMethod(date);
        setDate(date);
    };
    if(props.renderGrid === 'months') {
        return (
            <DateContext.Consumer>{(handleDateSet) => (
                <div className='prev' onClick={() => get_prev_month(handleDateSet)}>{prev_button_value()}</div>
            )}
            </DateContext.Consumer>
        );
    }
    return (
        <DateContext.Consumer>{(handleDateSet) => (
            <div className='prev' onClick={() => prev_week(handleDateSet)}>{prev_button_value()}</div>
        )}
        </DateContext.Consumer>
    )

};


export default PrevButton;
