import React from 'react';

const Navbar = () => {
  return (
    <div className="h-[88px] flex-grow bg-[#21406d] flex flex-wrap lg:flex-nowrap items-center justify-between px-8 text-white">
      <nav className="flex space-x-6 lg:space-x-10 text-[16px] font-openSans font-light">
        <a href="/" className="text-[#008dcf] hover:text-[#008dcf] transition-colors">Home</a>
        <a href="/gallery" className="hover:text-[#008dcf] transition-colors">Gallery</a>
        <a href="/working-with-shell-mrpl-aviation-2" className="hover:text-[#008dcf] transition-colors">Careers</a>
        <a href="/contact" className="hover:text-[#008dcf] transition-colors">Contact Us</a>
      </nav>

      <div className="relative mt-2 lg:mt-0">
        <div className="flex bg-white/90 rounded-sm overflow-hidden h-[34px] w-[220px]">
          <span className="text-gray-500 bg-[#e8e8e8] flex items-center justify-center w-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full h-full pl-2 pr-2 text-sm text-gray-700 bg-[#f5f5f5] focus:outline-none focus:bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
