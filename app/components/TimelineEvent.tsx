'use client';

import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion, Variants } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import Image from "next/image";

type EventType = "work" | "education" | "misc";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image: string;
  type: EventType;
  iconStyle: React.CSSProperties;
  animation?: {
    initial?: Variants["hidden"];
    whileInView?: Variants["visible"];
    transition?: object;
  };
}

const getIconByType = (type: EventType): React.ReactElement => {
  switch (type) {
    case "work":
      return <FaBriefcase />;
    case "education":
      return <FaGraduationCap />;
    default:
      return <FaStar />;
  }
};

interface TimelineEventProps {
  event: TimelineEvent;
}

const TimelineEventComponent: React.FC<TimelineEventProps> = ({ event }) => {
  const defaultAnimation: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const animationVariants: Variants = event.animation
    ? {
        hidden: event.animation.initial || { opacity: 0, y: 50 },
        visible: event.animation.whileInView || { opacity: 1, y: 0 },
      }
    : defaultAnimation;

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${event.type}`}
      contentStyle={{
        background: "rgb(33, 37, 41)",
        color: "#fff",
        borderRadius: "8px",
        overflow: "visible",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgb(33, 37, 41)" }}
      date={event.date}
      iconStyle={event.iconStyle}
      icon={getIconByType(event.type)}
    >
      <motion.div
        key={`timeline-event-${event.date}`}
        initial="hidden"
        whileInView="visible"
        variants={animationVariants}
        transition={event.animation?.transition || { duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h3 className="vertical-timeline-element-title text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          {event.title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg">{event.description}</p>
      </motion.div>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src={event.image}
          alt={event.title}
          layout="responsive"
          width={400}
          height={300}
          className="w-full h-48 object-cover rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
          loading="eager"
        />
      </motion.div>
    </VerticalTimelineElement>
  );
};

export default TimelineEventComponent;
