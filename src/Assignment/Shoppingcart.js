import React, { Component } from 'react';
import './Assignmentstyle.css'
export default class Shoppingcart extends Component {
  render() {
    return (
      <div className='shop'>
               <img src= {this.props.src}/>
        <h3>price: {this.props.price}</h3>
        <likes>likes{this.props.likes}</likes>
      </div>
      
    
    )
  }
}
