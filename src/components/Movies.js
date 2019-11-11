import React, { Component } from 'react';

class MovieItem extends Component{
    render(){

        return(
            <div className="container_item">
            <img src={`http://localhost:3006/${this.props.movie.movie_img}`} alt="Rolo de Filme" />
                <div className="container_item-descricao">
                    <p>{this.props.movie.movie_name}</p>
                </div>
            </div>

        )

    }
    
}

export default class Movies extends Component{

    constructor(){
    super();
    this.state = {movies: []};

    }

    componentWillMount(){

        fetch('http://localhost:3006/api/filmes')
            .then(response => {
                console.log(response)
                return response.json();
            })
            .then(movies => {
                this.setState({movies})
                console.log(movies);
            })

    }

    render(){

        return(
            <div className="container">
                {this.state.movies.map(movie => {
                    return <MovieItem key={movie.movie_id} movie={movie}/>
                })}

             </div>
        )

    }

}