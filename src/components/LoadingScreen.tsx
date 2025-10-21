"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isComplete, setIsComplete] = useState(false);

  const letterVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.3 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const containerVariants = {
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const handleClick = () => {
    setIsComplete(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/20 cursor-pointer"
          onClick={handleClick}
          variants={containerVariants}
          exit="exit"
        >
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-8">
              {"EXPENZA".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-7xl md:text-9xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent"
                  style={{ fontFamily: "'Acme', sans-serif" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-muted-foreground text-lg animate-pulse"
            >
              Click anywhere to continue
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
