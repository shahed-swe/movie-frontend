import React, { Component } from 'react';


class MovieList extends Component{

    render(){
        return (
            <React.Fragment>
                <h2>This will be our movie MovieList</h2>
                {this.props.movie.map(mv => {
                    return (
                        <div key={mv}>
                            <ul>
                                <li>{mv}</li>
                            </ul>
                        </div>
                    )
                })}
            </React.Fragment>

        )
    }
    
}

export default MovieList;