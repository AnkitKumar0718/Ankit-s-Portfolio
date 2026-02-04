"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    desc: string;
    tags: string[];
    image: string;
    deploy: string;
}

const projects: Project[] = [
    {
        title: 'Movie App',
        desc: 'It is a full stack application that allows users to browse various movies, add them to a wishlist for future viewing.',
        tags: ['React.js', 'Firebase', 'Tailwind', 'React-Libraries'],
        image: '/movie.png',
        deploy: 'https://ak-07-movieapp.netlify.app/'
    },
    {
        title: 'E-commerce',
        desc: 'E-commerce is a frontend application that allows users to browse products, add them to cart, and view their details.',
        tags: ['React.js', 'Firebase', 'Tailwind',],
        image: '/assets/project-2.jpg',
        deploy: 'https://a-kart-07.netlify.app/'
    },
    // {
    //     title: 'Spotify Clone',
    //     desc: 'Spotify Clone is fully responsive, and users can browse music albums, search for tracks, and enjoy a seamless experience across devices.',
    //     tags: ['React.js', 'Redux Toolkit', 'Firebase', 'Tailwind'],
    //     image: '/sp-5.webp',
    //     deploy: 'https://spotify-clone-oeqr.onrender.com/'
    // },
    {
        title: 'Weather App',
        desc: 'It is a frontend application made using Open weather API. User can check weather of any city across the globe ',
        tags: ['React.js', 'Weather API', 'Tailwind'],
        image: '/wapp.png',
        deploy: 'https://ak-07-weatherapp.netlify.app/'
    },
];

const Projects = () => {
    const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

    const handleExpand = (idx: number) => {
        setExpandedIdx(expandedIdx === idx ? null : idx);
    };

    return (
        <section id="projects" className="py-20 bg-black/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">My Work</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <article key={idx} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                            {/* Image Area */}
                            <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="block h-48 w-full relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={`Screenshot of ${project.title}`}
                                    fill
                                    className="object-cover transition-transform duration-500"
                                />
                                {/* Overlay Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-20 transition-opacity`}></div>
                            </a>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <div className="mb-6">
                                    <p className={`text-gray-400 text-sm ${expandedIdx === idx ? '' : 'line-clamp-3'}`}>
                                        {project.desc}
                                    </p>
                                    {project.desc.length > 60 && (
                                        <button
                                            className="text-primary text-xs mt-1 focus:outline-none hover:underline"
                                            onClick={() => handleExpand(idx)}
                                            aria-label={expandedIdx === idx ? 'Show less' : 'Show more'}
                                        >
                                            {expandedIdx === idx ? 'Show less' : 'Show more'}
                                        </button>
                                    )}
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/5 transition-colors duration-200 hover:bg-primary/20 hover:text-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.deploy}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/80 transition-all duration-300"
                                    >
                                        View
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

