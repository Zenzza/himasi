"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

interface UploadedVideoCardProps {
  videoSrc: string;
  title: string;
}

export default function UploadedVideoCard({ videoSrc, title }: UploadedVideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const generateThumbnail = async () => {
      const video = document.createElement("video");
      video.src = videoSrc;
      video.crossOrigin = "anonymous";
      video.currentTime = 1;
      video.muted = true;
      video.playsInline = true;

      video.addEventListener("loadeddata", () => {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          setThumbnail(canvas.toDataURL("image/jpeg"));
        }
      });
    };
    generateThumbnail();
  }, [videoSrc]);

  return (
    <>
      <div
        className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-lg cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        {thumbnail ? (
          <img src={thumbnail} alt="Video thumbnail" className="w-full h-150 object-cover" />
        ) : (
          <div className="w-full h-48 bg-gray-200 animate-pulse" />
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Play size={40} className="text-white mb-2" />
            <span className="text-white text-sm font-semibold">{title}</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-black rounded-xl overflow-hidden w-full max-w-md shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                autoPlay
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
