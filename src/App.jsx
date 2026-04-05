import React, { useState } from 'react';
import {
  User, FileText, Briefcase, Code, Mail, Github,
  Linkedin, Twitter, Instagram, MapPin, Calendar,
  Smartphone, Layout, Globe, PenTool, Terminal, Award, ExternalLink, ChevronRight
} from 'lucide-react';
import profilePic from "./assets/pic.jpeg";
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Components ---
const InfoItem = ({ icon: Icon, label, value, isLink }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex items-center gap-4 p-3 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-[#ffdb70]/50 transition-all group mb-3 shadow-sm text-left"
  >
    <div className="w-10 h-10 bg-[#1e293b] rounded-xl flex items-center justify-center text-[#ffdb70] shadow-inner border border-slate-700 group-hover:bg-[#ffdb70] group-hover:text-[#1e293b] transition-all duration-300 shrink-0">
      <Icon size={18} />
    </div>
    <div className="overflow-hidden flex-1">
      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">{label}</p>
      {isLink ? (
        <span className="block">{value}</span>
      ) : (
        <p className="text-sm text-slate-200 truncate font-semibold tracking-wide">{value}</p>
      )}
    </div>
    <ChevronRight size={14} className="text-slate-600 group-hover:text-[#ffdb70] transition-colors" />
  </motion.div>
);

// --- Project Card Component ---
const ProjectCard = ({ title, category, tech, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative bg-[#212c3d] border border-slate-700 rounded-3xl p-6 mb-8 overflow-hidden transition-all hover:border-[#ffdb70]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
  >
    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity text-[#ffdb70]">
      <ExternalLink size={32} />
    </div>
    
    <div className="text-left relative z-10">
      <span className="text-[#ffdb70] text-xs font-bold uppercase tracking-widest bg-[#ffdb70]/10 px-3 py-1 rounded-full mb-4 inline-block">
        {category}
      </span>
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ffdb70] transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="text-[10px] bg-[#1e293b] text-slate-300 border border-slate-700 px-3 py-1 rounded-lg font-semibold">
            {item}
          </span>
        ))}
      </div>
    </div>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ffdb70]/5 rounded-full blur-3xl group-hover:bg-[#ffdb70]/10 transition-all"></div>
  </motion.div>
);

