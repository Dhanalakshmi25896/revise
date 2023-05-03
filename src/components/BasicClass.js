import React, { Component } from "react";
import path from  './images/AN221111.png'
import './style.css'
export default class BasicClass extends Component{
    constructor() {
        super();
    }
    render()
    {
        return(<div className="Basic">
        <h1>Welcome to Class Component . Team leader is {this.props.name}</h1>
        <img src={path} />
              </div>
        )
    }
}