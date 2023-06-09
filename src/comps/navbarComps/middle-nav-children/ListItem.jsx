import React, { Component } from 'react';

class ListItem extends Component {
    state = { clicked : false } 
    render() { 
        const {onGenreFilter, fetchFilteredData, genre} = this.props;

        const changeClass = ()=>{
            this.state.clicked = !this.state.clicked;
        }

        return (<>
            <p 
                className={!this.state.clicked ? 'noClick' : 'click'} 
                onClick={(event)=>{onGenreFilter(genre.id); changeClass(); fetchFilteredData(genre.id)}} 
            >{genre.name}</p>
        </>);

    }
}
 
export default ListItem;