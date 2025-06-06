
import React from 'react';
import { cn } from "@/lib/utils";

type Player = 'X' | 'O' | null;

interface GameCellProps {
  value: Player;
  onClick: () => void;
  disabled: boolean;
}

const GameCell = ({ value, onClick, disabled }: GameCellProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || !!value}
      className={cn(
        "w-20 h-20 bg-white rounded-lg shadow-sm border-2 border-slate-200",
        "hover:border-primary/50 hover:shadow-md transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        "disabled:cursor-not-allowed",
        "flex items-center justify-center text-4xl font-bold",
        !value && !disabled && "hover:bg-slate-50"
      )}
    >
      {value && (
        <span
          className={cn(
            "animate-in zoom-in-50 duration-200",
            value === 'X' && "text-blue-600",
            value === 'O' && "text-orange-500"
          )}
        >
          {value}
        </span>
      )}
    </button>
  );
};

export default GameCell;
