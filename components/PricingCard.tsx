"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";
import { fadeUpVariant } from "@/lib/animation-variants";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, highlighted }) => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={`w-[304px] max-w-full p-6 flex flex-col justify-between rounded-[32px] border shadow-md 
        ${highlighted
          ? "bg-gradient-to-b from-[#0A84FF]/40 to-[#064F9900] border-[#0A84FF] shadow-[0px_0px_22.6px_3px_#0A84FF63]" 
          : "bg-[#0E0E0E] border-[#F2F2F224]"
        }`}
    >
      {/* Plan & Features */}
      <div>
        <motion.h3 
          className="text-lg font-semibold text-white"
          variants={fadeUpVariant}
        >
          {title}
        </motion.h3>
        <hr className="my-3 border-[#AAAAAA]/40" />
        <motion.ul 
          className="space-y-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-center gap-2 text-[#FFFFFF] text-sm"
              variants={fadeUpVariant}
            >
              <Check className="w-4 h-4 text-[#0A84FF]" />
              {feature}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Price & Button */}
      <div className="mt-6">
        <motion.h2 
          className="text-2xl font-bold text-white"
          variants={fadeUpVariant}
        >
          {price}/month
        </motion.h2>
        <AnimatedButton
          className={`mt-8 w-full py-4 text-sm font-bold rounded-full transition
            ${highlighted 
              ? "bg-[#0A84FF] text-white shadow-[0px_0px_22.6px_3px_#0A84FF63] hover:bg-[#0A84FF]/80" 
              : "border border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF]/20"
            }`}
        >
          Get Started
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

export default PricingCard;
