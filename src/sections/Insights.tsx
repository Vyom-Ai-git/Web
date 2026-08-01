import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { track } from '@/lib/analytics'

interface Article {
  id: string
  title: string
  slug: string
  summary: string
  category: string
  author: string
  date: string
  readingTime: string
  coverType: 'agentic' | 'audit' | 'growth' | 'rag' | 'default'
}

interface Resource {
  type: string
  title: string
  duration: string
  format: string
  cta: string
}

// ─── COVER ART SVG SUB-COMPONENTS ──────────────────────────────────────────
const AgenticCover: React.FC = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full stroke-primary/30 fill-none opacity-85" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="100" r="40" className="stroke-[#1a1a1a]/15" strokeWidth="0.75" />
    <circle cx="200" cy="100" r="80" className="stroke-[#1a1a1a]/15" strokeWidth="0.75" />
    <circle cx="200" cy="100" r="4" className="fill-[#1a1a1a]" />

    <line x1="200" y1="100" x2="200" y2="20" strokeWidth="0.5" className="stroke-[#1a1a1a]/15" />
    <line x1="200" y1="100" x2="320" y2="160" strokeWidth="0.5" className="stroke-[#1a1a1a]/15" />
    <line x1="200" y1="100" x2="80" y2="160" strokeWidth="0.5" className="stroke-[#1a1a1a]/15" />

    <circle cx="200" cy="60" r="3" className="fill-[#1a1a1a]" />
    <circle cx="200" cy="20" r="4.5" className="fill-[#8FBF3C] stroke-[#1a1a1a]/40" strokeWidth="0.5" />
    <circle cx="120" cy="100" r="3" className="fill-[#1a1a1a]" />
    <circle cx="280" cy="100" r="3" className="fill-[#1a1a1a]" />
  </svg>
)

const AuditCover: React.FC = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full stroke-primary/30 fill-none opacity-80" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,20 H200 M0,40 H200 M0,60 H200 M0,80 H200 M0,100 H200 M40,0 V120 M80,0 V120 M120,0 V120 M160,0 V120" className="stroke-[#1a1a1a]/5" strokeWidth="0.5" />
    <rect x="25" y="15" width="150" height="90" strokeWidth="0.75" className="stroke-[#1a1a1a]" />
    <circle cx="100" cy="60" r="30" strokeWidth="0.75" className="stroke-[#8FBF3C]" />
    <line x1="25" y1="15" x2="175" y2="105" strokeWidth="0.5" className="stroke-[#1a1a1a]/15" />
  </svg>
)

const GrowthCover: React.FC = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full stroke-primary/30 fill-none opacity-80" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="30" x2="190" y2="30" strokeWidth="0.75" className="stroke-[#1a1a1a]/15" />
    <line x1="10" y1="60" x2="190" y2="60" strokeWidth="0.75" className="stroke-[#1a1a1a]/15" />
    <line x1="10" y1="90" x2="190" y2="90" strokeWidth="0.75" className="stroke-[#1a1a1a]/15" />
    <circle cx="50" cy="30" r="3" className="fill-[#1a1a1a]" />
    <circle cx="150" cy="60" r="4" className="fill-[#8FBF3C] stroke-[#1a1a1a]/40" strokeWidth="0.5" />
    <circle cx="90" cy="90" r="3" className="fill-[#1a1a1a]" />
  </svg>
)

const RagCover: React.FC = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full stroke-primary/30 fill-none opacity-80" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="60" rx="75" ry="35" strokeWidth="0.75" className="stroke-[#1a1a1a]/10" />
    <ellipse cx="100" cy="60" rx="45" ry="20" strokeWidth="0.75" className="stroke-[#1a1a1a]/10" />
    <circle cx="100" cy="60" r="3" className="fill-[#1a1a1a]" />
    <circle cx="175" cy="60" r="4" className="fill-[#8FBF3C] stroke-[#1a1a1a]/40" strokeWidth="0.5" />
    <circle cx="145" cy="60" r="3.5" className="fill-[#1a1a1a]" />
  </svg>
)

const DefaultCover: React.FC = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full stroke-primary/30 fill-none opacity-70" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="20" width="140" height="80" strokeWidth="0.5" strokeDasharray="3 3" className="stroke-[#1a1a1a]/25" />
    <line x1="30" y1="60" x2="170" y2="60" strokeWidth="0.75" className="stroke-[#1a1a1a]/20" />
    <circle cx="100" cy="60" r="4" className="fill-[#1a1a1a]" />
  </svg>
)

