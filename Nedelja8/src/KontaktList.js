import React from 'react'
import Kontakt from './Kontakt'

const KontaktList = (props)=>{
    const {kontakti}=props

    return(
        <>
<div>
    {kontakti.map(kontakt=> <Kontakt kontakt={kontakt}/>)}
</div>
</>
    )
}

export default KontaktList