// components/layout/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex space-x-6">
        <Link href="/home" className="hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-400">About</Link>
        <Link href="/posts" className="hover:text-blue-400">Posts</Link>
        
      </nav>
    </header>
  );
};

export default Header;
