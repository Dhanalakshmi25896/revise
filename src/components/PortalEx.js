import React from 'react'
import ReactDom from 'react-dom'
const PortalEx = () => {
  return (
    ReactDom.createPortal(<h1>This sample page</h1>, document.getElementById('portalex'))
  )
}

export default PortalEx