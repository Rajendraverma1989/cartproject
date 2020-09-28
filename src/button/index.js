import React from 'react';
import "./styles.scss";

const Button = (props)=> {

return(
 <input
  type="button" 
  className={props.class}
  value= {props.text}
  onClick={props.onClick}
  ></input>
);
    }

export default Button;