'use client'
import { useState, useEffect } from 'react'
import { ExternalLink, Calendar, Users, DollarSign, FileText, Database, Shield, ChevronDown, ChevronRight, Code, Lightbulb, Settings } from 'lucide-react'
import { useScrollTo } from '../hooks/useScrollTo'
import { useStackableScroll } from '../hooks/useStackableScroll'
import CommitHeatmap from './CommitHeatmap'

export default function Projects() {
  const [expandedSections, setExpandedSections] = useState({})
  const [isProjectExpanded, setIsProjectExpanded] = useState(true)
  const { scrollToSection, setLastScrolled } = useScrollTo()
  const { handleSectionToggle } = useStackableScroll()
  
  const toggleSection = (section) => {
    setExpandedSections(prev => {
      const isExpanding = !prev[section];
      const newState = {
        ...prev,
        [section]: isExpanding
      };
      setTimeout(() => {
        if (isExpanding && window.innerHeight <= 956) {
          const sectionEl = document.querySelector(`[data-section="${section}"]`);
          if (sectionEl) {
            const rect = sectionEl.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offset = 86; // Adjust this value as needed
            const targetY = rect.top + scrollTop - offset;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }
        } else {
          const scrollToAperturePM = () => scrollToSection('aperturepm-card', 25)
          handleSectionToggle(section, newState[section], newState, scrollToAperturePM)
        }
      }, 1); // Slightly longer to ensure DOM update
      return newState;
    })
  }

  const toggleProject = () => {
    const newExpandedState = !isProjectExpanded
    setIsProjectExpanded(newExpandedState)

    setTimeout(() => {
      if (newExpandedState) {
        // For small heights, use a larger offset so the title isn't covered
        if (window.innerHeight <= 956) {
          const element = document.getElementById('aperturepm-card');
          if (element) {
            const rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offset = 86; // 25 + 32
            const targetY = rect.top + scrollTop - offset;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }
        } else {
          // Default scroll for other screens
          scrollToSection('aperturepm-card', 25)
        }
      } else {
        // When collapsing, scroll to the separate collapse anchor (not projects)
        scrollToSection('projects-collapse', 20)
      }
    }, 100)
  }

  const features = [
    {
      icon: <Database className="w-7 h-7" />,
      title: "Multi-Tenant Architecture",
      description: "Secure tenant isolation with role-based access control and a scalable database design for enterprise-grade reliability."
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: "Stripe Integration",
      description: "Automated billing, payment processing, and late fee management with full transaction tracking and reporting."
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: "DocuSign API",
      description: "Digital document workflows with automated signature collection, status tracking, and secure file storage."
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Property Management",
      description: "Comprehensive lease tracking, tenant management, and property portfolio analytics for owners and managers."
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Enterprise Security",
      description: "Session management, audit logging, and secure file storage using Supabase integration and best practices."
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Automation System",
      description: "Automated email notifications, billing cycles, and real-time communication to reduce manual effort by over 60%."
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "Dynamic Responsiveness",
      description: "Custom layouts and controls for every screen size, with adaptive dashboards, forms, and navigation for mobile and desktop."
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "Custom Components & UI Consistency",
      description: "Reusable, accessible UI components and consistent styling across all pages for a seamless, professional user experience."
    }
  ]

  const techStack = [
    "Next.js 15", "Node.js 22", "React 19","PostgreSQL", "Prisma ORM", 
    "Tailwind CSS", "Stripe API", "DocuSign API", "Supabase",
    "Railway", "Nodemailer", "NextAuth"
  ]

  useEffect(() => {
    function handleExpandAperturePM() {
      setIsProjectExpanded(true)
      setTimeout(() => {
        scrollToSection('aperturepm-card', 25)
      }, 100)
    }
    window.addEventListener('expand-aperturepm', handleExpandAperturePM)
    return () => window.removeEventListener('expand-aperturepm', handleExpandAperturePM)
  }, [scrollToSection])

  return (
    <section id="projects" className="min-h-screen py-20 flex flex-col justify-center">
      {/* Invisible anchor for collapse scroll - positioned exactly like projects */}
      <div id="projects-collapse" className="absolute" style={{ top: '-20px' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 border-b border-zinc-200 dark:border-zinc-700 pb-8">
          <h2 className="text-4xl mb-4 accent">Projects</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            My main focus: AperturePM — a production SaaS platform built from concept to deployment in 28 days.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* AperturePM Main Card */}
          <div className="card p-8" id="aperturepm-card">
            {/* Clickable Header */}
            <div
              onClick={toggleProject}
              className="cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors rounded-lg p-4 -m-4 mb-4 relative"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src="/portfolio/aperturepm-logo.png"
                      alt="AperturePM Logo"
                      className="w-10 h-10 rounded-md object-contain"
                      style={{ flexShrink: 0 }}
                      draggable={false}
                    />
                    <div className="flex items-center gap-2">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">AperturePM</h3>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 dark:text-green-400">Live</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Multi-Tenant Property Management SaaS Platform</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span> May 22 - June 18, 2025</span>
                    <span>⏱ 285+ Hours</span>
                    <span>475+ Commits</span>
                    <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-gray-700 dark:text-gray-200">
                      Private Repository
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">                  <a 
                    href="https://aperturepm.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-6 py-3 text-gray-800 dark:text-white bg-transparent rounded-md transition-all hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none whitespace-nowrap group"
                  >
                    <ExternalLink size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    View Live
                  </a>
                  <div className="p-2">
                    {isProjectExpanded ? 
                      <ChevronDown className="w-5 h-5 text-gray-500 rotate-180" /> : 
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    }
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable Content */}
            {isProjectExpanded && (
              <div className="space-y-8">
                {/* Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Description */}
                  <div className="lg:col-span-2">
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                      Built a comprehensive multi-tenant SaaS platform from concept to production in under 30 days. 
                      AperturePM streamlines property management through automation, featuring secure tenant portals, 
                      automated billing systems, and digital document workflows. Currently serving real clients with over 
                      60% reduction in manual processing time.
                    </p>

                    {/* Demo Credentials */}
                    <div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Live Demo</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Test both admin and tenant experiences</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex justify-between items-center py-3 px-4 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white text-sm">Admin Portal</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Full management access</div>
                          </div>
                          <div className="text-right text-xs text-gray-600 dark:text-gray-400">
                            <div>admin@demo.com</div>
                            <div>123456</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white text-sm">Tenant Portal</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Resident experience</div>
                          </div>
                          <div className="text-right text-xs text-gray-600 dark:text-gray-400">
                            <div>tenant@demo.com</div>
                            <div>123456</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Stats */}
                  <div className="lg:col-span-1 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg">
                        <div className="text-4xl font-medium text-gray-900 dark:text-white mb-2">28 <span className="text-blue-400 dark:text-blue-500">Days</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Concept to Production</div>
                      </div>
                      {/* Replace 90% card with CommitHeatmap */}
                      <CommitHeatmap />
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="lg:-mt-28">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {techStack.slice(0, 6).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.slice(6).map((tech, index) => (
                      <span 
                        key={index + 6}
                        className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Sections */}
                <div className="space-y-4">
                  {/* Technical Deep Dive */}
                  <div className="bg-zinc-50 dark:bg-zinc-800/30 rounded-lg" id="technical-section" data-section="technical">
                    <button
                      onClick={() => toggleSection('technical')}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-semibold text-gray-900 dark:text-white">Technical Architecture & Development</span>
                      </div>
                      {expandedSections.technical ? 
                        <ChevronDown className="w-5 h-5 text-gray-500 rotate-180" /> : 
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      }
                    </button>
                    {expandedSections.technical && (
                      <div className="px-4 pb-4 pt-4 space-y-4">
                        <p className="text-gray-700 dark:text-gray-200">
                          Built with a modern full-stack architecture emphasizing scalability and security. The multi-tenant design ensures complete data isolation while maintaining performance.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Frontend Architecture</h5>
                            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                              <li>Next.js 15 with App Router</li>
                              <li>React 19 with Server Components</li>
                              <li>Tailwind CSS for styling</li>
                              <li>Real-time UI updates</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Backend & Database</h5>
                            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                              <li>PostgreSQL with Prisma ORM</li>
                              <li>Multi-tenant schema design</li>
                              <li>Row-level security (RLS)</li>
                              <li>API routes with validation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Features Deep Dive */}
                  <div className="bg-zinc-50 dark:bg-zinc-800/30 rounded-lg" id="features-section" data-section="features">
                    <button
                      onClick={() => toggleSection('features')}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-semibold text-gray-900 dark:text-white">Core Features & Integrations</span>
                      </div>
                      {expandedSections.features ? 
                        <ChevronDown className="w-5 h-5 text-gray-500 rotate-180" /> : 
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      }
                    </button>
                    {expandedSections.features && (
                      <div className="px-4 pb-4 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4">
                          {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-zinc-700/50 rounded-lg">
                              <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                                {feature.icon}
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-white mb-1">{feature.title}</h5>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Lessons Learned */}
                  <div className="bg-zinc-50 dark:bg-zinc-800/30 rounded-lg" id="lessons-section" data-section="lessons">
                    <button
                      onClick={() => toggleSection('lessons')}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-semibold text-gray-900 dark:text-white">Key Learnings & Challenges</span>
                      </div>
                      {expandedSections.lessons ? 
                        <ChevronDown className="w-5 h-5 text-gray-500 rotate-180" /> : 
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      }
                    </button>
                    {expandedSections.lessons && (
                      <div className="px-4 pb-4 pt-4 space-y-4">
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-3">Technical Challenges Overcome</h5>
                          <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                            <li><strong>Multi-tenancy:</strong> Implementing secure tenant isolation without performance degradation</li>
                            <li><strong>Real-time updates:</strong> Building efficient state management for live data synchronization</li>
                            <li><strong>Payment processing:</strong> Integrating complex Stripe workflows with error handling</li>
                            <li><strong>Document automation:</strong> Creating seamless DocuSign integration with status tracking</li>
                            <li><strong>Automated billing:</strong> Setting up reliable cron jobs on Vercel for automated charges and overdue detection</li>
                            <li><strong>Unified notifications:</strong> Designing an internal notification system integrated with the sidebar and dropdown menus for intuitive, context-aware alerts across the platform</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white mb-3">Key Takeaways</h5>
                          <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                            <li>Planning database schema upfront saves significant refactoring time</li>
                            <li>API-first development approach enables better testing and debugging</li>
                            <li>User feedback early in development leads to better feature prioritization</li>
                            <li>Proper error handling and logging are crucial for production debugging</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Future Projects */}
          <div className={`text-center transition-opacity duration-500 ${isProjectExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="card dark:!border-0 p-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">More Projects Coming Soon</h4>
              <p className="text-gray-700 dark:text-gray-200 max-w-md mx-auto">
                AperturePM is my first major full-stack project. I'm actively working on new ideas and will add more projects here as I continue building my portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
