
import React from "react";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2256%22%20height%3D%2228%22%3E%3Cpath%20fill%3D%22%23F1C40F%22%20fill-opacity%3D%22.1%22%20d%3D%22M56%2026v2h-7.75c2.3-1.27%204.94-2%207.75-2zm-26%202a2%202%200%201%200-4%200h-4.09A25.98%2025.98%200%200%200%200%2016v-2c.67%200%201.34.02%202%20.07V14a2%202%200%200%200-2-2v-2a4%204%200%200%201%203.98%203.6%2028.09%2028.09%200%200%201%202.8-3.86A8%208%200%200%200%200%206V4a9.99%209.99%200%200%201%208.17%204.23c.94-.95%201.96-1.83%203.03-2.63A13.98%2013.98%200%200%200%200%200h7.75c2%201.1%203.73%202.63%205.1%204.45%201.12-.72%202.3-1.37%203.53-1.93A20.1%2020.1%200%200%200%2014.28%200h2.7c.45.56.88%201.14%201.29%201.74%201.3-.48%202.63-.87%204-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4%2028.4%200%200%201%204%200V0h4.09l-.37.59c1.38.28%202.72.67%204.01%201.15.4-.6.84-1.18%201.3-1.74h2.69a20.1%2020.1%200%200%200-2.1%202.52c1.23.56%202.41%201.2%203.54%201.93A16.08%2016.08%200%200%201%2048.25%200H56c-4.58%200-8.65%202.2-11.2%205.6%201.07.8%202.09%201.68%203.03%202.63A9.99%209.99%200%200%201%2056%204v2a8%208%200%200%200-6.77%203.74c1.03%201.2%201.97%202.5%202.79%203.86A4%204%200%200%201%2056%2010v2a2%202%200%200%200-2%202.07%2028.4%2028.4%200%200%201%202-.07v2c-9.2%200-17.3%204.78-21.91%2012H30zM7.75%2028H0v-2c2.81%200%205.46.73%207.75%202zM56%2020v2c-5.6%200-10.65%202.3-14.28%206h-2.7c4.04-4.89%2010.15-8%2016.98-8zm-39.03%208h-2.69C10.65%2024.3%205.6%2022%200%2022v-2c6.83%200%2012.94%203.11%2016.97%208zm15.01-.4a28.09%2028.09%200%200%201%202.8-3.86%208%208%200%200%200-13.55%200c1.03%201.2%201.97%202.5%202.79%203.86a4%204%200%200%201%207.96%200zm14.29-11.86c1.3-.48%202.63-.87%204-1.15a25.99%2025.99%200%200%200-44.55%200c1.38.28%202.72.67%204.01%201.15a21.98%2021.98%200%200%201%2036.54%200zm-5.43%202.71c1.13-.72%202.3-1.37%203.54-1.93a19.98%2019.98%200%200%200-32.76%200c1.23.56%202.41%201.2%203.54%201.93a15.98%2015.98%200%200%201%2025.68%200zm-4.67%203.78c.94-.95%201.96-1.83%203.03-2.63a13.98%2013.98%200%200%200-22.4%200c1.07.8%202.09%201.68%203.03%202.63a9.99%209.99%200%200%201%2016.34%200z%22%3E%3C/path%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left w-full md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-hind mb-4 text-mithila-indigo">
              <span className="text-mithila-red">Namaste!</span> 
              <br />I'm Bikash Sah
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-mithila-black">
              Your local guide in Janakpur
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Experience the rich cultural heritage and hidden gems of Janakpur with personalized tours tailored to your interests.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-mithila-red text-white rounded-md font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Book a Tour
              </a>
              <a
                href="#about"
                className="px-6 py-3 border-2 border-mithila-indigo text-mithila-indigo rounded-md font-medium hover:bg-mithila-indigo hover:text-white transition-all transform hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              {/* Placeholder for Bikash's image */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-mithila-cream rounded-full overflow-hidden border-4 border-mithila-yellow shadow-lg">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-mithila-yellow rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-mithila-green rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x bg-center" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23E63946' /%3E%3C/svg%3E')",
      }}></div>
    </section>
  );
};

export default Hero;
