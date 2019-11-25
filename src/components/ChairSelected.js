import React, {Component } from 'react';
import '../css/chair.css';
export default class ChairSelected extends Component{

    render(){

        return(
            <div className="d-flex flex-row justify-content-center align-items-center">

                {this.props.chairSeat.map(chair => {

                    return(
                    chair.poltronas.map(poltrona => {
                        
                        if(poltrona.status){
                        return(
                            <div className="d-flex flex-column align-items-center">
                            <span className="chair" style={{backgroundColor: "#dc3545"} } ></span>
                            <p className="chair-info">{chair.letra + " - " + poltrona.numero}</p>
                            </div>
                        )}
                        
                        
                        }))})}
                
                
                
             </div>

             
        )

    }

}