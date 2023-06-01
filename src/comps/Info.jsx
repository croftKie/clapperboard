import React, { Component } from 'react';
import { data } from '../test-data';



class Info extends Component {
    state = {  } 
    render() { 
        const {title, overview, averageVote} = this.props;
        return (
            <div className="info">
                <h3>{title}</h3>
                <p>{overview}</p>
                <p>{averageVote}/10</p>
            </div>
        );
    }
}
 
export default Info;