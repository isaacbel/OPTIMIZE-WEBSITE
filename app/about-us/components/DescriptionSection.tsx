export default function Description() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Card Container */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl p-8 sm:p-10 md:p-14 lg:p-20 xl:p-24">
          
          {/* TOP PILL TITLE */}
          <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2">
            <div className="px-6 py-2 sm:px-8 md:px-10 sm:py-2.5 md:py-3 rounded-full bg-white border-2 border-gray-300 shadow-lg">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 whitespace-nowrap">
                Optimize Jijel
              </h2>
            </div>
          </div>
  
          {/* Main Content - with top padding to account for pill */}
          <div className="mt-10 sm:mt-12 md:mt-14 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-gray-700">
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose">
              <strong className="font-semibold text-gray-900">Optimize Jijel</strong> is a youth-led, non-lucrative association based in Jijel, Algeria, dedicated to empowering the next generation through learning, collaboration, and personal growth.
            </p>
  
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose">
              We believe that every young person has the potential to make a meaningful impact when given the right environment, guidance, and opportunities.
            </p>
  
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose">
              Through our events, projects, trainings, and community activities, we create spaces where creativity meets purpose, helping youth develop their skills, grow as leaders, and bring positive change to their communities.
            </p>
  
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose">
              Our values are rooted in commitment, respect, growth, creativity, and integrity - because we believe real success is not only about achieving more, but about becoming better, together.
            </p>
          </div>
  
        </div>
      </div>
    </section>
  );
}