import React from "react";
import {useStyles} from "./radio-button.styles";

const RadioButton = ({checked, handleClick}) => {
    const classes = useStyles();

     return (
         <div className={classes.container} onClick={handleClick}>
             {checked &&
             <div className={classes.checked} />}
         </div>
     )
 }

 export default RadioButton;
