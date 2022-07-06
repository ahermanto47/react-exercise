import Header from "./components/Header";
import Employees from "./components/Employees";
import { useState, useEffect } from 'react';
import AddEmployee from "./components/AddEmployee";

function App() {
  const [showAddEmployee, setShowAddEmployee] = useState(false)
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const getEmployees = async () => {
      const employeesFromServer = await fetchEmployees();
      setEmployees(employeesFromServer);
    }

    getEmployees()
  }, [])

  async function fetchEmployees() {
    // const res = await fetch("http://localhost:5000/Employees",{
    //   headers: new Headers({
    //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJpYXQiOjE2NTY1MzgxNTYsImV4cCI6MTY1NjYyNDU1Nn0.Fi09TpHP5pVdKK26mZ6kYAwSCBzv0cw3SUsIEgPjM_M"
    //   })
    // });
    const res = await fetch("http://localhost:5000/Employees");
    const data = await res.json();
    return data;
  }

  async function addEmployee(employee) {
    console.log(employee)
    const id = Math.floor(Math.random() * 100) + 1
    const newEmployee = {id, ...employee}
    const res = await fetch("http://localhost:5000/Employees",{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newEmployee)
    })

    const resData = await res.json();

    setEmployees([...employees, resData])
  }

  async function deleteEmployee(id){
    await fetch(`http://localhost:5000/Employees/${id}`,{
      method: 'DELETE'
    })
    setEmployees(employees.filter((employee) => employee.id !== id))
  }

  return (
    <div className="container">
      <Header title="Employees Portal" 
      onAdd={() => setShowAddEmployee(!showAddEmployee)}
      showAdd={showAddEmployee}/>
      {showAddEmployee && <AddEmployee onAdd={addEmployee}/>}
      {employees.length > 0 ? (
        <Employees employees={employees} onDelete={deleteEmployee}/>
      ) : (
        "No Employee To Show"
      )}
    </div>
  );
}

export default App;
