import React, {Component} from 'react';
import '../build/css/style.css';
import ButtonUI from './ButtonUI';
import LookupImg from '../assets/img/search.svg';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';

export default class Header extends Component{


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
                    <Link to={'/cadastro'}> 
                        <ButtonUI buttonName={'Registre-se'} icon="register"/>
                    </Link>

                    <Link to={'/login'}> 
                        <ButtonUI buttonName={'Login'} icon="login"/>
                    </Link>
                    
                </div>
            </div>
         
		</header>
        )
    }

}