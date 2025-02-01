import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "CXperts has revolutionized our customer service operations. Their innovative solutions and dedicated team have significantly improved our customer satisfaction scores and operational efficiency. The level of expertise and commitment they bring is truly exceptional.",
      author: "Sarah Johnson",
      position: "Head of Customer Experience",
      company: "TechCorp Solutions",
      logo: "/cx-logos/techcorp.svg"
    },
    {
      quote: "Working with CXperts has been a game-changing experience. Their deep understanding of customer needs and ability to adapt to our unique requirements has helped us achieve remarkable growth. The results speak for themselves - our customer retention has increased by 40%.",
      author: "Michael Chen",
      position: "CEO",
      company: "Global Innovations Ltd",
      logo: "/cx-logos/global-innovations.svg"
    },
    {
      quote: "Born from the heart of CXperts, our journey has been nothing short of extraordinary. The unwavering support, mentorship, and nurturing environment provided by the CXperts management team were instrumental in our success. From working as agents to launching our own startup, their guidance has been the cornerstone of Zhive249's growth and achievements.",
      author: "Ibrahim Hassan",
      position: "Founder & CEO",
      company: "Zhive249",
      logo: "/cx-logos/zhive.svg"
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
            Client Success Stories
          </h2>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their customer experience and achieve remarkable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              {/* Card Container with Gradient Border */}
              <div className="relative h-full">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />
                
                {/* Card content */}
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-xl border border-white/10 flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-yellow-400">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Content */}
                  <div className="mb-8 flex-grow">
                    <p className="text-blue-100/90 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-blue-400/20">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-yellow-400 p-[2px]">
                      <div className="w-full h-full rounded-full bg-blue-900/60 flex items-center justify-center text-white text-xl font-bold backdrop-blur-sm">
                        {testimonial.author.charAt(0)}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="font-semibold text-blue-100">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-blue-300/80">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-blue-300/80">
                        {testimonial.company}
                      </div>
                    </div>

                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} logo`}
                      className="h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-400/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
