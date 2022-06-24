import React from 'react'
import hendleGoogleLogin from './Google';


const Authantication = () => {
  return (
    <div className='m-5'>
        <button className='btn btn-warning' onClick={hendleGoogleLogin}>Google</button>
    </div>
  )
}

export default Authantication