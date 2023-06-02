import React, { Component } from 'react';
import GenreList from './middle-nav-children/GenreList';

class NavTrending extends Component {
    render() { 
        return (
            <div className="nav-filtered">
                <h2>What's trending?</h2>
                <p>Filter by genre</p>
                <GenreList />
            </div>
        );
    }
}
 
export default NavTrending;