import { WeekData } from '../types/timeline';

export const timelineData: WeekData[] = [
  {
    id: 'week1',
    title: 'Week 1: Foundation & Discovery',
    dateRange: 'August 7-11, 2024',
    description: "My first week focused on understanding RealPage's culture, team dynamics, and diving deep into Real User Monitoring (RUM) concepts.",
    activities: [
      'First day onboarding and team introductions',
      'Explored company culture, tools, and expectations',
      'Initiated comprehensive research into Real User Monitoring (RUM)',
      'Deep-dived into RUM architecture and web application integration',
      'Explored RealPage tech stack: React, TypeScript, C#, .NET, SQL Server',
      'Documented findings and shared insights with team peers'
    ],
    highlights: 'Successfully grasped the fundamentals of RUM and its critical role in performance monitoring, setting a strong foundation for the internship.',
    srs: [
      'SR-1909949',
      '1. Git',
      '2. Visual Studio',
      '3. SQL Server',
      '4. Enable IIS'
    ],
  },
  {
    id: 'week2',
    title: 'Week 2: Access & Integration',
    dateRange: 'August 12-16, 2024',
    description: 'Week two was all about gaining proper access to systems and understanding the development workflow through Service Requests.',
    activities: [
      'Connected with JP to understand Service Request (SR) processes',
      'Gained access to internal systems and development tools',
      'Collaborated with Kishore and Karthikeya for guidance on SRs',
      'Raised multiple SRs for repository, database, and environment access',
      'Successfully completed all access requests',
      'Explored internal dashboards and development tools',
      'Reviewed codebase and comprehensive internal documentation'
    ],
    highlights: 'Achieved full system access and established strong mentoring relationships that would prove invaluable throughout the internship.',
    srs: [
      'SR-1911364 - TFS Access',
      'SR-1911369 - Access to this account "secops+SVC-IAM-Ops@realpage.com" to NWP'
    ],
  },
  {
    id: 'week3',
    title: 'Week 3: Development & Learning',
    dateRange: 'August 19-23, 2024',
    description: 'The third week marked the transition from setup to active development, with hands-on coding and structured learning of new technologies.',
    activities: [
      'Cloned main repository and configured local development environment',
      'Received detailed walkthrough of folder structure from Karthikeya',
      'Mastered frontend architecture: components, routing, state management',
      'Started contributing to minor UI fixes and enhancements',
      'Explored backend C# codebase (challenging but exciting)',
      'Initiated structured learning of C# fundamentals and OOP concepts',
      'Documented backend flow and mapped critical API endpoints',
      'Practiced C# programming and explored ASP.NET structure'
    ],
    highlights: 'Made first code contributions while simultaneously learning C# and backend architecture, demonstrating rapid adaptation to new technologies.',
    srs: [
      'SR-1915533 - Visual Studio 2022',
      'SR-1916413 - .NET desktop development and APT.NET'
    ],
  },
  {
    id: 'week4',
    title: 'Week 4: Advanced Integration',
    dateRange: 'August 27-30, 2024',
    description: 'The final week focused on advanced tooling, database management, and integrating frontend and backend components.',
    activities: [
      'Installed and configured .NET SDK, ASP.NET Core, and SSMS',
      'Explored SQL Server Management Studio and executed complex queries',
      'Studied comprehensive database schema and relationships',
      'Advanced backend learning: ASP.NET MVC and Entity Framework',
      'Coordinated with IT support for local admin setup completion',
      'Practiced advanced SQL queries and stored procedures',
      'Successfully integrated backend logic with frontend components'
    ],
    highlights: 'Achieved full-stack development capabilities and successfully integrated frontend-backend components, marking the completion of a comprehensive learning journey.',
    srs: [
      'SR-1915544 - Admin access for IIS, Command Prompt, Powershell, Visual Studio 2022, Visual Studio Code (Pending)'
    ],
  }
];