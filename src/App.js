
import { useEffect, useState } from 'react';
import './App.css';
import Block from './Block';
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [playerMoveCounter, setPlayerMoveCounter] = useState(0);
  const [computerMoveCounter, setComputerMoveCounter] = useState(0);
  const [zeroPlacedAdjacentToX, setZeroPlacedAdjacentToX] = useState(false);
  const [hideSudoku, setHideSudoku] = useState(true);
  const [singlePlayer, setSinglePlayer] = useState(false);
  const [doublePlayer, setDoublePlayer] = useState(false);
  const [toss, setToss] = useState(false)
  const [TossResult, setTossResult] = useState("")
  const winnerCondition = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ];

  function playWithComputer() {
    setToss(false)
    console.log('Play with computer');
    setHideSudoku(false);
    setSinglePlayer(true);
    setDoublePlayer(false);
    ComputerFirstMove();
  }
  function playWithAnotherPlayer() {
    setToss(true)
    console.log('play with another player')
    setHideSudoku(false);
    setDoublePlayer(true);
    setSinglePlayer(false);
  }

  function Move(index) {
    if (singlePlayer) {
      PlaySinlePlayer(index);
    }

    else {
      PlayDoublePlayer(index);
    }


  }

  function CheckWinner(squaresCopy) {
    console.log(squaresCopy);

    for (let j = 0; j < 8; j++) {

      var temp;
      var matched = false;
      var conditionArray = winnerCondition[j];
      console.log(conditionArray);
      for (let i = 0; i < 3; i++) {

        console.log(conditionArray[j])


        if (i !== 0) {



          let element = squaresCopy[conditionArray[i]];
          console.log(squaresCopy);
          console.log(temp + "temp" + i + "i");
          console.log(element + 'element');
          if (temp !== element && element !== null) {
            matched = false;
            break;
          }
          else {
            if (temp === element && i === 2) {
              matched = true;
              let copySquares = [...squares];
              //  var indexOfX;
              //  conditionArray.map((a,i)=>{
              //        if(a===null)
              //       {
              //          indexOfX=i;;
              //       }
              //  })
              copySquares[conditionArray[i]] = 'X';
              setSquares(copySquares);
              return matched;

            }
          }

        }

        else {
          console.log(i + "conditionArray" + conditionArray[i]);
          let ele = squaresCopy[conditionArray[i]];
          if (ele === null)
            break;
          console.log(ele);
          temp = ele;
        }



      }
      console.log(matched);

    }

    return matched;
  }


  const checkTicTacToe = (copySquares) => {

    let matched = false;
    for (let i = 0; i < winnerCondition.length; i++) {
      let arr = winnerCondition[i];
      let firstelent = copySquares[arr[0]];
      let count = 1;
      for (let j = 1; j < 3; j++) {
        if (firstelent === 'X' && firstelent === copySquares[arr[j]]) {
          count++
        }
        if (count === 3)
          matched = true;

      }
    }
    return matched;
  }





  var corners = [0, 2, 6, 8];
  const ComputerFirstMove = () => {


    let position = corners[Math.floor(Math.random() * corners.length)];
    const squaresCopy = [...squares];
    squaresCopy[position] = "X";

    setComputerMoveCounter(computerMoveCounter + 1);
    setSquares(squaresCopy);
  }

  const diagonalcornerskeyvalue = {
    '0': '8',
    '2': '6',
    '6': '2',
    '8': '0'
  }

  let copySquares = [...squares];
  function PlaySinlePlayer(index) {


    // Bring all the winning condition array where 0's are present


    copySquares[index] = '0';
    setPlayerMoveCounter(playerMoveCounter + 1);
    var computerFirstMoveIndex;
    copySquares.filter((ele, i) => {
      if (ele === 'X')
        computerFirstMoveIndex = i;
    });
    if (playerMoveCounter === 0 && index === 4) {
      //  Move 2 -> computer plays on the diagonal index of its first move
      // computer's first move index



      let diagonalElement = diagonalcornerskeyvalue[computerFirstMoveIndex];
      copySquares[+diagonalElement] = 'X';
      setSquares(copySquares);
      setComputerMoveCounter(computerMoveCounter + 1);
      return;
    }
    else if (playerMoveCounter === 0 && index !== 4) {
      if (computerFirstMoveIndex === 8 && index == 7) {
        copySquares[2] = 'X';
        setSquares(copySquares);
        setComputerMoveCounter(computerMoveCounter + 1);
        setZeroPlacedAdjacentToX(true);
        return;
      }

      if (computerFirstMoveIndex === 8 && index == 5) {
        copySquares[6] = 'X';
        setSquares(copySquares);
        setComputerMoveCounter(computerMoveCounter + 1);
        setZeroPlacedAdjacentToX(true);
        return;
      }
      if (computerFirstMoveIndex === 6 && index == 7) {
        copySquares[0] = 'X';
        setSquares(copySquares);
        setComputerMoveCounter(computerMoveCounter + 1);
        setZeroPlacedAdjacentToX(true);
        return;
      }
      if (computerFirstMoveIndex === 6 && index == 3) {
        copySquares[8] = 'X';
        setSquares(copySquares);
        setComputerMoveCounter(computerMoveCounter + 1);
        setZeroPlacedAdjacentToX(true);
        return;
      }
      if (computerFirstMoveIndex === 2 && index == 5) {
        copySquares[0] = 'X';
        setSquares(copySquares);
        setComputerMoveCounter(computerMoveCounter + 1);
        setZeroPlacedAdjacentToX(true);
        return;
      }
      if (computerFirstMoveIndex === 2 && index == 1) {
        copySquares[8] = 'X';
        setSquares(copySquares);
        setComputerMoveCounter(computerMoveCounter + 1);
        setZeroPlacedAdjacentToX(true);
        return;
      }
      if (computerFirstMoveIndex === 0 && index == 1) {
        copySquares[6] = 'X';
        setSquares(copySquares);
        setComputerMoveCounter(computerMoveCounter + 1);
        setZeroPlacedAdjacentToX(true);
        return;
      }
      if (computerFirstMoveIndex === 0 && index == 3) {
        copySquares[2] = 'X';
        setComputerMoveCounter(computerMoveCounter + 1);
        setSquares(copySquares);
        setZeroPlacedAdjacentToX(true);
        return;
      }

      if (((computerFirstMoveIndex == 8) && (index == 3 || index == 1)) ||
        ((computerFirstMoveIndex == 0) && (index == 5 || index == 7)) ||
        (computerFirstMoveIndex == 2 && (index == 3 || index == 7)) ||
        (computerFirstMoveIndex == 6 && (index == 5 || index == 1))

      ) {
        if (playerMoveCounter === 1) {
          placeXAtHigherWinningIndex(computerFirstMoveIndex, index);
          return;
        }

      }




    }

    else {
      if (computerMoveCounter == 1) {
        placeXAtHigherWinningIndex(computerFirstMoveIndex, index);
        return;
      }


      if (zeroPlacedAdjacentToX) {
        placeXAtHigherWinningIndex(computerFirstMoveIndex, index);
        setZeroPlacedAdjacentToX(false);
        return;
      }
    }


    if (playerMoveCounter >= 1) {
      DetermiePositionOfX();
      isWon(copySquares);

      return;
    }


    placeXAtHigherWinningIndex(computerFirstMoveIndex, index);



  }



  function placeXAtHigherWinningIndex(computerFirstMoveIndex, index) {
    let indexesWhereZeroIsPresent = [];

    for (let i = 0; i < 9; i++) {
      if (copySquares[i] == '0') {
        indexesWhereZeroIsPresent.push(i);
      }
    }



    // filter winning array
    let winArr = [...winnerCondition];

    for (let j = 0; j < indexesWhereZeroIsPresent.length; j++) {
      for (let i = 0; i < winArr.length; i++) {
        let ele = winArr[i];
        for (let k = 0; k < 3; k++) {
          if (ele[k] === indexesWhereZeroIsPresent[j]) {
            winArr.splice(i, 1);
            break;
          }
        }




      }
    }



    let requiredCorners = [];

    for (let j = 0; j < corners.length; j++) {

      if (copySquares[corners[j]] == null) {
        requiredCorners.push(corners[j]);
      }


    }




    var map = new Map();
    for (let i = 0; i < requiredCorners.length; i++) {
      let count = 0;
      for (let j = 0; j < winArr.length; j++) {
        if (winArr[j].includes(requiredCorners[i]))
          count++
      }
      map.set(requiredCorners[i], count);

    }


    let maxCount = Math.max(...map.values());

    for (let key of map.keys()) {
      if (map.get(key) === maxCount) {
        copySquares[key] = 'X'
        setSquares(copySquares);
        setComputerMoveCounter(computerMoveCounter + 1);
        return;
      }
    }


  }

  function isWon(copySquares) {
    let didComputerWin = checkTicTacToe(copySquares)
    if (didComputerWin) {
      //let toPrint=isX===false?"Player 2 Won":"Player 1 won";
      setSquares(copySquares);
      alert("Computer Won");

      return;
      //setSquares(Array(9).fill(null));   
    }
    else {
      let ifSquaresCompleted = true;
      copySquares.forEach(element => {
        if (element === null)
          ifSquaresCompleted = false;

      })
      if (ifSquaresCompleted) {
        alert('Draw');
        return;
      }
    }
  }

  function DetermiePositionOfX() {
    let arrayHavingTwoZero = [];
    let arrayHavingTwoX = [];
    isWon(copySquares);


    for (let i = 0; i < winnerCondition.length; i++) {
      let arr = winnerCondition[i];

      let squareSubArr = [];
      for (let j = 0; j < 3; j++) {
        squareSubArr.push(copySquares[arr[j]]);
      }

      let subArrayHavingTwoZero = false;
      let zerosCount = 0;
      let xCount = 0;
      let subArrayHavingTwoX = false;
      if (squareSubArr.includes(null)) {
        for (let j = 0; j < squareSubArr.length; j++) {
          let a = squareSubArr[j];

          if (a === 'X') {
            xCount++;

          }


          if (a === '0') {
            zerosCount++;


          }

          if (zerosCount == 2)
            subArrayHavingTwoZero = true;

          if (xCount === 2)
            subArrayHavingTwoX = true;

        }

        if (subArrayHavingTwoZero) arrayHavingTwoZero.push(i);
        if (subArrayHavingTwoX) arrayHavingTwoX.push(i);

      }
    }






    if (arrayHavingTwoX.length > 0) {


      for (let i = 0; i < arrayHavingTwoX.length; i++) {
        let arr = winnerCondition[arrayHavingTwoX[i]];
        for (let j = 0; j < arr.length; j++) {
          if (copySquares[arr[j]] == null) {
            copySquares[arr[j]] = 'X';
            setSquares(copySquares);
            return;
          }
        }

      }

    }

    else {

      if (arrayHavingTwoZero.length > 0) {
        for (let index = 0; index < arrayHavingTwoZero.length; index++) {

          let arr = winnerCondition[arrayHavingTwoZero[index]]
          for (let j = 0; j < 3; j++) {
            if (copySquares[arr[j]] === null) {
              copySquares[arr[j]] = 'X';
              setSquares(copySquares);
              return;

            }
          }

        }
      }
    }


    let cornersWhereZerosOrXAreNotPresent = [];
    for (let i = 0; i < corners.length; i++) {
      if (copySquares[corners[i]] !== '0' && copySquares[corners[i]] !== 'X') {
        cornersWhereZerosOrXAreNotPresent.push(corners[i]);
      }
    }

    let positioinOfXTobeInserted = Math.floor(Math.random() * cornersWhereZerosOrXAreNotPresent.length);
    copySquares[cornersWhereZerosOrXAreNotPresent[positioinOfXTobeInserted]] = 'X';


    setSquares(copySquares);
  }

  function PlayDoublePlayer(index) {
    console.log('Hi');
    const squaresCopy = [...squares];
    squaresCopy[index] = isX === true ? 'X' : '0';
    setSquares(squaresCopy);
    setIsX(!isX);
    console.log(squaresCopy);

    let didXWin = false;
    let didZeroWin = false;
    winnerCondition.forEach(arr => {
      let xCount = 0;
      let zeroCount = 0;
      arr.forEach(ele => {
        if (squaresCopy[ele] === 'X') {
          xCount++;
        }
        if (squaresCopy[ele] === "0") {
          zeroCount++;
        }
      })

      if (xCount === 3) {
        didXWin = true;
        return;
      }
      if (zeroCount === 3) {
        didZeroWin = true;
        return;
      }

    });


    if (didXWin) {
      alert('Player X Won ');
      return;
    }
    if (didZeroWin) {
      alert('Player 0 won');
      return;
    }


    let ifSquaresCompleted = true;
    squaresCopy.forEach(element => {
      if (element === null)
        ifSquaresCompleted = false;

    })
    if (ifSquaresCompleted) {

      //let toPrint=isX===false?"Player 2 Won":"Player 1 won";
      alert('Match Drawn');
      return;



    }

    else {

    }
  }

  function tossResult() {
    let result = Math.random() < 0.5 ? 'Computer Move First' : 'You Move First';
    setTimeout(() => {
      setTossResult(result)
    }, 4000);

    setTimeout(() => {
      setToss(true)
    }, 8000);

  }

  useEffect(() => {
    if (singlePlayer) {
      tossResult()
    }

  }, [singlePlayer])








  console.log(squares)


  return (


    <>

      {hideSudoku ?
        (
          <>
            <h1 className='head'><b> Play Tic Tac Toe</b></h1>
            <div className='links'>
              <div id='singlePlayer'><div onClick={playWithComputer}> Single Player</div></div>
              <div id='doublePlayer'><div onClick={playWithAnotherPlayer}> Double Player</div></div>

            </div>
          </>
        ) : (
          <>

            {singlePlayer && !toss && <div>
              <h1>Toss For First Move</h1>
              {TossResult == "" && <h2>Toss in progress...</h2>}
              <h2>{TossResult}</h2>
            </div>}
            {toss && <div className="container">
              <div>
                <div className='box'>
                  <Block value={squares[0]} onClick={() => Move(0)} />
                  <Block value={squares[1]} onClick={() => Move(1)} />
                  <Block value={squares[2]} onClick={() => Move(2)} />
                </div>

                <div className='box'>
                  <Block value={squares[3]} onClick={() => Move(3)} />
                  <Block value={squares[4]} onClick={() => Move(4)} />
                  <Block value={squares[5]} onClick={() => Move(5)} />
                </div>

                <div className='box'>
                  <Block value={squares[6]} onClick={() => Move(6)} />
                  <Block value={squares[7]} onClick={() => Move(7)} />
                  <Block value={squares[8]} onClick={() => Move(8)} />
                </div>


              </div>
            </div>}
          </>
        )}
    </>
  );
}

export default App;
