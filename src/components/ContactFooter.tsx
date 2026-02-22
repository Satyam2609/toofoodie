"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Cake } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-brown"
                    >
                        Get In Touch
                    </motion.h2>
                    <p className="text-foreground/70 mt-4">We'd love to hear from you. Plan your next sweet celebration with us.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-primary/20 rounded-2xl">
                                <MapPin className="text-primary h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-brown">Visit Us</h4>
                                <p className="text-foreground/70 mt-1">123 Bakery Street, Dessert Valley,<br />California, CA 90210</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-secondary/20 rounded-2xl">
                                <Phone className="text-secondary h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-brown">Call Us</h4>
                                <p className="text-foreground/70 mt-1">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-accent/30 rounded-2xl">
                                <Mail className="text-accent h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-brown">Email Us</h4>
                                <p className="text-foreground/70 mt-1">hello@sweettreats.com</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-brown hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="h-[400px] rounded-3xl overflow-hidden shadow-2xl relative"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5619163773177!2d-118.40245032437947!3d34.067347317208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c37927ad44!2sBakery%20St%2C%20Beverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bakery Location"
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-brown text-cream py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 pb-12">
                    <div className="flex items-center gap-3">
                        <Cake className="h-10 w-10 text-primary" />
                        <span className="text-3xl font-bold tracking-tight">Sweet Treats</span>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-8">
                        {["Home", "Gallery", "About", "Services", "Contact"].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-cream/70 hover:text-primary transition-colors font-medium"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-cream/50 text-sm">
                        © 2024 Sweet Treats Bakery. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-cream/50">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
