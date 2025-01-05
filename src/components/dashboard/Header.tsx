import React from 'react';
import { Plus } from 'lucide-react';

interface HeaderProps {
  title: string;
  showButton?: boolean;
}

const Header = ({ title, showButton = true }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      {showButton && (
        <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg">
          <Plus size={16} />
          <span>Create New Agent</span>
        </button>
      )}
    </div>
  );
};

export default Header;