import { ExternalLink, Calendar, Users, DollarSign, FileText, Database, Shield } from 'lucide-react'

export default function Projects() {
  const features = [
    {
      icon: <Database className="w-7 h-7" />,
      title: "Multi-Tenant Architecture",
      description: "Secure tenant isolation with role-based access control and scalable database design."
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: "Stripe Integration",
      description: "Automated billing, payment processing, and late fee management with full transaction tracking."
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: "DocuSign API",
      description: "Digital document workflows with automated signature collection and status tracking."
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Property Management",
      description: "Comprehensive lease tracking, tenant management, and property portfolio analytics."
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Enterprise Security",
      description: "Session management, audit logging, and secure file storage with Supabase integration."
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Automation System",
      description: "Email notifications, billing automation, and real-time communication features."
    }
  ]

  const techStack = [
    "Next.js 15", "React 19", "PostgreSQL", "Prisma ORM", 
    "Tailwind CSS", "Stripe API", "DocuSign API", "Supabase",
    "Railway", "Nodemailer", "NextAuth", "Multi-tenant SaaS"
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 border-b border-zinc-200 dark:border-zinc-700 pb-8">
          <h2 className="text-5xl mb-4 accent tracking-tight">Projects</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            My main focus: <span className="font-semibold accent">AperturePM</span> — a production-ready SaaS platform built and deployed solo in under 30 days.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-3xl font-bold mb-1">AperturePM</h3>
                <p className="text-blue-100 text-lg mb-2">Enterprise Property Management SaaS Platform</p>
                <div className="flex flex-wrap gap-4 text-blue-100 text-sm">
                  <span>📅 May 22 - June 18, 2025</span>
                  <span>⏱️ 285+ Hours</span>
                  <span>🚀 500+ Commits</span>
                </div>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-50 transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            </div>
            {/* Content */}
            <div className="p-8 md:p-10">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Built a comprehensive multi-tenant SaaS platform from concept to production in under 30 days. 
                AperturePM streamlines property management through automation, featuring secure tenant portals, 
                automated billing systems, and digital document workflows. The platform is currently serving 
                real clients and has reduced manual billing and document processing by 90%.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-8">
                <p className="text-yellow-800">
                  <strong>Impact:</strong> Automated billing and document processing, reducing manual effort by 90% 
                  and improving tenant communication efficiency by 95%.
                </p>
              </div>
              {/* Demo Credentials */}
              <div className="mb-8 bg-blue-50 dark:bg-zinc-800/80 rounded-lg p-6 border border-blue-100 dark:border-zinc-700/60 backdrop-blur-sm">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Try the Live Demo</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-zinc-900 p-4 rounded border border-zinc-100 dark:border-zinc-800/70">
                    <h5 className="font-medium text-gray-900 dark:text-white">Admin Access</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Email: admin@demo.com</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Password: 123456</p>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-4 rounded border border-zinc-100 dark:border-zinc-800/70">
                    <h5 className="font-medium text-gray-900 dark:text-white">Tenant Access</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Email: tenant@demo.com</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Password: 123456</p>
                  </div>
                </div>
              </div>
              {/* Features Grid */}
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 bg-gray-50 dark:bg-zinc-800/80 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-transparent dark:border-zinc-700/60 backdrop-blur-sm">
                    <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-400">
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h5>
                      <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Stats moved here */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">~285</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Hours Coding AperturePM</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Git Commits</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">28</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Days to Production</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">90%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Automation Improvement</div>
                </div>
              </div>
              {/* Technology Stack */}
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h4>
              <div className="flex flex-wrap gap-2 mb-2">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Future Projects Placeholder */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-md border border-zinc-100 dark:border-zinc-800/70">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">More coming soon!</h4>
            <p className="text-gray-700 dark:text-gray-200 max-w-md mx-auto">
              AperturePM is my first major full-stack project. I'm actively working on new ideas and will add more projects here as I grow my portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
