
import React, { Component } from 'react'
import User from './User'
export default class list extends Component {
    
  render() {
    let names = [
        {
            id:101,
            name:'Dhana'
        },
        {
            id:102,
            name:'Vidya'
        },
        {
            id:103,
            name:'Arivu'
        }
    ]
    return (
       names.map(
        (data) => <User key={data.id} item={data} />
       )    
    )
  }
}

