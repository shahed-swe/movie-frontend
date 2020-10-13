import React, { Component } from 'react';
import './style/style.css';


class MovieList extends Component{


    movieClicked = movie => evt => {
        this.props.movieClicked(movie);
    };

    render(){
        return (
            <React.Fragment>
                {this.props.movie.map(mv => {
                    return (
                        <div className="card take col-4" key={mv.id}>
                            <div className="card-body"  onClick={this.movieClicked(mv)}>
                                <div className="card-title float-left">
                                    {mv.movie_name}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
    
}

export default MovieList;