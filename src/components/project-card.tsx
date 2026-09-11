"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence  } from "framer-motion";
import { Play, X } from "lucide-react";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VideoProject } from "@/types/videos";

interface ProjectCardProps {
    project: VideoProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Handle click outside to stop playing
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                setIsPlaying(false);
            }
        };

        if (isPlaying) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isPlaying]);

    const handlePlayClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setIsPlaying(true);
    };

    const handleStopClick = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        e?.preventDefault();
        setIsPlaying(false);
    };

    const isDirectVideo = project.video_link && (
        project.video_link.includes(".mp4") ||
        project.video_link.includes(".webm") ||
        project.video_link.includes(".mov") ||
        project.video_link.includes("r2.dev")
    );

    const hasVideo = Boolean(project.video_link && project.video_link.trim().length > 0);

    const thumbnailSrc = project.cover_image
        ? project.cover_image.startsWith("http") || project.cover_image.startsWith("/")
            ? project.cover_image
            : `https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`
        : "/demo.png";

    return (
        <div ref={cardRef} className="h-full">
            <GlassmorphismCard className="h-full group hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-500 flex flex-col">
                <div className="flex flex-col h-full p-5">
                    {/* Media Area */}
                    <div className="relative overflow-hidden rounded-2xl aspect-video mb-5 shadow-lg bg-black isolate">
                        <AnimatePresence mode="wait">
                            {isPlaying && hasVideo ? (
                                <m.div
                                    key="video-player"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-20 bg-black"
                                >
                                    {isDirectVideo ? (
                                        <video
                                            src={project.video_link}
                                            autoPlay
                                            controls
                                            playsInline
                                            className="w-full h-full object-contain bg-black"
                                        />
                                    ) : (
                                        <iframe
                                            src={`https://www.youtube.com/embed/${project.cover_image}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`}
                                            title={project.video_title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full border-0"
                                        />
                                    )}
                                    <button
                                        onClick={handleStopClick}
                                        className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full backdrop-blur-md transition-colors z-30"
                                        aria-label="Close preview"
                                    >
                                        <X size={16} />
                                    </button>
                                </m.div>
                            ) : (
                                <div
                                    key="thumbnail"
                                    className="relative w-full h-full group/thumb"
                                >
                                    <m.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src={thumbnailSrc}
                                            alt={project.video_title}
                                            fill
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </m.div>

                                    {/* Overlay Icon */}
                                    <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/50 transition-colors duration-300 flex items-center justify-center backdrop-blur-[0px] group-hover/thumb:backdrop-blur-[2px]">
                                        {hasVideo ? (
                                            <button
                                                onClick={handlePlayClick}
                                                className="w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-90 group-hover/thumb:scale-110 transition-all duration-300 shadow-xl cursor-pointer z-10"
                                                title="Play video inline"
                                            >
                                                <Play className="ml-1 fill-white" size={28} />
                                            </button>
                                        ) : (
                                            <Link
                                                href={`/project/${project.id}`}
                                                className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-90 group-hover/thumb:scale-110 transition-all duration-300 shadow-xl cursor-pointer z-10"
                                                title="View full artwork"
                                            >
                                                <span className="text-xs font-bold uppercase tracking-wider">View</span>
                                            </Link>
                                        )}
                                    </div>

                                    {/* Full Screen Page Link Badge (Top Right) */}
                                    <Link
                                        href={`/project/${project.id}`}
                                        className="absolute top-3 right-3 bg-black/70 hover:bg-black/90 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-md border border-white/10 transition-all cursor-pointer z-10 flex items-center gap-1"
                                        title="Open full screen project page"
                                    >
                                        <span>Full View</span>
                                    </Link>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col relative w-full">
                        {/* Category Tags */}
                        <div className="flex gap-2 mb-3 flex-wrap">
                            {project.category.slice(0, 2).map((cat) => (
                                <Badge key={cat} variant="secondary" className="bg-white/5 hover:bg-white/10 text-gray-400 text-[10px] font-normal border-none">
                                    {cat}
                                </Badge>
                            ))}
                        </div>

                        <Link href={`/project/${project.id}`} className="block group/title">
                            <h3 className="text-xl font-bold mb-3 text-white group-hover/title:text-blue-400 transition-colors line-clamp-2 leading-tight">
                                {project.video_title}
                            </h3>
                        </Link>

                        <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                            {project.video_description}
                        </p>

                        {/* Actions & Metadata */}
                        <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="text-xs font-medium text-gray-400">{project.client_name}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                {hasVideo && (
                                    <Button
                                        onClick={handlePlayClick}
                                        size="sm"
                                        variant="ghost"
                                        className="h-8 px-3 text-xs font-medium text-white bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/30 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1"
                                    >
                                        <Play size={12} className="fill-white" />
                                        Play
                                    </Button>
                                )}
                                <Link href={`/project/${project.id}`}>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="h-8 px-4 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl"
                                    >
                                        Full Screen
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </GlassmorphismCard>
        </div>
    );
}
