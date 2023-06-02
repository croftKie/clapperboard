import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './ContentChildren/Card';

class Filtered extends Component {
    state = {  } 
    render() { 
        const {movieData, selectedMovieId} = this.props;
        movieData.forEach((movie)=>{
            return movie['overviewShort'] = `${movie.overview.split(" ").slice(0, 15).join(" ")}...`;
        });

        const getMovieId = (id)=>{
            if(id === "") {
              console.log('none selected')
            } else {
              const filtered = movieData.filter((movie)=>{
                if (movie.id === id) return movie;
              });
              this.props.dispatch({type:'selectedMovie', payload:filtered[0]});
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