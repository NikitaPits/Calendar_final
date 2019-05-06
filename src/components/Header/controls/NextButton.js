import React from 'react'
import DateContext from "../../../utils/DateContext";
import moment from 'moment'

const PrevButton = (props) => {

    let monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const get_next_month = (dateSetMethod) => {
        let {date, setDate} = props;
        let month = moment(date).month();
        let year =  moment(date).year();
        if(month==11){
            date = moment().year(year+1).toDate();
        }
        date = moment(date).month(month+1).toDate();
        dateSetMethod(date);
        setDate(date);
    };

    const next_month = () => {
        let {date} = props;
        let next_month = monthsArr[date.getMonth() + 1];
        if (typeof (next_month) !== "string") {
            next_month = 'Dec'
        }
        return next_month
    };

    const next_button_value = () => {
        if(props.renderGrid === 'months'){
            return next_month();
        }
        return 'NEXT'
    };

    const next_week = (dateSetMethod) => {
        let {date, setDate} = props;
        let week = moment(date).week();
        date = moment().week(week+1).toDate();
        dateSetMethod(date);
        setDate(date);
    };

 if(props.renderGrid === 'months') {
     return (
         <DateContext.Consumer>{(handleDateSet) => (
             <div className='next' onClick={() => get_next_month(handleDateSet)}>{next_button_value()}</div>
         )}
         </DateContext.Consumer>
     );
 }
    return (
        <DateContext.Consumer>{(handleDateSet) => (
            <div className='next' onClick={() => next_week(handleDateSet)}>{next_button_value()}</div>
        )}
        </DateContext.Consumer>
    );

};

export default PrevButton;
