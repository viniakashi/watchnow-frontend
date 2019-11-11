import React, { Component } from 'react';
import Header from './components/Header';
import FormularioLogin from './components/FormularioLogin';

export default class Login extends Component{

    render(){

        return(

            <div>
                <Header />
                <FormularioLogin />
            </div>

        )


    }
    
}