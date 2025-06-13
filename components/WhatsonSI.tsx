"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type VideoCardProps = {
  title: string;
  videoId: string;
};

export default function VideoCard({ title, videoId }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Deteksi otomatis jika video Shorts berdasarkan URL ID (kasus kamu bisa custom nanti juga)
  const isShorts = typeof videoId === "string" && videoId.length <= 15;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className={`w-full object-cover transition duration-300 ${
            isShorts ? "aspect-[9/16]" : "aspect-video"
          } group-hover:brightness-75`}
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/80 rounded-full p-4 text-black hover:scale-110 transition">
            <FaPlay className="text-xl" />
          </div>
          <p className="mt-2 text-white font-semibold drop-shadow">{title}</p>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full ${
                isShorts ? "max-w-xs md:max-w-sm" : "max-w-4xl"
              }`}
            >
              <div
                className={`rounded-xl overflow-hidden bg-black ${
                  isShorts ? "aspect-[9/16]" : "aspect-video"
                }`}
                style={{ maxHeight: "90vh" }} 
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
