import React from 'react';
import { Trophy, Target, Users, Lightbulb } from 'lucide-react';

const achievements = [
	{
		icon: Target,
		title: 'Quick Integration',
		description: 'Successfully onboarded and gained full system access within 2 weeks',
		metric: '100%',
	},
	{
		icon: Users,
		title: 'Team Collaboration',
		description: 'Built strong relationships with mentors JP, Kishore, and Karthikeya',
		metric: '3+',
	},
	{
		icon: Lightbulb,
		title: 'Technology Mastery',
		description: 'Learned new technologies including C#, .NET, ASP.NET, and SQL Server',
		metric: '7+',
	},
	{
		icon: Trophy,
		title: 'Active learning',
		description: 'Started Learning UI fixes and backend integration within 3 weeks',
		metric: '∞',
	},
];

export const Achievements: React.FC = () => {
	return (
		<section className="py-10 px-4 bg-white">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-8">
					<h2 className="text-2xl font-bold text-black mb-2">Key Achievements</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{achievements.map((achievement, index) => {
						const Icon = achievement.icon;
						return (
							<div
								key={index}
								className="bg-gray-100 rounded p-4 border border-gray-200 flex flex-col items-center"
							>
								<Icon className="w-8 h-8 text-blue-600 mb-2" />
								<div className="text-2xl font-bold text-black mb-1">
									{achievement.metric}
								</div>
								<h3 className="text-lg font-semibold text-blue-700 mb-1">
									{achievement.title}
								</h3>
								<p className="text-gray-800 text-center text-base">
									{achievement.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};