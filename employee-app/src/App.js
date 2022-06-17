//import logo from './logo.svg';
//import './App.css';
import Header from "./components/Header"
import Employees from "./components/Employees";
import { useState, useEffect } from 'react'

function App() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const getEmployees = async () => {
      const employeesFromServer = await fetchEmployees();
      setEmployees(employeesFromServer);
    }

    getEmployees()
  }, [])

  async function fetchEmployees() {
    const res = await fetch("http://localhost:5000/employees");
    const data = await res.json();
    return data;
  }

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
