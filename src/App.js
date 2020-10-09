import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movie-list'


class App extends Component {
  new_movies = [
    'avatar',
    'avengers',
    'lucy',
    'capptain america'
  ]

  componentDidMount(){
    fetch("http://localhost:8000/movie/",{
      method: 'GET',
      headers: {
        Authorization: "Token 314554a0acf7f1b21822478c3b2c291057157583",
      }
    }).then( resp => resp.json())
    .then( res => console.log(res))
    .catch(error => console.log(error))
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Movie Rater
          </p>
          <MovieList movie={this.new_movies} />
        </header>
      </div>
    );
  }

}

export default App;
