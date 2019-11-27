import React, { Component } from 'react';
import Header from './components/Header';
import Step from './components/Step';
import ButtonUI from './components/ButtonUI';
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
                                        <h6 className="card-subtitle mb-2 text-muted text-center">Shopping Internacional, Vila Mariana, São Paulo 18:40 - 22:00, 2D</h6>

                                        <p className="card-text text-center">Assentos:</p>
                                        <p className="text-center">A - 2, A - 3, A - 4</p>
                                        <p className="text-center">3x Meia (R$ 11,00)</p>
                                        

                                        <div className="list-group list-group-flush">

                                            <div className="text-center list-group-item">
                                                <h5>TOTAL</h5>
                                                <p className="text-center">R$ 33, 00</p>
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div className="col-8 text-white">
                            <form>
                                <div className="row ">
                                        <div className="col-6">

                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Número do Cartão</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Número do Cartão" />
                                            </div>

                                        </div>

                                        <div className="col-6">

                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Nome no Cartão</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Nome no Cartão" />
                                            </div>
                                            
                                        </div>
                                </div>

                                <div className="row">
                                        <div className="col-6">

                                            <div className="row">

                                                <div className="col-6">
                                                    <div class="form-group">
                                                        <label className="text-white" for="meia-premium"><strong>Mês Validade</strong></label>
                                                            <select class="form-control" id="meia-premium">
                                                                <option value="01">01</option>
                                                                <option value="02">02</option>
                                                                <option value="03">03</option>
                                                                <option value="04">04</option>
                                                                <option value="05">05</option>
                                                                <option value="06">06</option>
                                                                <option value="07">07</option>
                                                                <option value="08">08</option>
                                                                <option value="09">09</option>
                                                                <option value="10">10</option>
                                                                <option value="11">11</option>
                                                                <option value="12">12</option>
                                                            </select>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div class="form-group">
                                                        <label className="text-white" for="meia-premium"><strong>Ano Validade</strong></label>
                                                            <select  class="form-control" id="meia-premium">
                                                                <option value="2020">2020</option>
                                                                <option value="2021">2021</option>
                                                                <option value="2022">2022</option>
                                                                <option value="2023">2023</option>
                                                                <option value="2024">2024</option>
                                                                <option value="2025">2025</option>
                                                                <option value="2026">2026</option>
                                                                <option value="2027">2027</option>
                                                                <option value="2028">2028</option>
                                                                <option value="2029">2029</option>
                                                                <option value="2030">2030</option>
                                                            </select>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="col-6">

                                            <div class="form-group">
                                                <label for="exampleInputPassword1">CPF</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="CPF" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                        <div className="row">

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Endereço</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Endereço" />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Cidade</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Cidade" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Estado</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Estado" />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Bairro</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Bairro" />
                                                </div>
                                            </div>
                                       </div>

                                       <div className="row">

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Número</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Número" />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">CEP</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CEP" />
                                                </div>
                                            </div>

                                        </div>
                                
                                
                                

                                <div className="" style={{position: 'absolute', bottom: '-2%', left: '20%', width: '80%'}}>
                                    <ButtonUI style={{width: '80%'}} buttonName="Finalizar Compra"/>
                                </div>

                            </form>
                          
                        </div>

                    </div>

                 </div>
            </div>
        )
        
    }

}