import React from 'react'
import { useState } from 'react'

function AddEmployee({ onAdd }) {
  const [name, setName] = useState('')
  const [departmentCode, setDepartmentCode] = useState('HR')
  
  function onSubmit(e) {
    e.preventDefault()

    if (!name) {
        alert('Please enter name')
        return
    }

    onAdd({ name, departmentCode})
    setName('')
    setDepartmentCode('HR')
  }

  return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' placeholder='Employee name' 
                value={name} 
                onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Department Code</label>
                <input type='text' placeholder='Employee department' 
                value={departmentCode} 
                onChange={(e)=> setDepartmentCode(e.target.value)}/>
            </div>
            <input type='submit' value='Save' className='btn btn-block'/>
        </form>

    )
}

export default AddEmployee