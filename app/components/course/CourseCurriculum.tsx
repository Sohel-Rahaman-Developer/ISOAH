// src/components/CourseCurriculum.tsx
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiClock,
  FiRefreshCw,
  FiVideo,
  FiDatabase,
  FiDownload,
} from "react-icons/fi";
import { AiOutlineProject } from "react-icons/ai";

interface Module {
  title: string;
  bullets: string[];
  project?: string;
  caseStudy?: string;
}

interface Milestone {
  id: number;
  title: string;
  duration: string;
  modules: Module[];
  stats: {
    liveSessions: number;
    projects: number;
    caseStudies: number;
    quizzes: number;
  };
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Cyber Foundations & Lab Arsenal",
    duration: "2 weeks",
    stats: { liveSessions: 12, projects: 2, caseStudies: 1, quizzes: 2 },
    modules: [
      {
        title: "Networking Fundamentals & Cyber Basics",
        bullets: [
          "Intro to Networking Concepts",
          "IP Addressing (Public/Private, IPv6)",
          "MAC, Ports, Protocols, TCP/UDP",
          "How Internet Works: ARP, DHCP, DNS",
          "HTTP, DNS Records, Zone Files",
          "Doubt Solving",
        ],
        project: "Label the diagram (Networking)",
        caseStudy:
          "2008 Ahmedabad Bombings – Tracing the Digital Footprint",
      },
      {
        title: "Linux + Lab Setup with AI",
        bullets: [
          "Lab Setup (Kali Linux, VM, Dual Boot)",
          "Linux Commands, File Structure",
          "Software Installation",
          "Hands-on with Terminal Commands",
          "Doubt Solving using AI",
        ],
        project: "Updating sources.list",
      },
    ],
  },
  {
    id: 2,
    title: "Recon & System Infiltration Toolkit",
    duration: "2 weeks",
    stats: { liveSessions: 12, projects: 2, caseStudies: 2, quizzes: 2 },
    modules: [
      {
        title: "Recon Fundamentals",
        bullets: [
          "OSINT Techniques",
          "Website Footprinting",
          "Network Scanning Tools",
        ],
        project: "OSINT Report",
      },
      {
        title: "Exploitation Toolkit",
        bullets: ["Metasploit Basics", "Vulnerability Scanning"],
        project: "Exploit Lab",
      },
    ],
  },
  {
    id: 3,
    title: "Real-World Exploitation & Red Team Skills",
    duration: "2 weeks",
    stats: { liveSessions: 12, projects: 2, caseStudies: 2, quizzes: 2 },
    modules: [
      {
        title: "Advanced Exploitation Techniques",
        bullets: [
          "Buffer Overflows",
          "Web App Exploits",
          "Privilege Escalation",
        ],
        project: "Exploit Development",
      },
      {
        title: "Red Team Methodologies",
        bullets: [
          "Attack Simulation Planning",
          "Command & Control",
          "Reporting & Documentation",
        ],
        project: "Red Team Exercise",
      },
    ],
  },
  {
    id: 4,
    title: "Advanced Attacks & Career Launchpad",
    duration: "1 week",
    stats: { liveSessions: 6, projects: 1, caseStudies: 1, quizzes: 1 },
    modules: [
      {
        title: "Emerging Threats",
        bullets: ["IoT Attacks", "Cloud Exploits", "Mobile Hacking"],
        project: "Threat Research",
      },
    ],
  },
  {
    id: 5,
    title: "Bonus Sessions",
    duration: "–",
    stats: { liveSessions: 4, projects: 0, caseStudies: 0, quizzes: 0 },
    modules: [
      {
        title: "Live Q&A and Hackathons",
        bullets: [
          "Hands-on Hackathons",
          "Live Q&A with Experts",
          "Resume & Interview Prep",
        ],
      },
    ],
  },
];

