"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Clock, ChefHat, Heart } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop"
                                alt="Bakery Kitchen"
                                className="rounded-3xl shadow-2xl z-10 relative"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                                <p className="text-4xl font-bold text-brown">15+</p>
                                <p className="text-sm font-medium text-brown/80">Years of Experience</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brown mt-4 mb-6">
                            Baking Dreams Into Reality Since 2009
                        </h2>
                        <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                            What started as a small home kitchen project has blossomed into one
                            of the city's most beloved artisanal bakeries. We believe that
                            every cake tells a story, and we're here to help you tell yours.
                        </p>
                        <p className="text-foreground/70 text-lg mb-10 leading-relaxed">
                            Using only organic flour, locally sourced dairy, and the finest
                            Belgian chocolate, we ensure that every bite is as memorable as
                            the occasion you're celebrating.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-secondary/20 rounded-lg">
                                    <Star className="text-secondary h-6 w-6" />
                                </div>
                                <p className="font-semibold text-brown">Premium Quality</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-primary/20 rounded-lg">
                                    <Heart className="text-primary h-6 w-6" />
                                </div>
                                <p className="font-semibold text-brown">Made with Love</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const serviceList = [
    {
        icon: ChefHat,
        title: "Custom Designs",
        desc: "Collaborate with our designers to create a cake that matches your vision perfectly."
    },
    {
        icon: Clock,
        title: "Event Catering",
        desc: "From corporate gatherings to intimate weddings, we provide full-service dessert tables."
    },
    {
        icon: Star,
        title: "Theme Cakes",
        desc: "Specialized in cartoon, floral, and luxury theme cakes updated with daily trends."
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-accent/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-brown"
                    >
                        Our Specialties
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {serviceList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-10 rounded-3xl shadow-lg border border-primary/10 hover:shadow-2xl transition-all group"
                        >
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-brown mb-4">{service.title}</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Testimonials = () => {
    const reviews = [
        { name: "Sarah Johnson", text: "The wedding cake was more beautiful than I ever imagined. Truly a work of art!", role: "Bride" },
        { name: "Michael Chen", text: "Best chocolate cake in the city. The depth of flavor is incredible.", role: "Food Critic" },
        { name: "Emma Wilson", text: "My daughter's unicorn cake was the highlight of her birthday party!", role: "Parent" },
    ];

    return (
        <section className="py-24 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brown italic">"What Our Lovers Say"</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white rounded-2xl shadow-sm italic text-foreground/80 relative"
                        >
                            <span className="text-6xl text-primary/20 absolute top-4 left-4 font-serif">"</span>
                            <p className="relative z-10 mb-6">{r.text}</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-secondary rounded-full" />
                                <div>
                                    <h4 className="font-bold text-brown">{r.name}</h4>
                                    <p className="text-xs text-foreground/60">{r.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
