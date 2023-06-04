import React, { Component } from 'react';
import { connect } from 'react-redux';
import video from '../../assets/video.png';

class UpperNavbar extends Component {
    render() { 

        const clearSelected = ()=>{
            this.props.dispatch({type:'selectedMovie', payload: ""});
        }

        return (
            <div className="nav-main">
                {this.props.selectedMovie !== "" ? <button onClick={clearSelected} className='backButton'>Back</button> : <></>}
                <img src={video} alt="" />
                <h2>Clapperboard</h2>
            </div>
        );
    }
}

function mapState(state){
    return state;
}
 
export default connect(mapState)(UpperNavbar);