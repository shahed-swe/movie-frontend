import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movie-list'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './components/style/style.css'
import {Header, Footer} from  './components/navbar'
import MovieDetails from './components/movie-details'

class App extends Component {

  state = {
    movies: [],
    selectedMovie: null
  }

  componentDidMount(){
    fetch("http://localhost:8000/movie/",{
      method: 'GET',
      headers: {
        Authorization: "Token 314554a0acf7f1b21822478c3b2c291057157583",
      }
    }).then( resp => resp.json())
    .then( res => this.setState({movies: res} ))
    .catch( error => console.log(error) )
  }

  loadMovies = movie => {
    this.setState({selectedMovie: movie});
  }
  
  movieDeleted = selMovie => {
    // console.log(selMovie)
    const movies = this.state.movies.filter(movie => movie.id !== selMovie.id);
    this.setState({movies: movies, selectedMovie: null});
  }

  render(){
    return (
        <React.Fragment>
          <Header/>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 col-md-6 col-sm-10">
                <div className="row">
                <MovieList movie={this.state.movies} movieClicked={this.loadMovies} movieDeleted={this.movieDeleted}/>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-sm-10">
              <MovieDetails movie={this.state.selectedMovie} updateMovie={this.loadMovies}/>
              </div>
            </div>
          </div>
          <Footer/>
        </React.Fragment>
    );
  }
}

export default App;