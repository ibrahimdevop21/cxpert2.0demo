import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import anime from 'animejs/lib/anime.es.js';

export default function About() {
  const headerRef = useScrollAnimation({
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: 0
  });

  const cardsRef = useScrollAnimation({
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 800,
    delay: anime.stagger(100)
  });

  const statsRef = useScrollAnimation({
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: 800,
    delay: anime.stagger(100)
  });

  const values = [
    { name: 'Commitment', icon: '🤝' },
    { name: 'Innovation', icon: '💡' },
    { name: 'Quality', icon: '⭐' },
    { name: 'Diversity', icon: '🌍' },
    { name: 'Teamwork', icon: '👥' }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#1a1a2f]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#E114E5] to-[#9946FF]">
            About CXperts
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Transforming customer experiences through innovative solutions and exceptional service
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-12 mb-16 opacity-0">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-gradient-to-br from-[#4F46E5]/10 to-[#9946FF]/10 transition-all duration-300 border border-white/5 hover:border-white/10">
              <div className="flex items-start">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#9946FF]">Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    CXperts is an Egyptian-based Business Process Outsourcing (BPO) company founded on the legacy of thirteen previous companies under the GO Group. It specializes in delivering exceptional customer experience services across various fields.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-gradient-to-br from-[#4F46E5]/10 to-[#9946FF]/10 transition-all duration-300 border border-white/5 hover:border-white/10">
              <div className="flex items-start">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#9946FF]">Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To improve the overall customer experience by rapidly providing feedback and enhancing the quality of operations using AI systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-gradient-to-br from-[#4F46E5]/10 to-[#9946FF]/10 transition-all duration-300 border border-white/5 hover:border-white/10">
              <div className="flex items-start">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#9946FF]">Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To elevate the contact center experience by leveraging AutoML systems to review and improve customer conversations, ensuring compliance with customer needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-gradient-to-br from-[#4F46E5]/10 to-[#9946FF]/10 transition-all duration-300 border border-white/5 hover:border-white/10">
              <div className="flex items-start">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#9946FF]">Values</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {values.map((value, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gradient-to-br from-[#4F46E5]/5 to-[#9946FF]/5 rounded-lg hover:from-[#4F46E5]/10 hover:to-[#9946FF]/10 transition-all duration-300 border border-white/5 hover:border-white/10"
                      >
                        <span className="text-2xl">{value.icon}</span>
                        <span className="text-[#8B8BFF] font-medium">{value.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 opacity-0">
          <div className="text-center p-6 bg-white/5 rounded-lg hover:bg-gradient-to-br from-[#4F46E5]/10 to-[#9946FF]/10 transition-all duration-300 border border-white/5 hover:border-white/10">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#9946FF]">13+</div>
            <div className="text-gray-400 mt-2">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg hover:bg-gradient-to-br from-[#4F46E5]/10 to-[#9946FF]/10 transition-all duration-300 border border-white/5 hover:border-white/10">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#9946FF]">500+</div>
            <div className="text-gray-400 mt-2">Team Members</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg hover:bg-gradient-to-br from-[#4F46E5]/10 to-[#9946FF]/10 transition-all duration-300 border border-white/5 hover:border-white/10">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#9946FF]">24/7</div>
            <div className="text-gray-400 mt-2">Support</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg hover:bg-gradient-to-br from-[#4F46E5]/10 to-[#9946FF]/10 transition-all duration-300 border border-white/5 hover:border-white/10">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#9946FF]">98%</div>
            <div className="text-gray-400 mt-2">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
