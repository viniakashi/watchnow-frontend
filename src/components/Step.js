import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Step extends Component{

    render(){
        return(
            <div>
                <ul>
                    {(this.props.step == "Ingresso" || !this.props.statusIngresso ? <li style={(this.props.step == "Ingresso" ? {backgroundColor: '#dc3545'} : {backgroundColor: 'grey'})}>ESCOLHA DOS ASSENTOS</li> : <Link to={'/chairs/3/3'} ><li style={(this.props.step == "Ingresso" ? {backgroundColor: '#dc3545'} : {backgroundColor: 'grey'})}>ESCOLHA DOS ASSENTOS</li></Link>)}
                    {(this.props.step == "Tipo" || !this.props.statusTipo ? <li style={(this.props.step == "Tipo" ? {backgroundColor: '#dc3545'} : {backgroundColor: 'grey', opacity: '0.5'})}>TIPOS DE INGRESSO</li> : <Link to={{pathname:'/ingresso/1', state: {chair: this.props.chair, chairCount: this.props.chairCount}}} ><li style={(this.props.step == "Tipo" ? {backgroundColor: '#dc3545'} : {backgroundColor: 'grey'})}>TIPOS DE INGRESSO</li></Link>)}
                    {(this.props.step == "Pagamento" || !this.props.statusPagamento ? <li style={(this.props.step == "Pagamento" ? {backgroundColor: '#dc3545'} : {backgroundColor: 'grey', opacity: '0.5'})}>FORMA DE PAGAMENTO</li> : <Link to={{pathname: '/pagamento/1',state: {chair: this.props.chair, chairCount: this.props.chairCount} }} ><li style={(this.props.step == "Pagamento" ? {backgroundColor: '#dc3545'} : {backgroundColor: 'grey'})}>FORMA DE PAGAMENTO</li></Link>)}
    
                </ul>
             </div>
        )
    }

}