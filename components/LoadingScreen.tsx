"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-blue-950 text-white flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center"
      >
        <Image
          src="/LogoHIMASI.png"
          alt="Logo HIMASI"
          width={64}
          height={64}
          className="mb-4 animate-pulse"
        />
        <h1 className="text-lg font-semibold mb-2 animate-pulse">
          Memuat konten...
        </h1>
        <div className="w-24 h-1 bg-blue-300 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.2,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
