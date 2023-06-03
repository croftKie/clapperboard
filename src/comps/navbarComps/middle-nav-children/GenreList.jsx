import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieData, generateFilterUrl } from '../../../utils/fetch';
import ListItem from './ListItem';

class GenreList extends Component {
    render() { 
        const {genres, sort_by, fetchUrls, mode} = this.props;

        const setGenre = (genreId)=>{
            this.props.dispatch({type: 'with_genre', payload: genreId});
        }

        const fetchFilteredData = async (genreId)=>{
            const url = generateFilterUrl(fetchUrls.baseUrl, genreId, sort_by);
            const data = await fetchMovieData(url);
            this.props.dispatch({type: 'movie_data', payload : data.results});
        } 

        const resetClicked = (event)=>{
            event.currentTarget.childNodes.forEach((child)=>{
                child.className = 'noClick';
            });
        }
        return (
        <div onClick={resetClicked} className="genres">
            {genres.map( (genre) => <ListItem key={genre.id} onGenreFilter={setGenre} fetchFilteredData={fetchFilteredData} genre={genre}/>)}
        </div>
        );
    }
}

function mapState(state){
    return state;
}
 
export default connect(mapState)(GenreList);