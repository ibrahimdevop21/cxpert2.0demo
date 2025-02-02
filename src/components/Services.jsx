import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = {
  core: [
    {
      title: 'Customer Experience',
      description:
        'Design and implement comprehensive customer experience strategies that create meaningful interactions at every touchpoint.',
      icon: '✨',
      color: 'from-blue-400 to-purple-500',
    },
    {
      title: 'Customer Support',
      description:
        '24/7 multilingual support across all channels including voice, email, chat, and social media.',
      icon: '💬',
      color: 'from-green-400 to-teal-500',
    },
    {
      title: 'Technical Support',
      description:
        'Expert technical assistance through our skilled engineers who specialize in complex troubleshooting.',
      icon: '🛠',
      color: 'from-yellow-400 to-orange-500',
    },
  ],
  lifecycle: [
    {
      title: 'Customer Conversion',
      description:
        'Transform prospects into loyal customers through strategic engagement and personalized communication.',
      icon: '📈',
      color: 'from-red-400 to-pink-500',
    },
    {
      title: 'Customer Onboarding',
      description:
        'Create seamless onboarding experiences that set customers up for success from day one.',
      icon: '🚀',
      color: 'from-indigo-400 to-violet-500',
    },
    {
      title: 'Customer Renewals',
      description:
        'Maximize retention through proactive engagement and strategic renewal programs.',
      icon: '🔄',
      color: 'from-cyan-400 to-blue-500',
    },
  ],
  operational: [
    {
      title: 'Content Moderation',
      description:
        'Maintain platform integrity with comprehensive content moderation across all digital channels.',
      icon: '👁',
      color: 'from-emerald-400 to-green-500',
    },
    {
      title: 'Data Processing',
      description:
        'Transform raw data into actionable insights through efficient processing and analysis.',
      icon: '📊',
      color: 'from-amber-400 to-yellow-500',
    },
    {
      title: 'Finance & Accounting',
      description:
        'Streamline financial operations with expert accounting services and analysis.',
      icon: '💰',
      color: 'from-blue-400 to-indigo-500',
    },
  ],
};

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-20%' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className='relative group'
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200`}
      />
      <div className='relative h-full p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm border border-blue-400/20 flex flex-col'>
        <div className='text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300'>
          {service.icon}
        </div>
        <h4 className='text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text'>
          {service.title}
        </h4>
        <p className='text-blue-200/80 group-hover:text-blue-200 transition-colors duration-300'>
          {service.description}
        </p>
        <div className='absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-400/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300' />
      </div>
    </motion.div>
  );
};

const WavesDivider = () => (
  <div className='relative h-24 overflow-hidden'>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
      className='absolute w-full h-full'
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%233B82F6' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    />
  </div>
);

export default function Services() {
  return (
    <section className='relative py-32 overflow-hidden' id='services'>
      {/* Background Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent'
      />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='space-y-24'>
          {Object.entries(services).map(([category, items], categoryIndex) => (
            <div key={category} className="mb-24 last:mb-0">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-3xl font-semibold mb-12 text-center bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text'
              >
                {category.charAt(0).toUpperCase() + category.slice(1)} Services
              </motion.h3>
              <div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
                {items.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={index + categoryIndex * 3}
                  />
                ))}
              </div>
              {categoryIndex < Object.entries(services).length - 1 && (
                <div className="mt-24">
                  <WavesDivider />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
