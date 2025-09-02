import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { WeekData } from '../types/timeline';

interface WeekCardProps {
  week: WeekData;
  index: number;
}

export const WeekCard: React.FC<WeekCardProps> = ({ week, index }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-2xl">
        <div className="bg-gray-100 rounded p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-200 rounded flex items-center justify-center text-black font-bold text-lg">
              {index + 1}
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">{week.title}</h3>
              <div className="flex items-center gap-2 text-gray-700 mt-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{week.dateRange}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-800 mb-4">{week.description}</p>

          <div className="mb-4">
            <h4 className="font-semibold text-black mb-2">Key Activities:</h4>
            <ul className="list-disc list-inside text-gray-800 pl-4">
              {week.activities.map((activity, activityIndex) => (
                <li key={activityIndex} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {week.highlights && (
            <div className="mb-4 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-900 mb-1">Week Highlight</h4>
              <p className="text-blue-800">{week.highlights}</p>
            </div>
          )}

          {week.srs && week.srs.length > 0 && (
            <div>
              <h4 className="font-semibold text-blue-700 mb-1">SRs Raised</h4>
              <ul className="list-disc list-inside text-blue-900 pl-4">
                {week.srs.map((sr: string, idx: number) => (
                  <li key={idx}>{sr}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};