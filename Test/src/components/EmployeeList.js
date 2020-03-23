import React from 'react'
import Employee from './Employee'


const EmployeeList = ({employee}) => {
  
    return (
      <>
          <h1 className="naslov">Employees</h1>
        <div>
          {employee.slice(0, 10).map(em => <Employee em={em} key={em.id} />)}
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </>
    )
  }

  export default EmployeeList