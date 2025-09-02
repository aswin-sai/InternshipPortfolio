import React from 'react';
import { WeekCard } from './WeekCard';
import { timelineData } from '../data/timelineData';

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Weekly Progress
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A detailed journey through each week of my internship, highlighting key learnings, 
            achievements, and the gradual progression from onboarding to active contribution.
          </p> */}
        </div>
        {/* Just stack the cards vertically */}
        <div className="flex flex-col space-y-12 lg:space-y-24">
          {timelineData.map((week, index) => (
            <WeekCard 
              key={week.id} 
              week={week} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};