import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/App.css'

import UpperNavbar from './comps/navbarComps/UpperNavbar';
import MiddleNav from './comps/navbarComps/MiddleNav';
import LowerNavSort from './comps/navbarComps/LowerNavSort';

import Filtered from './comps/Filtered';
import Trending from './comps/Trending';
import Mood from './comps/Mood';
import { fetchMovieData } from './utils/fetch';

const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US';

class App extends Component {

  async componentDidMount(){
    const data = await fetchMovieData('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US');
  }


  render() { 

    return (
      <>
        <UpperNavbar />
        <MiddleNav />
        <LowerNavSort />
        {this.props.mode === "filter" ? <Filtered /> : 
          this.props.mode === "trending" ? <Trending /> : 
          this.props.mode === "mood" ? <Mood /> : 
          <Filtered />}
      </>
    );
  }
}

function mapState(state){
  return state;
}
 
export default connect(mapState)(App);
