import React from 'react';

const Input = (props) =>{
    return(
        <>      
            <input id={props.id} 
            className = {props.className}
            type={props.type} 
            name={props.name} 
            placeholder= {props.placeholder}
            value={props.value} 
            checked={props.checked} 
            onChange={props.onChange}
            />                  
        </>
    );
}

export default Input;
