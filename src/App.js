import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Block from './Block';
function App() {
  const [squares, setsquares] = useState(['X', null, null, null, null, null, null, null, null]);
  const [isX, setIsX] = useState(true);

  useEffect(() => {
    console.log("hello", squares[0] == squares[1] == squares[2])
    if (squares[0] == squares[1] && squares[1] == squares[2] && squares[0] !== null) {
      alert(`player ${squares[0]} won`)
      setsquares(Array(9).fill(null))
    }
    let nullvalue = squares.find((elem) => elem == null)
    console.log(nullvalue)
    if (nullvalue === undefined) {
      alert("no one won")
    }

  }, [squares])


  function handleClick(e) {
    let val = isX ? "X" : "0";
    console.log(squares[e], e);
    let arr = [...squares];
    arr[e] = val;
    setsquares(arr);
    setIsX(!isX);
  }

  console.log(squares)


  return (
    <div className="container">
      <div className="box">

        <div>
          <Block value={'X'} onClick={() => handleClick(0)} />
          <Block value={squares[3]} onClick={() => handleClick(3)} />
          <Block value={squares[6]} onClick={() => handleClick(6)} />
        </div>

        <div>
          <Block value={squares[1]} onClick={() => handleClick(1)} />
          <Block value={squares[4]} onClick={() => handleClick(4)} />
          <Block value={squares[7]} onClick={() => handleClick(7)} />
        </div>

        <div>
          <Block value={squares[2]} onClick={() => handleClick(2)} />
          <Block value={squares[5]} onClick={() => handleClick(5)} />
          <Block value={squares[8]} onClick={() => handleClick(8)} />
        </div>



      </div>
    </div>
  );
}

export default App;
