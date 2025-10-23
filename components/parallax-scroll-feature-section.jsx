'use client';
import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Code, Smartphone, Cloud, Palette, Database, ShoppingCart, Sparkles, Zap, Users, BarChart3, Lock, Bot, Workflow, Brain, MessageSquare, Cpu, Network } from "lucide-react"
import Image from "next/image"

export const Services = () => {
    // Array of comprehensive services data
    const sections = [
        {
            id: 1,
            title: "Web Development",
            subtitle: "Modern, Fast & Scalable",
            description: "We build lightning-fast web applications using cutting-edge technologies like Next.js, React, and Node.js. From single-page applications to complex enterprise platforms, we deliver solutions that scale with your business.",
            imageUrl: 'https://cdn.cosmos.so/6c4a7829-d16a-4a58-9ab9-93fbb3bacb9e.?format=jpeg',
            icon: Code,
            features: [
                "Responsive Design",
                "Progressive Web Apps",
                "SEO Optimized",
                "Performance Focused"
            ],
            stats: { number: "500+", label: "Projects Delivered" },
            reverse: false
        },
        {
            id: 2,
            title: "Mobile App Development",
            subtitle: "Native & Cross-Platform",
            description: "Create stunning mobile experiences for iOS and Android. Whether you need a native app or cross-platform solution with React Native or Flutter, we've got the expertise to bring your vision to life.",
            imageUrl: 'https://cdn.cosmos.so/f827788c-038d-4257-8167-759e819f846d?format=jpeg',
            icon: Smartphone,
            features: [
                "iOS & Android Apps",
                "React Native Development",
                "App Store Optimization",
                "Push Notifications"
            ],
            stats: { number: "200+", label: "Apps Launched" },
            reverse: true
        },
        {
            id: 3,
            title: "Cloud Solutions",
            subtitle: "Scalable Infrastructure",
            description: "Deploy your applications on AWS, Azure, or Google Cloud with our DevOps expertise. We handle everything from containerization with Docker to orchestration with Kubernetes, ensuring your infrastructure scales effortlessly.",
            imageUrl: 'https://cdn.cosmos.so/20351bef-4a9c-4dcc-81d8-e59c84058944?format=jpeg',
            icon: Cloud,
            features: [
                "AWS/Azure/GCP",
                "Docker & Kubernetes",
                "CI/CD Pipelines",
                "Auto Scaling"
            ],
            stats: { number: "99.9%", label: "Uptime SLA" },
            reverse: false
        },
        {
            id: 4,
            title: "UI/UX Design",
            subtitle: "Beautiful & Intuitive",
            description: "Design is not just how it looks—it's how it works. Our design team creates user-centered experiences that delight your customers and drive conversions. From wireframes to pixel-perfect prototypes.",
            imageUrl: 'https://cdn.cosmos.so/6c4a7829-d16a-4a58-9ab9-93fbb3bacb9e.?format=jpeg',
            icon: Palette,
            features: [
                "User Research",
                "Wireframing & Prototyping",
                "Design Systems",
                "Usability Testing"
            ],
            stats: { number: "300+", label: "Designs Created" },
            reverse: true
        },
        {
            id: 5,
            title: "Database Architecture",
            subtitle: "Robust Data Management",
            description: "Build a solid foundation for your data with our database expertise. Whether you need SQL (PostgreSQL, MySQL) or NoSQL (MongoDB, DynamoDB), we design schemas that are secure, efficient, and scalable.",
            imageUrl: 'https://cdn.cosmos.so/f827788c-038d-4257-8167-759e819f846d?format=jpeg',
            icon: Database,
            features: [
                "SQL & NoSQL",
                "Data Migration",
                "Performance Tuning",
                "Backup & Recovery"
            ],
            stats: { number: "10TB+", label: "Data Managed" },
            reverse: false
        },
        {
            id: 6,
            title: "E-Commerce Solutions",
            subtitle: "Sell More, Grow Faster",
            description: "Launch your online store with our comprehensive e-commerce solutions. From product catalogs to payment gateways, inventory management to analytics—we build complete shopping experiences that convert.",
            imageUrl: 'https://cdn.cosmos.so/20351bef-4a9c-4dcc-81d8-e59c84058944?format=jpeg',
            icon: ShoppingCart,
            features: [
                "Custom Shopping Carts",
                "Payment Integration",
                "Inventory Management",
                "Order Tracking"
            ],
            stats: { number: "$50M+", label: "Revenue Processed" },
            reverse: true
        }
    ]

    // Create refs and animations for each section
    const sectionRefs = sections.map(() => useRef(null));
    
    const scrollYProgress = sections.map((_, index) => {
        return useScroll({
            target: sectionRefs[index],
            offset: ["start end", "center start"]
        }).scrollYProgress;
    });

    // Create animations for each section
    const opacityContents = scrollYProgress.map(progress => 
        useTransform(progress, [0, 0.7], [0, 1]));
    
    const clipProgresses = scrollYProgress.map(progress => 
        useTransform(progress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]));
    
    const translateContents = scrollYProgress.map(progress => 
        useTransform(progress, [0, 1], [-30, 0]));
    
    const scaleImages = scrollYProgress.map(progress => 
        useTransform(progress, [0, 0.7], [0.8, 1]));

  return (
      <div className="bg-white">
          {/* AI & Automation Hero Section */}
          <div className='py-8 md:py-12 w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-white px-6 relative overflow-hidden'>
              {/* Animated Background Grid */}
              <div className="absolute inset-0 opacity-[0.03]">
                  <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(rgb(59, 130, 246) 1px, transparent 1px),
                                       linear-gradient(90deg, rgb(59, 130, 246) 1px, transparent 1px)`,
                      backgroundSize: '50px 50px'
                  }}></div>
              </div>

              <div className="max-w-7xl mx-auto relative z-10">
                  {/* Header */}
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-center mb-6">
                      <h1 className='text-2xl md:text-4xl font-bold max-w-3xl mx-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight mb-2'>
                          Our Services
                      </h1>
                      <p className='text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                          We won't just build what you ask for—we'll help you discover what you truly need.
                      </p>
                  </motion.div>

                  {/* Central Character with Floating Cards */}
                  <div className="relative min-h-[450px] md:min-h-[500px] flex items-center justify-center mb-6">
                      {/* Central Character Image */}
                      <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="relative z-20">
                          <div className="relative">
                              <Image 
                                  src="/show2d1.png" 
                                  alt="AI Character" 
                                  width={250} 
                                  height={250}
                                  className="object-contain drop-shadow-2xl"
                              />
                              {/* Glow effect around character */}
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl -z-10"></div>
                          </div>
                      </motion.div>

                      {/* Floating AI Service Cards Around Character */}
                      
                      {/* Top Left - AI Agents */}
                      <motion.div
                          initial={{ opacity: 0, x: -100, y: -50 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="absolute top-0 left-0 md:left-12 lg:left-20 z-10">
                          <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-3 w-40 hover:scale-105 transition-transform">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-1.5">
                                  <Bot className="w-4 h-4 text-white" />
                              </div>
                              <h3 className="text-xs font-bold text-gray-900 mb-0.5">AI Agents</h3>
                              <p className="text-[10px] text-gray-600 leading-tight">Autonomous agents that handle complex tasks</p>
                              <div className="mt-1.5 flex gap-1">
                                  <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[9px]">GPT-4</span>
                                  <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-700 rounded text-[9px]">Claude</span>
                              </div>
                          </div>
                      </motion.div>

                      {/* Top Right - N8N Automation */}
                      <motion.div
                          initial={{ opacity: 0, x: 100, y: -50 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="absolute top-0 right-0 md:right-12 lg:right-20 z-10">
                          <div className="bg-white rounded-xl shadow-lg border border-purple-100 p-3 w-40 hover:scale-105 transition-transform">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-1.5">
                                  <Workflow className="w-4 h-4 text-white" />
                              </div>
                              <h3 className="text-xs font-bold text-gray-900 mb-0.5">N8N Automation</h3>
                              <p className="text-[10px] text-gray-600 leading-tight">Visual workflow automation & integration</p>
                              <div className="mt-1.5 flex gap-1">
                                  <span className="px-1.5 py-0.5 bg-purple-50 text-purple-700 rounded text-[9px]">API</span>
                                  <span className="px-1.5 py-0.5 bg-pink-50 text-pink-700 rounded text-[9px]">Webhooks</span>
                              </div>
                          </div>
                      </motion.div>

                      {/* Middle Left - Machine Learning */}
                      <motion.div
                          initial={{ opacity: 0, x: -120 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          className="absolute top-1/2 -translate-y-1/2 left-0 md:left-4 lg:left-8 z-10">
                          <div className="bg-white rounded-xl shadow-lg border border-cyan-100 p-3 w-44 hover:scale-105 transition-transform">
                              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-1.5">
                                  <Brain className="w-4 h-4 text-white" />
                              </div>
                              <h3 className="text-xs font-bold text-gray-900 mb-0.5">Machine Learning</h3>
                              <p className="text-[10px] text-gray-600 leading-tight">Predictive models & pattern recognition</p>
                              <div className="mt-1.5 flex gap-1">
                                  <span className="px-1.5 py-0.5 bg-cyan-50 text-cyan-700 rounded text-[9px]">TensorFlow</span>
                                  <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[9px]">PyTorch</span>
                              </div>
                          </div>
                      </motion.div>

                      {/* Middle Right - Chatbots */}
                      <motion.div
                          initial={{ opacity: 0, x: 120 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                          className="absolute top-1/2 -translate-y-1/2 right-0 md:right-4 lg:right-8 z-10">
                          <div className="bg-white rounded-xl shadow-lg border border-green-100 p-3 w-44 hover:scale-105 transition-transform">
                              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-1.5">
                                  <MessageSquare className="w-4 h-4 text-white" />
                              </div>
                              <h3 className="text-xs font-bold text-gray-900 mb-0.5">AI Chatbots</h3>
                              <p className="text-[10px] text-gray-600 leading-tight">Intelligent conversational assistants</p>
                              <div className="mt-1.5 flex gap-1">
                                  <span className="px-1.5 py-0.5 bg-green-50 text-green-700 rounded text-[9px]">NLP</span>
                                  <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[9px]">24/7</span>
                              </div>
                          </div>
                      </motion.div>

                      {/* Bottom Left - Computer Vision */}
                      <motion.div
                          initial={{ opacity: 0, x: -100, y: 50 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="absolute bottom-0 left-0 md:left-12 lg:left-24 z-10">
                          <div className="bg-white rounded-xl shadow-lg border border-orange-100 p-3 w-40 hover:scale-105 transition-transform">
                              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-1.5">
                                  <Cpu className="w-4 h-4 text-white" />
                              </div>
                              <h3 className="text-xs font-bold text-gray-900 mb-0.5">Computer Vision</h3>
                              <p className="text-[10px] text-gray-600 leading-tight">Image & video analysis automation</p>
                              <div className="mt-1.5 flex gap-1">
                                  <span className="px-1.5 py-0.5 bg-orange-50 text-orange-700 rounded text-[9px]">OCR</span>
                                  <span className="px-1.5 py-0.5 bg-red-50 text-red-700 rounded text-[9px]">Detection</span>
                              </div>
                          </div>
                      </motion.div>

                      {/* Bottom Right - RPA */}
                      <motion.div
                          initial={{ opacity: 0, x: 100, y: 50 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.9 }}
                          className="absolute bottom-0 right-0 md:right-12 lg:right-24 z-10">
                          <div className="bg-white rounded-xl shadow-lg border border-teal-100 p-3 w-40 hover:scale-105 transition-transform">
                              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-1.5">
                                  <Network className="w-4 h-4 text-white" />
                              </div>
                              <h3 className="text-xs font-bold text-gray-900 mb-0.5">RPA Solutions</h3>
                              <p className="text-[10px] text-gray-600 leading-tight">Robotic process automation systems</p>
                              <div className="mt-1.5 flex gap-1">
                                  <span className="px-1.5 py-0.5 bg-teal-50 text-teal-700 rounded text-[9px]">UiPath</span>
                                  <span className="px-1.5 py-0.5 bg-cyan-50 text-cyan-700 rounded text-[9px]">Custom</span>
                              </div>
                          </div>
                      </motion.div>

                      {/* Connecting Lines/Dots (Optional decorative elements) */}
                      <div className="absolute inset-0 -z-10">
                          <svg className="w-full h-full opacity-10" viewBox="0 0 800 600">
                              <circle cx="400" cy="300" r="150" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-300" />
                              <circle cx="400" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-indigo-300" />
                          </svg>
                      </div>
                  </div>
              </div>
          </div>

          {/* Services Sections */}
          <div className="flex flex-col">
               {sections.map((section, index) => {
                   const Icon = section.icon;
                   return (
                   <div
                       key={section.id}
                       ref={sectionRefs[index]}
                       className={`min-h-screen flex items-center justify-center py-20 px-6 md:px-12 ${
                           index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                       }`}>
                       <div className={`max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                           section.reverse ? 'lg:flex-row-reverse' : ''
                       }`}>
                           {/* Content Side */}
                           <motion.div 
                               style={{ y: translateContents[index] }}
                               className={`${section.reverse ? 'lg:order-2' : ''}`}>
                               {/* Icon Badge */}
                               <motion.div
                                   style={{ opacity: opacityContents[index] }}
                                   className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/30">
                                   <Icon className="w-8 h-8 text-white" />
                               </motion.div>

                               {/* Title & Subtitle */}
                               <motion.div
                                   style={{ opacity: opacityContents[index] }}>
                                   <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                                       {section.subtitle}
                                   </h3>
                                   <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                       {section.title}
                                   </h2>
                               </motion.div>

                               {/* Description */}
                               <motion.p
                                   style={{ opacity: opacityContents[index] }}
                                   className="text-lg text-gray-600 leading-relaxed mb-8">
                                   {section.description}
                               </motion.p>

                               {/* Features Grid */}
                               <motion.div
                                   style={{ opacity: opacityContents[index] }}
                                   className="grid grid-cols-2 gap-3 mb-8">
                                   {section.features.map((feature, idx) => (
                                       <div key={idx} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
                                           <Zap className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                           <span className="text-sm font-medium text-gray-700">{feature}</span>
                                       </div>
                                   ))}
                               </motion.div>

                               {/* Stats Card */}
                               <motion.div
                                   style={{ opacity: opacityContents[index] }}
                                   className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-xl shadow-blue-500/30">
                                   <div className="flex items-center gap-4">
                                       <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                           <BarChart3 className="w-6 h-6 text-white" />
                                       </div>
                                       <div>
                                           <div className="text-3xl font-bold text-white">{section.stats.number}</div>
                                           <div className="text-sm text-blue-100">{section.stats.label}</div>
                                       </div>
                                   </div>
                               </motion.div>
                           </motion.div>

                           {/* Image Side */}
                           <motion.div
                               style={{ 
                                   opacity: opacityContents[index],
                                   clipPath: clipProgresses[index],
                                   scale: scaleImages[index]
                               }}
                               className={`relative ${section.reverse ? 'lg:order-1' : ''}`}>
                               {/* Main Image */}
                               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                   <img
                                       src={section.imageUrl}
                                       className="w-full h-[400px] md:h-[500px] object-cover"
                                       alt={section.title} />
                                   
                                   {/* Image Overlay Gradient */}
                                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                                   
                                   {/* Floating Badge on Image */}
                                   <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                                       <div className="flex items-center gap-2">
                                           <Lock className="w-4 h-4 text-green-600" />
                                           <span className="text-sm font-semibold text-gray-900">Secure & Reliable</span>
                                       </div>
                                   </div>
                               </div>

                               {/* Decorative Elements */}
                               <div className="absolute -z-10 -top-6 -right-6 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
                               <div className="absolute -z-10 -bottom-6 -left-6 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
                           </motion.div>
                       </div>
                   </div>
                   );
               })}
           </div>

          {/* CTA Section */}
          <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-6'>
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center max-w-4xl">
                 
                  <h2 className='text-3xl md:text-3xl font-bold text-gray-900 mb-6'>
                      Ready to Get Started?
                  </h2>
                  <p className='text-xl text-gray-600 mb-12 leading-relaxed'>
                      Let's build something amazing together. Our team is ready to transform your vision into reality with cutting-edge technology and innovative solutions.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                      <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                          Start Your Project <ArrowDown className="rotate-[-90deg]" size={20} />
                      </button>
                      <button className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-2">
                          <Users size={20} /> Talk to Our Team
                      </button>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                      <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600">500+</div>
                          <div className="text-sm text-gray-600 mt-1">Projects</div>
                      </div>
                      <div className="text-center">
                          <div className="text-3xl font-bold text-indigo-600">200+</div>
                          <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
                      </div>
                      <div className="text-center">
                          <div className="text-3xl font-bold text-cyan-600">99.9%</div>
                          <div className="text-sm text-gray-600 mt-1">Uptime</div>
                      </div>
                      <div className="text-center">
                          <div className="text-3xl font-bold text-teal-600">24/7</div>
                          <div className="text-sm text-gray-600 mt-1">Support</div>
                      </div>
                  </div>
              </motion.div>
         </div>
      </div>
  );
};
