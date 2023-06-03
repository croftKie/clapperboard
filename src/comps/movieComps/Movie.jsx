import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movie extends Component {
    render() { 
        const {selectedMovie} = this.props;
        console.log(selectedMovie);
        return (
            <div className="movie">
                <img src={`https://image.tmdb.org/t/p/w1280/${selectedMovie.poster_path}`} alt="" />
                <div className="genres">
                    {selectedMovie.genres.map((genre)=>{
                        return <p>{genre.name}</p>
                    })}
                </div>
                <h1>{selectedMovie.title}</h1>
                <div className="movieInfo">
                    <p>directed by: BLAH BLAH</p>
                    <p>{selectedMovie.releaseDate}</p>
                    <p>{selectedMovie.original_language}</p>
                    <p>{selectedMovie.runtime} Minutes</p>
                    <p>{selectedMovie.vote_average} / 10</p>
                </div>
                <p>{selectedMovie.homepage}</p>
                <p>{selectedMovie.overview}</p>
            </div>
        );
    }
}

function mapState(state){
    return state;
}
 
export default connect(mapState)(Movie);