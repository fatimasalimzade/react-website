import React, { useContext } from 'react'
import { Auth } from '../utils/AuthContext';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  
  const { logIn } = useContext (Auth);

  const { handleSubmit } = useForm();

  const {
    register,
    formState: { errors },
  } = useForm();

  const  onSubmit = (data) => {
    logIn(data);
  }

  return (
    <div className="login">
        <div className="container">
            <div className="row">
              <div className="box">
              <h1 className='serif-font'>Hello</h1>
              <form
              onSubmit = { handleSubmit(onSubmit) }
              action="">
                <div className='buttons'>
                <button className='logIn'>Log In</button>
                <button className='signUp'><Link to='/sign'>Sign Up</Link></button>
                </div>
                <div className="emaildiv">
                  <input type="email" placeholder='Email adress'
                  {...register('email', 
                    {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/,
                        message: "Invalid email"
                      },
                    }
                  )}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                  </div>
                <div className="pswdiv">
                  <input type="password" placeholder='Password'
                  {...register('password', {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be contain at least 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: "Invalid password",
                    },
                  })}
                  />
                  {errors.password &&  <p>{errors.password.message}</p>}

                  </div>
                <button className='submit' type='submit'>Log In</button>
                <span className='text'>Forgot password?</span>
              </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login