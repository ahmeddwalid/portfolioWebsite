
import React from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export interface SkillItem {
  name: string;
  icon?: React.ReactNode;
  description: string; // Description is now mandatory
  details?: string[]; // Optional array for bullet points or sub-skills
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string; // URL to image
  link?: string; // Optional URL for the project
  category?: string; // e.g., "Software Development", "Research", "Community"
}
