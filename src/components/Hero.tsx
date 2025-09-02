import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {/* <Building2 className="w-4 h-4" /> */}
            Nallan Chakravarthula Aswin sai
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            My Journey at
            <span
              className="block font-extrabold text-blue-700"
              style={{
                textShadow: '0 2px 8px rgba(30,64,175,0.15), 0 1px 0 #fff'
              }}
            >
              RealPage
            </span>
          </h1>
          {/* <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Exploring Real User Monitoring, mastering full-stack development, 
            and contributing to enterprise-level software solutions
          </p> */}
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="font-medium">August 7 - Present</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="font-medium">4th week</span>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Internship Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            During my internship at RealPage, I immersed myself in enterprise software development, 
            focusing on Real User Monitoring systems. My journey involved learning cutting-edge 
            technologies, collaborating with experienced developers, and contributing to production-level 
            applications that serve thousands of users.
          </p>
        </div>
      </div>
    </section>
  );
};