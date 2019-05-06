import React, {Component} from 'react';
import '../Header/DaysOfWeak.css';
import 'moment-timezone';
import './Days_grid.css';

class Event_marker extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.number === 2) {
            return (
                <div className='events'>
                    <div className='event'></div>
                    <div className='event'></div>
                </div>
            )
        } else {
            if (this.props.number >= 3) {
                return (
                    <div className='events'>
                        <div className='event'></div>
                        <div className='event'></div>
                        <div className='event'></div>
                    </div>
                )
            }
        }
        if (this.props.number === 1) {
            return (
                <div>
                    <div className='event'></div>
                </div>
            )
        }
        return (
            <>
                </>
        )
    }
}
export default Event_marker;
