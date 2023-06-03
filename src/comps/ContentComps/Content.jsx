import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './ContentChildren/Card';
import axios from 'axios';

class Filtered extends Component {
    state = {  } 
    render() { 
        const {movieData, selectedMovieId} = this.props;
        movieData.forEach((movie)=>{
            return movie['overviewShort'] = `${movie.overview.split(" ").slice(0, 15).join(" ")}...`;
        });

        const getMovieId = async(id)=>{
            if(id === "") {
              console.log('none selected')
            } else {
                const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmEyNjQ2NDgzZTY0OGQ5YzVmZDkxNDU1YzQxNjQ2ZSIsInN1YiI6IjY0Nzg3ODViY2Y0YjhiMDBlMmQ0NzBmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZCDSPFM_yodRWtdfxjd7nRN3iaxoLu7dVi397aFCukE'
                    }
                };
              const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,options);
              this.props.dispatch({type:'selectedMovie', payload:data});
            }
        }
        return (
            <>
                <div className="filtered">
                    {movieData.map((movie)=>{
                        return <Card 
                            posterPath={movie.poster_path} 
                            title={movie.title} 
                            overview={movie.overviewShort} 
                            averageVote={movie.vote_average}
                            key={movie.id}
                            id={movie.id}
                            getMovieId={getMovieId}/>
                    })}
                </div>
            </>
        );
    }
}

function mapState(state){
    return state;
  }
 
export default connect(mapState)(Filtered);