"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { FaHandshake, FaUserFriends, FaCertificate, FaAward, FaStar } from "react-icons/fa"; // Import icons

// Define the timeline data as an array of objects
const timelineData = [
  {
    date: "2017-2018",
    title: "Collaboration with EC Council",
    description:
      "Our company collaborated with the EC Council for CHFI training to the Centre for Development of Advanced Computing and CEH training for employees at Cognizant and TCS.",
    iconStyle: { background: "rgb(108, 99, 255)", color: "#fff" },
    icon: <FaHandshake />,
    animation: {
      initial: { opacity: 0, x: -100 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  {
    date: "2019-2020",
    title: "Collaboration with MAKAUT and WB Police",
    description:
      "We collaborated with the MAKAUT Board and WB Police Training. Provided training for 100 individuals. Partnered with top clients like Vedanta and Tata Steel, showcasing our commitment to excellence.",
    iconStyle: { background: "rgb(108, 99, 255)", color: "#fff" },
    icon: <FaUserFriends />,
    animation: {
      initial: { opacity: 0, x: 100 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  {
    date: "2021-2022",
    title: "Cert-in Empanelment and Government Training",
    description:
      "We secured Cert-in empanelment and trained government personnel from WBPDCL and the Directorate General of Lighthouses and Lightships. We partnered with renowned clients like CESC, AMRI Hospital, Lux Cozi, and Tata Medical.",
    iconStyle: { background: "rgb(108, 99, 255)", color: "#fff" },
    icon: <FaCertificate />,
    animation: {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  {
    date: "2023-2024",
    title: "Pearson VUE and Prestigious Clientele",
    description:
      "Our company is a Pearson VUE-authorised test center, CompTIA Authorized Partner, and trained by the Special Task Force and WB Police Training Institute. Successfully onboarded clients like ABP, SAIL, Park Hotel, and Ruby General Hospital.",
    iconStyle: { background: "rgb(108, 99, 255)", color: "#fff" },
    icon: <FaAward />,
    animation: {
      initial: { opacity: 0, y: 100 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  {
    date: "Milestone",
    title: "Reached 1000 Clients",
    description:
      "Celebrated reaching 1000 satisfied clients across various industries, showcasing our dedication and excellence in service delivery.",
    iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
    icon: <FaStar />,
    animation: {
      initial: { opacity: 0, scale: 0 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
];

// Define animation variants
// const defaultAnimation: Variants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

const VerticalTimelineComponent: React.FC = () => {
  return (
    <section className="py-20  text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-10">Our Journey</h1>
        <VerticalTimeline>
          {timelineData.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              className={
                event.date === "Milestone"
                  ? "vertical-timeline-element--milestone"
                  : "vertical-timeline-element--work"
              }
              contentStyle={{
                background: event.date === "Milestone" ? "rgb(16, 204, 82)" : "rgb(33, 37, 41)",
                color: "#fff",
                borderRadius: "8px",
              }}
              contentArrowStyle={{
                borderRight: event.date === "Milestone" ? "7px solid rgb(16, 204, 82)" : "7px solid rgb(33, 37, 41)",
              }}
              date={event.date}
              iconStyle={event.iconStyle}
              icon={event.icon}
            >
              {/* Motion.div for content */}
              <motion.div
                initial={event.animation.initial}
                whileInView={event.animation.whileInView}
                transition={event.animation.transition}
                viewport={{ once: true, amount: 0.2 }} // Lower amount for better mobile responsiveness
              >
                <h3 className="vertical-timeline-element-title text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                  {event.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg">{event.description}</p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default VerticalTimelineComponent;