// --- Page Sections ---
const AboutSection = () => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
    <section>
      <h2 className="text-3xl font-bold text-white mb-6 relative inline-block text-left w-full">
        About Me
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ffdb70] rounded-full"></span>
      </h2>
      <div className="space-y-4 text-slate-300 leading-relaxed text-left">
        <p>I usually describe myself more by the kind of work I enjoy than by my background alone. I like understanding how things work in a professional environment and constantly improving my skills through practical experience.</p>
        <p>During my time as a BSc Computer Science student, I’ve worked on multiple projects and internships where I had to research, analyze problems, and build real solutions. These experiences helped me become more disciplined, responsible, and comfortable taking ownership of my work.</p>
        <p>Right now, I’m looking for an opportunity where I can apply my web development skills, learn from experienced professionals, and grow within a collaborative and challenging work environment.</p>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6 text-left">What I'm Doing</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Software Engineering", icon: <Layout />, desc: "I work on building clean and maintainable code by focusing on logic, structure, and best practices." },
          { title: "Web Development", icon: <Globe />, desc: "I develop responsive and user-friendly websites using HTML, CSS, JavaScript, and React." },
          { title: "Wireframing", icon: <Smartphone />, desc: "I create basic wireframes to plan layouts and user flows before development." },
          { title: "UI-Prototype", icon: <PenTool />, desc: "I design simple and interactive UI prototypes to visualize ideas and improve user experience before final implementation." }
        ].map((item, i) => (
          <div key={i} className="p-6 bg-[#212c3d] border border-slate-700 rounded-2xl flex gap-4 shadow-lg text-left transition-all hover:border-[#ffdb70]/30">
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

const ResumeSection = () => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-12 text-left">
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#1e293b] rounded-xl flex items-center justify-center text-[#ffdb70] shadow-md border border-slate-700">
          <Award size={24} />
        </div>
        <h2 className="text-3xl font-bold text-white">Education</h2>
      </div>
      <div className="space-y-8 ml-6 border-l-2 border-slate-700">
        {[
          { title: "Marwari College Ranchi", date: "2023 — 2026", desc: "B.Sc in Computer Science. Currently maintaining a CGPA of 8.4." },
          { title: "Holy Cross School (XIIth)", date: "2022 — 2023", desc: "Completed CBSE Board with focus on Science and Mathematics (67.6%)." }
        ].map((edu, i) => (
          <div key={i} className="relative pl-8 group">
            <div className="absolute w-3 h-3 bg-[#ffdb70] rounded-full -left-[7px] top-2 shadow-[0_0_10px_#ffdb70]"></div>
            <h4 className="text-white font-bold text-lg">{edu.title}</h4>
            <span className="text-[#ffdb70] text-sm font-medium">{edu.date}</span>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <div className="flex items-center gap-4 mb-8 text-white">
        <div className="w-12 h-12 bg-[#1e293b] rounded-xl flex items-center justify-center text-[#ffdb70] shadow-md border border-slate-700">
          <Briefcase size={24} />
        </div>
        <h2 className="text-3xl font-bold">Experience</h2>
      </div>
      <div className="space-y-8 ml-6 border-l-2 border-slate-700">
        {[
          { title: "Web Developer Intern @ Digital Nexus AI", date: "Sept 2025 — Present", desc: "Gaining practical experience building responsive web applications." },
          { title: "Deloitte Technology Virtual Internship", date: "2025", desc: "Explored real-world tech solutions through Deloitte's program." },
          { title: "DSA Training (Alpha 7.0)", date: "2025", desc: "Solved 150+ problems on LeetCode/GFG using Java." }
        ].map((exp, i) => (
          <div key={i} className="relative pl-8 group">
            <div className="absolute w-3 h-3 bg-[#ffdb70] rounded-full -left-[7px] top-2 shadow-[0_0_10px_#ffdb70]"></div>
            <h4 className="text-white font-bold text-lg">{exp.title}</h4>
            <span className="text-[#ffdb70] text-sm font-medium">{exp.date}</span>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const ProjectSection = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
    <div className="text-left mb-12">
      <h2 className="text-3xl font-bold text-white relative inline-block">
        Featured Projects
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ffdb70] rounded-full"></span>
      </h2>
      <p className="text-slate-400 mt-4">Major works in full-stack development and UI engineering.</p>
    </div>
    <div className="space-y-6">
      <a href="https://swifthire-io.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
        <ProjectCard 
          category="Major Project (Group Project) / Recruitment"
          title="SwiftHire"
          tech={["React.js", "Tailwind CSS", "PostgreSQL", "SDLC", "Framer Motion", "Node.js"]}
          description="A recruitment platform designed to help hiring teams find and manage candidates more efficiently through a smooth workflow and modern user interface."
        />
      </a>
      <a href="https://healthivo.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
        <ProjectCard 
          category="Healthcare Solution"
          title="Doctor Appointment Booking System"
          tech={["React.js", "Context API", "CSS Modules", "Firebase"]}
          description="A doctor appointment booking system that enables patients to check doctor availability and schedule appointments efficiently through a clean and responsive web interface."
        />
      </a>
      <ProjectCard 
        category="Utility / Management"
        title="Library Management System"
        tech={["React.js", "SQL", "Vite", "Node.js"]}
        description="Digital solution for book inventories and member registration with robust search analytics."
      />
    </div>
  </motion.div>
);

// --- Main Layout ---
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-slate-300 p-4 md:p-8 lg:p-16 font-sans selection:bg-[#ffdb70]/30 selection:text-[#0b0f1a]">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ffdb70]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start relative">
        
        {/* ADVANCED SIDEBAR */}
        <aside className="w-full lg:w-85 lg:sticky lg:top-10 flex flex-col gap-6">
          <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-slate-700/50 rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
            
            {/* Profile Section */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#ffdb70] rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="w-40 h-40 bg-[#2d3a4f] rounded-[32px] overflow-hidden flex items-center justify-center border-2 border-slate-700 group-hover:border-[#ffdb70]/50 transition-all duration-500 relative z-10 p-1 shadow-inner">
                  <img src={profilePic} alt="Pawan" className="w-full h-full object-cover rounded-[28px] object-top" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-[#1e293b] z-20 shadow-lg" title="Active"></div>
              </div>

              <motion.h1 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-2xl font-bold text-white text-center whitespace-nowrap tracking-tight mb-2"
              >
                Pawan Prasad Sahu
              </motion.h1>
              
              <div className="bg-[#2d3a4f] text-[#ffdb70] px-4 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-[#ffdb70]/20 shadow-md">
                Software Engineer
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8 opacity-50"></div>

            {/* Interactive Info List */}
            <div className="w-full">
              <InfoItem icon={Mail} label="Email" value="sahujii007343sd@gmail.com" />
              <InfoItem icon={Smartphone} label="Phone" value="+91 70010 XXXXX" />
              <InfoItem icon={MapPin} label="Location" value="Jashpur, Chhattisgarh" />
              <InfoItem icon={Terminal} label="LeetCode" isLink value={<a href="https://leetcode.com/u/sahux07/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-[#ffdb70] transition-colors font-semibold">100+ Problem Solved</a>} />
              <InfoItem icon={Award} label="Achievement" isLink value={<a href="https://leetcode.com/discuss/post/7786619/sapscholar-software-engineer-oncampus-se-04hz/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-[#ffdb70] transition-colors font-semibold">Scholar @ SAP 2026 Batch</a>} />
              <InfoItem icon={Briefcase} label="Internship" isLink value={<a href="https://digitalnexusai.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-[#ffdb70] transition-colors font-semibold">Digital Nexus AI</a>} />
            </div>

            {/* Social Connections */}
            <div className="flex justify-center gap-3 mt-6 pt-6 border-t border-slate-700/30">
              <motion.a whileHover={{ y: -3 }} href="https://github.com/Pawansahu247" className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#ffdb70] hover:border-[#ffdb70]/30 transition-all"><Github size={18} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/in/pawan247/" className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#ffdb70] hover:border-[#ffdb70]/30 transition-all"><Linkedin size={18} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#ffdb70] hover:border-[#ffdb70]/30 transition-all"><Twitter size={18} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/_sahu_245/" className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#ffdb70] hover:border-[#ffdb70]/30 transition-all"><Instagram size={18} /></motion.a>
            </div>
          </div>
        </aside>

        {/* CONTENT AREA */}
        <main className="flex-1 w-full bg-[#1e293b]/80 backdrop-blur-xl border border-slate-700/50 rounded-[40px] relative overflow-hidden shadow-2xl min-h-[750px]">
          <nav className="lg:absolute top-0 right-0 bg-[#2b3a4f] border-b border-l border-slate-700/50 rounded-bl-[25px] rounded-tr-[30px] px-10 py-1 z-20 w-full lg:w-auto overflow-x-auto">
            <ul className="flex justify-around lg:justify-end gap-8 whitespace-nowrap">
              {['About', 'Resume', 'Projects', 'Skill', 'Contact'].map((tab) => (
                <li key={tab}>
                  <button onClick={() => setActiveTab(tab)} className={`text-[14px] font-bold py-5 px-1 transition-colors ${activeTab === tab ? 'text-[#ffdb70]' : 'text-slate-400 hover:text-slate-100'}`}>
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-8 md:p-12 mt-10 lg:mt-16">
            <AnimatePresence mode="wait">
              {activeTab === 'About' && <AboutSection key="about" />}
              {activeTab === 'Resume' && <ResumeSection key="resume" />}
              {activeTab === 'Projects' && <ProjectSection key="projects" />}
              {!['About', 'Resume', 'Projects'].includes(activeTab) && (
                <motion.div key="place" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 text-center text-slate-500">
                  <Code size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="uppercase tracking-widest text-sm">{activeTab} Section coming soon
                    Feel free to connect with me on LinkedIn
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
