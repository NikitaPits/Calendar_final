import React, {Component} from 'react'
import './EventList.css'

class EventsList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let event_obj = this.props.events;
        if(event_obj.event) {
            return (
                <div className="event_list">
                    <div className="name_time">
                        <div className={'event_name'}>{event_obj.name}</div>
                        <div className={'time'}>{event_obj.time}</div>
                    </div>
                    <div className={'event_body'}>{event_obj.body}</div>
                </div>
            )
        }
        return (
            <>
            </>
        )
    }
}
export default EventsList;
