import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Game.module.css";

/*
A B C
D E F
G H I

ABC, DEF, GHI, ADG, BEH, CFI, CEG, AEI
*/

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  fontSize: "16px",
};

function Square({ squareContent, squareClick }) {
  return (
    <div className={styles.square} style={squareStyle} onClick={squareClick}>
      {squareContent}
    </div>
  );
}

function Board() {
  const [nextPlayer, setNextPlayer] = useState("X");
  const [winner, setWinner] = useState("None");
  const [squareAValue, setSquareAValue] = useState("");
  const [squareBValue, setSquareBValue] = useState("");
  const [squareCValue, setSquareCValue] = useState("");
  const [squareDValue, setSquareDValue] = useState("");
  const [squareEValue, setSquareEValue] = useState("");
  const [squareFValue, setSquareFValue] = useState("");
  const [squareGValue, setSquareGValue] = useState("");
  const [squareHValue, setSquareHValue] = useState("");
  const [squareIValue, setSquareIValue] = useState("");

  const winningCombinations = [
    "ABC",
    "DEF",
    "GHI",
    "ADG",
    "BEH",
    "CFI",
    "CEG",
    "AEI",
  ];

  const positions = {
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
  };

  let playerXMoves = "",
    playerOMoves = "";

  /**
   * Handle player selection
   * @param {String} position
   * @param {String} player
   */
  function handleSelection(position, player) {
    positions[position] = player;
    switch (position) {
      case "A":
        if (squareAValue === "") {
          setSquareAValue(player);
          setNextPlayer(nextPlayer === "X" ? "O" : "X");
        }
        break;
      case "B":
        if (squareBValue === "") {
          setSquareBValue(player);
          setNextPlayer(nextPlayer === "X" ? "O" : "X");
        }
        break;
      case "C":
        if (squareCValue === "") {
          setSquareCValue(player);
          setNextPlayer(nextPlayer === "X" ? "O" : "X");
        }
        break;
      case "D":
        if (squareDValue === "") {
          setSquareDValue(player);
          setNextPlayer(nextPlayer === "X" ? "O" : "X");
        }
        break;
      case "E":
        if (squareEValue === "") {
          setSquareEValue(player);
          setNextPlayer(nextPlayer === "X" ? "O" : "X");
        }
        break;
      case "F":
        if (squareFValue === "") {
          setSquareFValue(player);
          setNextPlayer(nextPlayer === "X" ? "O" : "X");
        }
        break;
      case "G":
        if (squareGValue === "") {
          setSquareGValue(player);
          setNextPlayer(nextPlayer === "X" ? "O" : "X");
        }
        break;
      case "H":
        if (squareHValue === "") {
          setSquareHValue(player);
          setNextPlayer(nextPlayer === "X" ? "O" : "X");
        }
        break;
      case "I":
        if (squareIValue === "") {
          setSquareIValue(player);
          setNextPlayer(nextPlayer === "X" ? "O" : "X");
        }
        break;
      default:
        break;
    }
    // for (const { pos, pyr } in positions) {
    // }
    // setNextPlayer("Click 'Reset'!!");
  }

  function handleReset() {
    setSquareAValue("");
    setSquareBValue("");
    setSquareCValue("");
    setSquareDValue("");
    setSquareEValue("");
    setSquareFValue("");
    setSquareGValue("");
    setSquareHValue("");
    setSquareIValue("");
    setNextPlayer("X");
    setWinner("None");
  }

  function declareWinner() {}

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{nextPlayer}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner}</span>
      </div>
      <button
        className={styles.button}
        style={buttonStyle}
        onClick={() => handleReset()}
      >
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square
            squareContent={squareAValue}
            squareClick={() => handleSelection("A", nextPlayer)}
          />
          <Square
            squareContent={squareBValue}
            squareClick={() => handleSelection("B", nextPlayer)}
          />
          <Square
            squareContent={squareCValue}
            squareClick={() => handleSelection("C", nextPlayer)}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            squareContent={squareDValue}
            squareClick={() => handleSelection("D", nextPlayer)}
          />
          <Square
            squareContent={squareEValue}
            squareClick={() => handleSelection("E", nextPlayer)}
          />
          <Square
            squareContent={squareFValue}
            squareClick={() => handleSelection("F", nextPlayer)}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            squareContent={squareGValue}
            squareClick={() => handleSelection("G", nextPlayer)}
          />
          <Square
            squareContent={squareHValue}
            squareClick={() => handleSelection("H", nextPlayer)}
          />
          <Square
            squareContent={squareIValue}
            squareClick={() => handleSelection("I", nextPlayer)}
          />
        </div>
      </div>
    </div>
  );
}

export default function Game() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coderbyte Tic Tac Toe Game | Michael Attah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="game">
        <h1 className={styles.title}>
          Coderbyte <br /> Tic Tac Toe Game
        </h1>
        <div className="game-board">
          <Board />
        </div>
      </main>

      <footer>
        <span>Completed by</span>
        <a
          href="https://github.com/mikeattah/coderbyte-tic-tac-toe-game"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Michael Attah
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
