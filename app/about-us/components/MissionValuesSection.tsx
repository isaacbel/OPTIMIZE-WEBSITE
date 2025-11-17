'use client';

import Image from 'next/image';

export default function MissionValues() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          
          {/* Our Mission Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 text-center relative">
            {/* Icon - positioned at top with negative margin to overlap */}
            <div className="flex justify-center -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 mb-4 sm:mb-6 md:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 relative">
                <Image 
                  src="/rocket (2) 1.png" 
                  alt="Mission Icon" 
                  width={56}
                  height={56}
                  className="w-7/12 h-7/12"
                />
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Our Mission
            </h3>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-loose">
              Our mission is to equip young people with the skills, mindset, and 
              support they need to thrive, both personally and professionally. We 
              aim to bridge the gap between knowledge and action by offering 
              practical learning, hands-on experiences, and community collaboration.
            </p>
          </div>

          {/* Our Values Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 text-center relative">
            {/* Icon - positioned at top with negative margin to overlap */}
            <div className="flex justify-center -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 mb-4 sm:mb-6 md:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 relative">
                <Image 
                  src="/core-values 1.png" 
                  alt="Values Icon" 
                  width={56}
                  height={56}
                  className="w-7/12 h-7/12"
                />
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Our Values
            </h3>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-loose">
              Our values are rooted in commitment, respect, growth, creativity, 
              and integrity; because we believe real success is not only about 
              achieving more, but about becoming better, together.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}