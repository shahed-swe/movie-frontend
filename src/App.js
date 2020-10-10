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

  render(){
    return (
        <React.Fragment>
          <Header/>
          <div className="container">
            <div className="card">
              <MovieList movie={this.state.movies} />
              <MovieDetails movie={this.state.selectedMovie}/>
            </div>
          </div>
          <Footer/>
        </React.Fragment>
    );
  }

}

export default App;