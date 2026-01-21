import React from 'react';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="text-center md:text-left space-y-6">
                    <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium mb-4">
                        Available for Hire
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Hi, I'm <span className="text-gradient">Ankit</span>
                        <br />
                        <span className="text-4xl md:text-6xl text-gray-400 font-semibold">
                            Web Developer
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
                        I craft visually stunning and high-performance web experiences using modern technologies like Next.js, React, and Tailwind CSS.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <a href="#projects" className="group px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                            View Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="https://drive.google.com/file/d/1_mzccpeOuxtkT5jnd7FrTYmGiVr-hc0c/view?usp=sharing" download className="px-8 py-3 rounded-full border border-gray-700 hover:border-white/50 hover:bg-white/5 transition-all text-white font-medium flex items-center justify-center">
                            Download Resume
                        </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-6 pt-8 ml-6 text-gray-400">
                        <a href="https://github.com/AnkitKumar0718" className="hover:text-primary transition-colors transform hover:scale-110">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/ankit-kumar-8ba6a6268/" className="hover:text-[#0077b5] transition-colors transform hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto md:ml-auto w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                    {/* Image Frame/Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-6 opacity-30 blur-lg"></div>
                    <div className="absolute inset-0 border-2 border-white/10 rounded-2xl rotate-3 bg-black/50 backdrop-blur-sm z-0"></div>

                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 bg-gray-900 group">
                        <Image
                            src="/assets/portrait_black.png"
                            alt="Ankit Portrait"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay Info */}
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                            <div className="border-l-4 border-primary pl-4">
                                <h3 className="text-white font-bold text-xl">Ankit</h3>
                                <p className="text-gray-300 text-sm">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
