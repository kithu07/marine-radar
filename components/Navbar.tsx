"use client";

import { PlayCircle, Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { navSlideVariant, scaleHoverVariant } from "@/lib/animation-variants";
import { StaggerContainer } from "./StaggerContainer";

export default function Navbar() {
  return (
    <motion.nav
      variants={navSlideVariant}
      initial="hidden"
      animate="visible"
      className="w-full bg-black text-white py-4 md:pt-7 px-4 md:px-32 flex justify-between items-center fixed top-0 z-50"
    >
      <Link href="/" className="flex items-center gap-2">
        <motion.div
          variants={scaleHoverVariant}
          initial="initial"
          whileHover="hover"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} className="md:w-[40px] md:h-[40px]" />
        </motion.div>
        <motion.span
          variants={scaleHoverVariant}
          initial="initial"
          whileHover="hover"
          className="text-lg md:text-xl font-bold"
        >
          Marine Radar
        </motion.span>
      </Link>

      <StaggerContainer className="flex items-center gap-2 md:gap-4">
        <motion.div
          variants={scaleHoverVariant}
          initial="initial"
          whileHover="hover"
          className="w-10 h-8 md:w-12 md:h-9 flex items-center justify-center bg-white rounded-2xl shadow-md cursor-pointer"
        >
          <img src="/android.png" alt="Play Store" className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
        <motion.div
          variants={scaleHoverVariant}
          initial="initial"
          whileHover="hover"
          className="w-10 h-8 md:w-12 md:h-9 flex items-center justify-center bg-white rounded-2xl shadow-md cursor-pointer"
        >
          <img src="/apple.png" alt="App Store" className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </StaggerContainer>
    </motion.nav>
  );
}
