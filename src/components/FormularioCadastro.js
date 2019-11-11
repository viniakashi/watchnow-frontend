
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/formulario-cadastro.css';
import React, { Component } from 'react';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
import CheckBoxUI from './CheckBoxUI';
import ButtonUI from './ButtonUI';
import FormErro from './FormErro';
import { Redirect } from 'react-router-dom';
import { reject } from 'q';
export default class FormularioCadastro extends Component{
    constructor(props){
        super(props);
        this.state = {checkNotificacao: false, checkTermos: false, redirect: false, errors: []};
    }
   


    sendForm(event){
        event.preventDefault();

        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded")
        headers.append("Accept", "application/json'");

        const request = {
            method: 'POST',
            headers: headers,
            body: `user_email=${this.email.value}&user_name=${this.name.value}&user_login=${this.login.value}&user_password=${this.password.value}`
        }
    

        
        fetch('http://localhost:3006/api/user/add', request)
        .then(response => {
       
           return response; 
          
        })

        .then(res => { 
       
            console.log(res.status);
            if(res.status >= 200 && res.status <= 299){
              
              this.setState({redirect: true});


            }else{
              return reject(res.json());
            }
          
        })

        .catch(err => {
            
            err.then(result => {
              this.setState({errors: result});
              console.log(result);
            })
            
        })
    }

   

    render(){
      
      if(this.state.redirect){
        return <Redirect to="/" />
      }
        return(
          <div className="container-fluid ">
              <form onSubmit={this.sendForm.bind(this)}> 

              <div className="row d-flex justify-content-center align-items-center mt-5">

                <div className="col-8 container-form">

                {this.state.errors.errors ? <FormErro errors={this.state.errors.errors}/> : ''}


              <h1 className="text-center text-white text-uppercase">Cadastro</h1>

                    <div className="row">

                        <div className="col-lg-6 col-xl-6 col-xs-12 col-sm-12">  
                            <div className="form-group">
                              <label htmlFor="email" className="text-label">Endereço de email</label>
                              <input type="email" className="form-control" id="email" required aria-describedby="emailHelp" placeholder="Digite o seu email" ref={input => this.email = input}/>
                            
                            </div>
                        </div>

                        <div className="col-lg-6 col-xl-6 col-xs-12 col-sm-12">  
                            <div className="form-group">
                              <label htmlFor="name" className="text-label">Nome</label>
                              <input type="text" className="form-control" id="name" required aria-describedby="nameHelp" placeholder="Nome" ref={input => this.name = input}/>
                            
                            </div>
                        </div>


                    </div>

                    <div className="row">

                          <div className="col-lg-6 col-xl-6 col-xs-12 col-sm-12">  
                              <div className="form-group">
                                <label htmlFor="login" className="text-label">Login</label>
                                <input type="text" className="form-control" id="login" required aria-describedby="loginHelp" placeholder="Login" ref={input => this.login = input}/>
                              
                              </div>
                          </div>

                          <div className="col-lg-6 col-xl-6 col-xs-12 col-sm-12">  
                              <div className="form-group">
                                <label htmlFor="password" className="text-label">Senha</label>
                                <input type="password" className="form-control" id="password" required aria-describedby="passwordHelp" placeholder="Senha" ref={input => this.password = input}/>
                              
                              </div>
                          </div>

                          <div className="col-12">  
                               <div ><CheckBoxUI  className="checkbox-text" texto="Desejo receber notificações via email da WatchNow."/></div>
                               <div ><CheckBoxUI className="checkbox-test "texto="Li e concordo com os termos de uso da WatchNow."/></div>
                           
                          </div>
                          </div>
                        
                        <div  className="float-right botao-enviar" >
                           <ButtonUI  buttonName="Enviar" type="submit" icon="enviar" /> 
                         </div>
                  </div>


                 
              </div> 

            


           
            </form>
          </div>
        )
    }   
}