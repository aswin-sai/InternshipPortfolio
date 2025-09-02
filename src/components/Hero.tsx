import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-6">
          <div className="text-base font-normal mb-4">
            Nallan Chakravarthula Aswin sai
          </div>
          <h1 className="text-4xl font-bold text-black mb-4">
            My Journey at
            <span className="block font-bold text-blue-700" style={{ textShadow: 'none' }}>
              RealPage
            </span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="font-normal">August 7 - Present</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="font-normal">4th week</span>
          </div>
        </div>
        <div className="bg-gray-100 rounded p-4 border border-gray-200">
          <h2 className="text-xl font-bold text-black mb-2">Internship Overview</h2>
          <p className="text-base text-gray-800">
            During my internship at RealPage, I focused on enterprise development,
            specifically Realpage Utility Management (RUM). My journey involved learning
            technologies, collaborating with experienced developers, and contributing to production-level
            applications that serve thousands of users.
          </p>
        </div>
      </div>
    </section>
  );
};