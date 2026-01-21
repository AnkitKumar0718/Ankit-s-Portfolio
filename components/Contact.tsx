'use client';

import React, { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
            form.current!,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        )
            .then((result) => {
                setStatus('Message sent successfully!');
                // @ts-ignore
                form.current?.reset();
            }, (error) => {
                setStatus('Failed to send message. Please try again.');
            })
            .finally(() => {
                setIsLoading(false);
                setTimeout(() => setStatus(''), 5000);
            });
    };
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">Get In Touch</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">
                        Contact <span className="text-gradient">Me</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
                        <p className="text-gray-400 mb-8">
                            I'm currently open to full-time opportunities.
                            If you have a project in mind or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email Address</p>
                                    <p className="text-lg font-medium">ankitchauhandhoni@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="text-lg font-medium">+91 9870991645</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="text-lg font-medium">Gr.Noida, Uttar Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form ref={form} onSubmit={sendEmail} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600 resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : (
                                <>
                                    <Send size={20} />
                                    Send Message
                                </>
                            )}
                        </button>

                        {status && (
                            <p className={`text-center text-sm ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-20 border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Ankit. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
