import React from 'react';
import { Code2, Cpu, Globe, Palette } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Next.js', level: '90%' },
        { name: 'React', level: '90%' },
        { name: 'TypeScript', level: '85%' },
        { name: 'Tailwind CSS', level: '95%' },
        { name: 'Node.js', level: '5v 0%' },
    ];

    const cards = [
        { icon: <Code2 className="text-primary" size={32} />, title: 'Clean Code', desc: 'Writing scalable, readable, and maintainable code.' },
        { icon: <Palette className="text-secondary" size={32} />, title: 'Modern Design', desc: 'Crafting pixel-perfect, accessible user interfaces.' },
        { icon: <Globe className="text-accent" size={32} />, title: 'SEO Optimized', desc: 'Building web apps that rank well on search engines.' },
        { icon: <Cpu className="text-blue-500" size={32} />, title: 'Performance', desc: 'Optimizing for speed and smooth user experience.' },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Col: Bio & Cards */}
                    <div className="space-y-8">
                        <p className="text-gray-300 leading-relaxed text-lg">
                            I am a motivated <span className="text-white font-semibold">B.Tech Graduate</span> and a passionate Web Developer.
                            I specialize in building dynamic web applications using the latest technologies.
                            My journey in web development is driven by a desire to create intuitive and impactful digital experiences.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {cards.map((card, idx) => (
                                <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group">
                                    <div className="mb-4 p-3 bg-black/50 rounded-lg inline-block group-hover:scale-110 transition-transform">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-gray-400 text-sm">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Col: Skills */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>

                        <h3 className="text-2xl font-bold mb-8 relative z-10">Technical Expertise</h3>

                        <div className="space-y-6 relative z-10">
                            {skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-gray-200">{skill.name}</span>
                                        <span className="text-gray-400">{skill.level}</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                            style={{ width: skill.level }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
