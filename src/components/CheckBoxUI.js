import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
  root: {
    color: red['A700'],
    '&$checked': {
      color: red[900],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    checkedA: false,

  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (

      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedG}
            onChange={handleChange('checkedG')}
            value="checkedG"
          />
        }
        label={props.texto}
      />
    
  );
}