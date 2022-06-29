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
    const res = await fetch("http://localhost:5000/Employees",{
      headers: new Headers({
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJpYXQiOjE2NTY1MzgxNTYsImV4cCI6MTY1NjYyNDU1Nn0.Fi09TpHP5pVdKK26mZ6kYAwSCBzv0cw3SUsIEgPjM_M"
      })
    });
    const data = await res.json();
    return data;
  }

  function deleteEmployee(id){
    setEmployees(employees.filter((employee) => employee.id !== id))
  }

  return (
    <div className="container">
      <Header title="Employees Portal"></Header>
      {employees.length > 0 ? (
        <Employees employees={employees} onDelete={deleteEmployee}/>
      ) : (
        "No Employee To Show"
      )}
    </div>
  );
}

export default App;
