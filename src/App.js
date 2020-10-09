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

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Movie Rater
          <MovieList movie={this.new_movies} />
          </p>
        </header>
      </div>
    );
  }

}

export default App;
