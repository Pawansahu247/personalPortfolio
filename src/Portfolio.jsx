

import React, { useState } from 'react';
import { 
  User, FileText, Briefcase, Code, Mail, Github, 
  Linkedin, Twitter, Instagram, MapPin, Calendar, 
  Smartphone, Layout, Globe, PenTool, Terminal, Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Components ---
const InfoItem = ({ icon: Icon, label, value, isLink }) => (
  <div className="flex items-center gap-4 mb-5 group">
    <div className="w-10 h-10 bg-[#1e293b] rounded-xl flex items-center justify-center text-[#ffdb70] shadow-md border border-slate-700 group-hover:border-[#ffdb70]/50 transition-colors">
      <Icon size={18} />
    </div>
    <div className="overflow-hidden">
      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{label}</p>
      {isLink ? (
        <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors truncate block font-medium">
          {value}
        </a>
      ) : (
        <p className="text-sm text-slate-200 truncate font-medium">{value}</p>
      )}
    </div>
  </div>
);

// --- Section Components ---
const AboutSection = () => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: -10 }}
    className="space-y-8"
  >
    <section>
      <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
        About Me
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ffdb70] rounded-full"></span>
      </h2>
      <div className="space-y-4 text-slate-300 leading-relaxed">
        <p>
          Hi, I’m Pawan Sahu, a BSc Computer Science student from Ranchi with a passion for web development. 
          I enjoy building responsive and user-friendly websites using HTML, CSS, JavaScript, and React.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive. 
          Moreover, I add a personal touch to your products and make sure they are eye-catching and easy to use.
        </p>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">What I'm Doing</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Software Engineering", icon: <Layout />, desc: "The most modern and high-quality design made at a professional level." },
          { title: "Web Development", icon: <Globe />, desc: "High-quality development of sites at a professional level." },
          { title: "Wireframing", icon: <Smartphone />, desc: "Professional wire-framing for applications for iOS and Android." },
          { title: "UI-Prototype", icon: <PenTool />, desc: "I make high-quality prototypes of web designs of any category." }
        ].map((item, i) => (
          <div key={i} className="p-6 bg-[#212c3d] border border-slate-700 rounded-2xl flex gap-4 shadow-lg hover:border-[#ffdb70]/30 transition-all">
            <div className="text-[#ffdb70] mt-1 shrink-0">{item.icon}</div>
            <div>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

// --- Main Layout ---
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 p-4 md:p-8 lg:p-16 font-sans selection:bg-[#ffdb70]/30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-start">
        
        {/* SIDEBAR */}
        <aside className="w-full lg:w-80 bg-[#1e293b] border border-slate-700 rounded-[30px] p-8 lg:sticky lg:top-10 shadow-2xl z-10">
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 bg-[#2d3a4f] rounded-[30px] overflow-hidden mb-6 border border-slate-700 shadow-inner">
              <img 
                src="/assets/images/mypic.png" 
                alt="Pawan Prasad Sahu" 
                className="w-full h-full object-cover" 
              />
            </div>
            <h1 className="text-2xl font-bold text-white text-center whitespace-nowrap">Pawan Prasad Sahu</h1>
            <span className="text-[12px] bg-[#2d3a4f] text-slate-100 px-4 py-1.5 rounded-lg mt-4 font-medium">Full Stack Developer</span>
          </div>

          <div className="w-full h-px bg-slate-700 my-8"></div>

          <div className="w-full">
            <InfoItem icon={Mail} label="Email" value="sahupawanprasad@gmail.com" />
            <InfoItem icon={Smartphone} label="Phone" value="+91 XXX" />
            <InfoItem icon={Calendar} label="Birthday" value="31 May, 2005" />
            <InfoItem icon={MapPin} label="Location" value="Jashpur, Chhattisgarh" />
            
            {/* LEETCODE STAT */}
            <InfoItem 
              icon={Terminal} 
              label="LeetCode" 
              value="50 + Questions Solved" 
              isLink={true} 
            />

            {/* CAREER HIGHLIGHTS */}
            <InfoItem icon={Award} label="Achievement" value="SAP Scholar 2026 Batch" />
            <InfoItem icon={Briefcase} label="Internship" value="Web Dev @ Digital Nexus AI" />
          </div>

          <div className="flex justify-center gap-5 mt-8 text-slate-400">
             <a href="#" className="text-slate-400 hover:text-cyan-400"><Github size={20}/></a>
      <a href="#" className="text-slate-400 hover:text-cyan-400"><Linkedin size={20}/></a>
            <Github size={18} className="hover:text-[#ffdb70] cursor-pointer transition-colors" />
            <Twitter size={18} className="hover:text-[#ffdb70] cursor-pointer transition-colors" />
            <Linkedin size={18} className="hover:text-[#ffdb70] cursor-pointer transition-colors" />
            <Instagram size={18} className="hover:text-[#ffdb70] cursor-pointer transition-colors" />
          </div>
        </aside>

        {/* CONTENT AREA */}
        <main className="flex-1 w-full bg-[#1e293b] border border-slate-700 rounded-[30px] relative overflow-hidden shadow-2xl min-h-[750px]">
          
          {/* NAVIGATION (Notched Style) */}
          <nav className="lg:absolute top-0 right-0 bg-[#2b3a4f] border-b border-l border-slate-700 rounded-bl-[25px] rounded-tr-[30px] px-10 py-1 z-20 w-full lg:w-auto overflow-x-auto">
            <ul className="flex justify-around lg:justify-end gap-8 whitespace-nowrap">
              {['About', 'Resume', 'Projects', 'Skill', 'Contact'].map((tab) => (
                <li key={tab}>
                  <button 
                    onClick={() => setActiveTab(tab)}
                    className={`text-[14px] font-bold py-5 px-1 transition-colors relative ${
                      activeTab === tab ? 'text-[#ffdb70]' : 'text-slate-400 hover:text-slate-100'
                    }`}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* PAGE CONTENT */}
          <div className="p-8 md:p-12 mt-10 lg:mt-16">
            <AnimatePresence mode="wait">
              {activeTab === 'About' ? (
                <AboutSection key="about" />
              ) : (
                <motion.div 
                  key="placeholder"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="flex flex-col items-center justify-center py-32 text-slate-500"
                >
                  <Code size={48} className="mb-4 opacity-20" />
                  <p className="uppercase tracking-widest font-bold text-sm">{activeTab} Section coming soon</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}