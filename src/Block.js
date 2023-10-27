import React from 'react';
import './App.css'
function Block({ value, onClick, id }) {

    function handler() {
        console.log("hello", onClick)
    }

    return (
        <div className="block" onClick={onClick} id={id}>
            {value}
        </div>
    )
}

export default Block;