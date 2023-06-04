import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/App.css'

import UpperNavbar from './comps/navbarComps/UpperNavbar';
import MiddleNav from './comps/navbarComps/MiddleNav';
import LowerNavSort from './comps/navbarComps/LowerNavSort';

import Filtered from './comps/ContentComps/Content';
import Movie from './comps/movieComps/Movie';
import { fetchMovieData } from './utils/fetch';


class App extends Component {

  async componentDidMount(){
    const data = await fetchMovieData(this.props.fetchUrls.trendingUrl);
    this.props.dispatch({type: 'movie_data', payload : data.results});
  }

  render() { 
    const {mode, selectedMovie} = this.props;


    return (
      <>
        <UpperNavbar />
        <MiddleNav />
        <LowerNavSort />
        {selectedMovie !== "" ? <Movie /> : <Filtered />}
      </>
    );
  }
}

function mapState(state){
  return state;
}
 
export default connect(mapState)(App);
