import React, {Component} from 'react';
import '../DaysOfWeak.css'
import DOWContext from "../../../utils/DOWContext";

class This_month_button extends React.Component{
    constructor(props){
        super(props);
    }

    handleOnClick = () => {
        const {updateDOW} =  this.props;
        updateDOW('months');
    };

    render() {
        const {updateDOW} =  this.props;
        return(
            <div className='this_month_button' onClick={this.handleOnClick}>This month</div>
        );
    }
}
export default This_month_button;
