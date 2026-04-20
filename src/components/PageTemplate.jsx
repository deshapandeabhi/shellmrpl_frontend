import React from 'react';

const PageTemplate = ({ title, bgImage, content }) => {
  return (
    <section className="w-full flex-grow bg-white animate-fade-in">
      {/* Dynamic Header Image matching the airplane style perfectly without text overlays */}
      <div className="w-full h-[400px] md:h-[450px] relative mt-1">
        <img 
          src={bgImage || "/wp-content/uploads/2016/08/profile-bg.jpg"} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Main Content Area */}
      <div className="text-left py-10 px-10 border-l border-r border-[#e0e0e0] min-h-[400px]">
        <h2 className="text-[#1a1a1a] text-[28px] font-bold mb-6 relative inline-block font-openSans">
          {title}
          <span className="block h-[3px] w-1/2 bg-[#dd1d21] mt-2"></span>
        </h2>
        
        <div className="text-[#444] space-y-5 text-[15px] font-openSans leading-[1.8]">
             {content || <p>This page content is currently being migrated from WordPress...</p>}
        </div>
      </div>
    </section>
  );
};

export default PageTemplate;
