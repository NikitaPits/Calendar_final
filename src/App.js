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
    let event_obj ={};
    let day_obj = 0;
    const daysObj = events.days;

    daysObj.forEach(function(item, i, arr){
        console.log('works');
        const dateOfEvent = item;
        const now = moment(date,'DD-MM-YYYY');
        const d = moment(item.date,'DD-MM-YYYY');
        if(now.isSame(d)){
            event_obj.name = item.events[0].name;
            event_obj.time = item.events[0].time;
            event_obj.body = item.events[0].body;
            event_obj.event = now.isSame(d);
        };
        day_obj = moment(item.date,'DD-MM-YYYY');
    });
    return (
        <DateContext.Provider value={handleDateSet}>
            <div className='app container'>
                <HeaderComponent renderGrid={DOW} updateWeek={updateWeek} updateDOW={updateDOW}/>
                <Grid nOfEvents = {day_obj} date={date} renderGrid={DOW}/>
                <EventsList events = {event_obj}/>
            </div>
        </DateContext.Provider>
    )
}
export default App;
