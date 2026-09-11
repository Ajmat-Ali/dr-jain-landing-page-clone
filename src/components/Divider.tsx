import React from 'react';

interface DividerProps {
  className?: string;
  color?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = '', color = '#1C5BD9' }) => {
  return (
    <div className={`flex items-center justify-center my-4 ${className}`} id="ekit-section-divider">
      <div className="relative flex items-center justify-center">
        {/* 3 small signature dots on the left */}
        <div className="flex items-center space-x-1.5 mr-2">
          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
        </div>
        {/* Main 100px bar */}
        <div
          className="h-[4px] w-[100px] rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};
