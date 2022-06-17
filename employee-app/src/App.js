//import logo from './logo.svg';
//import './App.css';
import Header from "./components/Header"
import Employees from "./components/Employees";
import { useState } from 'react'

function App() {
  const [employees, setEmployees] = useState(
    [
        {"id": 1, "name": "Josh" },
        {"id": 2, "name": "Lisa" },
        {"id": 3, "name": "Bob" },
    ]
  )

  function deleteEmployee(id){
    setEmployees(employees.filter((employee) => employee.id !== id))
  }

  return (
    <div className="container">
      <Header title="List Of Employees"></Header>
      {employees.length > 0 ? (
        <Employees employees={employees} onDelete={deleteEmployee}/>
      ) : (
        "No Employee To Show"
      )}
    </div>
  );
}

export default App;
