import React, { useState } from "react";
import Forma from "./Forma";
import KontaktList from "./KontaktList";
import data from './Data'

const Wrapper = (props) => {
    let [kontakti, setKontakti] = useState([]);
    const dodajKontakt = (ime,broj) => {
        let tmp=[...kontakti]; 
        tmp.push({ime: ime, broj: broj});
        setKontakti(tmp)}
    return(
        <div>
            <Forma setKontakti={dodajKontakt}/>
            <KontaktList kontakti={data}/>
            <KontaktList kontakti={kontakti} /> 

        </div>
    )
}

export default Wrapper