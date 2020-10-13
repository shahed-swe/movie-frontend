import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";


 class MovieDetails extends Component{
    
    state = {
        highlighted: -1,
    }

    highlightRate = high => evt => {
        this.setState({highlighted: high});
    }

    rateClicked = stars => evt => {
        fetch(`${process.env.REACT_APP_API_URL}/movie/${this.props.movie.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': "Token 314554a0acf7f1b21822478c3b2c291057157583",
            },
            body: JSON.stringify({stars: stars + 1})
            }).then(resp => resp.json())
            .then(res => this.getDetails())
            .catch(error => console.log(error))
    }

    getDetails = () =>{
        fetch(`${process.env.REACT_APP_API_URL}/movie/${this.props.movie.id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token 314554a0acf7f1b21822478c3b2c291057157583",
            }
        }).then(resp => resp.json())
        .then(res => this.props.updateMovie(res))
        .catch(error => console.log(error))
    }
    render(){
        const movie = this.props.movie;
        return (
            <React.Fragment>
                {movie ? (
                    <div key={movie.id}>
                        <h3>{movie.movie_name}</h3>
                        <p>{movie.description}</p>
                        <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 0 ? 'text-warning':'text-success'}/>
                        <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 1 ? 'text-warning':'text-success'}/>
                        <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 2 ? 'text-warning':'text-success'}/>
                        <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 3 ? 'text-warning':'text-success'}/>
                        <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 4 ? 'text-warning':'text-success'}/>
                        ({movie.no_of_ratings})
                        <div className="rate-container">
                            <h2>Rate It!!!</h2>
                            {[...Array(5)].map((e,i) => {
                                return <FontAwesomeIcon key={i} icon={faStar} className={this.state.highlighted > i - 1 ? 'text-primary' : ''} onMouseEnter={this.highlightRate(i)} onMouseLeave={this.highlightRate(-1)} onClick={this.rateClicked(i)}/>
                            })}
                        </div>
                    </div>
                ) : null}
            </React.Fragment>
        )
    }
}

export default MovieDetails;