import React from 'react'

function Alert(props) {
  return (
    props.alert &&
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {props.alert.type}:{props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
