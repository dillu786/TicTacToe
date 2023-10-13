import React from 'react';
import './App.css'
function Block({value,onClick})
{

  
    return(
        <div className="block" onClick={onClick}>
           {value}
        </div>
    )
}
export default Block;