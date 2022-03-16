import React from 'react';
import Input from './Input';
import passwordShowIcon from '../../Assets/Icons/password-show.png';
import passwordHideIcon from '../../Assets/Icons/password-hide.png';

const InputField = (props) => {
    // <!-- Input Field Error -->
    
    const handleIcon = () => {
        if(props.name === 'password'){
            return <img className="eye-icon" 
                    src={props.showPassword?passwordShowIcon:passwordHideIcon} 
                    alt="eye-icon" 
                    onClick={props.handlePassword}/>
        }
        if(props.name === 'confirmPassword'){
            return <img className="eye-icon" 
            src={props.showConfirmPassword?passwordShowIcon:passwordHideIcon} 
            alt="eye-icon" 
            onClick={props.handleConfirmPassword}/>
        }
    }

    return(
         <div className='input-field'>
             <div className="float-container">
                 <label for="floatField" className="input-lbl">{props.title}</label>
                 <Input id={props.id}
                  type={props.type} 
                  name={props.name} 
                  value={props.value}
                  placeholder={props.placeholder}
                  onChange= {props.onChange}
                  />
                {handleIcon()}
             </div>
             <div className="error-message">Username is a required field.</div>
         </div> 
    );
} 

export default InputField;