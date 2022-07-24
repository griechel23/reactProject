
import React from "react";
import ReactDOM from "react";
import {createRoot} from "react-dom/client";
import internal from "stream";
import './index.css';

interface SquareProps {
  value: string;
}

interface SquareState {
  value?: string;
}

class Square extends React.Component<SquareProps, SquareState> {

  constructor(props: SquareProps) {
    super(props);
    this.state = {
      value: props.value,
    }
  }
  render() {
    return (
      <button className="square" onClick={this.renderTurn}>
        {this.state.value}
      </button>
    );
  }

  renderTurn = ()=> {
    if (this.state.value) {
      console.log("square already has been marked")
    } else {
      this.setState({value: 'X'});
    }
  }
}
  

interface BoardState {
  squares: string[];
}

class Board extends React.Component<{}, BoardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }
  renderSquare(i: number) {
    return <Square value={this.state.squares[i]} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
  
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
root.render(<Game />);
  