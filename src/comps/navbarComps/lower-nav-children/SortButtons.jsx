import React, { Component } from 'react';
import desc from '../../../assets/sort-descending.png';
import asc from '../../../assets/sort-ascending.png';

class SortButtons extends Component {
    state = { 
        clicked : false,
        sortState : true
    } 
    render() { 
        const {onSort, text, id} = this.props;

        const changeClass = ()=>{
            this.state.clicked = !this.state.clicked;
        }

        const sortTextToggle = ()=>{
            this.setState({sortState : !this.state.sortState});
        }

        return (
            <div className='sortItem'>
                <p className={!this.state.clicked ? 'noClick' : 'click'} 
                                onClick={(event)=>{
                                onSort(event, id);
                                changeClass();
                                sortTextToggle();
                                }}>{text}</p>
                <img src={this.state.sortState ? asc : desc}></img>
            </div>
        );

    }
}
 
export default SortButtons;