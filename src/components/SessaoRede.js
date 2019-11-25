import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/sessao-rede.css';

class SessaoInfo extends Component{

    render(){
        return(
            <div className="sessao jumbotron p-2">
                <span className="text-white" >11/11/2019 - Segunda-Feira </span>
                <br/>
                <Link to={`/chairs/${this.props.section.section_id}/${this.props.movie.movie_id}`} className="link">Shopping Internacional, Vila Mariana, São Paulo <br/>18:40 - 2D</Link>
            </div>    

        )
    }

}   
export default class SessaoRede extends Component{

 

    render(){
    

        return(
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center ">
                <div className="row">   
                    <div className="col-12">
                            <div className="container-rede">
                                <h2 className="text-white "> {this.props.redes.sessoes[0] ? this.props.redes.nome : ''} </h2>
                                <div className="sessoes ">

                                    {this.props.redes.sessoes.map(section => {
                                        
                                        return <SessaoInfo section={section} movie={this.props.movie}  />

                                    })}
                                  

                                </div>
                                
                            </div>
                    </div>
                </div>

               


         </div>
        )

    }


}