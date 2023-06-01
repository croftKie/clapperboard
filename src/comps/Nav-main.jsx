import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavMain extends Component {
    state = {  } 
    render() { 
        const setMode = (mode)=>{
            this.props.dispatch({type:"mode", payload:mode})
        }
        return (

            <div className="nav-main">
                <h2>Movie Buddy</h2>
                <div className="modes">
                    <button onClick={()=>{setMode("filter")}}>Movie Filter</button>
                    <button onClick={()=>{setMode("random")}}>Randomiser</button>
                    <button onClick={()=>{setMode("mood")}}>Movies by Mood</button>
                </div>
            </div>
        );
    }
}

function mapState(state){
    return state;
}
 
export default connect(mapState)(NavMain);