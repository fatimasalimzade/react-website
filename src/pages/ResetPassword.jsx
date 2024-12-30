import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const ResetPassword = () => {
  const {handleSubmit} = useForm()
  const navigate = useNavigate()

  const onSubmit = async(data) =>{
    const body = {
      token: JSON.parse(localStorage.getItem("token")),
      email: data.email
    }

    await axios.post(process.env.REACT_APP_RESET_PASSWORD, body)
    .then(res =>{
      console.log(res);
      navigate('/OTP');
    }).catch(err =>{
      console.log(err);
    })
  }
  return <section>
    <h2>Reset password</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="email" />
    <button><Link to='/OTP'>Send OTP</Link></button>
    </form>
    
  </section>
}

export default ResetPassword