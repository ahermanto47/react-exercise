import React from 'react'
import Employee from './Employee'

const Employees = ({ employees, onDelete }) => {
  return (
    <>
    {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} onDelete={onDelete}/>
    ))}
    </>
  )
}

export default Employees