import React from 'react'

const Button = ({ 
  children, 
  onClick, 
  disabled = false, 
  className = '', 
  style = {},
  ...props 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

