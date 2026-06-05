/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Gamepad2, 
  Users, 
  Clock, 
  DollarSign, 
  ShieldAlert, 
  CheckCircle,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Inbox,
  AlertTriangle,
  Info,
  Layers,
  Facebook,
  Instagram,
  Youtube,
  Music,
  Share2
} from 'lucide-react';

import { TOURNAMENTS, SOCIAL_LINKS, FAQS, PRIVACY_POLICY, TERMS_AND_CONDITIONS } from './data';
import { PageTab } from './types';

// Import assets generated dynamically
import soldierLogo from './assets/images/soldier_logo_1780643260774.png';
import gamingBg from './assets/images/gaming_bg_1780643277137.png';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTournamentFilter, setActiveTournamentFilter] = useState<'All' | 'Mobile' | 'PC'>('All');

  // Filter tournaments
  const filteredTournaments = TOURNAMENTS.filter(t => {
    if (activeTournamentFilter === 'All') return true;
    return t.platform === activeTournamentFilter;
  });

  const getMediaIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook': return <Facebook className="w-5 h-5 md:w-6 md:h-6" />;
      case 'instagram': return <Instagram className="w-5 h-5 md:w-6 md:h-6" />;
      case 'youtube': return <Youtube className="w-5 h-5 md:w-6 md:h-6" />;
      default: return <Music className="w-5 h-5 md:w-6 md:h-6" />; // Music as unique representation of TikTok
    }
  };

  const navigateTo = (tab: PageTab) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-green-500 selection:text-black relative overflow-x-hidden">
      
      {/* Background Cyber Glow Blobs - Single very subtle tactical green ambient light */}
      <div className="absolute top-[-10%] left-[10%] w-[50%] h-[50%] bg-[#22c55e]/03 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Dynamic Header */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-zinc-800 group-hover:border-green-500/50 group-hover:scale-105 transition-all duration-300">
              <img 
                src={soldierLogo} 
                alt="Soldier E-Sports Mascot" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-display font-black text-xl tracking-wider text-white uppercase group-hover:text-green-400 transition-colors">
                  SOLDIER
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              </div>
              <span className="block font-mono text-[9px] text-zinc-500 font-bold tracking-widest mt-[-2px] uppercase">
                ESPORTS ARENA
              </span>
            </div>
          </div>
 
          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
            <button
              onClick={() => navigateTo('home')}
              className={`p-2 transition-all hover:text-green-400 cursor-pointer ${currentTab === 'home' ? 'text-green-400 font-bold border-b-2 border-green-500' : 'text-zinc-400'}`}
            >
              ARENA HOME
            </button>
            <button
              onClick={() => navigateTo('terms')}
              className={`p-2 transition-all hover:text-green-400 cursor-pointer ${currentTab === 'terms' ? 'text-green-400 font-bold border-b-2 border-green-500' : 'text-zinc-400'}`}
            >
              TERMS & CONDITIONS
            </button>
            <button
              onClick={() => navigateTo('privacy')}
              className={`p-2 transition-all hover:text-green-400 cursor-pointer ${currentTab === 'privacy' ? 'text-green-400 font-bold border-b-2 border-green-500' : 'text-zinc-400'}`}
            >
              PRIVACY POLICY
            </button>
          </nav>
 
          {/* Call to action (Direct Scroll) */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#tournaments-section"
              onClick={(e) => {
                if (currentTab !== 'home') {
                  navigateTo('home');
                }
              }}
              className="bg-green-500 hover:bg-green-400 text-black px-5 py-2.5 rounded font-mono text-xs font-bold tracking-widest uppercase transition-all shadow-md shadow-green-500/10 active:scale-95"
            >
              VIEW TOURNAMENTS
            </a>
          </div>
 
          {/* Mobile Menu Actions */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-green-400 transition-all cursor-pointer bg-zinc-950 rounded-md border border-zinc-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
 
        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-950 border-t border-zinc-900"
            >
              <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col font-mono text-xs uppercase tracking-widest">
                <button
                  onClick={() => navigateTo('home')}
                  className={`text-left py-3 px-4 rounded transition-all ${currentTab === 'home' ? 'bg-green-950/20 text-green-400 border-l-4 border-green-500 font-bold' : 'text-zinc-400 hover:bg-zinc-900/40'}`}
                >
                  🏟️ ARENA HOME
                </button>
                <button
                  onClick={() => navigateTo('terms')}
                  className={`text-left py-3 px-4 rounded transition-all ${currentTab === 'terms' ? 'bg-green-950/20 text-green-400 border-l-4 border-green-500 font-bold' : 'text-zinc-400 hover:bg-zinc-900/40'}`}
                >
                  ⚖️ TERMS & CONDITIONS
                </button>
                <button
                  onClick={() => navigateTo('privacy')}
                  className={`text-left py-3 px-4 rounded transition-all ${currentTab === 'privacy' ? 'bg-green-950/20 text-green-400 border-l-4 border-green-500 font-bold' : 'text-zinc-400 hover:bg-zinc-900/40'}`}
                >
                  🛡️ PRIVACY POLICY
                </button>
                
                <a 
                  href="#tournaments-section"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (currentTab !== 'home') navigateTo('home');
                  }}
                  className="w-full bg-green-500 hover:bg-green-400 text-black font-bold tracking-widest text-center py-3.5 rounded mt-2 block transition-all"
                >
                  FIGHT NOW
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Container */}
      <main className="relative">
        <AnimatePresence mode="wait">
          
          {/* TAB: HOME PAGE */}
          {currentTab === 'home' && (
            <motion.div
              key="home-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* Cinematic Widescreen Hero Section */}
              <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 md:py-28 border-b border-zinc-900">
                {/* Background image overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={gamingBg} 
                    alt="Tactical Arena backdrop" 
                    className="w-full h-full object-cover scale-105 pointer-events-none opacity-50 brightness-[0.25]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Neon radial masks as overlay */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/85 to-black"></div>
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-10 md:space-y-14">
                  
                  {/* Interactive Mascot Highlight Frame */}
                  <div className="flex justify-center mb-2">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="p-[1px] rounded-xl bg-zinc-800"
                    >
                      <div className="bg-zinc-950 rounded-xl p-3 flex items-center gap-4 max-w-sm border border-zinc-900">
                        <img 
                          src={soldierLogo} 
                          alt="Soldier Mascot Small" 
                          className="w-12 h-12 object-cover rounded-lg border border-zinc-800" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-left">
                          <p className="font-mono text-[9px] text-zinc-500 font-bold tracking-widest uppercase">REGULATORY BULLETIN</p>
                          <h4 className="font-display font-black text-sm text-white tracking-tight uppercase leading-tight">SOLDIER LEAGUE ACTIVE</h4>
                          <span className="inline-block mt-0.5 font-mono text-[9px] text-green-400 bg-green-950/30 border border-green-500/10 px-2 py-0.5 rounded">
                            ● HQ ONLINE
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Badge */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-950 border border-green-500/20 rounded-md text-green-400 font-mono text-[10px] md:text-xs tracking-widest uppercase box-glow-green"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    SRI LANKAN ESPORTS CHAMPIONS
                  </motion.div>

                  {/* Main Header Display Typography */}
                  <div className="space-y-4 max-w-4xl mx-auto">
                    <motion.h1 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase leading-none"
                    >
                      SOLDIER <br className="sm:hidden" />
                      <span className="text-green-500 glow-green">
                        ESPORTS
                      </span>
                    </motion.h1>

                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-sm sm:text-base md:text-lg font-sans text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                    >
                      Gear up, sync with your elite roster, and engage. Soldier E-Sports delivers high-impact tournament brackets, vibrant live results, and championship validation.
                    </motion.p>
                  </div>

                  {/* Interactive Dashboard / Quick Actions */}
                  <motion.div 
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2"
                  >
                    <a
                      href="#tournaments-section"
                      className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-display font-bold px-8 py-4 rounded text-sm tracking-wider uppercase transition-all shadow-md shadow-green-500/15 hover:scale-105 active:scale-98"
                    >
                      ⚡ BROWSE ACTIVE ARENAS
                    </a>
                    <a
                      href="#social-section"
                      className="w-full sm:w-auto border border-zinc-800 hover:border-green-500/30 text-white hover:text-green-400 hover:bg-green-950/10 px-8 py-4 rounded font-display font-bold text-sm tracking-wider uppercase transition-all hover:scale-105"
                    >
                      🌟 CONNECT SOCIAL HUBS
                    </a>
                  </motion.div>

                  {/* Metas / Platform Stats - Clean, unified steel gray and tactical green */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8"
                  >
                    {[
                      { value: 'LKR 1,200,000+', label: 'Championship pools' },
                      { value: '12,000+', label: 'Registered legends' },
                      { value: '450+', label: 'Custom cups finished' },
                      { value: '99.9%', label: 'Anti-cheat accuracy' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-zinc-950/40 backdrop-blur-sm border border-zinc-900 rounded-lg p-5 transition-all hover:border-green-500/20 duration-300">
                        <p className="font-display font-black text-xl md:text-2xl text-white tracking-tight">{stat.value}</p>
                        <p className="font-mono text-[9px] uppercase text-zinc-500 tracking-wider mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </motion.div>

                </div>
              </section>

              {/* Tournament Arena Shield Listings */}
              <section id="tournaments-section" className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
       
                {/* Heading */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-green-400 font-mono text-xs tracking-wider uppercase font-bold">
                      <Gamepad2 className="w-4 h-4 text-green-500" /> TOURNAMENT MATCHES & LEAGUES
                    </div>
                    <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-none">
                      CHAMPIONSHIP STAGE
                    </h2>
                    <p className="font-sans text-sm text-zinc-400 max-w-2xl leading-relaxed">
                      All matches are orchestrated with real-time telemetry and full bracket administration. Download and register inside the official Soldier Mobile App to compete.
                    </p>
                  </div>
 
                  {/* Navigation Filter Tabs */}
                  <div className="flex bg-zinc-950 p-[5px] border border-zinc-900 rounded-lg gap-1">
                    {(['All', 'Mobile', 'PC'] as const).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveTournamentFilter(filter)}
                        className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${activeTournamentFilter === filter ? 'bg-green-500/10 text-green-400 border border-green-500/20 font-bold' : 'text-zinc-500 hover:text-zinc-300 border border-transparent'}`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
 
                {/* Tournament List Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                  {filteredTournaments.map((tournament) => {
                    const theme = {
                      accent: 'text-green-400',
                      borderHover: 'hover:border-zinc-800',
                      tagBg: 'bg-green-950/10 border-green-500/10 text-green-400 border',
                      barBg: 'bg-green-500',
                      topLine: 'via-green-500/10',
                      iconColor: 'text-green-400',
                      pulseDot: 'bg-green-400'
                    };
 
                    return (
                      <div 
                        key={tournament.id}
                        className={`group relative bg-zinc-955 border border-zinc-90 w-full rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${theme.borderHover}`}
                        style={{ backgroundColor: '#050508', borderColor: '#18181b' }}
                      >
                        {/* Top banner visual effect */}
                        <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent ${theme.topLine} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        
                        <div className="p-6 md:p-8 space-y-6">
                          {/* Game tag + Platform */}
                          <div className="flex items-center justify-between">
                            <span className={`font-mono text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded ${theme.tagBg}`}>
                              ✦ {tournament.game}
                            </span>
                            <span className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase bg-zinc-900/60 px-2.5 py-1 rounded">
                              PLATFORM: {tournament.platform}
                            </span>
                          </div>
 
                          {/* Tournament Title */}
                          <div>
                            <h3 className="font-display font-black text-xl md:text-2xl text-white uppercase group-hover:text-green-400 transition-colors duration-200 tracking-tight leading-tight">
                              {tournament.title}
                            </h3>
                          </div>
 
                          {/* Rules / Specs List */}
                          <div className="grid grid-cols-2 gap-6 pb-6 border-b border-zinc-900">
                            <div>
                              <span className="font-mono text-[9px] uppercase text-zinc-500 block tracking-widest mb-1">TOTAL PRIZES</span>
                              <span className="font-display font-bold text-xl tracking-tight text-white">
                                {tournament.prizePool}
                              </span>
                            </div>
                            <div>
                              <span className="font-mono text-[9px] uppercase text-zinc-500 block tracking-widest mb-1">REGISTRATION ENTRY</span>
                              <span className={`font-mono font-bold text-xs uppercase ${theme.accent} tracking-wider`}>
                                {tournament.entryFee}
                              </span>
                            </div>
                          </div>
 
                          {/* Meta info: Time, Slots filled */}
                          <div className="space-y-4 font-mono text-xs">
                            <div className="flex items-center gap-2 text-zinc-400">
                              <Clock className={`w-3.5 h-3.5 ${theme.iconColor}`} />
                              <span>{tournament.dateTime}</span>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between items-center text-[10px]">
                                <span className="text-zinc-500 tracking-widest uppercase">SLOTS ALLOCATED</span>
                                <span className="text-white font-bold">{tournament.slotsFilled} / {tournament.slotsTotal} Squads</span>
                              </div>
                              {/* Visual Progress bar */}
                              <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
                                <div 
                                  className={`${theme.barBg} h-full rounded-full transition-all duration-300`}
                                  style={{ width: `${(tournament.slotsFilled / tournament.slotsTotal) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
 
                        {/* Card Lower Action Area with color accent */}
                        <div className="p-6 bg-zinc-950/50 border-t border-zinc-900/60 flex flex-wrap items-center justify-between gap-4">
                          {tournament.status === 'upcoming' ? (
                            <>
                              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider font-semibold">
                                <span className={`w-1.5 h-1.5 rounded-full ${theme.pulseDot} animate-pulse`}></span>
                                <span className="text-zinc-400">RECRUITING VIA</span>
                                <span className={`${theme.accent} uppercase font-extrabold`}>MOBILE APP</span>
                              </span>
                              <div className="bg-zinc-900 text-zinc-300 border border-zinc-800/60 px-4 py-2 rounded font-mono text-[9px] tracking-widest uppercase text-center select-none font-bold">
                                REGISTER IN-APP
                              </div>
                            </>
                          ) : (
                            <>
                              <span className="flex items-center gap-1.5 text-zinc-500 font-mono text-[9px] uppercase tracking-wider">
                                🔒 CHAMPIONSHIP COMPLETED
                              </span>
                              <div className="border border-zinc-900 text-zinc-600 px-3 py-1.5 rounded font-mono text-[9px] tracking-widest uppercase bg-zinc-950">
                                SLOTS LOCKED
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Spectacular Social Media Hub with gorgeous ambient backdrops */}
              <section id="social-section" className="bg-black py-24 md:py-32 border-y border-zinc-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
                  
                  {/* Heading */}
                  <div className="text-center space-y-3">
                    <div className="flex justify-center items-center gap-2 text-green-400 font-mono text-xs tracking-wider uppercase font-bold">
                      <Share2 className="w-5 h-5 text-green-400" /> SOLDIER NETWORK
                    </div>
                    <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-none">
                      OFFICIAL SOCIAL MEDIA
                    </h2>
                    <p className="font-sans text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                      Follow our official accounts for tournament brackets, streams highlights, cyber campaigns, and giveaways.
                    </p>
                  </div>

                  {/* Social Channel Grid - Elegant unified dark containers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative bg-[#050508] border border-zinc-900 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-green-500/20 active:scale-95 transition-all duration-300"
                      >
                        {/* Highlight hover glow */}
                        <span className="absolute inset-0 bg-green-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                        
                        <div className="space-y-6">
                          <div className="flex justify-between items-center">
                            <div className="p-3.5 bg-zinc-900 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md">
                              {getMediaIcon(social.iconName)}
                            </div>
                            <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
                              CONNECT ↗
                            </span>
                          </div>

                          <div>
                            <p className="font-mono text-2xl font-bold tracking-tight text-white mb-1">
                              {social.followerCount}
                            </p>
                            <p className="font-display font-black text-base uppercase text-zinc-300 tracking-wider">
                              {social.name}
                            </p>
                          </div>
                        </div>

                        <p className="font-mono text-[9px] uppercase tracking-widest text-green-400 mt-6 opacity-60 group-hover:opacity-100 transition-opacity">
                          @soldier_esports
                        </p>
                      </a>
                    ))}
                  </div>

                </div>
              </section>

              {/* Tournament FAQs with vivid card layouts */}
              <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 relative">
                <div className="text-center space-y-3 mb-16 relative z-10">
                  <div className="text-green-400 font-mono text-xs tracking-wider uppercase font-bold">
                    SUPPORT CENTER / FAQ
                  </div>
                  <h3 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
                    FREQUENT QUESTIONS
                  </h3>
                </div>

                <div className="space-y-4 relative z-10">
                  {FAQS.map((faq, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#050508] border border-zinc-900 p-6 sm:p-8 rounded-xl space-y-2.5 hover:border-green-500/20 transition-all duration-300"
                    >
                      <h4 className="font-display font-bold text-base md:text-lg text-white uppercase tracking-tight flex items-center gap-2.5">
                        <span className="text-green-400 font-mono text-sm font-semibold">Q.</span>
                        {faq.question}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

            </motion.div>
          )}

          {/* TAB: TERMS & CONDITIONS */}
          {currentTab === 'terms' && (
            <motion.div
              key="terms-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-10"
            >
              {/* Back to Home Header */}
              <div className="border-b border-zinc-900 pb-6 flex justify-between items-center">
                <div>
                  <p className="font-mono text-xs text-green-400 tracking-widest uppercase">SOLDIER E-SPORTS REGULATORY BOARD</p>
                  <h1 className="font-display font-black text-3xl sm:text-5xl text-white mt-1 uppercase tracking-tight">
                    TERMS & CONDITIONS
                  </h1>
                  <p className="font-mono text-xs text-zinc-500 mt-2">
                    Last Updated: {TERMS_AND_CONDITIONS.lastUpdated}
                  </p>
                </div>
              </div>

              {/* Caution Callout */}
              <div className="bg-zinc-950 border-l-4 border-emerald-500 p-4 rounded-r-lg flex gap-3 text-xs leading-relaxed text-zinc-400 font-sans">
                <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-zinc-200 uppercase font-semibold mb-1">REGULATION BINDING</p>
                  Welcome to Soldier E-Sports. By accessing or using our application and participating in live events or registrations, you agree to comply with and be bound to these complete legal and operational Terms.
                </div>
              </div>

              {/* Exact Terms sections matching prompt */}
              <div className="space-y-8 font-sans text-zinc-300">
                
                <section className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-1 flex items-center gap-2">
                    <span className="text-green-500 font-mono text-sm">01.</span> Eligibility Rules
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Users must be at least 13 years old to use Soldier E-Sports. By creating an account or submitting registrations, users confirm that all provided personal credentials and UIDs are accurate, active, and valid.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-1 flex items-center gap-2">
                    <span className="text-green-500 font-mono text-sm">02.</span> User Accounts
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Users are fully responsible for maintaining account confidentiality and protecting any login credentials used to join events. All activities performed through their account fall under captain accountability. Soldier E-Sports reserves the absolute right to suspend or terminate accounts involved in suspicious, harmful, or unauthorized activity.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-1 flex items-center gap-2">
                    <span className="text-green-500 font-mono text-sm">03.</span> Tournament Rules & Fair Play
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    All users participating in Soldier Esports tournaments must strictly follow fair play rules. The following activities are strictly prohibited under penalty of permanent roster bans:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-zinc-400 text-sm pl-2 font-mono">
                    <li>Using custom hacks or background cheat tools</li>
                    <li>Device root exploits, game script modifiers, or bug abuse</li>
                    <li>Deliberate match-fixing or point collaboration</li>
                    <li>Utilizing unauthorized hardware triggers or third-party emulator overlays</li>
                  </ul>
                  <p className="text-xs text-orange-400 font-mono mt-2">
                    ⚠️ ALERT: Tournament admin decisions are absolute, irrevocable, and final.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-1 flex items-center gap-2">
                    <span className="text-green-500 font-mono text-sm">04.</span> Payments & Refunds
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Tournament entry fees and active pro subscriptions are non-refundable. Fee refunds are provided ONLY under explicitly approved, rare circumstances determined solely by the Soldier E-Sports board. Users assume responsibility for inputting correct currency parameters.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-1 flex items-center gap-2">
                    <span className="text-green-500 font-mono text-sm">05.</span> Prohibited Activities
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Users must not abuse, harass, or insult other players. Using offensive language in our chat lobbies or tournament names is banned. This includes sharing illegal content, creating duplicate/fake character credentials, or attempting system-level hacks.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-1 flex items-center gap-2">
                    <span className="text-green-500 font-mono text-sm">06.</span> Intellectual Property
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    All software layouts, neon soldier mascot files, graphical UI/UX elements, match brackets, and branding assets are owned exclusively by Soldier E-Sports. Unauthorized copying, reverse-engineering, or mirroring is strictly prohibited under local copyright laws.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-1 flex items-center gap-2">
                    <span className="text-green-500 font-mono text-sm">07.</span> Limitation of Liability
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400 font-sans">
                    Soldier E-Sports holds no liability for client internet latency, server connection timeouts, third-party carrier bugs, hardware lags, or dynamic service interruptions. Gamers operate and access our platform systems at their own discretion and hazard.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-1 flex items-center gap-2">
                    <span className="text-green-500 font-mono text-sm">08.</span> Governing Law & Contacts
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    These Terms are governed by the operational laws applicable in the user's tournament region. If you have any inquiries, contact our board at:
                  </p>
                  <p className="bg-zinc-950 p-4 rounded border border-zinc-900 font-mono text-xs text-green-400">
                    EMAIL: support@soldieresports.com
                  </p>
                </section>

              </div>

              <div className="pt-6 border-t border-zinc-900 text-center">
                <button
                  onClick={() => navigateTo('home')}
                  className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded font-mono text-xs font-bold uppercase tracking-widest transition-all"
                >
                  RETURN TO HOME ARENA
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB: PRIVACY POLICY */}
          {currentTab === 'privacy' && (
            <motion.div
              key="privacy-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-10"
            >
              {/* Header */}
              <div className="border-b border-zinc-900 pb-6 flex justify-between items-center">
                <div>
                  <p className="font-mono text-xs text-green-400 tracking-widest uppercase">SOLDIER E-SPORTS DIGITAL COGNIZANCE</p>
                  <h1 className="font-display font-black text-3xl sm:text-5xl text-white mt-1 uppercase tracking-tight">
                    PRIVACY POLICY
                  </h1>
                  <p className="font-mono text-xs text-zinc-500 mt-2">
                    Last Updated: {PRIVACY_POLICY.lastUpdated}
                  </p>
                </div>
              </div>

              {/* Intro Banner */}
              <div className="bg-zinc-950 border-l-4 border-emerald-500 p-4 rounded-r-lg text-xs leading-relaxed text-zinc-400 font-sans">
                Your confidentiality constitutes a key cornerstone. By installing the Soldier E-Sports mobile app or interacting with this website, you extend consent to the storage mechanisms itemized below.
              </div>

              {/* Exact sections from prompt */}
              <div className="space-y-8 font-sans text-zinc-300">
                
                {PRIVACY_POLICY.sections.map((section, idx) => (
                  <section key={idx} className="space-y-3">
                    <h3 className="font-display text-base font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-1 flex items-center gap-1.5">
                      {section.title}
                    </h3>
                    
                    {section.content && (
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {section.content}
                      </p>
                    )}

                    {section.items && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                        {section.items.map((item, id) => (
                          <div key={id} className="bg-zinc-950/80 p-4 rounded border border-zinc-900 space-y-1 scale-100 font-sans hover:border-green-500/10">
                            {'label' in item && item.label && (
                              <p className="font-mono font-bold text-xs text-green-400 uppercase tracking-wider">{item.label}</p>
                            )}
                            <p className="text-xs text-zinc-400 leading-relaxed">{'text' in item ? item.text : ''}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}

                <section className="space-y-3">
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-1">
                    10. Contact Information
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    If you require revision keys, credentials correction, or permanent account profile erasure from our system vaults, please direct inquiries to:
                  </p>
                  <p className="bg-zinc-950 p-4 rounded border border-zinc-900 font-mono text-xs text-green-400">
                    Soldier E-Sports <br />
                    EMAIL: support@soldieresports.com
                  </p>
                </section>

              </div>

              <div className="pt-6 border-t border-zinc-900 text-center">
                <button
                  onClick={() => navigateTo('home')}
                  className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded font-mono text-xs font-bold uppercase tracking-widest transition-all"
                >
                  RETURN TO HOME ARENA
                </button>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Cinematic Gaming Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src={soldierLogo} 
                  alt="Soldier Logo" 
                  className="w-10 h-10 object-cover rounded border border-green-500/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-display font-black text-lg tracking-wider text-white uppercase">
                    SOLDIER
                  </span>
                  <span className="block font-mono text-[9px] text-green-400 tracking-widest mt-[-3px]">
                    E-SPORTS
                  </span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 font-sans max-w-sm leading-relaxed">
                The absolute staging grounds for Sri Lankan esports squads. Combat, live leaderboards, and secured bracket administration. Join tournaments and secure victory.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-3 font-mono text-xs">
              <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-1">
                SYSTEM PATHS
              </h4>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <button 
                    onClick={() => navigateTo('home')} 
                    className="hover:text-green-400 transition-colors cursor-pointer block"
                  >
                    HOME ARENA
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('terms')} 
                    className="hover:text-green-400 transition-colors cursor-pointer block"
                  >
                    TERMS & CONDITIONS
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('privacy')} 
                    className="hover:text-green-400 transition-colors cursor-pointer block"
                  >
                    PRIVACY POLICY
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact coordinate summary */}
            <div className="space-y-3">
              <h4 className="text-white text-xs font-mono font-bold tracking-widest uppercase mb-1">
                REGULATORY SUPPORT
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Submit team booking disputes, claim updates, or account safety inquiries directly.
              </p>
              <p className="font-mono text-xs text-green-400">
                support@soldieresports.com
              </p>
            </div>

          </div>

          {/* Socials shortcut lists */}
          <div className="flex flex-wrap justify-between items-center gap-6 border-t border-zinc-900 pt-8 text-zinc-500 font-mono text-[10px] tracking-wider uppercase">
            <div>
              &copy; {new Date().getFullYear()} SOLDIER E-SPORTS. ALL RIGHTS RESERVED.
            </div>
            
            <div className="flex gap-4">
              <a href="https://www.tiktok.com/@soldier_esports" className="hover:text-white transition-colors">TikTok</a>
              <a href="https://www.instagram.com/soldier_esports_" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.facebook.com/share/1CvXGNC4Km/" className="hover:text-white transition-colors">Facebook</a>
              <a href="https://www.youtube.com/@Soldier_Esports" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
