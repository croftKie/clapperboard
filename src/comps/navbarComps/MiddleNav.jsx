import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenreList from './middle-nav-children/GenreList';

class MiddleNav extends Component {
    render() { 
        return (
            <div className="nav-filtered">
                <h2>Find a Movie</h2>
                <p>Filter by genre</p>
                <GenreList />
            </div>
        );
    }
}

function mapState(state){
    return state;
}
 
export default connect(mapState)(MiddleNav);