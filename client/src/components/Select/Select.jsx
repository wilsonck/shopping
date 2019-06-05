import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Select.module.scss';

const buildOptions = (option, index) => (<option key={`opt-${index}`} value={option.id}>{option.name}</option>);

const STRING_DEFAULT_OPTION = "DEFAULT_VALUE";

class Select extends Component {

    constructor(props) {
      super(props);
      this.state = {
          value: STRING_DEFAULT_OPTION,
          options: []
      };
    }

    buildDefaultOption = () => {
        return [{
            id: STRING_DEFAULT_OPTION,
            name: "Select"
        }];
    }
  
    handleChange = (event) => {
        const newValue = event.target.value;
        this.setState({value: newValue});
        if(this.props.actionChangeValue){
            this.props.actionChangeValue(newValue);
        }
    };
  
    render() {

        const {
            label
        } = this.props;

        const optionWithDefaultOptions = this.buildDefaultOption().concat(this.props.options);

        return (
            <Fragment>
                <label className={classes.Select__label} htmlFor={`${label}`}>{label} </label>
                <select 
                    className={classes.Select__select} 
                    id={`${label}`}
                    value={this.state.value}
                    onChange={this.handleChange} >
                        {optionWithDefaultOptions.map((op, ind) => buildOptions(op, ind))}        
                </select>
            </Fragment>
        );
    }
  } 

Select.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
    ActionChangeValue: PropTypes.func
};

Select.defaultProps = {
    options: [],
};

export default Select;