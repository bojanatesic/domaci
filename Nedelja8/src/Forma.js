import React, { useState } from "react";


const Forma = (props) => {
    const [ime, setIme] = useState('');
    const [broj, setBroj] = useState('');
    const [greska,setGreska] = useState('');

    const Dodaj = () =>{
        if(ime === '' || broj === ''){
            return setGreska("Polja ne smeju biti prazna")
        };
        if(!broj.startsWith('+')){
            return setGreska("Broj mora biti unet u formatu +XXX XXXXXXXXX")
        };

        props.setKontakti(ime, broj); 
        setGreska('')
    };
    
    const Filter = (e)=>{
        props.kontakti.filter((kontakt)=> {
        return kontakt.ime.includes(e.target.value)})
    }


    return(
<div className="contact">
    <input type='text' placeholder='Ime i prezime' onChange = {e =>setIme(e.target.value)}></input>
    <input type='text' placeholder='Broj telefona' onChange = {e =>setBroj(e.target.value)}></input>
    <button type='submit' value="Dodaj" onClick={Dodaj}>Dodaj kontakt</button>
<div className="greska">
    {`${greska}`}
</div>
<input type='text' placeholder='Pretrazi...' onChange = {Filter}></input>
</div>
    )
}


export default Forma
