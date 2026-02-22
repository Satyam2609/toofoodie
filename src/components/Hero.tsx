"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
                >
                    Crafting <span className="text-primary italic">Sweet</span> Moments
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-cream mb-10 drop-shadow-md"
                >
                    Experience the art of artisanal baking with our handcrafted cakes,
                    made with love and the finest ingredients.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a
                        href="#gallery"
                        className="inline-block bg-primary hover:bg-primary-dark text-brown font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl"
                    >
                        Explore Our Gallery
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
