import React, { Component } from 'react';
import SortButtons from './lower-nav-children/SortButtons';
import { fetchMovieData, generateFilterUrl, generateSearchUrl} from '../../utils/fetch';
import { connect } from 'react-redux';

class LowerNavSort extends Component {
    state = {
        sortModes : {
            popularity : true,
            alphabetical : true,
            vote_average : true,
            primary_release_date : true
        }
    }
    render() { 
        const {sortModes} = this.state;
        const {with_genre, fetchUrls} = this.props;

        const onSort = async (type) => {
            const url = generateFilterUrl(fetchUrls.baseUrl, with_genre, type)
            const data = await fetchMovieData(url);
            this.props.dispatch({type: 'movie_data', payload : data.results});
        }

        const onSearch = async (event, typeOfSearch)=>{
            if (typeOfSearch === 'title'){
                const url = generateSearchUrl(event.target.value, fetchUrls.searchTitle);
                const data = await fetchMovieData(url);
                this.props.dispatch({type: 'movieData', payload : data.results});
            } else if (typeOfSearch === 'actor') {
                const url = generateSearchUrl(event.target.value, fetchUrls.searchActor);
                const data = await fetchMovieData(url);
                console.log(data);
                this.props.dispatch({type: 'movieData', payload : data.results[0].known_for});
            }
        }

        return (
        <div className="sort-by">
            <p className='sort-title'>Sort by</p>
            <div className="sorts">
                <SortButtons mode={sortModes.popularity} id={'popularity'} text={'Popularity'} onSort={onSort}/>
                <SortButtons mode={sortModes.alphabetical} id={'alphabetical'} text={'Alphabetical'} onSort={onSort}/>
                <SortButtons mode={sortModes.vote_average} id={'vote_average'} text={'By Score'} onSort={onSort}/>
                <SortButtons mode={sortModes.primary_release_date} id={'primary_release_date'} text={'Newest'} onSort={onSort}/>
            </div>
            <p className='search-title'>Search</p>
            <div className="searches">
                <input onChange={(event)=>{onSearch(event, 'title')}} type="text" placeholder='by title'/>
                <input onChange={(event)=>{onSearch(event, 'actor')}} type="text" placeholder='by actor'/>
            </div>
        </div>
        );
    }
}

function mapState(state){
    return state;
}
 
export default connect(mapState)(LowerNavSort);