import React, { useState, useRef } from 'react';
import'./Form.module.css';

const Form = () => {

    const nameref = useRef();
    const passwordref = useRef();

    // const [name, setName] = useState('');
    // const [password, setPassword]  = useState('');
    const [nameinvalid, setNameInvalid] = useState(false);
    const [passinvalid, setPassInvalid] = useState(false);

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(nameref.current.value, passwordref.current.value)
        if(nameref.current.value.trim().length === 0)
        {
            setNameInvalid(true)
            return
        }
        if(passwordref.current.value.trim().length === 0)
        {
            setPassInvalid(true)
            return
        }
        nameref.current.value = '';
        passwordref.current.value = ''
        console.log('both name and password are valid')
        alert('You have entered correct credentials..')

    }
    // const nameinvalidclass = nameinvalid ? "input1 invalid" : "input1"
    // const passinvalidclass = passinvalid ? "input1 invalid" : "input1"
    // console.log(nameinvalidclass)
    // console.log(passinvalidclass)
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <input className='invalid' type="text" ref={nameref} placeholder='Enter your name'/>
            {nameinvalid && <p style={{color:"red"}}>Please enter the valid usetname</p>}
        </div>
        <div>
            <input type="password" ref={passwordref} placeholder='Enter password'/>
            {passinvalid && <p style={{color:"red"}}>Please enter the valid password</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
