import React from 'react'

const Kontakt=(props)=>{
    let {kontakt}=props
    return (
<div>
    <p>{`${kontakt.ime}`} {`${kontakt.broj}`}</p>
</div>
    )
}

export default Kontakt
