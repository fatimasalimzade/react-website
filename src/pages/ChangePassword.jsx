import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const ChangePassword = () => {
  const {handleSubmit} = useForm()
  const navigate = useNavigate()

  const [passwordMatch, setPasswordMatch] = useState(true)

  const onSubmit = async (data) =>{
    if(data.newPassword !== data.repeatNewPassword) {
      setPasswordMatch(false);
      return;
    }
    setPasswordMatch(true);

    const body = {
      token: JSON.parse(localStorage.getItem('token')),
      password: data.newPassword
    }

    await axios.post(process.env.REACT_APP_CHANGE_PASSWORD, body)
    .then(res =>{
      console.log(res);
      navigate('/Login');
  }).catch(err =>{
    console.log(err);
  })
  }
  return <section>
    <h2>Change Password</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="password" />
    <input type="password" />
    {!passwordMatch && <p>Password doesn't match</p>}
    <button><Link to='/Login'>Save Changes</Link></button>
    </form>
    
  </section>
}

export default ChangePassword