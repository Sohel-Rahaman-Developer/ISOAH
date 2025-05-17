import { Course } from '@/app/types/course'

export const courses: Course[] = [
  {
    slug: 'dark-web-forensics',
    details: {
      title: 'Certified Dark Web Forensics Expert',
      tagline: 'AI Powered',
      description: 'This course will take you on a journey into the dark corners of the digital underworld. Participants in this thorough programme will delve deeply into the techniques, tools, and procedures used in the investigation and analysis of dark web activities. This course, created by industry experts, provides aspiring professionals with the knowledge needed to navigate the dark corners of the internet and uncover the mysteries hidden inside.',
      stats: {
        averageCtc: '₹14 LPA',
        linkedinJobs: '2600+ Jobs on LinkedIn Alone',
        mentors: '4+ Industry Mentors'
      },
      actions: [
        { type: 'primary', label: 'Book Demo Now', href: '/demo' },
        { type: 'secondary', label: 'Download Curriculum', href: '/curriculum.pdf' }
      ],
      heroImage: '/images/bootcamp-class.jpg',
      playDemoLink: '#',
      cohortStart: '2025-05-12',
      pricing: {
        original: 515,
        discounted: 414,
        currency: 'USD',
        emiInfo: 'No cost EMI options available.'
      },
      demoOffer: {
        text: 'Experience our demo class for just $10 (refundable)',
        icon: '✓'
      },
      finePrint: 'The Cohort Fee can be paid via custom payment link offered by Program Advisor at the point of enrollment. The fees paid are non-refundable, non-transferable and cannot be applied to other courses, services, or individuals.'
    },
    overview: {
      eligibility: 'Knowledge of Computer Forensics or CHFI certification with a basic understanding of the TOR Browser.',
      learningOutcome: 'Participants in this Certified Dark Web Forensics Expert course will gain the skills to explore, investigate, and analyze dark web activities. This program covers everything from anonymous network analysis to cryptocurrency forensics and incident response workflows.',
      statsRow: [
        { label: 'Duration', value: '40 hrs' },
        { label: 'Course Fees', value: '$414' }
      ],
      icons: ['FaRegStar', 'FaLightbulb', 'FaHourglassHalf']
    },
    objectives: [
      'Know how to navigate the dark web effectively and safely',
      'Learn how to use cutting-edge search and analytic techniques',
      'Learn how to trace and analyse cryptocurrency transactions in order to detect illegal activity',
      'Get hands-on experience with the most up-to-date forensic tools',
      'Learn how unlawful goods and services are traded and how to detect and combat cybercrime',
      'Create a strategy for incident response in the dark web context',
      'Improve your capacity to deal with practical issues in a safe atmosphere'
    ],
    curriculum: [
      {
        id: 1,
        title: 'Cyber Foundations & Lab Arsenal',
        duration: '2 weeks',
        stats: { liveSessions: 12, projects: 2, caseStudies: 1, quizzes: 2 },
        modules: [
          {
            title: 'Networking Fundamentals & Cyber Basics',
            bullets: [
              'Intro to Networking Concepts',
              'IP Addressing (Public/Private, IPv6)',
              'MAC, Ports, Protocols, TCP/UDP',
              'How Internet Works: ARP, DHCP, DNS',
              'HTTP, DNS Records, Zone Files',
              'Doubt Solving'
            ],
            project: 'Label the diagram (Networking)',
            caseStudy: '2008 Ahmedabad Bombings – Tracing the Digital Footprint'
          },
          {
            title: 'Linux + Lab Setup with AI',
            bullets: [
              'Lab Setup (Kali Linux, VM, Dual Boot)',
              'Linux Commands, File Structure',
              'Software Installation',
              'Hands-on with Terminal Commands',
              'Doubt Solving using AI'
            ],
            project: 'Updating sources.list'
          }
        ]
      },
      {
        id: 2,
        title: 'Recon & System Infiltration Toolkit',
        duration: '2 weeks',
        stats: { liveSessions: 12, projects: 2, caseStudies: 2, quizzes: 2 },
        modules: [
          {
            title: 'Recon Fundamentals',
            bullets: ['OSINT Techniques', 'Website Footprinting', 'Network Scanning Tools'],
            project: 'OSINT Report'
          },
          {
            title: 'Exploitation Toolkit',
            bullets: ['Metasploit Basics', 'Vulnerability Scanning'],
            project: 'Exploit Lab'
          }
        ]
      },
      {
        id: 3,
        title: 'Real-World Exploitation & Red Team Skills',
        duration: '2 weeks',
        stats: { liveSessions: 12, projects: 2, caseStudies: 2, quizzes: 2 },
        modules: [
          {
            title: 'Advanced Exploitation Techniques',
            bullets: ['Buffer Overflows', 'Web App Exploits', 'Privilege Escalation'],
            project: 'Exploit Development'
          },
          {
            title: 'Red Team Methodologies',
            bullets: ['Attack Simulation Planning', 'Command & Control', 'Reporting & Documentation'],
            project: 'Red Team Exercise'
          }
        ]
      },
      {
        id: 4,
        title: 'Advanced Attacks & Career Launchpad',
        duration: '1 week',
        stats: { liveSessions: 6, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Emerging Threats',
            bullets: ['IoT Attacks', 'Cloud Exploits', 'Mobile Hacking'],
            project: 'Threat Research'
          }
        ]
      },
      {
        id: 5,
        title: 'Bonus Sessions',
        duration: '–',
        stats: { liveSessions: 4, projects: 0, caseStudies: 0, quizzes: 0 },
        modules: [
          {
            title: 'Live Q&A and Hackathons',
            bullets: ['Hands-on Hackathons', 'Live Q&A with Experts', 'Resume & Interview Prep']
          }
        ]
      }
    ],
    tools: [
      { name: 'Tor Browser', src: '/images/tools/tor-logo.png' },
      { name: 'InTrack', src: '/images/tools/intrack-logo.png' },
      { name: 'Hunchly', src: '/images/tools/hunchly-logo.png' },
      { name: 'Magnet Forensics', src: '/images/tools/magnet-logo.png' },
      { name: 'InsiderFoot', src: '/images/tools/insiderfoot-logo.png' },
      { name: 'Autopsy', src: '/images/tools/autopsy-logo.png' }
    ],
    certificateFeatures: [
      {
        icon: 'FiAward',
        title: 'Industry-Recognized Certificate',
        description: 'Earn a certificate valued by top companies.'
      },
      {
        icon: 'FiUserCheck',
        title: 'Stand Out in Job Market',
        description: 'Fortify your profile to increase credibility.'
      },
      {
        icon: 'FiTrendingUp',
        title: 'Your Passport to Career Growth',
        description: 'Access well-paying Data Analyst positions.'
      }
    ]
  }
]
