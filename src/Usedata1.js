import React from 'react'

const Usedata1 = () => {
    const photo=useCustomHookEx('https://jsonplaceholder.typicode.com/photos')
    const todos=useCustomHookEx('https://jsonplaceholder.typicode.com/todos')
  return (
    <div className='container mt-3'>
    <table className='table table-bordered table-hover'>
    <thead>
        <th>ID</th>
        <th>LATEST NEWS</th>
    </thead>
    <tbody>
       {       
       data.map((user)=>{
                return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.lnews}</td>
                    
                </tr>
                )
            })
        }
    </tbody>
    </table></div>
  )
}

export default Usedata1