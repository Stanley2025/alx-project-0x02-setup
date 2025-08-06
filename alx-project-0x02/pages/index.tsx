import React from 'react';

const WelcomePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold animate-pulse">
        Welcome to SoloForge!
      </h1>
    </div>
  );
};

export default WelcomePage;