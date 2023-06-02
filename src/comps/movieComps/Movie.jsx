import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movie extends Component {
    render() { 
        const {selectedMovie} = this.props;
        console.log(selectedMovie);
        return (
            <div className="movie">
                <img src={`https://image.tmdb.org/t/p/w1280/${selectedMovie.poster_path}`} alt="" />
                <h1>{selectedMovie.title}</h1>
                <p>{selectedMovie.overview}</p>
            </div>
        );
    }
}

function mapState(state){
    return state;
}
 
export default connect(mapState)(Movie);