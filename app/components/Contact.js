import { Mail, Phone, MapPin, Github, Linkedin, GraduationCap } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 border-b border-zinc-200 dark:border-zinc-700 pb-8">
          <h2 className="text-4xl mb-4 accent">Get In Touch</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            I'm always open to discussing new opportunities, internships, and interesting projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              As a Computer Science student at Boston University, I'm actively seeking internships 
              and opportunities to apply my full-stack development skills. Feel free to reach out 
              if you'd like to discuss my work or potential collaborations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                <a href="mailto:llotze@bu.edu" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                  llotze@bu.edu
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                <a href="tel:954-648-0856" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                  (954) 648-0856
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-200">Boston, MA 02215</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-200">Boston University - Computer Science</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com"
                className="p-3 bg-white dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github size={24} className="text-gray-700 dark:text-gray-200" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 bg-white dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} className="text-gray-700 dark:text-gray-200" />
              </a>
            </div>

            <div className="mb-8 border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-2">Currently Seeking</h4>
              <ul className="text-blue-800 space-y-1 list-none pl-0">
                <li>Software Engineering Internships</li>
                <li>Full-Stack Development Opportunities</li>
                <li>SaaS/Web Application Projects</li>
                <li>Remote or Boston-area positions</li>
              </ul>
            </div>
          </div>
          
          <div className="p-8 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            © 2025 Lucas Lotze. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
