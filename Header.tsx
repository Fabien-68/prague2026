import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-black bg-opacity-20 backdrop-blur-md">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-white tracking-wider">
          Prague Amour
        </h1>
      </div>
    </header>
  );
};

export default Header;