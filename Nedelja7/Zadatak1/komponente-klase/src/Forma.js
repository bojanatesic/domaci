import React from 'react';
import './Forma.css'

class Forma extends React.Component{
    
    render(){
        return (
        <form className="forma">
        <input type="text" placeholder="Unesi neki tekst"/>
        <button>{this.props.string}</button>
        </form>
        );
    }
}

export default Forma

