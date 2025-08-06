import Link from 'next/link'; 
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-cyan-400 transition-colors">
          SoloForge
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/home" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link href="/posts" className="hover:text-cyan-400 transition-colors">Posts</Link>
          <Link href="/users" className="hover:text-cyan-400 transition-colors">Users</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;