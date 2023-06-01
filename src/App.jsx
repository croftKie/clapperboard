import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './css/App.css'

import NavMain from './comps/Nav-main';
import Loading from './comps/Loading';
import Filtered from './comps/Filtered';
import Random from './comps/Random';
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
        <NavMain />
        {this.props.mode === "filter" ? <Filtered /> : 
          this.props.mode === "random" ? <Random /> : 
          this.props.mode === "mood" ? <Mood /> : <Filtered />}
      </>
    );
  }
}

function mapState(state){
  return state;
}
 
export default connect(mapState)(App);
