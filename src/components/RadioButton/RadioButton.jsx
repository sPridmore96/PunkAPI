import React from 'react'
import "./RadioButton.scss"

const RadioButton = (props) => {
    const {name, action} = props
  return (
    <div>
    <label htmlFor={name}>{name}</label>
    <input name={name} action={action} type="radio" />
    </div>
  )
}

export default RadioButton