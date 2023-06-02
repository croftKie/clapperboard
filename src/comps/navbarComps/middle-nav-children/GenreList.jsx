import React, { Component } from 'react';
import { connect } from 'react-redux';
import {initialState} from '../../../store/initialState';
import { fetchMovieData, generateFetchUrl } from '../../../utils/fetch';
import ListItem from './ListItem';

class GenreList extends Component {
    state = {  } 
    render() { 
        const {movieData, genres, filters, fetchUrls} = this.props;

        const onGenreFilter = async (event)=>{
            let copy = [...movieData];
            const value = event.target.attributes[1].value;

            if (value === "-1"){
                this.props.dispatch({type: "movieData", payload: initialState.movieData});
            } else {
                copy = copy.filter((movie) => {
                    if (movie.genre_ids.includes(parseInt(value))) return movie;
                });
                this.props.dispatch({type: 'filters', payload: {with_genres : parseInt(value)}});
                this.props.dispatch({type: "movieData", payload: copy});
            }

            const url = generateFetchUrl(filters, fetchUrls.baseUrl)
            
            const data = await fetchMovieData(url);
            this.props.dispatch({type: 'movieData', payload : data.results});
        }


        const resetClicked = (event)=>{
            event.currentTarget.childNodes.forEach((child)=>{
                child.className = 'noClick';
            });
        }
        return (
        <div onClick={resetClicked} className="genres">
            <p data-value="-1" onClick={onGenreFilter}>All</p>
            {genres.map( (genre) => <ListItem key={genre.id} onGenreFilter={onGenreFilter} genre={genre}/>)}
        </div>
        );
    }
}

function mapState(state){
    return state;
}
 
export default connect(mapState)(GenreList);