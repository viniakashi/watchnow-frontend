import React, { Component } from 'react';
import Header from './components/Header';
import Step from './components/Step';
import PubSub from 'pubsub-js';
import ChairSelected from './components/ChairSelected';
import IngressoItem from './components/IngressoItem';
import ButtonUI from './components/ButtonUI';
export default class Ingresso extends Component{

    constructor(props){
        super(props);
        this.statusPagamento = false;
        this.state = {chairCount: props.location.state.chairCount, statusPagamento: false};
    }

    componentWillMount(){
        PubSub.subscribe('pagamento', (topic, data) => {
            console.log(data);
                this.setState({statusPagamento: data.statusPagamento});
            }
        )
    }
    render(){

        return(
          
            <div>
                 <Header />
                <div className="container-fluid">

                    <div className="row">
                    {console.log(this.props)}
                        <div className="col-4">
                             <Step step="Tipo" chairCount={this.props.location.state.chairCount} chair={this.props.location.state.chair} statusIngresso={true} statusPagamento={this.state.statusPagamento} />
                        </div>

                        <div className="col-8">

                            <div className="row">

                                <div className="col">
                                    <p className="text-white">Escolha os tipos de ingresso para os assentos selecionados</p>
                                 
                                       <ChairSelected chairSeat={this.props.location.state.chair} />
                                 
                                </div>

                            </div>

                            <div className="row d-flex justify-content-center" >



                                <div className="col-6 p-4" style={{backgroundColor: 'grey'}}>
                                    <IngressoItem chairCount={this.props.location.state.chairCount}/>
                                </div>

                            </div>
                            
                        </div>

                    </div>

                    <div className="row d-flex justify-content-center" >

                        <div className="col-5" style={{position: 'absolute', bottom: '5%', right: '50%'}} >
                            <ButtonUI style={{width: '80%'}} buttonName="<- Escolher os assentos"/>
                        </div>

                        <div className="col-5 "style={{position: 'absolute', bottom: '5%', left: '50%'}}>
                             <ButtonUI style={{width: '80%'}} buttonName="Forma de pagamento ->"/>
                        </div>

                    </div>

                </div>
            </div>

        )
        
    }

}