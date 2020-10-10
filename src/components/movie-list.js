import React, { Component } from 'react';
import MovieDetails from './movie-details';

class MovieList extends Component{
    render(){
        return (
            <React.Fragment>
                {this.props.movie.map(mv => {
                    return (
                        
                        <div className="card">
                            <div className="card-body" key={mv.id}>
                                <div className="card-title float-left">
                                    {mv.movie_name}
                                </div>
                                {/* <div className="card float-right">
                                    <MovieDetails all={{description : mv.description,rating : mv.no_of_ratings,avg_rating: mv.avg_rating}} />
                                </div> */}
                                
                            </div>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
    
}

export default MovieList;