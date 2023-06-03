import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/App.css'

import UpperNavbar from './comps/navbarComps/UpperNavbar';
import MiddleNav from './comps/navbarComps/MiddleNav';
import LowerNavSort from './comps/navbarComps/LowerNavSort';
import NavMood from './comps/navbarComps/LowerNavMood';
import NavTrending from './comps/navbarComps/MiddleNavTrending';

import Filtered from './comps/ContentComps/Content';
import Movie from './comps/movieComps/Movie';


class App extends Component {

  render() { 
    const {mode, selectedMovie} = this.props;

    const navModeSelector = ()=>{
      switch (mode) {
        case 'filter':
          this.props.dispatch({type: 'selectedMovieId', payload: ""});
          this.props.dispatch({type: 'selectedMovie', payload: ""});
          this.props.dispatch({type: 'mode', payload: ""});
          return (
            <>
              <UpperNavbar />
              <MiddleNav />
              <LowerNavSort />
            </>
          )
        case 'trending':
          return (
            <>
              <UpperNavbar />
              <NavTrending />
            </>
          )
        case 'mood':
          return (
            <>
              <UpperNavbar />
              <NavMood />
            </>
          )
        default:
          return (
            <>
              <UpperNavbar />
              <MiddleNav />
              <LowerNavSort />
            </>
          )
      }
    } 

    return (
      <>
        {selectedMovie!== "" ? <UpperNavbar /> : navModeSelector()}
        {selectedMovie !== "" ? <Movie /> : <Filtered />}
      </>
    );
  }
}

function mapState(state){
  return state;
}
 
export default connect(mapState)(App);
