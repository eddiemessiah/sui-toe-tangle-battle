
import React from 'react';
import GameCell from './GameCell';

type Player = 'X' | 'O' | null;
type Board = Player[];

interface GameBoardProps {
  board: Board;
  onCellClick: (index: number) => void;
  gameOver: boolean;
}

const GameBoard = ({ board, onCellClick, gameOver }: GameBoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-4 bg-slate-100 rounded-xl">
      {board.map((cell, index) => (
        <GameCell
          key={index}
          value={cell}
          onClick={() => onCellClick(index)}
          disabled={gameOver}
        />
      ))}
    </div>
  );
};

export default GameBoard;
