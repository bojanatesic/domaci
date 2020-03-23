import React, { useState, useEffect } from 'react'
import './App.css';
import EmployeeList from './components/EmployeeList';
import { getEmployees, postEmployee } from './service/dummy_service';
// import Select from './components/Select';

function App() {

  const [employee, setEmployee] = useState([])
  const [employeeName, setEmployeeName]=useState ('')
  const [employeeSalary, setEmployeeSalary]=useState ('')
  const [employeeAge, setEmployeeAge]=useState ('')
// const [filtered,setFiltered]=useState(0)

  
  useEffect(() => {
    getEmployees().then(data => setEmployee(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (employeeName === '' || employeeSalary === '' || employeeAge === '') {
      alert("Polja ne smeju biti prazna!")
    } else {
      postEmployee(employeeName,employeeSalary,employeeAge).then(response => console.log(response))
    }
  }



  // const handleChange = (e) => {
  //   let filtered=e.target.value
  //     let filtered = employee.filter(el => el.employee_name==e.target.value);
  //     setEmployee(filtered);
  //   }
  


  return (
    <>
    {/* <Select handleChange={handleChange} /> */}
    <EmployeeList employee={employee}/>
    <form onSubmit={e => (handleSubmit(e))}>
              <input type='text' placeholder='Add Employee' onChange={e => setEmployeeName(e.target.value)}></input>
              <input type='number' placeholder='Add Salary' onChange={e => setEmployeeSalary(e.target.value)}></input>
              <input type='number' placeholder='Add Age' onChange={e => setEmployeeAge(e.target.value)}></input>
              <input type='submit' value='Add'></input>
    </form>
    </>
  );
}

export default App;