export default function CourseCurriculum() {
  const [openId, setOpenId] = useState<number>(milestones[0].id);

  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            What Will You Learn
          </h2>
          <p className="mt-2 text-gray-600">
            A detailed overview of the course, including key topics,
            objectives, and module sequence.
          </p>
        </div>
        <button className="mt-6 md:mt-0 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg transition">
          <FiDownload className="mr-2" />
          Download Curriculum
        </button>
      </div>

      {/* Stats Pill */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
        <div className="flex-1 flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-full px-6 py-4">
          <div className="flex items-center space-x-2">
            <FiClock className="text-lg text-gray-600" />
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="font-semibold text-gray-900">8 Weeks</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FiRefreshCw className="text-lg text-gray-600" />
            <div>
              <p className="text-xs text-gray-500">Mode</p>
              <p className="font-semibold text-gray-900">Oflline</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FiVideo className="text-lg text-gray-600" />
            <div>
              <p className="text-xs text-gray-500">Live Sessions</p>
              <p className="font-semibold text-gray-900">44+ hrs</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineProject className="text-lg text-gray-600" />
            <div>
              <p className="text-xs text-gray-500">Projects</p>
              <p className="font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full px-6 py-4">
          <span className="inline-block bg-blue-600 text-white text-xs uppercase font-semibold mr-3 px-2 py-1 rounded-full">
            with
          </span>
          <img
            src="/images/placement-support-illu.png"
            alt="Placement Support"
            className="h-10 w-10 mr-3"
          />
          <div>
            <p className="text-sm text-gray-700">Placement Support</p>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-5xl mx-auto space-y-6">
        {milestones.map((ms) => {
          const isOpen = openId === ms.id;
          return (
            <div
              key={ms.id}
              className="rounded-2xl overflow-hidden border border-gray-300"
            >
              {/* Header */}
              <button
                onClick={() => setOpenId(isOpen ? 0 : ms.id)}
                className={`w-full flex justify-between items-center px-6 py-4 ${
                  isOpen
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <span className="font-semibold">
                  Milestone {ms.id} - Duration: {ms.duration}
                </span>
                <span className="text-2xl">{isOpen ? "−" : "+"}</span>
              </button>

              {/* Animated Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.4 }}
                    className="bg-white px-6 overflow-hidden"
                  >
                    <div className="py-6 space-y-6">
                      {/* Title & Stats */}
                      <div className="space-y-4">
                        <p className="text-lg font-medium text-gray-900">
                          {ms.title}
                        </p>
                        <div className="flex flex-wrap text-sm text-gray-600 space-x-6">
                          <span>
                            <FiVideo className="inline-block mr-1" />
                            {ms.stats.liveSessions} Live Sessions
                          </span>
                          <span>
                            <AiOutlineProject className="inline-block mr-1" />
                            {ms.stats.projects} Projects
                          </span>
                          <span>
                            <FiDatabase className="inline-block mr-1" />
                            {ms.stats.caseStudies} Case Studies
                          </span>
                          <span>
                            <FiRefreshCw className="inline-block mr-1" />
                            {ms.stats.quizzes} Quizzes
                          </span>
                        </div>
                      </div>

                      {/* Modules Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {ms.modules.map((mod, i) => (
                          <div
                            key={i}
                            className="border border-gray-200 rounded-lg p-4 space-y-3"
                          >
                            <h4 className="bg-yellow-100 inline-block px-3 py-1 rounded-full text-xs font-semibold text-yellow-800">
                              Module {i + 1}
                            </h4>
                            <h5 className="font-semibold text-gray-900">
                              {mod.title}
                            </h5>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              {mod.bullets.map((b, idx) => (
                                <li key={idx}>{b}</li>
                              ))}
                            </ul>
                            {mod.project && (
                              <p className="mt-3 text-sm">
                                <span className="font-semibold">
                                  Project:
                                </span>{" "}
                                {mod.project}
                              </p>
                            )}
                            {mod.caseStudy && (
                              <p className="text-sm">
                                <span className="font-semibold">
                                  Case Study:
                                </span>{" "}
                                {mod.caseStudy}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}