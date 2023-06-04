import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/App.css'
import next from './assets/next.png';
import previous from './assets/previous.png';

import UpperNavbar from './comps/navbarComps/UpperNavbar';
import MiddleNav from './comps/navbarComps/MiddleNav';
import LowerNavSort from './comps/navbarComps/LowerNavSort';

import Filtered from './comps/ContentComps/Content';
import Movie from './comps/movieComps/Movie';
import { fetchMovieData } from './utils/fetch';


class App extends Component {
  state = {
    currentPage : 1
  }


  async componentDidMount(){
    const data = await fetchMovieData(this.props.fetchUrls.trendingUrl);
    this.props.dispatch({type: 'current_url', payload : this.props.fetchUrls.trendingUrl});
    this.props.dispatch({type: 'movie_data', payload : data.results});
  }



  render() { 
    const {mode, selectedMovie} = this.props;

    const nextPageLoadData = async()=>{
      const data = await fetchMovieData(this.props.current_url + `&page=${this.state.currentPage + 1}`);
      this.setState({currentPage : this.state.currentPage + 1});
      this.props.dispatch({type: 'movie_data', payload : data.results});
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
    const prevPageLoadData = async()=>{
      const data = await fetchMovieData(this.props.current_url + `&page=${this.state.currentPage - 1}`);
      this.setState({currentPage : this.state.currentPage + 1});
      this.props.dispatch({type: 'movie_data', payload : data.results});
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
      <>
        {selectedMovie !== "" ? 
          <>
            <UpperNavbar />
            <Movie />
          </> : 
          <>
            <UpperNavbar />
            <MiddleNav />
            <LowerNavSort />
            <Filtered />
            <div className="pagination">
              <button onClick={prevPageLoadData}><img src={previous} alt="" /></button>
              <button onClick={nextPageLoadData}><img src={next} alt="" /></button>
            </div>
          </>}
      </>
    );
  }
}

function mapState(state){
  return state;
}
 
export default connect(mapState)(App);
