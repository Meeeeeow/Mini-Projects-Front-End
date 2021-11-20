import React from 'react'

export const Modal = ({children}) => {
    return (
        <div>
            <div className="backdrop"></div>
            <div className="modal-body">{children}</div>
        </div>
    )
}

