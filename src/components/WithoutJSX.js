import React from 'react'

export default function WithoutJSX() {
  return (
   // React.createElement('h1',null,'Welome witout JSX')
   React.createElement('div',{className:"abcd"},
   React.createElement('h1',null, 'Welcome')
   )
  )
}
