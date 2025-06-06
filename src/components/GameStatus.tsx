
import React from 'react';
import { cn } from "@/lib/utils";

interface GameStatusProps {
  currentPlayer: 'X' | 'O';
  winner: 'X' | 'O' | null;
  gameOver: boolean;
  isBoardFull: boolean;
}

const GameStatus = ({ currentPlayer, winner, gameOver, isBoardFull }: GameStatusProps) => {
  const getStatusMessage = () => {
    if (winner) {
      return `Player ${winner} wins! 🎉`;
    }
    if (gameOver && isBoardFull) {
      return "It's a tie! 🤝";
    }
    return `Player ${currentPlayer}'s turn`;
  };

  const getStatusColor = () => {
    if (winner) {
      return winner === 'X' ? 'text-blue-600' : 'text-orange-500';
    }
    if (gameOver && isBoardFull) {
      return 'text-slate-600';
    }
    return currentPlayer === 'X' ? 'text-blue-600' : 'text-orange-500';
  };

  return (
    <div className="text-center py-2">
      <p className={cn(
        "text-xl font-semibold transition-colors duration-200",
        getStatusColor()
      )}>
        {getStatusMessage()}
      </p>
      {!gameOver && (
        <div className="mt-2 flex justify-center">
          <div className={cn(
            "w-3 h-3 rounded-full animate-pulse",
            currentPlayer === 'X' ? 'bg-blue-600' : 'bg-orange-500'
          )} />
        </div>
      )}
    </div>
  );
};

export default GameStatus;
