import React, { Component } from 'react';
import { connect } from 'react-redux';
import UpperNavMenu from './upper-nav-children/UpperNavMenu';
import UpperNavLogo from './upper-nav-children/UpperNavLogo';

class UpperNavbar extends Component {
    render() { 

        return (
            <div className="nav-main">
                <UpperNavLogo />
                <UpperNavMenu />
            </div>
        );
    }
}

function mapState(state){
    return state;
}
 
export default connect(mapState)(UpperNavbar);