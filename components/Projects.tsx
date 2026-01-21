import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'IMDB Clone',
            desc: 'IMDb is a full stack application that allows users to browse various movies, view their details, and add them to a wishlist for future viewing.',
            tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
            image: '/assets/project-1.png',
            deploy: 'https://ankit-imdb-clone7788.netlify.app/'
        },
        {
            title: 'E-commerce',
            desc: 'E-commerce is a frontend application that allows users to browse products, add them to cart, and view their details.',
            tags: ['React.js', 'Tailwind', 'Context API'],
            image: '/assets/project-2.jpg',
            deploy: 'https://a-kartshop-com.netlify.app/'
        },
        {
            title: 'Spotify Clone',
            desc: 'Spotify Clone is fully responsive, and users can browse music albums, search for tracks, and enjoy a seamless experience across devices.',
            tags: ['React.js', 'Redux Toolkit', 'Firebase', 'Tailwind'],
            image: '/sp-2.jfif',
            deploy: 'https://spotify-clone-oeqr.onrender.com/'
        },
    ];

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
                        <div key={idx} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                            {/* Image Area */}
                            <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="block h-48 w-full relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500"
                                />
                                {/* Overlay Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-20 transition-opacity`}></div>
                            </a>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
