import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useSuccessMessage, useErrorMessage } from '../utils/Swal';

const Sign = () => {
 const navigate = useNavigate()

  const {showSuccessMessage} = useSuccessMessage()
  const {showError} = useErrorMessage()

  const {handleSubmit} = useForm()

  const onSubmit = async(data) =>{
    await axios
    .post(process.env.REACT_APP_REGISTER, data)
    .then(res=>{
      console.log(res.data);
      showSuccessMessage();
      navigate('/Login');
    }).catch(err=>{
      console.log(err);
      showError()
    })
  };


  return (
    <div className="sign">
      <div className="container">
        <div className="row">
            <div className="box">
            <h1>Edit Account Details</h1>
              <form
              onSubmit = { handleSubmit(onSubmit) }
              action="" className='signForm'>
                  <div className="nameInfo">
                      <div className="namediv">
                          <label for="name">First name</label>
                          <input type="text" id="name" name="name" required/>
                      </div>
                      <div className="lnamediv">
                          <label for="name">Last name</label>
                          <input type="text" id="lastname" name="lastname" required/>
                      </div>
                  </div>
                  <label for="email">Email adress</label>
                  <input type="email" id="email" name="email" required/>
                  <button type="submit">SUBMIT</button>


              </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Sign