import React from 'react';

const technologies = [
	{
		category: 'Frontend',
		items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
	},
	{
		category: 'Backend',
		items: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework'],
	},
	{
		category: 'Database',
		items: ['SQL Server', 'SSMS', 'Stored Procedures', 'Query Optimization'],
	},
	{
		category: 'Tools & Concepts',
		items: [
			'RUM (Realpage Utility Management)',
			'Service Requests',
			'Git',
			'Development Environment',
		],
	},
];

export const TechStack: React.FC = () => {
	return (
		<section className="py-16 px-4 bg-white">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
						Technologies Explored
					</h2>
					<p className="text-lg text-gray-600">
						A curated list of the main technologies and tools I worked with during
						my internship.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{technologies.map((tech, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl shadow-md border border-gray-100 p-6 transition hover:shadow-lg"
						>
							<h3 className="text-xl font-semibold text-blue-700 mb-3 tracking-wide">
								{tech.category}
							</h3>
							<ul className="space-y-2 pl-2">
								{tech.items.map((item, itemIdx) => (
									<li
										key={itemIdx}
										className="text-gray-800 text-base font-medium flex items-center"
									>
										<span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};