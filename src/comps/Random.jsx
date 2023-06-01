import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import NavRandom from './navs/Nav-Random';

class Random extends Component {
    state = {  } 
    render() { 
        const data = this.props.movieData;
        data.forEach((movie)=>{
            return movie['overviewShort'] = `${movie.overview.split(" ").slice(0, 15).join(" ")}...`;
        });
        return (
            <>
                < NavRandom />
                <div className="filtered">
                    {data.map((movie)=>{
                        return <Card 
                            posterPath={movie.poster_path} 
                            title={movie.title} 
                            overview={movie.overviewShort} 
                            averageVote={movie.vote_average}
                            key={movie.id}/>
                    })}
                </div>
            </>



        );
    }
}

function mapState(state){
    return {
      movieData : state.movieData
    }
  }
 
export default connect(mapState)(Random);