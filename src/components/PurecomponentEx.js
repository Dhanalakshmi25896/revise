import React, { Component, PureComponent } from 'react'
import NormalcomponentEx from './NormalcomponentEx'

export default class PurecomponentEx extends PureComponent{

  render() {
    console.log("Purecomponent");
    return (
      <div>
       <h1>PureComponent</h1> 
      </div>
    )
  }
}
