import React from 'react'

const user = () => {
  return (
    <div className='log-in'>
      <form  className='log-in-continer'>
        <div className='log-in-input'>
          <input
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        </div>
        </form>
        </div>
  )
}

export default user
