import React from 'react'
import spinner from "../../img/spinner.gif.url"

export const Spinner = () => {
  return (
    <img src={spinner} 
        alt="spinner" 
        style={{ width: '200px', margin: 'auto', display: 'block' }} />
  )
}
