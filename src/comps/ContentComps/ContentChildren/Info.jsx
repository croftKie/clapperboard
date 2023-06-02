import React, { Component } from 'react';
import expandImg from '../../../assets/expand.png';



class Info extends Component {
    state = {  } 
    render() { 
        const {title, overview, averageVote} = this.props;
        return (
            <div className="info">
                <h3>{title}</h3>
                <img src={expandImg} alt="" />
                <p>{overview}</p>
            </div>
        );
    }
}
 
export default Info;