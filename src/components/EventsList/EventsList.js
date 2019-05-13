import React from 'react'
import './EventList.css'
import moment from 'moment';

class EventsList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pickedEvent: 0
        }
    }

    work = (id) => {
        this.setState({pickedEvent: id})
    };

    render(){

        let isEvent = this.props.isEvent;
        let event_obj = this.props.events;
        let pickedEvent = this.state.pickedEvent;

        let listItems = event_obj.map(({name, time, body, img}, i) =>
            <div className="main_event_div" onClick={() => this.work(i)}>
                {i === pickedEvent && typeof img == 'string' && <div className="event_list" id={i}>
                    <div className="box">
                        <img className="img" src={img} alt=""/>
                    </div>
                    <div className="event_list_img">
                    <div className="name_time">
                        <div className="event_name">{name}</div>
                        <div className="time">{time}</div>
                    </div>
                        <div className="event_body">{body}</div>
                    </div>
                </div>}
                {!(i === pickedEvent && (typeof img == 'string')) && <div className="event_list" id={i}>
                    <div className="name_time">
                        <div className="event_name">{name}</div>
                        <div className="time">{time}</div>
                    </div>
                    <div className="event_body">{body}</div>
                </div>}
            </div>
        );
        if (isEvent) {
            return (
                <div className='event_list_all'>
                    <div className='date_in_text'>
                        {moment(this.props.date).format('dddd, DD MMMM')}
                    </div>
                    {listItems}
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
