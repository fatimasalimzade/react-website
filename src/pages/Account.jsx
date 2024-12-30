import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Auth } from '../utils/AuthContext';
import { Link } from 'react-router-dom';


const Account = () => {
    const { userIn, signOut , } = useContext(Auth);
    
    const { handleSubmit : handleSubmitChanges } = useForm();

    const onSubmitChanges = (data) => {
        console.log(data);
    }

  return (
    <div className="account">
      <div className='signOutLink'>
            {userIn && (<Link to='/' onclick={signOut}>Log Out</Link>)}
          </div>
          <h2>Edit Account Details</h2>
          <form onSubmit={handleSubmitChanges(onSubmitChanges)}>
              <input type="text" />
              <input type="text" />
              <input type="email" />
              <button><Link to='/Login'>Save Changes</Link></button>
          </form>
          <Link to='/ResetPassword'>Reset Password</Link>
    </div>
  )
}

export default Account