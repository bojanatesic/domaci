import React from 'react'
import './Forma.css'
const Forma =(props)=>{
    let {string}=props
    return (
        <form className="forma">
            <input type="text" placeholder="Unesi neki tekst"/>
            <button>{string}</button>
            </form>
    )
}


export default Forma