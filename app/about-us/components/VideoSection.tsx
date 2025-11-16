'use client';

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950">
      <div className="max-w-6xl mx-auto">

        {/* Video Thumbnail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group"
        >
          <img
            src="/about-video-thumbnail.jpg"
            alt="Youth at an Optimize Jijel event"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              aria-label="Play video"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-gray-400/50 transition-all"
            >
              <svg
                className="w-12 h-12 text-gray-900 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </motion.button>
          </div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-32 h-32 border-4 border-white/30 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Caption Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-4xl mx-auto font-poppins">
            We believe that <span className="text-gray-300 font-bold">every young person</span> has the potential to make a <span className="text-gray-300 font-bold">meaningful impact</span> when given the right environment, guidance, and opportunities.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-poppins">
            Through our events, projects, trainings, and community activities, we create spaces where <span className="text-gray-200 font-semibold">creativity meets purpose</span> — helping youth develop their skills, grow as leaders, and bring <span className="text-gray-200 font-semibold">positive change</span> to their communities.
          </p>
        </motion.div>

      </div>
    </section>
  );
}