import { motion, AnimatePresence } from "framer-motion";

interface HeroTitleProps {
  currentWord: number;
  words: readonly string[];
}

const HeroTitle = ({ currentWord, words }: HeroTitleProps) => {
  return (
    <motion.h1 
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center gap-2 lg:gap-4">
        <div className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[currentWord]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-secondary absolute inset-0 flex items-center"
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
        </div>
        <span className="text-white">Locksmith</span>
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">Services in North Bergen</div>
    </motion.h1>
  );
};

export default HeroTitle;