import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieData } from '../../../utils/fetch';

class UpperNavMenu extends Component {
    state = {  } 
    render() { 
        const {fetchUrls, mode} = this.props;
        const setMode = (mode)=>{
            this.props.dispatch({type:'mode', payload:mode})
        }

        const setTrending = async ()=>{
            const data = await fetchMovieData(fetchUrls.trendingUrl, mode);
            this.props.dispatch({type: "movieData", payload: data.results})
        }
        return (
        <div className="modes">
            <button onClick={()=>{setMode("filter")}}>Find a Movie</button>
            <button onClick={()=>{setMode("trending"); setTrending()}}>Trending</button>
            <button onClick={()=>{setMode("mood")}}>Movies by Mood</button>
        </div>
        );
    }
}

function mapState(state){
    return state;
}
 
export default connect(mapState)(UpperNavMenu);