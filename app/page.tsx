"use client";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StaggerContainer } from "@/components/StaggerContainer";
import { AnimatedButton } from "@/components/AnimatedButton";
import { fadeUpVariant, scaleHoverVariant } from "@/lib/animation-variants";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 md:pt-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex bg-[#0C0C0C] border-r-[0.2px] border-b-[0.2px] rounded-br-[41px] overflow-hidden">
        <div className="container mx-auto px-4 my-24 md:my-48 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Track any<br />Vessel, Anywhere!
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stay ahead of the waves!
            </motion.p>
            <AnimatedButton className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full">
              Try for free
            </AnimatedButton>
          </motion.div>
        </div>
        <motion.div 
          className="absolute right-0 bottom-0 w-full md:w-[70vw] h-[200px] md:h-auto max-w-full"
          style={{ aspectRatio: "823.38 / 276" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image
            src="/Earth.png"
            alt="Earth from space"
            fill
            className="object-cover rounded-tl-3xl"
            priority
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <ScrollReveal>
        <section className="py-16 md:py-24 container mx-auto px-4">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-4 text-left"
            variants={fadeUpVariant}
          >
            Every Vessel, Every Move
          </motion.h2>
          <motion.p 
            className="text-[#AAAAAA] mb-8 md:mb-10 text-sm font-medium rounded-md inline-block w-full max-w-xs md:max-w-md min-h-[29px]"
            variants={fadeUpVariant}
          >
            Tap into live ship data — names, types, routes, destinations, and full history at your fingertips.
          </motion.p>

          <StaggerContainer className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <motion.div 
              className="w-full max-w-md border-[0.2px] rounded-[32px] shadow-md flex flex-col overflow-hidden"
              variants={scaleHoverVariant}
              whileHover="hover"
            >
              <div className="w-full h-auto aspect-[307/140] bg-gray-200 rounded-t-[12px]">
                <img src="/feature.png" alt="Vessel" className="w-full h-full object-cover rounded-t-[12px]" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center text-left">
                <h3 className="text-lg font-semibold mb-2">Detailed vessel info</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="w-full max-w-md border-[0.2px] rounded-[32px] shadow-md flex flex-col-reverse overflow-hidden"
              variants={scaleHoverVariant}
              whileHover="hover"
            >
              <div className="w-full h-auto aspect-[307/140] bg-gray-200 rounded-b-[12px]">
                <img src="/feature.png" alt="Port" className="w-full h-full object-cover rounded-b-[12px]" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center text-left">
                <h3 className="text-lg font-semibold mb-2">Ports at a glance</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="w-full max-w-md border-[0.2px] rounded-[32px] shadow-md flex flex-col overflow-hidden"
              variants={scaleHoverVariant}
              whileHover="hover"
            >
              <div className="w-full h-auto aspect-[307/140] bg-gray-200 rounded-t-[12px]">
                <img src="/feature.png" alt="Lighthouse" className="w-full h-full object-cover rounded-t-[12px]" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center text-left">
                <h3 className="text-lg font-semibold mb-2">Lighthouse insights</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>
      </ScrollReveal>

      {/* Pricing Section */}
      <ScrollReveal>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-4 text-left"
              variants={fadeUpVariant}
            >
              Smart plans for every voyage
            </motion.h2>
            <motion.p 
              className="text-[#AAAAAA] mb-8 md:mb-10 text-sm font-medium rounded-md inline-block w-full max-w-xs md:max-w-md min-h-[29px]"
              variants={fadeUpVariant}
            >
              Hear from our marine enthusiasts about how Marine Radar has enhanced their navigation and delivered real-time insights at sea.
            </motion.p>
            <StaggerContainer className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <PricingCard
                title="Free"
                price="$0"
                features={["Up to 2 vessel tracking", "Port data", "Lighthouse data", "Area statistics", "Route planner"]}
              />
              <PricingCard
                title="Pro"
                price="$29"
                features={["Unlimited vessel tracking", "Advanced analytics", "Custom alerts", "API access", "Priority support"]}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                features={["Everything in Pro", "Dedicated support", "Custom integrations", "Team management", "Advanced security"]}
              />
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-4 text-left"
              variants={fadeUpVariant}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-[#AAAAAA] mb-8 md:mb-10 text-sm font-medium rounded-md inline-block w-full max-w-xs md:max-w-md min-h-[29px]"
              variants={fadeUpVariant}
            >
              Find answers to common questions about Marine Radar and vessel tracking.
            </motion.p>
            <StaggerContainer className="max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does Marine Radar work?</AccordionTrigger>
                  <AccordionContent>
                    Marine Radar uses advanced satellite technology and AIS data to track vessels in real-time. Our system processes millions of data points to provide accurate vessel positions, routes, and information.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What types of vessels can I track?</AccordionTrigger>
                  <AccordionContent>
                    You can track any vessel equipped with AIS, including cargo ships, tankers, passenger vessels, and fishing boats. Our system covers vessels worldwide.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is the data real-time?</AccordionTrigger>
                  <AccordionContent>
                    Yes, Marine Radar provides real-time vessel tracking data with minimal latency. Our system updates vessel positions every few seconds.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Download Section */}
      <section className="py-8 md:py-12 container mx-auto px-4 mb-12 md:mb-20">
        <div className="bg-[#0A84FF] rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h1 className="text-white font-semibold text-2xl md:text-4xl lg:text-[62px] leading-tight text-center md:text-left">
              Get the App <br />
              <span className="opacity-60">now</span>
            </h1>

            <div className="flex items-center gap-4 my-6">
              <motion.div 
                className="w-[50px] h-[40px] md:w-[60px] md:h-[48px] lg:w-[70px] lg:h-[56px] flex items-center justify-center bg-white rounded-3xl shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/android.png" alt="Play Store" className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
              <motion.div 
                className="w-[50px] h-[40px] md:w-[60px] md:h-[48px] lg:w-[70px] lg:h-[56px] flex items-center justify-center bg-white rounded-3xl shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/apple.png" alt="App Store" className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
            </div>
          </div>

          <div className="relative pt-6 md:mt-0">
            <Image
              src="/name.png"
              alt="Extra"
              width={1300}
              height={1300}
              className="absolute -top-5 -left-6 md:-top-12 md:-left-10 w-[200px] md:w-auto"
            />
            <Image
              src="/ship.png"
              alt="Ship"
              width={200}
              height={100}
              className="rounded-lg w-[150px] md:w-[200px]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={32} height={32} className="md:w-[40px] md:h-[40px]" />
              <span className="text-lg md:text-xl font-bold">Marine Radar</span>
            </Link>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
              <a href="#" className="hover:text-blue-500">Home</a>
              <a href="#" className="hover:text-blue-500">Experience</a>
              <a href="#" className="hover:text-blue-500">News</a>
              <a href="#" className="hover:text-blue-500">About us</a>
              <a href="#" className="hover:text-blue-500">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}