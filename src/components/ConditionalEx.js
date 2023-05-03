import React, { Component } from 'react'

export default class ConditionalEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         login: true,
         choice:9
      }
    }
  render() {
  //  return(this.state.login) && <h1>Welcome Guest</h1>
  let msg;
switch(this.state.choice){
    case 1:
        msg=<h1>case1</h1>
        break;
        case 2:
            msg=<h1>case2</h1>
            break;
            case 3:
                msg=<h1>case3</h1>
                break;
                default:
                    msg =<h1>Invalid</h1>

}
return msg;
   /* let msg;

    msg=(this.state.login)? <h1>Welcome User</h1>: <h1>Welcome Guest</h1>
   /* if(this.state.login){
       msg= <h1>Welcome to User</h1>
    }
    else{
      msg=  <h2>Welcome to Guest</h2>
    } 
    return msg; */
  }
}
