declare module "react-vertical-timeline-component" {
    import React from "react";
  
    export interface VerticalTimelineProps {
      animate?: boolean;
      className?: string;
      children?: React.ReactNode; // Add this line
    }
  
    export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  
    export interface VerticalTimelineElementProps {
      className?: string;
      contentStyle?: React.CSSProperties;
      contentArrowStyle?: React.CSSProperties;
      date?: string | React.ReactNode;
      iconStyle?: React.CSSProperties;
      icon?: React.ReactNode;
      position?: "left" | "right";
      style?: React.CSSProperties;
      children?: React.ReactNode; // Add this line
    }
  
    export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
  }
  