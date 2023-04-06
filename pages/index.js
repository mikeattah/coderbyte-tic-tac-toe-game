import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Game.module.css";

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
  color: "white",
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
  color: "white",
  fontSize: "16px",
};

function Square({ content, squareClick }) {
  return (
    <div className="square" style={squareStyle} onClick={squareClick}>
      {content}
    </div>
  );
}

function Board() {
  const [nextPlayer, setNextPlayer] = useState("X");
  const [winner, setWinner] = useState("None");
  const [content, setContent] = useState(["", "", "", "", "", "", "", "", ""]);

  function handleSelection() {
    setContent(nextPlayer === "X" ? "X" : "O");
    setNextPlayer(nextPlayer === "X" ? "O" : "X");
  }

  function handleReset() {
    setNextPlayer("X");
    setWinner("None");
    setContent(["", "", "", "", "", "", "", "", ""]);
  }

  function determineWinner() {}

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{nextPlayer}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner}</span>
      </div>
      <button style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square content={content[0]} squareClick={() => handleSelection()} />
          <Square content={content[1]} squareClick={() => handleSelection()} />
          <Square content={content[2]} squareClick={() => handleSelection()} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square content={content[3]} squareClick={() => handleSelection()} />
          <Square content={content[4]} squareClick={() => handleSelection()} />
          <Square content={content[5]} squareClick={() => handleSelection()} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square content={content[6]} squareClick={() => handleSelection()} />
          <Square content={content[7]} squareClick={() => handleSelection()} />
          <Square content={content[8]} squareClick={() => handleSelection()} />
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
