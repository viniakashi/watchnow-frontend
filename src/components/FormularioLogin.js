import React, { Component } from 'react';
import ButtonUI from './ButtonUI';
import ImageLogin from '../assets/img/joker.jpg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/formulario-login.css';

export default class FormularioLogin extends Component{

    constructor(){
     super();
     
    }

    sendForm(event){
        
        event.preventDefault();
        console.log("Entrou");

        fetch('http://localhost:3006/', {
            method: 'post',
            body: `user_login=${this.login}&user_password=${this.user_password}`
        })
        .then(response => {
            console.log(response);
            response.json();
        })
        .then(user => {
            console.log(user);
        })

    }

    render(){

        return(

            <div>
                <div className="container-fluid">


                        <div className="row">

                            <div className="col-8 image-login">
                                <img className="img-fluid" src={ImageLogin}/>
                            </div>    


                            <div className="col-4">
                                
                                <form onSubmit={this.sendForm.bind(this)}>
                                    
                                    <div className="d-flex flex-column justify-content-center align-items-center container-inputs">

                                        <h2 className="text-white mb-4">WATCHNOW</h2>

                                        <div className="form-group">
                                            <label htmlFor="user_login" className="text-label">Login</label>
                                            <input type="text" className="form-control" id="user_login" required aria-describedby="emailHelp" placeholder="Login" ref={input => this.user_login = input}/>          
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="user_password" className="text-label">Senha</label>
                                            <input type="password" className="form-control" id="user_password" required aria-describedby="emailHelp" placeholder="Senha" ref={input => this.user_password = input }/>          
                                        </div>

                                        <div className="float-right botao-enviar">
                                            <ButtonUI  buttonName="Entrar" type="submit" icon="enviar" /> 
                                        </div>
                                    </div>

                                </form>

                            </div>    


                        </div>   




                </div>               
                
            </div>

        )


    }
    
}