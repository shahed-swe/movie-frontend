import React, { Component } from 'react';
import './style/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class MovieList extends Component{


    movieClicked = movie => evt => {
        this.props.movieClicked(movie);
    };

    removeClicked = movie =>{
        fetch(`${process.env.REACT_APP_API_URL}/movie/${movie.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token 314554a0acf7f1b21822478c3b2c291057157583",
            }
        }).then(resp => this.props.movieDeleted(movie))
        .catch(error => console.log(error))

    }

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
                            <div className="row">
                                <button className="btn btn-outline-success" onClick=""><FontAwesomeIcon icon={faEdit} /> Edit</button>
                                <button className="btn btn-outline-danger" onClick={() => this.removeClicked(mv)}><FontAwesomeIcon icon={faTrash} /> Delete</button>
                            </div>
                            
                            
                            
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
    
}

export default MovieList;