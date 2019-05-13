import React, {useState} from 'react';
import './App.css';
import 'moment-timezone';
import HeaderComponent from "./components/Header/HeaderComponent";
import DateContext from "../src/utils/DateContext";
import Grid from "./components/Grid";
import moment from 'moment'
import events from './utils/events'
import EventsList from "./components/EventsList/EventsList";

    function App() {
        const [date, setDate] = useState(new Date());
        const [DOW, setDOW] = useState('months');
        const [Week, setWeek] =  useState(moment().week());

        const handleDateSet = (date) => {
            setDate(date);
        };
        const updateDOW = (value) => {
            setDOW(value);
        };
        const updateWeek = (value) => {
            setWeek(value);
        };
        let event_obj =[];
        let day_obj = [];
        let isEvent;
        const daysObj = events.days;

        daysObj.forEach(function(item, i, arr){
            const now = moment(date,'DD-MM-YYYY');
            const d = moment(item.date,'DD-MM-YYYY');
            if(now.isSame(d)){
                event_obj = item.events;
                isEvent = now.isSame(d);
            }
            day_obj.push({
                date: moment(item.date, 'DD-MM-YYYY').format('DD-MM-YYYY'),
                nOfEvents: item.events.length
        });
        });
        return (
            <DateContext.Provider value={handleDateSet}>
                <div className='app'>
                    <HeaderComponent renderGrid={DOW} updateWeek={updateWeek} updateDOW={updateDOW}/>
                    <Grid nOfEvents = {day_obj} date={date} renderGrid={DOW}/>
                    <EventsList date = {date} events = {event_obj} isEvent = {isEvent}/>
                </div>
            </DateContext.Provider>

        )
    }
export default App;
