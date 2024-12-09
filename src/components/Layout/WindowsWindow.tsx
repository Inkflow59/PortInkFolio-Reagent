import React from 'react';
import { X, Minus, Square } from 'lucide-react';

interface WindowsWindowProps {
  title: string;
  children: React.ReactNode;
}

const WindowsWindow: React.FC<WindowsWindowProps> = ({ title, children }) => {
  return (
    <div className="bg-[#ECE9D8] rounded-lg shadow-xl overflow-hidden border-2 border-[#0054E3]">
      <div className="bg-gradient-to-r from-[#0054E3] to-[#2683FF] p-2 flex items-center justify-between">
        <h2 className="text-white font-bold">{title}</h2>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-[#3579F6] rounded">
            <Minus className="w-4 h-4 text-white" />
          </button>
          <button className="p-1 hover:bg-[#3579F6] rounded">
            <Square className="w-4 h-4 text-white" />
          </button>
          <button className="p-1 hover:bg-[#3579F6] rounded">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default WindowsWindow;