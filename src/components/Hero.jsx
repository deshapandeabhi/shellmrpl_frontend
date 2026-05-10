import React from 'react';

const Hero = () => {
  return (
    <section className="w-full flex-grow bg-white">
      
      <div className="w-full h-[400px] md:h-[450px] relative mt-1">
        <img 
          src="/wp-content/uploads/2016/08/profile-bg.jpg" 
          alt="Aviation Airplane Landing" 
          className="w-full h-full object-cover object-center"
        />
      </div>


      <div className="text-left py-8 px-10 border-l border-r border-[var(--grey-300)]">
        <h2 className="text-[var(--grey-900)] text-[28px] font-black mb-3 relative inline-block" style={{ fontFamily: 'var(--font-secondary)' }}>
          Overview
          <span className="block h-[3px] w-full bg-[var(--shell-red)] mt-1"></span>
        </h2>
        
        <div className="text-[var(--grey-700)] space-y-5 text-[15.5px] leading-[1.8] mt-6" style={{ fontFamily: 'var(--font-primary)', fontWeight: 500 }}>
          <p>
            Shell MRPL Aviation Fuels and Services Limited is a 50:50 Joint Venture Company formed in 2008 between 
            Shell, a global leader in marketing aviation fuel and operating airport fueling facilities and Mangalore 
            Refinery and Petrochemicals Limited (MRPL), a subsidiary of Oil and Natural Gas Corporation Limited, 
            India’s largest national oil company.
          </p>
          <p>
            We supply Aviation Turbine Fuel (Jet A-1) to our airline customers and ensure services as per Shell 
            Aviation’s world class operational standards. Our customers also get benefits of Shell’s extensive 
            experience in working with airport authorities & stakeholders to improve overall airport safety standards 
            including into-plane fueling, fuel hydrant designs, airport network planning and fuel farm systems.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
