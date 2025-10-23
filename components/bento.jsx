
"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export default function FUIBentoGridDark() {
     return (
       <div
         className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 container mx-auto min-w-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 bg-[#492efcff]">
         <h1 className="font-geistMono tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
           Our Blogs
         </h1>
         <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl/8 font-medium tracking-tight mt-1 sm:mt-2 bg-gradient-to-br from-black/90 to-black/80 bg-clip-text text-transparent from-black to-gray-400/20 dark:from-white dark:to-white/40 px-2 sm:px-0">
           Know more about your customers than they do.
         </p>
         <div
           className="mt-6 sm:mt-8 md:mt-10 lg:mt-16 grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-6 lg:grid-rows-2">
           <BentoCard
             eyebrow="AI & Machine Learning"
             title="Building Intelligent AI Agents with GPT-4"
             description="Explore how to create autonomous AI agents that can reason, plan, and execute complex tasks. Learn best practices for prompt engineering and agent orchestration."
             graphic={
               <div
                 className="absolute inset-0 bg-[url(https://framerusercontent.com/images/ghyfFEStl6BNusZl0ZQd5r7JpM.png)] object-fill" />
             }
             className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl" />
           <BentoCard
             eyebrow="Automation"
             title="Workflow Automation with N8N & Zapier"
             description="Discover how to streamline your business processes using no-code automation tools. From API integrations to complex multi-step workflows."
             graphic={
               <div
                 className="absolute inset-0 bg-[url(https://framerusercontent.com/images/7CJtT0Pu3w1vNADktNltoMFC9J4.png)] object-fill" />
             }
             className="lg:col-span-3 lg:rounded-tr-4xl" />
           <BentoCard
             eyebrow="Development"
             title="Next.js 15: What's New and What You Need to Know"
             description="Deep dive into the latest features of Next.js 15, including server actions, improved caching, and performance optimizations for modern web apps."
             graphic={
               <div
                 className="absolute  inset-0 -top-20 -left-60 bg-[url(https://framerusercontent.com/images/gR21e8Wh6l3pU6CciDrqt8wjHM.png)] object-scale-down  bg-black" />
             }
             className="lg:col-span-2 lg:rounded-bl-4xl" />
           <BentoCard
             eyebrow="Cloud & DevOps"
             title="Scaling Applications with Docker & Kubernetes"
             description="Learn container orchestration strategies for deploying and scaling production applications. Best practices for CI/CD pipelines and microservices architecture."
             graphic={
               <div
                 className="absolute inset-0 bg-[url(https://framerusercontent.com/images/PTO3RQ3S65zfZRFEGZGpiOom6aQ.png)] object-contain" />
             }
             className="lg:col-span-2" />
           <BentoCard
             eyebrow="Data Science"
             title="Real-Time Analytics with Python & TensorFlow"
             description="Build powerful data pipelines and machine learning models for real-time insights. From data preprocessing to model deployment and monitoring."
             graphic={
               <div
                 className="absolute inset-0 -top-44 -left-60 bg-[url(https://framerusercontent.com/images/h496iPSwtSnGZwpJyErl6cLWdtE.png)] object-contain" />
             }
             className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl" />
         </div>
       </div>
     );
      }
  export function BentoCard({
    dark = false,
    className = "",
    eyebrow,
    title,
    description,
    graphic,
    fade = []
  }) {
        return (
          <motion.div
            initial="idle"
            whileHover="active"
            variants={{ idle: {}, active: {} }}
            data-dark={dark ? "true" : undefined}
            className={clsx(
              className,
              "group relative flex flex-col overflow-hidden rounded-lg ",
              "bg-black transform-gpu [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] shadow-sm ring-1 ring-white/10",
              "data-[dark]:bg-black data-[dark]:ring-white/15"
            )}>
            <div className="relative h-[20rem] sm:h-[24rem] md:h-[26rem] lg:h-[29rem] shrink-0 ">
              {graphic}
              {fade.includes("top") && (
                <div
                  className="absolute inset-0 bg-gradient-to-b from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%] opacity-25" />
              )}
              {fade.includes("bottom") && (
                <div
                  className="absolute inset-0 bg-gradient-to-t from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%] opacity-25 " />
              )}
            </div>
            <div
              className="relative p-4 sm:p-6 md:p-8 lg:p-10 z-20 isolate mt-[-80px] sm:mt-[-90px] md:mt-[-100px] lg:mt-[-110px] h-[10rem] sm:h-[12rem] md:h-[13rem] lg:h-[14rem] backdrop-blur-xl text-white ">
              <h1 className="text-xs sm:text-sm">{eyebrow}</h1>
              <p
                className="mt-0.5 sm:mt-1 text-sm sm:text-lg md:text-xl lg:text-2xl/8 font-medium tracking-tight dark:text-gray-100 text-gray-150 group-data-[dark]:text-white leading-tight">
                {title}
              </p>
              <p
                className="mt-1 sm:mt-2 max-w-[600px] text-xs sm:text-sm/6 text-gray-100 dark:text-gray-300 group-data-[dark]:text-gray-400 leading-tight">
                {description}
              </p>
            </div>
          </motion.div>
        );
      }
      