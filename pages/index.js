import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Game.module.css";
import Confetti from "../components/templates/Confetti/Confetti";

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

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

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
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Search board for a winner and declare winner as player 'X' or 'O'
   *
   * @param {String} player
   */
  const declareWinner = (player) => {
    let i = 0,
      j = 0,
      k = 0,
      l = 0,
      win = false;

    while (i < board.length) {
      // looping through columns and diagonals
      if (i === 0) {
        k = i;
        while (k < board[i].length) {
          // looping through topleft-to-botright diagonal
          if (k === 0) {
            j = k;
            l = k;
            while (j < board.length) {
              if (win || board[j][l] !== player) break;
              if (j === board.length - 1) win = true;
              j++;
              l++;
            }
          }

          // looping through columns
          j = 0;
          while (j < board.length) {
            if (win || board[j][k] !== player) break;
            if (j === board.length - 1) win = true;
            j++;
          }

          // looping through topright-to-botleft diagonal
          if (k === board[i].length - 1) {
            j = 0;
            l = k;
            while (j < board.length) {
              if (win || board[j][l] !== player) break;
              if (j === board.length - 1) win = true;
              j++;
              l--;
            }
          }
          k++;
        }
      }

      // looping through rows
      j = 0;
      while (j < board[i].length) {
        if (win || board[i][j] !== player) break;
        if (j === board[i].length - 1) win = true;
        j++;
      }

      i++;
    }

    if (win) {
      setWinner(player);
      setIsVisible(true); // release confetti
    }
  };

  /**
   * Handle player selection when a square is clicked
   *
   * @param {String} value
   * @param {String} position
   * @param {String} player
   */
  const handleSelection = (value, position, player) => {
    if (winner === "None" && value === "") {
      switch (position) {
        case "A":
          setSquareAValue(player);
          board[0][0] = player;
          break;
        case "B":
          setSquareBValue(player);
          board[0][1] = player;
          break;
        case "C":
          setSquareCValue(player);
          board[0][2] = player;
          break;
        case "D":
          setSquareDValue(player);
          board[1][0] = player;
          break;
        case "E":
          setSquareEValue(player);
          board[1][1] = player;
          break;
        case "F":
          setSquareFValue(player);
          board[1][2] = player;
          break;
        case "G":
          setSquareGValue(player);
          board[2][0] = player;
          break;
        case "H":
          setSquareHValue(player);
          board[2][1] = player;
          break;
        case "I":
          setSquareIValue(player);
          board[2][2] = player;
          break;
        default:
          break;
      }

      declareWinner(player);
      setNextPlayer(nextPlayer === "X" ? "O" : "X");
    }
  };

  /**
   * Reset game to default settings
   */
  const handleReset = () => {
    setNextPlayer("X");
    setWinner("None");
    setSquareAValue("");
    setSquareBValue("");
    setSquareCValue("");
    setSquareDValue("");
    setSquareEValue("");
    setSquareFValue("");
    setSquareGValue("");
    setSquareHValue("");
    setSquareIValue("");
    setIsVisible(false);
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };

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
            squareClick={() => handleSelection(squareAValue, "A", nextPlayer)}
          />
          <Square
            squareContent={squareBValue}
            squareClick={() => handleSelection(squareBValue, "B", nextPlayer)}
          />
          <Square
            squareContent={squareCValue}
            squareClick={() => handleSelection(squareCValue, "C", nextPlayer)}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            squareContent={squareDValue}
            squareClick={() => handleSelection(squareDValue, "D", nextPlayer)}
          />
          <Square
            squareContent={squareEValue}
            squareClick={() => handleSelection(squareEValue, "E", nextPlayer)}
          />
          <Square
            squareContent={squareFValue}
            squareClick={() => handleSelection(squareFValue, "F", nextPlayer)}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            squareContent={squareGValue}
            squareClick={() => handleSelection(squareGValue, "G", nextPlayer)}
          />
          <Square
            squareContent={squareHValue}
            squareClick={() => handleSelection(squareHValue, "H", nextPlayer)}
          />
          <Square
            squareContent={squareIValue}
            squareClick={() => handleSelection(squareIValue, "I", nextPlayer)}
          />
        </div>
      </div>
      {isVisible && <Confetti />}
    </div>
  );
}

export default function Game() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coderbyte Tic Tac Toe Game | Completed by Michael Attah</title>
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
