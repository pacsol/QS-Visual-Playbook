import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Clock, 
  ShieldCheck, 
  Zap, 
  FileText, 
  Layers, 
  ChevronRight,
  Target,
  TrendingUp,
  AlertCircle,
  Search,
  Image as ImageIcon,
  Database
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { cn } from './lib/utils';

// --- Components ---

const Nav = () => (
  <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-neon-green rounded flex items-center justify-center">
          <Layers className="text-ink w-5 h-5" />
        </div>
        <span className="font-display font-bold tracking-tighter text-xl uppercase">QS Visual Playbook</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-60">
        <a href="#problem" className="hover:text-neon-green transition-colors">The Problem</a>
        <a href="#solution" className="hover:text-neon-green transition-colors">The Pipeline</a>
        <a href="#cases" className="hover:text-neon-green transition-colors">Case Studies</a>
        <a href="#roi" className="hover:text-neon-green transition-colors">ROI</a>
      </div>
      <button className="bg-white text-ink px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tighter hover:bg-neon-green transition-all">
        Get the Guide
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#00FF00_0%,transparent_50%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/10" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-[10px] font-bold uppercase tracking-widest mb-8">
          <Zap className="w-3 h-3" /> 2026 Industry Standard
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter uppercase mb-8">
          Win Tenders. <br />
          <span className="text-neon-green">Settle Disputes.</span> <br />
          Save 40+ Hours.
        </h1>
        
        <p className="text-xl md:text-2xl text-paper/60 font-light max-w-2xl mb-12 leading-relaxed">
          How Quantity Surveyors are using <span className="text-white font-medium">Google Grounding + Gemini</span> to produce defensible, client-ready visuals—without a design team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-neon-green text-ink px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 group hover:scale-105 transition-transform">
            Download the Playbook <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-ink bg-zinc-800 overflow-hidden">
                  <img src={`https://picsum.photos/seed/qs${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <span className="text-xs font-mono opacity-60 uppercase tracking-tighter">Joined by 450+ QS Firms</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => {
  const data = [
    { name: 'Sourcing', old: 12, new: 2 },
    { name: 'Editing', old: 18, new: 1 },
    { name: 'Formatting', old: 12, new: 1 },
  ];

  return (
    <section id="problem" className="py-24 border-y border-white/5 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
              The $12,000 Problem <br />
              <span className="opacity-40">Every QS Firm Ignores</span>
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-white/5 bg-white/5 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Lost Tenders on Presentation</h4>
                  <p className="text-sm opacity-60">You lost the last three competitive tenders. Not on price. On presentation. Your cost plan is airtight, but your visuals look like 2014 PowerPoint.</p>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl border border-white/5 bg-white/5 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <Clock className="text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">42 Hours Wasted Per Project</h4>
                  <p className="text-sm opacity-60">Industry surveys show mid-size firms spend 40+ hours sourcing, editing, and formatting visuals for reports and submissions.</p>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl border border-white/5 bg-white/5 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Zero Audit Trail</h4>
                  <p className="text-sm opacity-60">If a client challenges "where did this come from?", you're pointing at a designer's Photoshop file with no connection to the BoQ.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square rounded-3xl border border-white/10 bg-ink overflow-hidden p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono uppercase tracking-widest opacity-40">Visual Production Time (Hours)</span>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="text-[10px] uppercase opacity-40">Old Way</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-green" />
                    <span className="text-[10px] uppercase text-neon-green">AI Pipeline</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} layout="vertical" margin={{ left: 40 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#fff', opacity: 0.4, fontSize: 12, fontFamily: 'JetBrains Mono' }} 
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    />
                    <Bar dataKey="old" fill="rgba(255,255,255,0.1)" radius={[0, 4, 4, 0]} barSize={20} />
                    <Bar dataKey="new" fill="#00FF00" radius={[0, 4, 4, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/5 text-center">
                <p className="text-sm font-mono uppercase tracking-widest text-neon-green">
                  Total Time Saved: 38 Hours / Project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => (
  <section id="solution" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
          The Defensible <br />
          <span className="text-neon-green">Visual Pipeline</span>
        </h2>
        <p className="text-paper/60 text-lg">
          Never let AI imagine things from scratch. Our two-stage pipeline ensures every pixel is backed by your project data.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="group p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-neon-green/30 transition-all">
          <div className="w-14 h-14 rounded-2xl bg-neon-green/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <Search className="text-neon-green w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Stage 1: Grounded Brief</h3>
          <p className="opacity-60 mb-8 leading-relaxed">
            Google Grounding reads your BoQ, specs, and drawings to produce a structured "shot list" with citations. Every claim is backed by a link to the source document.
          </p>
          <ul className="space-y-3">
            {['Verifiable source links', 'Structured metadata', 'Audit trail for disputes'].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm font-mono opacity-80">
                <CheckCircle2 className="w-4 h-4 text-neon-green" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="group p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-neon-green/30 transition-all">
          <div className="w-14 h-14 rounded-2xl bg-neon-green/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <ImageIcon className="text-neon-green w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Stage 2: Controlled Generation</h3>
          <p className="opacity-60 mb-8 leading-relaxed">
            Feed the grounded brief into Gemini. The AI renders from your controlled inputs, not hallucinated assumptions. High-resolution, photorealistic, and auditable.
          </p>
          <ul className="space-y-3">
            {['4K Hero Renders', 'Reference Image Control', 'Built-in SynthID Watermark'].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm font-mono opacity-80">
                <CheckCircle2 className="w-4 h-4 text-neon-green" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudies = () => {
  const cases = [
    {
      title: "Tender Submission Hero",
      category: "Tender",
      result: "Produced in 22 mins",
      saving: "Saved $5,000 fee",
      image: "https://picsum.photos/seed/tender/800/600"
    },
    {
      title: "Elemental Cost Breakdown",
      category: "Report",
      result: "Produced in 15 mins",
      saving: "3 hrs → 15 mins",
      image: "https://picsum.photos/seed/cost/800/600"
    },
    {
      title: "Expert Witness Methodology",
      category: "Dispute",
      result: "Tribunal-ready",
      saving: "8 hrs → 30 mins",
      image: "https://picsum.photos/seed/expert/800/600"
    }
  ];

  return (
    <section id="cases" className="py-24 bg-zinc-950/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
              27 Proven <br />
              <span className="opacity-40">Case Studies</span>
            </h2>
            <p className="text-paper/60 max-w-md">
              From tender hero images to delay claim timelines. Real workflows, real results.
            </p>
          </div>
          <button className="text-neon-green font-mono text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
            View All 27 Cases <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group rounded-3xl border border-white/5 bg-ink overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-ink/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                    {c.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{c.title}</h4>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase opacity-40 mb-1">Result</span>
                    <span className="text-xs font-mono text-neon-green">{c.result}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] uppercase opacity-40 mb-1">Saving</span>
                    <span className="text-xs font-mono">{c.saving}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ROICalculator = () => {
  const [projects, setProjects] = useState(5);
  const [rate, setRate] = useState(150);
  
  const timeSavedPerProject = 38;
  const totalHoursSaved = projects * timeSavedPerProject;
  const revenueRecovered = totalHoursSaved * rate;
  const externalFeesSaved = projects * 5000; // Average visualization fee

  return (
    <section id="roi" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="p-10 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <TrendingUp className="w-32 h-32 text-neon-green" />
            </div>
            
            <h3 className="font-display text-3xl font-bold uppercase tracking-tighter mb-10">ROI Calculator</h3>
            
            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-xs font-mono uppercase tracking-widest opacity-60">Projects Per Year</label>
                  <span className="text-neon-green font-mono">{projects}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={projects} 
                  onChange={(e) => setProjects(parseInt(e.target.value))}
                  className="w-full accent-neon-green"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-xs font-mono uppercase tracking-widest opacity-60">Hourly Billable Rate ($)</label>
                  <span className="text-neon-green font-mono">${rate}</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="500" 
                  step="10"
                  value={rate} 
                  onChange={(e) => setRate(parseInt(e.target.value))}
                  className="w-full accent-neon-green"
                />
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-2 gap-8">
              <div>
                <span className="text-[10px] uppercase opacity-40 block mb-2 tracking-widest">Hours Recovered</span>
                <span className="text-3xl font-display font-bold">{totalHoursSaved.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase opacity-40 block mb-2 tracking-widest">Revenue Potential</span>
                <span className="text-3xl font-display font-bold text-neon-green">${revenueRecovered.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-none">
              Justify This <br />
              <span className="opacity-40 text-paper">To Your Partners</span>
            </h2>
            <p className="text-paper/60 text-lg mb-12 leading-relaxed">
              The numbers don't lie. By switching to an AI-driven visual pipeline, you're not just saving time—you're recovering billable capacity and eliminating massive external consultant fees.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xl font-bold uppercase tracking-tight">
                <div className="w-2 h-2 rounded-full bg-neon-green" />
                Total Annual Impact: <span className="text-neon-green ml-auto">${(revenueRecovered + externalFeesSaved).toLocaleString()}</span>
              </div>
              <p className="text-sm opacity-40 font-mono italic">
                *Based on conservative estimates of 38 hours saved per project and $5k average external visualization fees.
              </p>
            </div>
            
            <button className="mt-12 bg-white text-ink px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-neon-green transition-all">
              Get the Full ROI Model
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-ink">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-neon-green rounded flex items-center justify-center">
              <Layers className="text-ink w-5 h-5" />
            </div>
            <span className="font-display font-bold tracking-tighter text-xl uppercase">QS Visual Playbook</span>
          </div>
          <p className="text-paper/40 max-w-sm leading-relaxed">
            The definitive guide for Quantity Surveyors to win tenders and settle disputes using grounded AI visuals. Built for the 2026 construction landscape.
          </p>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-widest opacity-40 mb-6 font-bold">Resources</h5>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-neon-green transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-neon-green transition-colors">Prompt Templates</a></li>
            <li><a href="#" className="hover:text-neon-green transition-colors">ROI Calculator</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-widest opacity-40 mb-6 font-bold">Legal</h5>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-neon-green transition-colors">RICS Compliance</a></li>
            <li><a href="#" className="hover:text-neon-green transition-colors">Data Privacy</a></li>
            <li><a href="#" className="hover:text-neon-green transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest opacity-40">
        <span>© 2026 QS Visual Playbook. All Rights Reserved.</span>
        <div className="flex gap-8">
          <span>Powered by Gemini 3.1</span>
          <span>Grounded by Google Search</span>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon-green selection:text-ink">
      <Nav />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CaseStudies />
      <ROICalculator />
      
      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-neon-green">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <h2 className="font-display text-5xl md:text-8xl font-bold text-ink uppercase tracking-tighter mb-12">
            Stop Losing. <br />
            Start Winning.
          </h2>
          <button className="bg-ink text-white px-12 py-6 rounded-full font-bold text-2xl uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
            Get the Playbook Now
          </button>
          <p className="mt-8 text-ink/60 font-mono text-xs uppercase tracking-widest font-bold">
            Instant Access • 27 Case Studies • 50+ Prompt Templates
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
