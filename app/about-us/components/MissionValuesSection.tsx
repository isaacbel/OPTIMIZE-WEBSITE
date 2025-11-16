'use client';

export default function MissionValues() {
  return (
    <section className="w-full py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Our Mission Card */}
          <div className="bg-white rounded-3xl shadow-lg p-16 text-center relative">
            {/* Icon - positioned at top with negative margin to overlap */}
            <div className="flex justify-center -mt-28 mb-8">
              <div className="w-28 h-28 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100">
                <img 
                  src="/rocket (2) 1.png" 
                  alt="Mission Icon" 
                  className="w-14 h-14"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = '<span class="text-5xl"></span>';
                    }
                  }}
                />
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            
            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to equip young people with the skills, mindset, and 
              support they need to thrive, both personally and professionally. We 
              aim to bridge the gap between knowledge and action by offering 
              practical learning, hands-on experiences, and community collaboration.
            </p>
          </div>

          {/* Our Values Card */}
          <div className="bg-white rounded-3xl shadow-lg p-16 text-center relative">
            {/* Icon - positioned at top with negative margin to overlap */}
            <div className="flex justify-center -mt-28 mb-8">
              <div className="w-28 h-28 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100">
                <img 
                  src="/core-values 1.png" 
                  alt="Values Icon" 
                  className="w-14 h-14"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = '<span class="text-5xl"></span>';
                    }
                  }}
                />
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
            
            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Our values are rooted in commitment, respect, growth, creativity, 
              and integrity ; because we believe real success is not only about 
              achieving more, but about becoming better, together.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}