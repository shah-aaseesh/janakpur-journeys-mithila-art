
import React from "react";

const About: React.FC = () => {
  const skills = [
    { name: "Local Expertise", icon: "🗺️" },
    { name: "Multilingual", icon: "🗣️" },
    { name: "Cultural Knowledge", icon: "🏛️" },
    { name: "Personalized Tours", icon: "👤" },
    { name: "Historical Insights", icon: "📚" },
    { name: "Friendly Service", icon: "😊" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title pb-4">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="relative">
              {/* Image with Mithila-inspired border */}
              <div className="border-8 border-mithila-cream p-2 rounded-lg shadow-lg">
                <div className="h-80 overflow-hidden rounded">
                  <img 
                    src="/lovable-uploads/23d3eb2f-9ecf-485c-87f5-a12d12cfbc2d.png" 
                    alt="Bikash in front of Mithila art" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-40 h-24 bg-mithila-yellow bg-opacity-20 -z-10 rounded-br-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-mithila-green bg-opacity-20 -z-10 rounded-tl-3xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in">
            <h3 className="text-2xl font-bold text-mithila-indigo mb-6 font-hind">Experienced Tour Guide & Cultural Ambassador</h3>
            
            <div className="space-y-4 text-gray-700">
              <p>
                With over 7 years of experience showing tourists the beauty and heritage of Janakpur, I'm passionate about creating authentic and personalized experiences for visitors from around the world.
              </p>
              <p>
                Born and raised in Janakpur, I'm fluent in <span className="font-medium">English, Hindi, Nepali, and Maithili</span>, allowing me to connect with diverse travelers and share the stories of my homeland in a language you understand.
              </p>
              <p>
                My tours focus on the rich cultural heritage of the Mithila region, with special emphasis on art, architecture, local customs, and spiritual significance of our temples and historic sites.
              </p>
              <p>
                Whether you're interested in exploring ancient temples, learning about Mithila art, experiencing local cuisine, or immersing yourself in our festivals, I create tailored experiences that match your interests.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-mithila-red mb-4">My Skills</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-mithila-cream rounded-lg">
                    <span className="text-2xl mr-2">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
