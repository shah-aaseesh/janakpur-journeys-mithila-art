
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you'd send this data to a server
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting me. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-mithila-cream relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200h4v4H0V0zm4%200h4v4H4V0zm4%200h4v4H8V0zm4%200h4v4h-4V0zm0%204h4v4h-4V4zm0%204h4v4h-4V8zM8%204h4v4H8V4zm0%204h4v4H8V8zM4%208h4v4H4V8zm0-4h4v4H4V4zm0%208h4v4H4v-4zm4%204h4v4H8v-4zm4%200h4v4h-4v-4zm-8%200h4v4H4v-4zM0%204h4v4H0V4zm0%204h4v4H0V8zm0%204h4v4H0v-4z%22%20fill%3D%22%231D7874%22%20fill-opacity%3D%22.4%22%20fill-rule%3D%22evenodd%22/%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title pb-4">Contact Me</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Ready to explore Janakpur? Get in touch to plan your personalized tour experience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
            <h3 className="text-2xl font-bold text-mithila-indigo mb-6 font-hind">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mithila-indigo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mithila-indigo"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mithila-indigo"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-mithila-red text-white rounded-md font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-mithila-indigo mb-6 font-hind">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-mithila-red mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">+977 98XXXXXXXX</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-mithila-red mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">bikash@example.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-mithila-red mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Janakpur, Nepal</span>
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href="https://wa.me/977XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition-all transform hover:-translate-y-1"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="h-80 bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114161.6722156394!2d85.8803539!3d26.7271161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4013016e057f%3A0x556c747f34e0e{this.2c4c}!2sJanakpur!5e0!3m2!1sen!2snp!4v1621500571619!5m2!1sen!2snp"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Google Map of Janakpur"
                aria-hidden="false"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
