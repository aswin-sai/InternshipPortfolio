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
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                {index + 1}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{week.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{week.dateRange}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{week.description}</p>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
              {week.activities.map((activity, activityIndex) => (
                <div key={activityIndex} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>

            {week.highlights && (
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">Week Highlight</h4>
                <p className="text-blue-800">{week.highlights}</p>
              </div>
            )}

            {/* SRs Raised Section */}
            {week.srs && week.srs.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-indigo-700 mb-2">SRs Raised</h4>
                <ul className="list-disc list-inside text-indigo-900">
                  {week.srs.map((sr: string, idx: number) => (
                    <li key={idx}>{sr}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};