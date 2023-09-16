import React from 'react'
import Logo from "./../assets/logo-taskmate.png"
export const Header = () => {
  return (
   <header>
    <div className="logo">
        <img src={Logo} alt='taskmate logo'/>
        <span>Taskmate</span>
    </div>
    <div className="themeSelector">
        <span className="light activeTheme"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gradientOne"></span>
        <span className="gradientTwo"></span>
        <span className="gradientThree"></span>
    </div>
    </header>
  )
}
