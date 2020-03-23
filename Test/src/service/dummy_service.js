import axios from 'axios'

export const getEmployees = async () =>{
    return await axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response => response.data.data )
}

export const postEmployee= (name,salary,age)=>{
    return axios.post(`http://dummy.restapiexample.com/api/v1/create`,{name:name, salary:salary, age:age})
}
