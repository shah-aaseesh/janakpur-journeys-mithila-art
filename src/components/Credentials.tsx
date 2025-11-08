import React from "react";

const Credentials: React.FC = () => {
  const credentials = [
    { name: "Licensed Agency", icon: "🏢" },
    { name: "Professional Guides", icon: "👥" },
    { name: "Insurance Coverage", icon: "🛡️" },
    { name: "1000+ Customers", icon: "⭐" },
    { name: "Local Partnerships", icon: "🤝" },
    { name: "24/7 Support", icon: "📞" },
  ];

  return (
    <section id="credentials" className="py-20 bg-mithila-cream">
      <div className="container mx-auto px-6">
        <h2 className="section-title pb-4">Company Credentials</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Why thousands of travelers choose Travel Janakpur for their cultural journeys
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {credentials.map((credential, index) => (
            <div key={index} className="flex items-start p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <span className="text-2xl sm:text-3xl mr-3 sm:mr-4 flex-shrink-0">{credential.icon}</span>
              <span className="font-medium text-mithila-indigo text-sm sm:text-base break-words leading-tight">{credential.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;