import React, { Component } from 'react';
import { connect } from 'react-redux';
import {initialState} from '../../store/initialState';
import { fetchMovieData } from '../../utils/fetch';

class NavFiltered extends Component {

    render() { 
        const {movieData, genres, filters} = this.props;

        const onGenreFilter = (event)=>{
            let copy = [...movieData];
            const value = event.target.attributes[0].value;

            if (value === "-1"){
                this.props.dispatch({type: "movieData", payload: initialState.movieData});
            } else {
                copy = copy.filter((movie) => {
                    if (movie.genre_ids.includes(parseInt(value))){
                        return movie;
                    }
                });
                this.props.dispatch({type: 'filters', payload: {genreFilter : parseInt(value)}});
                this.props.dispatch({type: "movieData", payload: copy});
            }
            
            onSubmitFilter(filters);
        }
        const onSubmitFilter = async (filter)=>{
            const genreFilter = `&with_genres=${filter.genreFilter}`;
            const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US${genreFilter}`;
            const data = await fetchMovieData(url);
            this.props.dispatch({type: 'movieData', payload : data.results})
        }

        return (
            <div className="nav-filtered">
                <h2>Choose a filter:</h2>
                <div className="genres">
                    <p data-value="-1" onClick={onGenreFilter}>All</p>
                    {genres.map((genre)=>{
                        return <p onClick={onGenreFilter} key={genre.id} data-value={genre.id}>{genre.name}</p>
                    })}
                </div>
            </div>
        );
    }
}

function mapState(state){
    return state;
}
 
export default connect(mapState)(NavFiltered);