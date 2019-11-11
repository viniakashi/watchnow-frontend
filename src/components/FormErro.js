import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class FormErro extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            <div className="alert alert-danger" role="alert">
                {this.props.errors.map(erro => {
                    return `
                    
                      ${erro.msg} 
                
                    `;
                })}
            </div>

        )
    }

}