import React, {Component} from 'react';
import './DaysOfWeak.css';
import DateContext from "../../utils/DateContext";
import DOWContext from "../../utils/DOWContext";
import SwitchToWeek from "./controls/SwitchToWeek";
import moment from 'moment'
import PrevButton from "./controls/PrevButton";
import NextButton from "./controls/NextButton";

//let date = new Date();
let monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class HeaderMonths extends React.Component {
     constructor(props){
         super(props);

         this.state = {
             date: new Date()
         }
     }

    get_prev_week = () => {
        let number_of_week = moment().week();
        number_of_week = moment().week(number_of_week - 1);
        return number_of_week
    };

    setDate = (date) => {
        this.setState({date});
    };

    render() {
        const {date} = this.state;
        let month = monthsArr[date.getMonth()];
        if (this.props.days_of_week) {
            return (
                <DateContext.Consumer>{(handleDateSet) => (
                    <div className='calendar-month-bg container'>
                        <div className='calendar_controls'>
                            <PrevButton renderGrid={this.props.renderGrid} date={date} setDate={this.setDate} />
                            <div className='switcher'>

                                <div className='weak'>{month}</div>
                                <SwitchToWeek days_of_week={this.props.days_of_week}
                                              updateData={this.props.updateData}/>
                            </div>
                            <NextButton renderGrid={this.props.renderGrid} date={date} setDate={this.setDate}/>
                        </div>

                    </div>
                )}
                </DateContext.Consumer>
            )
        }

        return (
            <DateContext.Consumer>{(handleDateSet) => (
                <div className='calendar-month-bg container'>
                    <div className='calendar_controls'>

                        <PrevButton renderGrid={this.props.renderGrid} date={date} setDate={this.setDate} updateWeek ={this.props.updateWeek}/>

                        <div className='switcher'>
                            <div className='weak'>{month}</div>

                            <SwitchToWeek days_of_week={this.props.days_of_week}
                                          updateData={this.props.updateData}/>

                        </div>

                        <NextButton renderGrid={this.props.renderGrid} date={date} setDate={this.setDate} updateWeek ={this.props.updateWeek}/>

                    </div>
                </div>
            )}
            </DateContext.Consumer>

        )
    }
    }

    export default HeaderMonths;

