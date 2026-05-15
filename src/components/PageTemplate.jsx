import React from 'react';

const PageTemplate = ({ title, bgImage, content }) => {
  return (
    <section className="w-full flex-grow bg-white animate-fade-in">
      <div className="w-full h-[400px] md:h-[450px] relative mt-1">
        <img loading="lazy" 
          src={bgImage || "/wp-content/uploads/2016/08/profile-bg.jpg"} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="text-left py-10 px-10 border-l border-r border-[var(--grey-300)] min-h-[400px]">
        <h2 className="text-[var(--grey-900)] text-[28px] font-black mb-6 relative inline-block" style={{ fontFamily: 'var(--font-secondary)' }}>
          {title}
          <span className="block h-[3px] w-1/2 bg-[var(--shell-red)] mt-2"></span>
        </h2>
        
        <div className="text-[var(--grey-700)] space-y-5 text-[15.5px] leading-[1.8]" style={{ fontFamily: 'var(--font-primary)', fontWeight: 500 }}>
             {content || <p>This page content is currently being migrated from WordPress...</p>}
        </div>
      </div>
    </section>
  );
};

export default PageTemplate;
