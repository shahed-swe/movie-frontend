import React, { Component } from 'react';


class MovieList extends Component{
    render(){
        return (
            <React.Fragment>
                {this.props.movie.map(mv => {
                    return (
                        <div key={mv}>
                            <h1>{mv}</h1>
                        </div>
                    )
                })}
            </React.Fragment>

        )
    }
    
}

export default MovieList;