export const Insights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const reducedMotion = useReducedMotion()

  const categories = [
    'All',
    'Artificial Intelligence',
    'Enterprise Strategy',
    'Automation',
    'Product Engineering',
    'Growth Systems',
    'Digital Transformation',
    'Research'
  ]

  // CMS Structured Article Data
  const articles: Article[] = [
    {
      id: 'art-01',
      title: 'The Architecture of Agentic Workflow Orchestration',
      slug: 'agentic-workflow-orchestration',
      summary: 'A technical examination of autonomous agent loop coordination, state synchronization, and fallback boundaries in high-throughput enterprise backbones.',
      category: 'Artificial Intelligence',
      author: 'Vyom Intelligence Lab',
      date: 'July 24, 2026',
      readingTime: '12 min read',
      coverType: 'agentic'
    },
    {
      id: 'art-02',
      title: 'AI Readiness: Audit Protocols for Legacy Infrastructure',
      slug: 'ai-readiness-audit-protocols',
      summary: 'A blueprint guide outlining how to evaluate context capabilities, check data pipelines, and index legacy tables before mounting LLM inference clusters.',
      category: 'Enterprise Strategy',
      author: 'Elena Rostova',
      date: 'July 18, 2026',
      readingTime: '8 min read',
      coverType: 'audit'
    },
    {
      id: 'art-03',
      title: 'Converting Attention: Growth Systems for B2B Operations',
      slug: 'converting-attention-growth-systems',
      summary: 'Designing predictable demand generation vectors, attribution systems, and conversion funnels to automate lead qualification paths.',
      category: 'Growth Systems',
      author: 'Marcus Vance',
      date: 'July 10, 2026',
      readingTime: '6 min read',
      coverType: 'growth'
    },
    {
      id: 'art-04',
      title: 'Managing Latency in Retrieval-Augmented Generation',
      slug: 'managing-latency-rag',
      summary: 'Advanced chunking systems, parallel database reads, and vector index clustering techniques to reduce RAG search latencies.',
      category: 'Research',
      author: 'Dr. Aris Thorne',
      date: 'June 28, 2026',
      readingTime: '14 min read',
      coverType: 'rag'
    },
    {
      id: 'art-05',
      title: 'Autonomous Operational Excellence: A Board Case Study',
      slug: 'autonomous-operational-excellence',
      summary: 'How a multinational logistics enterprise integrated event triggers to eliminate 40% of standard data coordination latency.',
      category: 'Automation',
      author: 'Elena Rostova',
      date: 'June 15, 2026',
      readingTime: '10 min read',
      coverType: 'default'
    },
    {
      id: 'art-06',
      title: 'Digital Transformation Speeds: Modernizing Core Services',
      slug: 'digital-transformation-speeds',
      summary: 'A strategy manual on refactoring monolithic architectures into reactive micro-clusters without operational interruptions.',
      category: 'Digital Transformation',
      author: 'Marcus Vance',
      date: 'May 22, 2026',
      readingTime: '9 min read',
      coverType: 'default'
    }
  ]

  // CMS Structured Resource Data
  const resources: Resource[] = [
    {
      type: 'Executive Playbook',
      title: 'Enterprise AI Strategy & Governance Framework',
      duration: '14 min read',
      format: 'PDF Guide',
      cta: 'Download Playbook'
    },
    {
      type: 'Implementation Guide',
      title: 'Workflow Automation Integration Checklist',
      duration: '8 min read',
      format: 'PDF Template',
      cta: 'Download Checklist'
    },
    {
      type: 'Industry Report',
      title: '2026 Industrial Intelligence Operational Index',
      duration: '22 min read',
      format: 'PDF Document',
      cta: 'Download Report'
    },
    {
      type: 'Enterprise Framework',
      title: 'Autonomous Growth and Revenue Systems Map',
      duration: '18 min read',
      format: 'Interactive Map',
      cta: 'View Framework'
    }
  ]

  // Filter articles based on active category
  const categoryArticles = activeCategory === 'All'
    ? articles
    : articles.filter(art => art.category === activeCategory)

  // Magazine layout split: 1st article of active list is featured, remaining are in the grid
  const featuredArticle = categoryArticles[0]
  const gridArticles = categoryArticles.slice(1)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      track.newsletterSubscribe()
    }
  }

  const renderCover = (type: string) => {
    switch (type) {
      case 'agentic': return <AgenticCover />
      case 'audit': return <AuditCover />
      case 'growth': return <GrowthCover />
      case 'rag': return <RagCover />
      default: return <DefaultCover />
    }
  }

  const baseTransition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const // ease-editorial
  }

  return (
    <section
      id="insights"
      className="w-full bg-[#EDEEF5] py-16 sm:py-[100px] md:py-[130px] border-t border-black/[0.05] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="Vyom Insights Hub"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 flex flex-col gap-24 md:gap-32">

        {/* Section Title */}
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
          <div className="col-span-12 md:col-span-10 md:col-start-2 text-left flex flex-col gap-4">
            <span className="text-[11px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
              Intelligence Hub
            </span>
            <h2 className="font-display font-medium text-[36px] md:text-[50px] lg:text-[56px] leading-[1.12] text-[#1a1a1a] tracking-tight">
              Ideas That Shape Intelligent Enterprises
            </h2>
            <p className="font-sans text-[15px] md:text-[16.5px] leading-relaxed text-[#8e8e8e] max-w-[680px]">
              Technology evolves quickly, but enduring advantage comes from understanding how systems, people, and strategy evolve together. Explore research, implementation guides, and perspectives from the Vyom team.
            </p>
          </div>
        </div>

        {/* ─── FEATURED INSIGHT (Magazine cover story format) ───────────────────── */}
        {featuredArticle && (
          <motion.div
            key={`featured-${featuredArticle.id}`}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={baseTransition}
            className="grid grid-cols-12 gap-y-8 lg:gap-x-12 items-center border-t border-black/[0.05] pt-12 group cursor-pointer"
          >
            {/* Left abstract banner cover (Larger, occupying 7 columns on desktop) */}
            <div className="col-span-12 lg:col-span-7 py-16 bg-white/30 border border-black/[0.04] rounded-[12px] flex items-center justify-center shadow-medium overflow-hidden relative group-hover:shadow-floating transition-all duration-500">
              <div className="w-full h-full max-w-[85%] transition-transform duration-700 group-hover:scale-103">
                {renderCover(featuredArticle.coverType)}
              </div>
            </div>

            {/* Right text layout metadata (Occupying 5 columns on desktop) */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 text-left">
              <div className="flex items-center gap-4 text-[11px] font-sans font-bold text-[#8e8e8e] uppercase tracking-widest">
                <span className="text-[#1a1a1a] bg-[#8FBF3C] px-2 py-0.5 rounded-[3px] text-[9.5px]">
                  {featuredArticle.category}
                </span>
                <span>•</span>
                <span>{featuredArticle.readingTime}</span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
              </div>

              <h3 className="font-display font-medium text-[30px] md:text-[42px] lg:text-[48px] leading-[1.12] text-[#1a1a1a] tracking-tight relative pb-1">
                <a href={`#insight-${featuredArticle.slug}`} className="outline-none block">
                  {featuredArticle.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8FBF3C] transition-all duration-300 group-hover:w-[120px]" />
                </a>
              </h3>

              <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-[#8e8e8e] max-w-[460px]">
                {featuredArticle.summary}
              </p>

              <div className="flex items-center gap-4 mt-2">
                <span className="text-[10px] font-sans font-bold text-[#1a1a1a] tracking-widest uppercase">
                  BY {featuredArticle.author.toUpperCase()}
                </span>
                <span className="text-[12px] font-sans text-zinc-900 group-hover:text-[#8FBF3C] hover:underline flex items-center gap-1.5 transition-colors font-bold">
                  <span>read insight</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* ─── FILTERABLE INDEX & ARTICLE GRID ─────────────────────────────────── */}
        <div className="flex flex-col gap-10">

          {/* Horizontal Categories Filter menu */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-black/[0.05] w-full text-left scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-pill font-sans text-[13px] transition-all border-none outline-none shrink-0 cursor-pointer ${isActive
                      ? 'bg-[#1a1a1a] text-white font-medium'
                      : 'bg-transparent text-[#8e8e8e] hover:text-[#1a1a1a]'
                    }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Grid of articles */}
          <div className="min-h-[200px]" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {gridArticles.map((art) => (
                  <article
                    key={art.id}
                    className="card-premium card-premium-hover flex flex-col gap-4 p-6 group text-left relative overflow-hidden"
                  >
                    {/* Small cover display */}
                    <div className="w-full flex items-center justify-center py-6 bg-white/20 border border-black/[0.02] rounded-[4px] mb-2 overflow-hidden">
                      <div className="transition-transform duration-500 group-hover:scale-102">
                        {renderCover(art.coverType)}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] font-sans font-bold text-[#8e8e8e] uppercase tracking-wider">
                      <span className="text-[#1a1a1a]">{art.category}</span>
                      <span>•</span>
                      <span>{art.readingTime}</span>
                    </div>

                    <h4 className="font-display font-medium text-[19px] md:text-[21px] text-[#1a1a1a] leading-snug tracking-tight relative">
                      <a href={`#insight-${art.slug}`} className="outline-none block pb-1">
                        {art.title}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8FBF3C] transition-all duration-[var(--nav-transition)] group-hover:w-full" />
                      </a>
                    </h4>

                    <p className="font-sans text-[13px] md:text-[13.5px] leading-relaxed text-[#8e8e8e] flex-grow">
                      {art.summary}
                    </p>

                    <div className="flex items-center justify-between text-[10.5px] font-sans text-[#8e8e8e] mt-4 border-t border-black/[0.03] pt-3.5">
                      <span className="font-bold">BY {art.author.toUpperCase()}</span>
                      <span>{art.date}</span>
                    </div>
                  </article>
                ))}

                {categoryArticles.length === 0 && (
                  <div className="col-span-full py-16 text-center text-[#8e8e8e] font-sans text-[14px]">
                    No insights published in this category yet.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ─── DOWNLOADABLE RESOURCE LIBRARY ──────────────────────────────────── */}
        <div className="flex flex-col gap-10 text-left border-t border-black/[0.05] pt-12">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
              Resource Library
            </span>
            <h3 className="font-display font-medium text-[26px] md:text-[32px] text-[#1a1a1a] tracking-tight">
              Transformation Playbooks
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {resources.map((res) => (
              <div
                key={res.title}
                className="p-5 rounded-[6px] border border-black/[0.03] bg-white/20 hover:border-black/10 hover:shadow-soft transition-all duration-300 flex flex-col justify-between gap-5 text-left group"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-[10px] font-sans font-bold text-[#8e8e8e] uppercase tracking-wider">
                    <span>{res.type}</span>
                    <span>•</span>
                    <span>{res.format}</span>
                  </div>
                  <h4 className="font-display font-medium text-[16px] md:text-[17px] text-[#1a1a1a] leading-snug tracking-tight">
                    {res.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between border-t border-black/[0.03] pt-3">
                  <span className="text-[11px] font-sans text-[#8e8e8e]">{res.duration}</span>
                  <a
                    href="#download"
                    className="text-[12px] font-sans font-bold text-[#1a1a1a] hover:text-[#8FBF3C] group-hover:underline lowercase transition-colors"
                  >
                    {res.cta.toLowerCase()} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── NEWSLETTER INVITATION CARD ──────────────────────────────────────── */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={baseTransition}
          className="p-8 md:p-12 rounded-[8px] bg-white/35 border border-black/[0.05] shadow-medium text-left grid grid-cols-12 gap-6 items-center"
        >
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-3">
            <h3 className="font-display font-medium text-[26px] md:text-[32px] text-[#1a1a1a] tracking-tight">
              Stay Ahead of What's Next
            </h3>
            <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-[#8e8e8e] max-w-[540px]">
              Receive thoughtful perspectives on enterprise AI, intelligent systems, and business transformation.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 w-full flex flex-col gap-3">
            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="subscribe-form"
                  onSubmit={handleSubscribe}
                  className="flex items-center gap-2 w-full p-1 bg-white border border-black/[0.05] rounded-pill shadow-sm"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate email"
                    required
                    className="w-full bg-transparent border-none outline-none font-sans text-[13.5px] text-[#1a1a1a] pl-4 placeholder-black/30"
                  />
                  <button
                    type="submit"
                    className="bg-[#1a1a1a] hover:bg-[#333] text-white py-2 px-5 rounded-pill font-sans text-[12.5px] font-medium transition-colors border-none outline-none cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscribed-success"
                  className="text-[13.5px] font-sans font-bold text-[#1a1a1a] bg-[#8FBF3C]/15 border border-[#8FBF3C]/30 py-3.5 px-6 rounded-pill text-center shadow-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Subscription verified. Welcome to Vyom Intelligence.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Insights
