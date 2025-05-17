export interface Course {
  id: number;
  slug: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  details: {
    title: string;
    tagline: string;
    description: string;
    stats: {
      averageCtc: string;
      linkedinJobs: string;
      mentors: string;
    };
    actions: { type: "primary" | "secondary"; label: string; href: string }[];
    heroImage: string;
    playDemoLink: string;
    cohortStart: string;
    pricing: {
      original: number;
      discounted: number;
      currency: string;
      emiInfo: string;
    };
    demoOffer: { text: string; icon: string };
    finePrint: string;
  };
  overview: {
    eligibility: string;
    learningOutcome: string;
    statsRow: { label: string; value: string }[];
    icons: string[];
  };
  objectives: string[];
  curriculum: {
    id: number;
    title: string;
    duration: string;
    stats: {
      liveSessions: number;
      projects: number;
      caseStudies: number;
      quizzes: number;
    };
    modules: {
      title: string;
      bullets: string[];
      project?: string;
      caseStudy?: string;
    }[];
  }[];
  tools: { name: string; src: string }[];
  certificateFeatures: {
    icon: string;
    title: string;
    description: string;
  }[];
}
