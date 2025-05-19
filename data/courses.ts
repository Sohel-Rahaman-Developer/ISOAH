// src/data/courses.ts

import { Course } from '@/app/types/course'

export const courses: Course[] = [
  {
    slug: 'dark-web-forensics',
    id: 1,
    title: "Certified Dark Web Forensics Expert",
    des: "Deep dive into dark web investigation, from TOR to crypto-forensics.",
    img: "/c1.webp",
    iconLists: ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
    link: "/certifications/dark-web-forensics",
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
      heroImage: '/dark-web.webp',
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
      { name: 'Hunchly', src: '/images/tools/hunchly-logo.webp' },
      { name: 'Magnet Forensics', src: '/images/tools/magnet-logo.png' },
      // { name: 'InsiderFoot', src: '/images/tools/insiderfoot-logo.png' },
      // { name: 'Autopsy', src: '/images/tools/autopsy-logo.png' }
    ],
    certificateFeatures: [
      {
        icon: '/certificate.webp',
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
  },
  {
    slug: 'drone-forensics-expert',
    id: 2,
    title: "Certified Drone Forensics Expert",
    des: "Master UAV data extraction, metadata analysis, and flight log forensics.",
    img: "/c2.webp",
    iconLists: ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
    link: "/certifications/drone-forensics-expert",
    details: {
      title: 'Certified Drone Forensics Expert',
      tagline: 'Industry Standard',
      description: 'This course trains you in UAV data acquisition, metadata parsing, flight log interpretation, and forensic imaging techniques used by law enforcement.',
      stats: {
        averageCtc: '₹12 LPA',
        linkedinJobs: '1800+ Jobs on LinkedIn Alone',
        mentors: '3+ Industry Mentors'
      },
      actions: [
        { type: 'primary', label: 'Book Demo Now', href: '/demo' },
        { type: 'secondary', label: 'Download Curriculum', href: '/curriculum.pdf' }
      ],
      heroImage: '/images/bootcamp-drone.jpg',
      playDemoLink: '#',
      cohortStart: '2025-06-01',
      pricing: {
        original: 450,
        discounted: 375,
        currency: 'USD',
        emiInfo: 'No cost EMI options available.'
      },
      demoOffer: {
        text: 'Experience our demo class for just $10 (refundable)',
        icon: '✓'
      },
      finePrint: 'All fees are non-refundable and non-transferable.'
    },
    overview: {
      eligibility: 'Basic UAV and metadata understanding.',
      learningOutcome: 'Gain proficiency in drone data acquisition and forensic reporting.',
      statsRow: [
        { label: 'Duration', value: '35 hrs' },
        { label: 'Course Fees', value: '$375' }
      ],
      icons: ['FaRegStar', 'FaLightbulb', 'FaHourglassHalf']
    },
    objectives: [
      'Extract forensic images from UAV storage',
      'Analyze GPS and sensor metadata',
      'Interpret drone flight logs',
      'Document forensic findings for court'
    ],
    curriculum: [
      {
        id: 1,
        title: 'UAV Data Acquisition',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Storage Extraction Methods',
            bullets: ['Onboard Storage Access', 'SD Card Imaging', 'Firmware Dumping'],
            project: 'Extract SD Card Image',
            caseStudy: 'Case: Drone in Wildlife Poaching'
          }
        ]
      },
      {
        id: 2,
        title: 'Metadata & Log Analysis',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'GPS & Sensor Metadata',
            bullets: ['Coordinate Parsing', 'Altitude Logs', 'Time Synchronization'],
            project: 'Metadata Extraction Report'
          }
        ]
      },
      {
        id: 3,
        title: 'Forensic Imaging & Reporting',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Forensic Image Creation',
            bullets: ['Hash Verification', 'Chain of Custody', 'Reporting Standards'],
            project: 'Complete Forensic Report'
          }
        ]
      },
      {
        id: 4,
        title: 'Cloud & Firmware Forensics',
        duration: '1 week',
        stats: { liveSessions: 6, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Firmware Analysis',
            bullets: ['Firmware Dump Extraction', 'Reverse Engineering'],
            project: 'Firmware Vulnerability Assessment'
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
            bullets: ['Expert Q&A', 'Drone Forensics Hackathon']
          }
        ]
      }
    ],
    tools: [
      { name: 'DroneDeploy', src: '/images/tools/drone-logo.png' },
      { name: 'Pix4D', src: '/images/tools/pix4d-logo.png' },
      { name: 'Autopsy', src: '/images/tools/autopsy-logo.png' }
    ],
    certificateFeatures: [
      {
        icon: '/certificate.webp',
        title: 'UAV Certified',
        description: 'Recognized by aviation authorities.'
      },
      {
        icon: 'FiUserCheck',
        title: 'Hands-On Training',
        description: 'Real-world drone forensic labs.'
      },
      {
        icon: 'FiTrendingUp',
        title: 'Career Advancement',
        description: 'Roles in law enforcement & security.'
      }
    ]
  },
  {
    slug: 'cloud-forensics-expert',
    id: 3,
    title: "Certified Cloud Forensics Expert",
    des: "Investigate incidents across AWS, Azure, and GCP environments.",
    img: "/c3.webp",
    iconLists: ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
    link: "/certifications/cloud-forensics-expert",
    details: {
      title: 'Certified Cloud Forensics Expert',
      tagline: 'Cloud Native',
      description: 'Learn forensic acquisition, log analysis, and virtualization forensics within major cloud platforms.',
      stats: {
        averageCtc: '₹15 LPA',
        linkedinJobs: '2200+ Jobs on LinkedIn Alone',
        mentors: '4+ Industry Mentors'
      },
      actions: [
        { type: 'primary', label: 'Book Demo Now', href: '/demo' },
        { type: 'secondary', label: 'Download Curriculum', href: '/curriculum.pdf' }
      ],
      heroImage: '/images/bootcamp-cloud.jpg',
      playDemoLink: '#',
      cohortStart: '2025-06-15',
      pricing: {
        original: 520,
        discounted: 430,
        currency: 'USD',
        emiInfo: 'No cost EMI options available.'
      },
      demoOffer: {
        text: 'Experience our demo class for just $10 (refundable)',
        icon: '✓'
      },
      finePrint: 'All fees are non-refundable and cannot be applied to other courses.'
    },
    overview: {
      eligibility: 'Familiarity with virtualization and cloud services.',
      learningOutcome: 'Master cloud log parsing and instance snapshot analysis.',      statsRow: [
        { label: 'Duration', value: '45 hrs' },
        { label: 'Course Fees', value: '$430' }
      ],
      icons: ['FaRegStar', 'FaLightbulb', 'FaHourglassHalf']
    },
    objectives: [
      'Acquire cloud instance snapshots',
      'Parse and analyze provider logs',
      'Investigate container breaches',
      'Compile IR reports'
    ],
    curriculum: [
      {
        id: 1,
        title: 'Cloud Architecture & Logs',
        duration: '2 weeks',
        stats: { liveSessions: 12, projects: 2, caseStudies: 1, quizzes: 2 },
        modules: [
          {
            title: 'Cloud Service Models',
            bullets: ['IaaS vs PaaS vs SaaS', 'Shared Responsibility'],
            project: 'Cloud Model Report'
          }
        ]
      },
      {
        id: 2,
        title: 'Snapshot & Disk Forensics',
        duration: '2 weeks',
        stats: { liveSessions: 12, projects: 1, caseStudies: 1, quizzes: 2 },
        modules: [
          {
            title: 'Snapshot Acquisition',
            bullets: ['EBS/Azure Disk Snapshots', 'Integrity Verification'],
            project: 'Snapshot Forensic Image'
          }
        ]
      },
      {
        id: 3,
        title: 'Log Aggregation & Analysis',
        duration: '2 weeks',
        stats: { liveSessions: 12, projects: 2, caseStudies: 1, quizzes: 2 },
        modules: [
          {
            title: 'CloudTrail & Activity Logs',
            bullets: ['AWS CloudTrail', 'Azure Monitor Logs'],
            project: 'Log Correlation Exercise'
          }
        ]
      },
      {
        id: 4,
        title: 'Container & VM Forensics',
        duration: '1 week',
        stats: { liveSessions: 6, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Docker & Kubernetes',
            bullets: ['Container Snapshots', 'K8s Audit Logs'],
            project: 'Container Breach Investigation'
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
            bullets: ['Cloud Forensics Hackathon', 'Expert Q&A']
          }
        ]
      }
    ],
    tools: [
      { name: 'AWS CloudTrail', src: '/images/tools/cloudtrail-logo.png' },
      { name: 'Azure Monitor', src: '/images/tools/azure-logo.png' },
      { name: 'Splunk', src: '/images/tools/splunk-logo.png' }
    ],
    certificateFeatures: [
      {
        icon: '/certificate.webp',
        title: 'Cloud Certified',
        description: 'Recognized by top cloud providers.'
      },
      {
        icon: 'FiUserCheck',
        title: 'Hands-On Labs',
        description: 'Real-world cloud forensic exercises.'
      },
      {
        icon: 'FiTrendingUp',
        title: 'High Demand Skills',
        description: 'Roles in enterprise security teams.'
      }
    ]
  },
  {
    slug: 'windows-forensics-expert',
    id: 4,
    title: "Certified Windows Forensics Expert",
    des: "Specialize in live response and artifact analysis on Windows endpoints.",
    img: "c4.webp",
    iconLists: ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
    link: "/certifications/windows-forensics-expert",
    details: {
      title: 'Certified Windows Forensics Expert',
      tagline: 'Endpoint Focused',
      description: 'Delve into Windows registry, event logs, memory dumps, and persistence mechanisms to uncover evidence of compromise.',
      stats: {
        averageCtc: '₹13 LPA',
        linkedinJobs: '2000+ Jobs on LinkedIn Alone',
        mentors: '4+ Industry Mentors'
      },
      actions: [
        { type: 'primary', label: 'Book Demo Now', href: '/demo' },
        { type: 'secondary', label: 'Download Curriculum', href: '/curriculum.pdf' }
      ],
      heroImage: '/images/bootcamp-windows.jpg',
      playDemoLink: '#',
      cohortStart: '2025-07-01',
      pricing: {
        original: 480,
        discounted: 390,
        currency: 'USD',
        emiInfo: 'No cost EMI options available.'
      },
      demoOffer: {
        text: 'Experience our demo class for just $10 (refundable)',
        icon: '✓'
      },
      finePrint: 'All fees are non-refundable and cannot be applied to other courses.'
    },
    overview: {
      eligibility: 'Basic Windows administration skills.',
      learningOutcome: 'Learn to parse registry, event logs, and memory for forensic evidence.',
      statsRow: [
        { label: 'Duration', value: '38 hrs' },
        { label: 'Course Fees', value: '$390' }
      ],
      icons: ['FaRegStar', 'FaLightbulb', 'FaHourglassHalf']
    },
    objectives: [
      'Analyze Windows registry hives',
      'Parse event and security logs',
      'Capture and analyze memory dumps',
      'Reverse engineer malicious persistence'
    ],
    curriculum: [
      {
        id: 1,
        title: 'Registry Forensics',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Registry Hives & Keys',
            bullets: ['Structure & Paths', 'Key Extraction'],
            project: 'Registry Timeline'
          }
        ]
      },
      {
        id: 2,
        title: 'Event Log Analysis',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Windows Event Viewer',
            bullets: ['System, Security, Application Logs'],
            project: 'Event Correlation'
          }
        ]
      },
      {
        id: 3,
        title: 'Memory Forensics',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Volatile Data Acquisition',
            bullets: ['RAM Dump Collection', 'Process Analysis'],
            project: 'Memory Malware Extraction'
          }
        ]
      },
      {
        id: 4,
        title: 'Malware & Persistence',
        duration: '1 week',
        stats: { liveSessions: 6, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Autoruns & Services',
            bullets: ['Startup Locations', 'Scheduled Tasks'],
            project: 'Persistence Mechanism Report'
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
            bullets: ['Windows Hackathon', 'Expert Q&A']
          }
        ]
      }
    ],
    tools: [
      { name: 'FTK Imager', src: '/images/tools/ftk-logo.png' },
      { name: 'Volatility', src: '/images/tools/volatility-logo.png' },
      { name: 'Registry Explorer', src: '/images/tools/registry-logo.png' }
    ],
    certificateFeatures: [
      {
        icon: '/certificate.webp',
        title: 'Windows Certified',
        description: 'Recognized by digital forensics bodies.'
      },
      {
        icon: 'FiUserCheck',
        title: 'Practical Labs',
        description: 'Live Windows endpoint exercises.'
      },
      {
        icon: 'FiTrendingUp',
        title: 'Professional Growth',
        description: 'Roles in incident response teams.'
      }
    ]
  },
  {
    slug: 'mac-forensics-expert',
    id: 5,
    title: "Certified Mac Forensics Expert",
    des: "Investigate macOS artifacts, APFS snapshots, and system logs.",
    img: "/c5.webp",
    iconLists: ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
    link: "/certifications/mac-forensics-expert",
    details: {
      title: 'Certified Mac Forensics Expert',
      tagline: 'Apple Focused',
      description: 'Learn to parse APFS volumes, system logs, Keychain, and browser artifacts on macOS for forensic investigations.',
      stats: {
        averageCtc: '₹13 LPA',
        linkedinJobs: '1500+ Jobs on LinkedIn Alone',
        mentors: '3+ Industry Mentors'
      },
      actions: [
        { type: 'primary', label: 'Book Demo Now', href: '/demo' },
        { type: 'secondary', label: 'Download Curriculum', href: '/curriculum.pdf' }
      ],
      heroImage: '/images/bootcamp-mac.jpg',
      playDemoLink: '#',
      cohortStart: '2025-07-15',
      pricing: {
        original: 470,
        discounted: 385,
        currency: 'USD',
        emiInfo: 'No cost EMI options available.'
      },
      demoOffer: {
        text: 'Experience our demo class for just $10 (refundable)',
        icon: '✓'
      },
      finePrint: 'All fees are non-refundable and cannot be applied to other courses.'
    },
    overview: {
      eligibility: 'Basic macOS familiarity.',
      learningOutcome: 'Master APFS, system logs, and artifact extraction on Mac.',
      statsRow: [
        { label: 'Duration', value: '36 hrs' },
        { label: 'Course Fees', value: '$385' }
      ],
      icons: ['FaRegStar', 'FaLightbulb', 'FaHourglassHalf']
    },
    objectives: [
      'Extract APFS snapshots',
      'Parse system and application logs',
      'Retrieve Keychain and browser artifacts',
      'Generate Mac forensic reports'
    ],
    curriculum: [
      {
        id: 1,
        title: 'APFS & File System',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'APFS Structure',
            bullets: ['Snapshots', 'Metadata Interpretation'],
            project: 'APFS Snapshot Analysis'
          }
        ]
      },
      {
        id: 2,
        title: 'macOS Logs',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Unified Logging',
            bullets: ['System, Kernel, User Logs'],
            project: 'Log Correlation'
          }
        ]
      },
      {
        id: 3,
        title: 'Artifact Extraction',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Keychain & Browsers',
            bullets: ['Credential Retrieval', 'History Parsing'],
            project: 'Artifact Report'
          }
        ]
      },
      {
        id: 4,
        title: 'Memory & Malware',
        duration: '1 week',
        stats: { liveSessions: 6, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'RAM Acquisition',
            bullets: ['macOS Memory Dumps', 'Process Analysis'],
            project: 'Memory Malware Analysis'
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
            bullets: ['Mac Forensics Hackathon', 'Expert Q&A']
          }
        ]
      }
    ],
    tools: [
      { name: 'BlackLight', src: '/images/tools/blacklight-logo.png' },
      { name: 'MacQuisition', src: '/images/tools/macquisition-logo.png' },
      { name: 'Autopsy', src: '/images/tools/autopsy-logo.png' }
    ],
    certificateFeatures: [
      {
        icon: '/certificate.webp',
        title: 'Mac Certified',
        description: 'Endorsed by forensic societies.'
      },
      {
        icon: 'FiUserCheck',
        title: 'Real-world Labs',
        description: 'Hands-on Mac endpoint analysis.'
      },
      {
        icon: 'FiTrendingUp',
        title: 'Secure Career',
        description: 'Roles in Apple security teams.'
      }
    ]
  },
  {
    slug: 'linux-forensics-expert',
    id: 6,
    title: "Certified Linux Forensics Expert",
    des: "Perform file system, log, and memory analysis on Linux systems.",
    img: "/c6.webp",
    iconLists: ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
    link: "/certifications/linux-forensics-expert",
    details: {
      title: 'Certified Linux Forensics Expert',
      tagline: 'Open Source',
      description: 'Learn ext4, syslog, journalctl, memory dumps, and forensic tools like Sleuth Kit on Linux endpoints.',
      stats: {
        averageCtc: '₹13 LPA',
        linkedinJobs: '2100+ Jobs on LinkedIn Alone',
        mentors: '4+ Industry Mentors'
      },
      actions: [
        { type: 'primary', label: 'Book Demo Now', href: '/demo' },
        { type: 'secondary', label: 'Download Curriculum', href: '/curriculum.pdf' }
      ],
      heroImage: '/images/bootcamp-linux.jpg',
      playDemoLink: '#',
      cohortStart: '2025-08-01',
      pricing: {
        original: 460,
        discounted: 380,
        currency: 'USD',
        emiInfo: 'No cost EMI options available.'
      },
      demoOffer: {
        text: 'Experience our demo class for just $10 (refundable)',
        icon: '✓'
      },
      finePrint: 'All fees are non-refundable and cannot be applied to other courses.'
    },
    overview: {
      eligibility: 'Basic Linux administration.',
      learningOutcome: 'Master file system and memory forensics on Linux.',
      statsRow: [
        { label: 'Duration', value: '42 hrs' },
        { label: 'Course Fees', value: '$380' }
      ],
      icons: ['FaRegStar', 'FaLightbulb', 'FaHourglassHalf']
    },
    objectives: [
      'Analyze ext4 file systems',
      'Parse syslog and journalctl',
      'Capture and examine memory dumps',
      'Use open-source forensic tools'
    ],
    curriculum: [
      {
        id: 1,
        title: 'File System Forensics',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'ext4 Structure',
            bullets: ['Inode Analysis', 'Deleted File Recovery'],
            project: 'ext4 Forensic Report'
          }
        ]
      },
      {
        id: 2,
        title: 'Log Forensics',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Syslog & Journalctl',
            bullets: ['Log Aggregation', 'Event Correlation'],
            project: 'Linux Log Timeline'
          }
        ]
      },
      {
        id: 3,
        title: 'Memory Forensics',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Volatile Data Acquisition',
            bullets: ['RAM Dumping Tools', 'Process Enumeration'],
            project: 'Memory Threat Hunting'
          }
        ]
      },
      {
        id: 4,
        title: 'Open-Source Tools',
        duration: '1 week',
        stats: { liveSessions: 6, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Sleuth Kit & Autopsy',
            bullets: ['Disk Imaging', 'Artifact Extraction'],
            project: 'Tool Comparison Report'
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
            bullets: ['Linux Forensics Hackathon', 'Expert Q&A']
          }
        ]
      }
    ],
    tools: [
      { name: 'Sleuth Kit', src: '/images/tools/sleuthkit-logo.png' },
      { name: 'Autopsy', src: '/images/tools/autopsy-logo.png' },
      { name: 'Volatility', src: '/images/tools/volatility-logo.png' }
    ],
    certificateFeatures: [
      {
        icon: '/certificate.webp',
        title: 'Linux Certified',
        description: 'Recognized by open-source communities.'
      },
      {
        icon: 'FiUserCheck',
        title: 'Lab-Based Learning',
        description: 'Hands-on Linux forensic exercises.'
      },
      {
        icon: 'FiTrendingUp',
        title: 'Industry Ready',
        description: 'Roles in security operations centers.'
      }
    ]
  },
  {
    slug: 'iot-forensics-expert',
    id: 7,
    title: "Certified IoT Forensics Expert",
    des: "Investigate forensic artifacts from IoT and embedded devices.",
    img: "/c7.webp",
    iconLists: ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
    link: "/certifications/iot-forensics-expert",
    details: {
      title: 'Certified IoT Forensics Expert',
      tagline: 'Embedded Security',
      description: 'Learn firmware extraction, memory analysis, and network traffic forensics on IoT devices and wearables.',
      stats: {
        averageCtc: '₹13 LPA',
        linkedinJobs: '1600+ Jobs on LinkedIn Alone',
        mentors: '3+ Industry Mentors'
      },
      actions: [
        { type: 'primary', label: 'Book Demo Now', href: '/demo' },
        { type: 'secondary', label: 'Download Curriculum', href: '/curriculum.pdf' }
      ],
      heroImage: '/images/bootcamp-iot.jpg',
      playDemoLink: '#',
      cohortStart: '2025-08-15',
      pricing: {
        original: 490,
        discounted: 405,
        currency: 'USD',
        emiInfo: 'No cost EMI options available.'
      },
      demoOffer: {
        text: 'Experience our demo class for just $10 (refundable)',
        icon: '✓'
      },
      finePrint: 'All fees are non-refundable and cannot be applied to other courses.'
    },
    overview: {
      eligibility: 'Basic electronics and network fundamentals.',
      learningOutcome: 'Master forensic techniques on firmware, memory, and network captures.',
      statsRow: [
        { label: 'Duration', value: '40 hrs' },
        { label: 'Course Fees', value: '$405' }
      ],
      icons: ['FaRegStar', 'FaLightbulb', 'FaHourglassHalf']
    },
    objectives: [
      'Extract firmware from IoT devices',
      'Analyze embedded memory',
      'Capture and interpret network traffic',
      'Document IoT forensic findings'
    ],
    curriculum: [
      {
        id: 1,
        title: 'Firmware Extraction',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'SPI & JTAG Access',
            bullets: ['EPROM Dumping', 'SPI Protocol Analysis'],
            project: 'Firmware Dump Report'
          }
        ]
      },
      {
        id: 2,
        title: 'Memory Analysis',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Volatile & Non-Volatile',
            bullets: ['RAM Extraction', 'Flash Memory Parsing'],
            project: 'Memory Artifact Extraction'
          }
        ]
      },
      {
        id: 3,
        title: 'Network Forensics',
        duration: '1 week',
        stats: { liveSessions: 8, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Packet Capture & Analysis',
            bullets: ['Wireshark', 'Protocol Dissection'],
            project: 'IoT Traffic Report'
          }
        ]
      },
      {
        id: 4,
        title: 'Cloud & Companion Apps',
        duration: '1 week',
        stats: { liveSessions: 6, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'API & Cloud Forensics',
            bullets: ['API Traffic Logging', 'Cloud Storage Analysis'],
            project: 'Companion App Investigation'
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
            bullets: ['IoT Forensics Hackathon', 'Expert Q&A']
          }
        ]
      }
    ],
    tools: [
      { name: 'Binwalk', src: '/images/tools/binwalk-logo.png' },
      { name: 'FTK Imager', src: '/images/tools/ftk-logo.png' },
      { name: 'Wireshark', src: '/images/tools/wireshark-logo.png' }
    ],
    certificateFeatures: [
      {
        icon: '/certificate.webp',
        title: 'IoT Certified',
        description: 'Recognized by IoT security consortia.'
      },
      {
        icon: 'FiUserCheck',
        title: 'Hands-On Firmware Labs',
        description: 'Real-world device forensics.'
      },
      {
        icon: 'FiTrendingUp',
        title: 'Emerging Skill',
        description: 'High demand in embedded security.'
      }
    ]
  },
  {
    slug: 'mobile-forensics-expert',
    id: 8,
    title: "Certified Mobile Forensics Expert",
    des: "Extract and analyze data from Android and iOS devices.",
    img: "/c8.webp",
    iconLists: ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
    link: "/certifications/mobile-forensics-expert",
    details: {
      title: 'Certified Mobile Forensics Expert',
      tagline: 'Device Centered',
      description: 'Master techniques for logical and physical acquisition, app artifact extraction, and memory forensics on mobile platforms.',
      stats: {
        averageCtc: '₹14 LPA',
        linkedinJobs: '2300+ Jobs on LinkedIn Alone',
        mentors: '4+ Industry Mentors'
      },
      actions: [
        { type: 'primary', label: 'Book Demo Now', href: '/demo' },
        { type: 'secondary', label: 'Download Curriculum', href: '/curriculum.pdf' }
      ],
      heroImage: '/images/bootcamp-mobile.jpg',
      playDemoLink: '#',
      cohortStart: '2025-09-01',
      pricing: {
        original: 500,
        discounted: 415,
        currency: 'USD',
        emiInfo: 'No cost EMI options available.'
      },
      demoOffer: {
        text: 'Experience our demo class for just $10 (refundable)',
        icon: '✓'
      },
      finePrint: 'All fees are non-refundable and non-transferable.'
    },
    overview: {
      eligibility: 'Basic smartphone usage and OS knowledge.',
      learningOutcome: 'Learn app data and memory extraction for Android/iOS.',
      statsRow: [
        { label: 'Duration', value: '44 hrs' },
        { label: 'Course Fees', value: '$415' }
      ],
      icons: ['FaRegStar', 'FaLightbulb', 'FaHourglassHalf']
    },
    objectives: [
      'Perform logical and physical acquisition',
      'Extract app artifacts',
      'Analyze mobile memory dumps',
      'Report mobile forensic findings'
    ],
    curriculum: [
      {
        id: 1,
        title: 'Acquisition Techniques',
        duration: '1 week',
        stats: { liveSessions: 10, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Logical vs Physical',
            bullets: ['ADB, iTunes', 'Forensic Toolkits'],
            project: 'Device Image Report'
          }
        ]
      },
      {
        id: 2,
        title: 'App Artifact Extraction',
        duration: '1 week',
        stats: { liveSessions: 10, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Message & Media Data',
            bullets: ['WhatsApp, WeChat', 'Browser Caches'],
            project: 'App Data Extraction'
          }
        ]
      },
      {
        id: 3,
        title: 'Memory Forensics',
        duration: '1 week',
        stats: { liveSessions: 10, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'RAM Dump Analysis',
            bullets: ['Volatility for Mobile', 'Process Enumeration'],
            project: 'Mobile Memory Analysis'
          }
        ]
      },
      {
        id: 4,
        title: 'Jailbreak & Root Analysis',
        duration: '1 week',
        stats: { liveSessions: 6, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Root Detection',
            bullets: ['Jailbreak Artifacts', 'Privilege Escalation Logs'],
            project: 'Root Access Report'
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
            bullets: ['Mobile Forensics Hackathon', 'Expert Q&A']
          }
        ]
      }
    ],
    tools: [
      { name: 'Cellebrite', src: '/images/tools/cellebrite-logo.png' },
      { name: 'Oxygen Forensic', src: '/images/tools/oxygen-logo.png' },
      { name: 'Magnet AXIOM', src: '/images/tools/magnet-logo.png' }
    ],
    certificateFeatures: [
      {
        icon: '/certificate.webp',
        title: 'Mobile Certified',
        description: 'Accredited by mobile forensic bodies.'
      },
      {
        icon: 'FiUserCheck',
        title: 'Live Device Labs',
        description: 'Hands-on Android/iOS investigations.'
      },
      {
        icon: 'FiTrendingUp',
        title: 'Job Ready',
        description: 'High demand in law enforcement.'
      }
    ]
  },
  {
    slug: 'computer-hacking-forensic-expert',
    id: 9,
    title: "Computer Hacking Forensic Expert",
    des: "Combine ethical hacking with forensic analysis to investigate intrusions.",
    img: "c9.webp",
    iconLists: ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
    link: "/certifications/computer-hacking-forensic-expert",
    details: {
      title: 'Computer Hacking Forensic Expert',
      tagline: 'Dual Skillset',
      description: 'Learn penetration testing, vulnerability assessment, and forensic analysis to trace attacker activity and preserve evidence.',
      stats: {
        averageCtc: '₹16 LPA',
        linkedinJobs: '2500+ Jobs on LinkedIn Alone',
        mentors: '5+ Industry Mentors'
      },
      actions: [
        { type: 'primary', label: 'Book Demo Now', href: '/demo' },
        { type: 'secondary', label: 'Download Curriculum', href: '/curriculum.pdf' }
      ],
      heroImage: '/images/bootcamp-chfe.jpg',
      playDemoLink: '#',
      cohortStart: '2025-09-15',
      pricing: {
        original: 540,
        discounted: 450,
        currency: 'USD',
        emiInfo: 'No cost EMI options available.'
      },
      demoOffer: {
        text: 'Experience our demo class for just $10 (refundable)',
        icon: '✓'
      },
      finePrint: 'All fees are non-refundable, non-transferable, and cannot be applied to other courses.'
    },
    overview: {
      eligibility: 'Basic networking and Linux skills.',
      learningOutcome: 'Master both offensive security and forensic analysis.',
      statsRow: [
        { label: 'Duration', value: '50 hrs' },
        { label: 'Course Fees', value: '$450' }
      ],
      icons: ['FaRegStar', 'FaLightbulb', 'FaHourglassHalf']
    },
    objectives: [
      'Perform pen-testing and exploit development',
      'Capture forensic evidence of breaches',
      'Analyze malware and attacker tools',
      'Compile attack timelines and reports'
    ],
    curriculum: [
      {
        id: 1,
        title: 'Penetration Testing Foundations',
        duration: '2 weeks',
        stats: { liveSessions: 12, projects: 2, caseStudies: 1, quizzes: 2 },
        modules: [
          {
            title: 'Recon & Scanning',
            bullets: ['Nmap', 'OSINT Techniques'],
            project: 'Network Recon Report'
          },
          {
            title: 'Vulnerability Exploitation',
            bullets: ['Metasploit', 'Manual Exploits'],
            project: 'Exploit Lab'
          }
        ]
      },
      {
        id: 2,
        title: 'Forensic Preservation',
        duration: '2 weeks',
        stats: { liveSessions: 12, projects: 1, caseStudies: 1, quizzes: 2 },
        modules: [
          {
            title: 'Evidence Handling',
            bullets: ['Imaging', 'Hash Verification'],
            project: 'Forensic Image Creation'
          }
        ]
      },
      {
        id: 3,
        title: 'Malware & Memory Analysis',
        duration: '2 weeks',
        stats: { liveSessions: 12, projects: 2, caseStudies: 1, quizzes: 2 },
        modules: [
          {
            title: 'Dynamic Analysis',
            bullets: ['Sandbox Execution', 'API Tracing'],
            project: 'Malware Behavior Report'
          },
          {
            title: 'Memory Forensics',
            bullets: ['Volatility Framework', 'hhh'],
            project: 'Memory Artifact Extraction'
          }
        ]
      },
      {
        id: 4,
        title: 'Reporting & Legal',
        duration: '1 week',
        stats: { liveSessions: 6, projects: 1, caseStudies: 1, quizzes: 1 },
        modules: [
          {
            title: 'Report Writing',
            bullets: ['Chain of Custody', 'Legal Standards'],
            project: 'Final Forensic Report'
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
            bullets: ['CHFE Hackathon', 'Expert Q&A']
          }
        ]
      }
    ],
    tools: [
      { name: 'Metasploit', src: '/images/tools/metasploit-logo.png' },
      { name: 'FTK Imager', src: '/images/tools/ftk-logo.png' },
      { name: 'Volatility', src: '/images/tools/volatility-logo.png' }
    ],
    certificateFeatures: [
      {
        icon: '/certificate.webp',
        title: 'Dual Certified',
        description: 'Offensive + Forensic skill endorsement.'
      },
      {
        icon: 'FiUserCheck',
        title: 'Integrated Labs',
        description: 'Combined hack & preserve exercises.'
      },
      {
        icon: 'FiTrendingUp',
        title: 'Top Salaries',
        description: 'Roles in red teams & forensic labs.'
      }
    ]
  }
];
