import React, { Component } from 'react';
import SortButtons from './lower-nav-children/SortButtons';

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
        const onSort = async (event, type) => {
            
            if(sortModes[type]){
                console.log(type + 'desc');
                this.props.dispatch({type:'filters', payload: {sort_by : `${type}.desc`}});
                sortModes[type] = !sortModes[type];
            } else {
                this.props.dispatch({type:'filters', payload: {sort_by : `${type}.asc`}});
                sortModes[type] = !sortModes[type];
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
        <div className="sort-by">
            <p className='sort-title'>Sort by</p>
            <div onClick={resetClicked} className="sorts">
                <SortButtons mode={sortModes.popularity} text={'Popularity'} onSort={onSort}/>
                <SortButtons mode={sortModes.alphabetical} text={'Alphabetical'} onSort={onSort}/>
                <SortButtons mode={sortModes.vote_average} text={'By Score'} onSort={onSort}/>
                <SortButtons mode={sortModes.primary_release_date} text={'Newest'} onSort={onSort}/>
            </div>
            <p className='search-title'>Search</p>
            <div className="searches">
                <input type="text" placeholder='by title'/>
                <input type="text" placeholder='by actor'/>
            </div>
        </div>
        );
    }
}
 
export default LowerNavSort;