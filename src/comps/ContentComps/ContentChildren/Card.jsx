import React, { Component } from 'react';
import { data } from '../../../test-data';
import Info from './Info';

class Card extends Component {
    state = { show : false } 

    render() { 
        const {title, overview, averageVote, posterPath, id, getMovieId} = this.props;

        const toggleTextOnHover = () => {
            if (this.state.show) { 
                this.setState({show:false});
            } else {
                this.setState({show : true});
            }
        }

        const text = this.state.show ? 
                    <Info 
                        title={title} 
                        overview={overview} 
                    /> : <></>;
        return (
            <div onClick={()=>{getMovieId(id)}} onMouseEnter={toggleTextOnHover} onMouseLeave={toggleTextOnHover} className="card">
                <img src={`https://image.tmdb.org/t/p/w1280/${posterPath}`} alt="" />
                {text}
            </div>
        );
    }
}
 
export default Card;