import React from 'react';
import { WeekCard } from './WeekCard';
import { timelineData } from '../data/timelineData';

export const Timeline: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-black mb-2">
            Weekly Progress
          </h2>
        </div>
        <div className="flex flex-col space-y-8">
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