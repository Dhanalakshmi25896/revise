import React from 'react'
import './style.css';
export default function MobileCart(props) {
  return (
    <div className='product'>
<div>
    <img src= {props.src} />
    <h3>{props.name}</h3>
    <h4>{props.price}</h4>
    <button>Buy now</button>
</div>
    </div>
  )
}
