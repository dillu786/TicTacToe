import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Block from './Block';
function App() {
const[squares,setsquares]=useState(Array(9).fill(null));
const [isX,setIsX]=useState(true);


  function handleClick(e){
        
    setsquares[e]=isX==true?'0':'X'
        setIsX(!isX);
  }


  return (
    <div className="container">
      <div className="box">
        
      <div>
         <Block value={'X'} onClick={()=>handleClick(0)} />
         <Block value={squares[1]} onClick={()=>handleClick(1)} />
         <Block value={squares[2]} onClick={()=>handleClick(2)} />
      </div>

      <div>
         <Block value={squares[3]} onClick={()=>handleClick(3)} />
         <Block value={squares[4]} onClick={()=>handleClick(4)}/>
         <Block value={squares[5]} onClick={()=>handleClick(5)}/>
      </div>

      <div>
         <Block value={squares[6]}onClick={()=>handleClick(6)}/>
         <Block value={squares[7]}onClick={()=>handleClick(7)}/>
         <Block value={squares[8]}onClick={()=>handleClick(8)}/>
      </div>
     


    </div>
    </div>
  );
}

export default App;
