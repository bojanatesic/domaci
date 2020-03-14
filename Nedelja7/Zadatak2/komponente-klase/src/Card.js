import React from 'react';
import Description from './Description';
import Emoji from './Emoji';

class Card extends React.Component{
    
    render(){
        return (
            <>
            <Description string={this.props.string}/>
            <br></br>
            <Emoji url={this.props.url}/>
            </>
                );
    }
}

export default Card

