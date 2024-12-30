import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Link } from  'react-router-dom'

const OTP = () => {
    const {handleSubmit} = useForm()
    const navigate = useNavigate()
  
    const onSubmit = async (data) =>{
      const body = {
        token: JSON.parse(localStorage.getItem("token")),
        otp: data.otp
      }
      await axios
      .post(process.env.REACT_APP_VERIFY_OTP, body)
      .then(res =>{
        console.log(res);
        navigate('/ChangePassword')
      }).catch(err=>{
        console.log(err);
      })
    }
    return <section>
      <h2>OTP</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" />
      <button><Link to='/ChangePassword'>Confirm OTP</Link></button>
      </form>
      
    </section>
}

export default OTP