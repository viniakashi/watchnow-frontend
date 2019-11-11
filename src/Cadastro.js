

import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import Header from './components/Header';
export default class Cadastro extends Component{

    render(){
        return(

            <div>
                <Header />
                <FormularioCadastro />
            </div>

        )
    }   
}