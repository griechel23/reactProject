
import React from "react";
import ReactDOM from "react";
import {createRoot} from "react-dom/client";
import internal from "stream";
import './index.css';

interface SquareProps {
  value: string;
  onClick: () => void;
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
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
  

interface BoardState {
  squares: string[];
  isX : boolean;
}

class Board extends React.Component<{}, BoardState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isX: true,
    }
  }

  renderSquare(i: number) {
    return <Square 
      value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
    />;
  }

  handleClick = (value : number) => {
    const squares = this.state.squares;
    // const squares = this.state.squares.slice(); ???
    if (squares[value]) {
      console.log("square already taken");
      return;
    }
    
    const isX = this.state.isX;
    squares[value] = isX ? 'X' : 'O';
    this.setState({squares: squares});
    this.setState({isX: !isX});
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
  