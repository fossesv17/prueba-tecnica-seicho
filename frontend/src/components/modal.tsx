import { useState } from "react";
import "../App.css"

export default function Modal({ children, onClose } : { 
    children : React.ReactNode,
    onClose : () => void; 
}) {
    
    return (
        <div className="ModalContainer" onClick={onClose}>
            <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}