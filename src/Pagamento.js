import React, { Component } from 'react';
import Header from './components/Header';
import Step from './components/Step';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class Pagamento extends Component{

    render(){

        return(
            <div>
                 <Header />
                 <div className="container-fluid">
                  <div className="row">
                
                        <div className="col-4">
                             <Step step="Pagamento" chair={this.props.location.state.chair} chairCount={this.props.location.state.chairCount} statusIngresso={true} statusTipo={true} />
                             <div className="resumo-pedido">
                                <div className="card" style={{width: '100%', border: '2px solid grey'}}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Resumo do pedido</h5>
                                        <h6 className="card-subtitle mb-2 text-muted text-center">A Era do Gelo 4</h6>
                                        <h6 className="card-subtitle mb-2 text-muted text-center">18:00 - 22:00 - Shopping Internacional Guarulhos (Sala 4)</h6>

                                        <p className="card-text text-center">Assentos:</p>
                                        <p className="text-center">A - 22, A - 21, A - 20</p>
                                        <p className="text-center">1x Meia (R$ 11,00)</p>
                                        <p className="text-center">2x Inteira (R$ 22,00)</p>

                                        <div className="list-group list-group-flush">

                                            <div className="text-center list-group-item">
                                                <h5>TOTAL</h5>
                                                <p className="text-center">R$ 55, 00</p>
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div className="col-6">
                          
                        </div>

                    </div>

                 </div>
            </div>
        )
        
    }

}