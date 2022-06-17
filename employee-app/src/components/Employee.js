import React from 'react'
import { FaTimes } from "react-icons/fa"

const Employee = ({employee, onDelete}) => {
  return (
    <div className="task">
        <h3>{employee.name} 
        <FaTimes style={{ color: "red", cursor:"pointer"}}
            onClick={() => onDelete(employee.id)}
        />
        </h3>
    </div>
  )
}

export default Employee