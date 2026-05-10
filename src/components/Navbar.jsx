import React from 'react';

const Navbar = () => {
  return (
    <div className="h-[88px] flex-grow bg-[var(--night-600)] flex flex-wrap lg:flex-nowrap items-center justify-between px-8 text-white">
      <nav className="flex items-center space-x-6 text-[15px] font-medium font-roboto">
        <a href="/" className="text-[var(--ocean-400)] hover:text-[var(--ocean-400)] transition-colors">Home</a>
        <a href="/gallery" className="hover:text-[var(--ocean-400)] transition-colors">Gallery</a>
        <a href="/working-with-shell-mrpl-aviation-2" className="hover:text-[var(--ocean-400)] transition-colors">Careers</a>
        <a href="/contact" className="hover:text-[var(--ocean-400)] transition-colors">Contact Us</a>
      </nav>

      <div className="relative mt-2 lg:mt-0">
        <div className="flex h-10 w-full max-w-[300px] overflow-hidden rounded-[4px] border border-transparent focus-within:border-[var(--ocean-400)] focus-within:ring-1 focus-within:ring-[var(--ocean-400)] transition-all">
          <span className="text-gray-500 bg-[var(--grey-50)] flex items-center justify-center w-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </span>
          <form className="flex-grow flex m-0">
            <input 
              type="text" 
              placeholder="Search Site..." 
              className="w-full h-full pl-2 pr-2 text-sm text-gray-700 bg-[var(--grey-50)] focus:outline-none focus:bg-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
