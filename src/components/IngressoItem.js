import React, {Component } from 'react';
import PubSub from 'pubsub-js';
import '../css/chair.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class IngressoItem extends Component{

    constructor(){
        super();
        this.state = {chairCount: []};
    }

    componentWillMount(){
     
        this.arrayMake(this.props.chairCount)
    }

    selectTipo(e){
        var option = e.target.value;
        var chairCount = this.props.chairCount - option;
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
                  <label className="text-white" for="exampleFormControlSelect1"><strong>Meia (R$ 11,00)</strong></label>
                    <select onChange={(e) => this.selectTipo(e)} class="form-control" id="exampleFormControlSelect1">
                        <option value={0} ></option>
                        
                        {this.state.chairCount.map((chair, indice) => {
                            return <option value={chair} >{chair}</option>
                        })}
                    </select>
                 </div>

                 <div class="form-group">
                  <label className="text-white" for="exampleFormControlSelect1"><strong>Inteira (R$ 22,00) </strong></label>
                    <select onChange={(e) => this.selectTipo(e)} class="form-control" id="exampleFormControlSelect1">
                        <option>0</option>
                        {this.state.chairCount.map((chair, indice) => {
                            return <option value={chair}>{chair}</option>
                        })}
                    </select>
                 </div>

                 <div class="form-group">
                  <label className="text-white" for="exampleFormControlSelect1"><strong>Meia WatchNow Premium (R$ 11,00) </strong></label>
                    <select onChange={(e) => this.selectTipo(e)} class="form-control" id="exampleFormControlSelect1">
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