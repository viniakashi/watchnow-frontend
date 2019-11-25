import React, { Component } from 'react';
import ChairImg from '../assets/img/chair-3.svg';
import PubSub from 'pubsub-js';
import FormErro from './FormErro';
import SelectUI from './SelectUI';
import Step from './Step';
import ButtonUI from './ButtonUI';
import $ from 'jquery';

import '../css/chair.css';
import '../js/chair-change';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class ChairPaymentInfo extends Component{

    constructor(){
        super();
        this.state = {total: 0.00};
    }

    componentWillMount(){
        PubSub.subscribe('total-chairs', (topic, data) => {


            this.setState({total: this.state.total + data.value});

        })
    }
    render(){

        return(
            <div>
              
                <p>{this.state.total}</p>
            </div>
        )
    }

}
class ChairInfo extends Component{


    render(){

        return(
            <div className="d-flex justify-content-between">

                <div>
                    <h3>Poltronas Selecionadas</h3>
                    {this.props.chairs.map(chair => {

                        return chair.poltronas.map((poltrona) => {
                            if(poltrona.status){

                                return (
                                    <div className="d-flex justify-content-center" style={{backgroundColor: '#fff', width: '330px', padding: '30px'}}>
                                        <SelectUI chair={chair} poltrona={poltrona}/>
                                    </div>
                                );
                            }
                        });

                    })}
                </div>

                <div>
                    <h3>TOTAL COMPRA</h3>
                    <ChairPaymentInfo />
                </div>
            </div>
        )

    }
}
class Chair extends Component{

    constructor(props){
        super(props);
        
        this._chairs = props.chairs;
        this._chairSelecteds = [];
    }
    selectChair(chair, poltrona, indexChair, indexPoltrona, e){
        
        e.preventDefault();
        var chairIndex = this._chairs[indexChair];
        var poltronaIndex = chairIndex.poltronas[indexPoltrona];
        var chairElement = $(`#${chair.letra + poltrona.id}`);
        var action;
        

        if(poltrona.livre){

            if(poltronaIndex.status){

                
                poltronaIndex.status = !poltronaIndex.status;
                action = "sub";
                
            }else{

                if(!this.props.status){
                    
                    
                    poltronaIndex.status = !poltronaIndex.status;
                    action = "add";
                    
                }

            }
        
            //Atualizando  o render (ChairItem)
            PubSub.publish('chair-list', {
                chairs: this._chairs,
                chairCount: 1,
                action: action
            });

         }
       
    }
    render(){
        return(
            <div>
            <div className="d-flex justify-content-center align-items-center flex-row">
                
            {this.props.chairs.map((chair, indexChair) => {
                
                return(

                
                chair.poltronas.map((poltrona, indexPoltrona) => {
                return(
                            
                             <div className="d-flex flex-column align-items-center">
                            <span className="chair" style={(!poltrona.livre ? {backgroundColor: 'grey'} : poltrona.status ? {backgroundColor: "#005eff"} : {backgroundColor: "#dc3545"})} id={ `${chair.letra + poltrona.id }` } onClick={(e) => this.selectChair(chair, poltrona, indexChair, indexPoltrona, e)}></span>
                            <p className="chair-info">{`${chair.letra} - ${poltrona.numero} `}</p>
                            </div>
                )
                })
                
                )
               
            })};
            </div>
            
            </div>
        )
    }

}


export default class ChairItem extends Component{
 
    constructor(){
        super();
        this.state = {
            chairs: [],
            chairCount: 0,
            chairsSelected: [],
            status: false
        }
    }

    componentWillMount(){

        fetch(`http://localhost:3006/api/seats/${'3'}`)
        .then(response => {
            return response.json();
        })
        .then(chairs => {
            
            this.setState({chairs: chairs});
            console.log(chairs);
        })
        PubSub.subscribe('chair-list', ((topic, data) => {

            var chairCountUpdate = (data.action == "add" ? this.state.chairCount + 1 : data.action == "sub" ? this.state.chairCount - 1 : this.state.chairCount);
            this.setState({chairs: data.chairs, chairCount: chairCountUpdate,  status: (chairCountUpdate >= 4 ? true : false)});
            
        }))
    }
   

    render(){
        
        return(
            <div className="container-fluid"> 
                <div className="row">

                    <div className="col-4">
                        <Step step="Ingresso" statusTipo={(this.state.chairCount > 0 ? true : false)} chair={this.state.chairs} chairCount={this.state.chairCount}/>
                    </div>

                    <div className="col-8">

                        {/* Aviso */}
                        <div className="justify-content-center align-items:center" style={(this.state.status ? {display: 'flex'} : {display: 'none'})}>
                            <span className=" alert alert-danger" >Você só pode selecionar até 4 cadeiras</span> 
                        </div>

                        {/* Assentos */}
                   
                        <Chair status={this.state.status} chairs={this.state.chairs} />
                                           
                                     
                                        
                         

                         {/* Tela */}
                        <div className="d-flex justify-content-center flex-column align-items-center">
                        
                             <div className="tela"></div>
                            <p className="text-center text-white">TELA</p>

                        </div>

                    </div>

                </div>

                <div className="row d-flex justify-content-center" >

                    <div className="col-5" style={{position: 'absolute', bottom: '5%', right: '50%'}} >
                        <ButtonUI style={{width: '80%'}} buttonName="<- Escolher a sessão"/>
                    </div>

                    <div className="col-5 "style={{position: 'absolute', bottom: '5%', left: '50%'}}>
                        <ButtonUI style={{width: '80%'}} buttonName="Tipo de Ingresso ->"/>
                    </div>

                </div>

             
            

            </div>       

        )
        
    }

}