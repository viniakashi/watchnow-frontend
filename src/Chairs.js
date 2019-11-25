import React, { Component } from 'react';
import Header from './components/Header';
import ChairItem from './components/ChairItem';

export default class Chairs extends Component{

    render(){
        return(

            <div>
                <Header />
                <ChairItem />
                
            </div>

        )
    }   
}