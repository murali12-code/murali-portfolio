import {
  Award,
  Camera,
  Film,
  Palette,
  Scissors,
  Sparkles,
  Users,
  Volume2,
  Zap,
} from "lucide-react";

export const videoEditingSkills = [
  {
    name: "DaVinci Resolve",
    image_link: "/tools/DaVinci_Resolve_Studio.png",
    icon: Film,
    description:
      "Professional color grading, editing, and audio post-production",
    color: "text-orange-400",
  },
  {
    name: "Adobe Premiere Pro",
    image_link: "/tools/Adobe_Premiere_Pro_CC.png",
    icon: Scissors,
    description:
      "Advanced video editing, multicam sync, and workflow optimization",
    color: "text-purple-400",
  },
  {
    name: "After Effects",
    image_link: "/tools/Adobe_After_Effects_CC.png",
    icon: Sparkles,
    description: "Motion graphics, visual effects, and advanced animations",
    color: "text-blue-400",
  },
  {
    name: "Adobe Photoshop",
    image_link: "/tools/Adobe_Photoshop_CC.png",
    icon: Palette,
    description: "Thumbnail design, graphics creation, and image manipulation",
    color: "text-cyan-400",
  },
  {
    name: "Adobe Illustrator",
    image_link: "/tools/Adobe_Illustrator_CC.svg",
    icon: Palette,
    description: "Vector illustration, character design, and custom graphic assets",
    color: "text-amber-400",
  },
  {
    name: "CapCut",
    image_link: "/tools/CapCut.png",
    icon: Scissors,
    description: "Fast-paced short-form video editing, captions, and mobile content creation",
    color: "text-teal-400",
  },
];

export const specializations = [
  {
    title: "Short-form Editing",
    skills: [
      "Vertical Video",
      "Reels & Shorts",
      "Dynamic Captions",
      "Pacing & Retention",
    ],
    icon: "📱",
    description:
      "Creating fast-paced, high-retention vertical videos optimized for Instagram, YouTube Shorts, and TikTok",
  },
  {
    title: "Colour Grading",
    skills: [
      "Cinematic Looks",
      "Color Correction",
      "Shot Matching",
      "Mood & Tone",
    ],
    icon: "🎨",
    description:
      "Professional color grading and correction to give videos a rich, cinematic visual quality",
  },
  {
    title: "Explainer Videos",
    skills: [
      "Visual Storytelling",
      "Kinetic Typography",
      "Graphic Callouts",
      "Script Pacing",
    ],
    icon: "💡",
    description:
      "Simplifying complex concepts into engaging visual stories using motion graphics and structured editing",
  },
  {
    title: "Montages",
    skills: [
      "Beat Syncing",
      "Dynamic Transitions",
      "Rhythm Editing",
      "Sound Design",
    ],
    icon: "⚡",
    description:
      "High-energy rhythm editing, beat matching, and seamless transition sequences for impactful visual showcases",
  },
];

export const achievements = [
  {
    title: "20+ Video Edits",
    description:
      "Completed over 20+ video editing projects focusing on pacing and storytelling",
    icon: Film,
    color: "text-yellow-400",
  },
  {
    title: "5+ Motion Projects",
    description:
      "Created 5+ motion graphics and kinetic typography animations",
    icon: Sparkles,
    color: "text-purple-400",
  },
  {
    title: "5+ Creative Tools",
    description:
      "Mastered Premiere Pro, After Effects, DaVinci Resolve, Photoshop, and Illustrator",
    icon: Camera,
    color: "text-blue-400",
  },
  {
    title: "50+ Personal Projects",
    description:
      "Extensive library of personal creative experiments and video concepts",
    icon: Award,
    color: "text-green-400",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Project Analysis",
    description:
      "Understanding client requirements, target audience, and project goals",
  },
  {
    step: "02",
    title: "Content Review",
    description:
      "Analyzing raw footage, identifying key moments, and planning the edit",
  },
  {
    step: "03",
    title: "Rough Cut",
    description:
      "Creating initial edit with basic cuts, transitions, and structure",
  },
  {
    step: "04",
    title: "Fine Tuning",
    description:
      "Adding graphics, color grading, audio enhancement, and effects",
  },
  {
    step: "05",
    title: "Client Review",
    description: "Presenting the work for feedback and implementing revisions",
  },
  {
    step: "06",
    title: "Final Delivery",
    description:
      "Exporting in required formats and delivering the completed project",
  },
];
