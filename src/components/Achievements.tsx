import React from 'react';
import { Trophy, Target, Users, Lightbulb } from 'lucide-react';
const achievements = [
  {
    icon: Target,
    title: 'Quick Integration',
    description: 'Successfully onboarded and gained full system access within 2 weeks',
    metric: '100%',
    color: 'blue'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built strong relationships with mentors JP, Kishore, and Karthikeya',
    metric: '3+',
    color: 'green'
  },
  {
    icon: Lightbulb,
    title: 'Technology Mastery',
    description: 'Learned new technologies including C#, .NET, and enterprise architecture',
    metric: '8+',
    color: 'purple'
  },
  {
    icon: Trophy,
    title: 'Active Contribution',
    description: 'Started contributing to UI fixes and backend integration within 3 weeks',
    metric: '∞',
    color: 'orange'
  }
];

const colorClasses = {
  blue: 'from-blue-500 to-blue-600 bg-blue-50 text-blue-600',
  green: 'from-green-500 to-green-600 bg-green-50 text-green-600',
  purple: 'from-purple-500 to-purple-600 bg-purple-50 text-purple-600',
  orange: 'from-orange-500 to-orange-600 bg-orange-50 text-orange-600'
};

export const Achievements: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key Achievements
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable milestones and accomplishments that demonstrate growth, 
            learning, and meaningful contribution to the RealPage team.
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const colors = colorClasses[achievement.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${colors.split(' ').slice(0, 2).join(' ')} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className={`text-4xl font-bold ${colors.split(' ').slice(-2, -1)} mb-2`}>
                    {achievement.metric}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};