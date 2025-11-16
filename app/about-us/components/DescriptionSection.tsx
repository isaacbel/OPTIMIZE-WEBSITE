export default function Description() {
    return (
      <section className="w-full py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Card Container */}
          <div className="relative bg-white rounded-3xl shadow-xl p-16 sm:p-20 lg:p-28">
            
            {/* TOP PILL TITLE */}
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
              <div className="px-14 py-5 rounded-full bg-white border-2 border-gray-300 shadow-lg">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 whitespace-nowrap">
                  Optimize Jijel
                </h2>
              </div>
            </div>
    
            {/* Main Content - with top padding to account for pill */}
            <div className="mt-16 space-y-10 text-gray-700">
              <p className="text-xl sm:text-2xl leading-loose">
                <strong className="font-semibold text-gray-900">Optimize Jijel</strong> is a youth-led, non-lucrative association based in Jijel, Algeria, dedicated to empowering the next generation through learning, collaboration, and personal growth.
              </p>
    
              <p className="text-lg sm:text-xl leading-loose">
                We believe that every young person has the potential to make a meaningful impact when given the right environment, guidance, and opportunities.
              </p>
    
              <p className="text-lg sm:text-xl leading-loose">
                Through our events, projects, trainings, and community activities, we create spaces where creativity meets purpose, helping youth develop their skills, grow as leaders, and bring positive change to their communities.
              </p>
    
              <p className="text-lg sm:text-xl leading-loose">
                Our values are rooted in commitment, respect, growth, creativity, and integrity - because we believe real success is not only about achieving more, but about becoming better, together.
              </p>
            </div>
    
          </div>
        </div>
      </section>
    );
  }