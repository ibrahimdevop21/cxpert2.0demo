import React from 'react';

export default function Services() {
  const coreServices = [
    {
      title: 'Outsourcing',
      description: 'Human Resource Outsourcing, Information Technology Outsourcing, Full Outsourcing Services',
      icon: '🔄'
    },
    {
      title: 'HR Consultation',
      description: 'Expert guidance and solutions for your human resource needs',
      icon: '👥'
    },
    {
      title: 'Marketing Consultation',
      description: 'Strategic marketing solutions to drive your business growth',
      icon: '📈'
    },
    {
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and insights for informed decision-making',
      icon: '📊'
    },
    {
      title: 'Digital Solutions',
      description: 'Applications, cloud/on-premises solutions, license solutions, gateways, sensors',
      icon: '💻'
    }
  ];

  const specializedServices = [
    {
      title: 'Telesales/Telemarketing',
      description: 'Integrated with social media marketing and discovery calls to drive business success',
      icon: '📞'
    },
    {
      title: 'Medicare Campaigns',
      description: 'Specialized campaigns and DME (Durable Medical Equipment) Accounts management',
      icon: '🏥'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600">
          Our Services
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">Core Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-white">{service.title}</h4>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">Specialized Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-white">{service.title}</h4>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
