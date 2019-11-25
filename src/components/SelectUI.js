import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import PubSub from 'pubsub-js';


export default class SelectUI extends Component{
      constructor(){
          super();
          this.useStyles = makeStyles(theme => ({
            formControl: {
              margin: theme.spacing(1),
              minWidth: 220,
              width: '550'
            },
            selectEmpty: {
              marginTop: theme.spacing(2),
            },
          }));
          this.classes = this.useStyles;
          this.state = {value: ""};
          
      }

      handle(e){
          this.setState({value: e.target.value});
          var value = (e.target.value == "Meia" ? 11.00 : e.target.value == "Inteira" ? 22.00 : 0);
          PubSub.publish('total-chairs', {
            value: value
          })
      }
      
    render(){

        return(
            <FormControl className={this.classes.formControl}>
    <InputLabel htmlFor="age-native-helper">Selecione</InputLabel>
            <NativeSelect
              value={this.state.value}
              onChange={(event) => this.handle(event)}
              inputProps={{
                name: `${this.props.chair.letra} - ${this.props.poltrona.numero}`,
                id: 'age-native-helper',
              }}
            >
              <option value="" />
              <option value={"Meia"}>Meia R$ 11,00</option>
              <option value={"Inteira"}>Inteira R$ 22,00</option>
    
            </NativeSelect>
    <FormHelperText>Cadeira: {this.props.chair.letra +  " - " + this.props.poltrona.numero}</FormHelperText>
          </FormControl>
        )
    }
}

 

