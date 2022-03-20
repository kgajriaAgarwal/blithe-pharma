import React, { useState } from 'react';
import '../Css/Authentication.css';
import Input from '../../../Shared/Input/Input';
import blitheCollage from '../../../Assets/Images/Blithe-collage.jpg';
import blitheLogo from '../../../Assets/Images/Blithe-logo.png';
import InputField from '../../../Shared/Input/InputField';

const ForgotPassword = () =>{

    const [Data, setData] = useState(
        {   
            email:'',
        })

    const handleSubmit = (e) =>{
        e.preventDefault();
        //commented right now for future perspective..
        // console.log('Data', Data);
    }

    return(
        <section className="auth">
            <div className="col-7 auth-img-container">
                <img src={blitheCollage}
                    alt="auth-img" />
            </div>
            <div className="col-7 auth-content-container">
                <div className="auth-form">
                    <img src={blitheLogo} className="blithe-logo" alt="blithe-logo"/>
                    <form>
                        <InputField 
                            type='email'
                            title='Email'
                            name='email'
                            placeholder='Enter email'
                            value={Data?.email? Data.email : ''}
                            onChange={(e)=>setData(prevData => {return  {...prevData, email:e.target.value}})}
                        />
                        <button className="btn btn-sm btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ForgotPassword;