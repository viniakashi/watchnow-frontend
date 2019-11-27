import React, {Component} from 'react';
import '../build/css/style.css';
import ButtonUI from './ButtonUI';
import LookupImg from '../assets/img/search.svg';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';

export default class Header extends Component{

    constructor(){
        super();
        this.state = {logado: ''};
    }

    componentWillMount(){
        var usuario = localStorage.getItem('nome');
        console.log(usuario);
        this.setState({logado: usuario});
    }

    render(){
        return(
            <header className="headerMobile">
			<div className="headerMobile_container-navigation">
				<div className="headerMobile_container-navigation_menu">
					<div className="headerMobile_container-navigation_menu-icon menu-abrir">
						<input id="menu-hamburguer" type="checkbox" />
                        <Drawer/>
						
					</div>

                </div>  
                <div className="headerMobile_container-navigation_busca">
                    <form action="#">
                        <input type="text" name="busca" id="busca" placeholder="Buscar" />
                    </form>
                    <img src={LookupImg} alt="Busca" /> 
                    {this.state.logado != '' && this.state.logado != null ? '' : <Link to={'/cadastro'}><ButtonUI buttonName={'Registre-se'} icon="register"/></Link>}
                    

                    <Link to={'/login'}> 
                        <ButtonUI buttonName={this.state.logado != '' && this.state.logado != null ? this.state.logado : 'Login'} icon="login"/>
                    </Link>
                    
                </div>
            </div>
         
		</header>
        )
    }

}