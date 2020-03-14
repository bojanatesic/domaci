import React from 'react'
import Emoji from './Emoji'
import Description from './Description'

const Card=(props)=>{
    return(
        <>
        <Description string={props.string}/>
        <br></br>
        <Emoji url={props.url}/>
        </>
    )
}

export default Card