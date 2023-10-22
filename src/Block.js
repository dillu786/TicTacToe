import React from 'react';
import './App.css'
function Block({ value, onClick }) {

    function handler() {
        console.log("hello", onClick)
    }

    return (
        <div className="block" onClick={onClick}>
            {value}
        </div>
    )
}

export default Block;