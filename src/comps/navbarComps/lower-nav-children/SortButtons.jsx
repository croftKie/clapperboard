import React, { Component } from 'react';

class SortButtons extends Component {
    state = { clicked : false } 
    render() { 
        const {onSort, text} = this.props;

        const changeClass = ()=>{
            this.state.clicked = !this.state.clicked;
        }

        return (<>
                <p className={!this.state.clicked ? 'noClick' : 'click'} onClick={(event)=>{
                                onSort(event, text);
                                changeClass()
                                }}>{text}</p>
        </>);

    }
}
 
export default SortButtons;