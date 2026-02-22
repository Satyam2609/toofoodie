"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Birthday", "Wedding", "Chocolate", "Designer", "Kids"];

const cakes = [
    {
        id: 1,
        name: "Dapper Polo Designer",
        category: "Kids",
        image: "/cake.png",
        description: "A sophisticated Polo shirt themed cake, perfect for stylish celebrations."
    },
    {
        id: 2,
        name: "Chocolate Ribbon Masterpiece",
        category: "Chocolate",
        image: "/cake2.png",
        description: "Rich chocolate layers adorned with elegant golden ribbons and pearls."
    },
    {
        id: 3,
        name: "Azure Butterfly Dream",
        category: "Wedding",
        image: "/cake3.png",
        description: "A stunning three-tiered blue ombre cake decorated with delicate butterflies."
    },
    {
        id: 4,
        name: "Whimsical Pastel Harmony",
        category: "Birthday",
        image: "/cake4.png",
        description: "Soft pastel colors with butterfly accents, ideal for a magical 'HBD Khushi' moment."
    },
    {
        id: 5,
        name: "Glamour Makeup Kit",
        category: "Designer",
        image: "/cake5.png",
        description: "A creative designer cake featuring handcrafted edible makeup accessories."
    }
];

const Gallery = () => {
    const [filter, setFilter] = useState("All");

    const filteredCakes = filter === "All"
        ? cakes
        : cakes.filter(cake => cake.category === filter);

    return (
        <section id="gallery" className="py-24 bg-cream/30">
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-brown mb-4"
                    >
                        Our Masterpieces
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/70 text-lg max-w-2xl mx-auto"
                    >
                        Explore our curated collection of artisanal cakes, designed for every
                        occasion and crafted with perfection.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat
                                ? "bg-primary text-brown shadow-lg"
                                : "bg-white text-foreground hover:bg-primary/20"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCakes.map((cake) => (
                            <motion.div
                                key={cake.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all"
                            >
                                <div className="aspect-square relative overflow-hidden">
                                    <img
                                        src={cake.image}
                                        alt={cake.name}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <p className="text-white text-sm">{cake.description}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                        {cake.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-brown mt-1">
                                        {cake.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
