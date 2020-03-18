import React, { useState } from "react";
import KontaktList from "./KontaktList";
import data from './Data'


const Forma = () => {
    const [ime, setIme] = useState('');
    const [broj, setBroj] = useState('');
    const [greska,setGreska] = useState('');
    const [kontakti, setKontakti] = useState([]);

    
        const DodajKontakt = () => {
        if(ime === '' || broj === ''){
            return setGreska("Polja ne smeju biti prazna")
        };
        if(!broj.startsWith('+')){
            return setGreska("Broj mora biti unet u formatu +XXX XXXXXXXXX")
        };
        
            let tmp=[...kontakti]; 
            tmp.push({imee: ime, brojj: broj});
            setKontakti(tmp)
            setGreska('')
    };
    
    const Filter = (e)=>{
        kontakti.filter((kontakt)=> {
        return kontakt.ime.includes(e.target.value)})
    }


    return(
        <div className="contact">
    <input type='text' placeholder='Ime i prezime' onChange = {e =>setIme(e.target.value)}></input>
    <input type='text' placeholder='Broj telefona' onChange = {e =>setBroj(e.target.value)}></input>
    <button type='submit' value="Dodaj" onClick={DodajKontakt}>Dodaj kontakt</button>

<div className="greska">
    {`${greska}`}
</div>
    <KontaktList kontakti={data}/>
    <KontaktList kontakti={kontakti} /> 
<input type='text' placeholder='Pretrazi...' onChange={Filter}></input>
</div>
    )
}


export default Forma
