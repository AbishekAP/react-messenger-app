import React from 'react'

function Header({user}) {
  return (
    <header>
        <h3 className="logo">AP Messager</h3>
        <div className='profile'>
            <h4>{user.displayName}</h4>
            <img src={user.photoURL} alt="user" />
        </div>
      </header>
  )
}

export default Header