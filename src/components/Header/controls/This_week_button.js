import React, {Component} from 'react';
import '../DaysOfWeak.css'
import DOWContext from "../../../utils/DOWContext";

class This_week_button extends React.Component{
   constructor(props){
       super(props);
   }
    change_to_weeks = (update) => {
       alert('click weeks');
        update('weeks')
    }

    handleOnClick = () => {
        const {updateDOW} =  this.props;
        updateDOW('weeks');
    };

    render() {
        return(
           <div className='this_week_button' onClick={this.handleOnClick}>This week</div>
        )
    }

}

export default This_week_button;
