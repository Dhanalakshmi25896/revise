import React, { Component } from 'react'
import './style.css'
export default class Contactus extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         subject:'',
         email:'',
         phone:'',
         message:''
      }
    }
    Changename =(e)=> {
        this.setState({
            name:e.target.value
        })
            }
            Changeemail =(e)=> {
                this.setState({
                    email:e.target.value
                })
                    }
                    changephone =(e)=> {
                        this.setState({
                            phone:e.target.value
                        })
                            }
            submitHandler =(e) =>{
                // without reloading the page e.p
e.preventDefault();
let name=this.state.name;
let email=this.state.email
let phone=this.state.phone
let alphaexp=/^[a-zA-Z]+$/
let emailexp=/^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/
if(name==""){
    document.getElementById('nameid').innerHTML='please enter your name';
}
else{
    if(name.match(alphaexp)){
    document.getElementById('nameid').innerHTML='';
    }
    else{
        document.getElementById('nameid').innerHTML='Please enter letters only'
    }
}

if(email==""){
    document.getElementById('emailid').innerHTML='please enter your email';
}
else{
    if(email.match(emailexp)){
        document.getElementById('emailid').innerHTML='';
        }
        else{
            document.getElementById('emailid').innerHTML='Please enter vaild email'
        }
}
if(phone===""){
    document.getElementById('phoneid').innerHTML='';
}
else{
            if(!Number(phone)){
                document.getElementById('phoneid').innerHTML='enter number only';   
            }
            else{
                if(phone.length==10){
                    document.getElementById('phoneid').innerHTML='';
                }
                else{
                    document.getElementById('phoneid').innerHTML='enter 10 digits only';
                }
            }
    }

            }               
  render() {
    const {name,subject,email,phone,message} = this.state
    
    return (
        <section>
        <div className='container contact my-2'>
        <div className='row'>
            <div className='col-md-8'>
                <h3>Contactus</h3>
                <form onSubmit={this.submitHandler}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                            <input type="text" name='name' className='form-control' placeholder='Your name'
                            value={name} onChange={this.Changename}/>
                            <div id='nameid' className='errmsg'></div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                            <input type="text" name='subject' className='form-control' 
                            placeholder='Subject name' />
                             
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                            <input type="text" name='email' className='form-control' placeholder='Email'
                            value={email} onChange={this.Changeemail} />
                            <div id='emailid' className='errmsg'></div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                            <input type="text" name='phone' className='form-control' placeholder='Phone number'
                            value={phone}  onChange={this.changephone}/>
                            <div id='phoneid' className='errmsg'></div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group'>
                            <textarea type="text"  className='form-control' placeholder='Message'
                            />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group'>
                            <input type="submit" className='btn btn-primary'></input>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
            <div className='col-md-4'>
                <h3>Address</h3>
<p>ELearn Infotech</p>
 
 <p>Plot no.40 second floor,</p>
  
 <p>Vittal Rao Nagar,</p>
  
<p> Madhapur, Hyderabad</p>
  
 <p>Telangana 500081</p>
            </div>
        </div>
        </div>
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3240939993307!2d78.38191140982791!3d17.44419540109892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed2dea4c17%3A0xd49a55db035ba737!2sElearn%20Infotech%20-%20MERN%20Java%20Python%20Fullstack%20%7C%20UI%20Development%20React%20JS%20%7C%20PHP%20Web%20Development%20UI%20UX%20Courses%20Training%20Hyderabad!5e0!3m2!1sen!2sin!4v1681826164368!5m2!1sen!2sin" 
            width="100%" height="450" 
             allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
        
        </section>
    )
  }
}
