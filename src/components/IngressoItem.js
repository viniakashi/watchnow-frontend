import React, {Component } from 'react';
import PubSub from 'pubsub-js';
import '../css/chair.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class IngressoItem extends Component{

    constructor(){
        super();
        this.state = {
            chairCount: [],
            meia: 0,
            inteira: 0,
            meiaPremium: 0
        };
    }

    componentWillMount(){
     
        this.arrayMake(this.props.chairCount)
    }

    selectTipo(e){
        var option = e.target.value;
        var tipo = e.target.id;
     
        var chairCount = this.props.chairCount - option;

        if(tipo == "meia"){

            
            this.setState({meia: option});

        }else if(tipo == "inteira"){

        }else if(tipo == "meia-premium"){

        }

        
        this.arrayMake(chairCount);

     
            PubSub.publish('pagamento', {
                statusPagamento: (chairCount == 0 ? true : false)
            });

    }


    arrayMake(num){
        var chairs = [];
        for(var i=0; i < num; i++){
            chairs[i] = i + 1;
        }
        this.setState({chairCount: chairs});
    }

  
    render(){

        return(
            <div>
                <div class="form-group">
                  <label className="text-white" for="meia"><strong>Meia (R$ 11,00)</strong></label>
                    <select onChange={(e) => this.selectTipo(e)} class="form-control" id="meia">
                        <option value={this.state.meia} >{this.state.meia}</option>
                        
                        {this.state.chairCount.map((chair, indice) => {
                            return <option value={chair} >{chair}</option>
                        })}
                    </select>
                 </div>

                 <div class="form-group">
                  <label className="text-white" for="inteira"><strong>Inteira (R$ 22,00) </strong></label>
                    <select onChange={(e) => this.selectTipo(e)} class="form-control" id="inteira">
                        <option>0</option>
                        {this.state.chairCount.map((chair, indice) => {
                            return <option value={chair}>{chair}</option>
                        })}
                    </select>
                 </div>

                 <div class="form-group">
                  <label className="text-white" for="meia-premium"><strong>Meia WatchNow Premium (R$ 11,00) </strong></label>
                    <select onChange={(e) => this.selectTipo(e)} class="form-control" id="meia-premium">
                    <option>0</option>
                        {this.state.chairCount.map((chair, indice) => {
                            return <option value={chair} >{chair}</option>
                        })}
                    </select>
                 </div>
            </div>
        )

    }

}