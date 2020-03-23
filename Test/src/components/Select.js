import React from 'react'

const Select = ({handleChange}) => {
    return(
        <div>
         <select onChange={(e) => handleChange(e)}>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='24'>24</option>   
         </select>   
         
        </div>
    )
}

export default Select