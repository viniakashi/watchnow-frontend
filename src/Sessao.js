import React, { Component } from 'react';
import Header from './components/Header';
import HeaderImg from './assets/img/header.png'
import ArrowBack from './assets/img/arrow-back.svg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SessaoRede from './components/SessaoRede';
import './css/sessao-rede.css';
export default class Sessao extends Component{

    constructor(){
        super();
        this.state = {redes: [], movie: {movie_section_img: ''}};
    }

    componentWillMount(){

        fetch(`http://localhost:3006/api/sections/${this.props.match.params.id}`)

            .then(response => {
                
                return response.json();
                
            })

            .then(redes => {
               
                const movies = redes.Movie[0];
                
                if(movies.movie_section_img != ""){
                  this.setState({redes: redes.Redes, movie: redes.Movie[0]});
                }else{
                    this.setState({redes: redes.Redes});
                }

            })

            .catch(err => {
                console.log(err);
            })

            

    }
    
    render(){
        console.log(this.state.movie);  
        return(
            <div>
                <Header /> 
                
                <div className="headerMobile_bgWatch img-movie">
                    <div class="arrow-back">
                        <ArrowBackIosIcon/>
                     </div>
                     <img src={`${(this.state.movie.movie_section_img != "" && this.state.movie.movie_section_img != null? 'http://localhost:3006/' + this.state.movie.movie_section_img : HeaderImg)}`} alt="Watch" />
               </div>
                <h2 className="session-movie-title" >{this.state.movie.movie_name}</h2>
                
               {this.state.redes.map(rede => {
                   return <SessaoRede redes={rede} movie={this.state.movie}/>
               })}
                
            </div>
        )
    }
}