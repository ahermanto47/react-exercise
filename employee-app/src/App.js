import Header from "./components/Header";
import Employees from "./components/Employees";
import { useState, useEffect } from 'react';
import AddEmployee from "./components/AddEmployee";
import Login from "./components/Login"

function App() {
  const [employees, setEmployees] = useState([])
  const [auth, setAuth] = useState('')
  const [isAuthenticatedUser, setAuthenticatedUser] = useState(false)
  const [showAddEmployee, setShowAddEmployee] = useState(false)

  useEffect(() => {
    const getEmployees = async () => {
      const employeesFromServer = await fetchEmployees();
      setEmployees(employeesFromServer);
    }

    getEmployees()
  },[isAuthenticatedUser])

  async function fetchEmployees() {
    if (isAuthenticatedUser) {
      const res = await fetch("http://localhost:5000/Employees",{
        headers: new Headers({
          "Authorization": "Bearer "+ auth
        })
      });
      const data = await res.json();
      return data;
    }
    return [];
  }

  async function addEmployee(employee) {
    const id = Math.floor(Math.random() * 100) + 1
    const newEmployee = {id, ...employee}
    const res = await fetch("http://localhost:5000/Employees",{
      method: 'POST',
      headers: {
        "Authorization": "Bearer "+ auth,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newEmployee)
    })
    const resData = await res.json()
    setEmployees([...employees, resData])
  }

  async function deleteEmployee(id){
    await fetch(`http://localhost:5000/Employees/delete/${id}`,{
      headers: {
        "Authorization": "Bearer "+ auth,
      },
      method: 'DELETE'
    })
    setEmployees(employees.filter((employee) => employee.id !== id))
  }

  async function login(user){
    const res = await fetch("http://localhost:4000/users/signin",{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const resData = await res.json()
    setAuth(resData)
    setAuthenticatedUser(true)
  }

  return (
    <div className="container">
      <Header title="Employees Portal" 
        onAdd={() => isAuthenticatedUser && setShowAddEmployee(!showAddEmployee)}
        showAdd={showAddEmployee}
        isAuthenticatedUser = {isAuthenticatedUser}
        onLogin={login}/>

      {(isAuthenticatedUser && showAddEmployee)  && 
        <AddEmployee onAdd={addEmployee}/>}

      {isAuthenticatedUser && employees.length > 0 ? (
        <Employees employees={employees} onDelete={deleteEmployee}/>
      ) : (
        isAuthenticatedUser ? "No Employee To Show" : ""
      )}

      {!isAuthenticatedUser &&
        <Login onLogin={login}/>}
    </div>
  );
}

export default App;
