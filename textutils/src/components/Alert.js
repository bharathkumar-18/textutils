import React, { useState } from 'react';


export default function Alert(props) {
    const [alert,setAlert] = useState({
        type:"warning",
        msg:"An alert is shown"
    });
  return (
    <div>
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{alert.msg}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
