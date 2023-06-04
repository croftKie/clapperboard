import React, { Component } from 'react';
import { connect } from 'react-redux';
import video from '../../assets/video.png';

class UpperNavbar extends Component {
    render() { 

        return (
            <div className="nav-main">
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