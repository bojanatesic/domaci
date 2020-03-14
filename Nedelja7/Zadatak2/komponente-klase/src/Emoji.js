import React from 'react';

class Emoji extends React.Component{
        
        render(){
            return (
                <img src={this.props.url} alt='Plakyyy emoji'/>
                );
            }
        }

    
export default Emoji

