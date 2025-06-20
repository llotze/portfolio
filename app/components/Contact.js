'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, GraduationCap, Send, Check } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', message: '' })
        
        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSuccess(false)
        }, 3000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "llotze@bu.edu",
      href: "mailto:llotze@bu.edu"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Phone", 
      value: "(954) 648-0856",
      href: "tel:954-648-0856"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Location",
      value: "Boston, MA",
      href: null
    },
    {
      icon: <GraduationCap className="w-4 h-4" />,
      label: "University",
      value: "Boston University",
      href: null
    }
  ]

  return (
    <section id="contact" className="min-h-screen py-12 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 border-b border-zinc-200 dark:border-zinc-700 pb-4">
          <h2 className="text-4xl mb-2 accent">Get In Touch</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            I'm always open to discussing new opportunities, internships, and interesting projects
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              {/* Contact Methods & Status Combined */}
              <div className="border border-zinc-200 dark:border-0 dark:bg-zinc-800/30 rounded-lg p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                
                {/* Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg">
                      <div className="text-blue-600 dark:text-blue-400">
                        {method.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{method.label}</div>
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <div className="font-medium text-gray-900 dark:text-white text-sm">{method.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status Section */}
                <div className="border-t border-zinc-200 dark:border-zinc-600 pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">Available for Work</span>
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    <div>Software Engineering Internships</div>
                    <div>Full-Stack Development • SaaS Projects</div>
                    <div>Remote or Boston-area positions</div>
                  </div>
                </div>
              </div>

              {/* Skills & Social Combined */}
              <div className="border border-zinc-200 dark:border-0 dark:bg-zinc-800/30 rounded-lg p-5">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What I Bring</h4>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200 mb-5">
                  <div><strong className="text-gray-900 dark:text-white">Full-Stack:</strong> Next.js, React, PostgreSQL, APIs</div>
                  <div><strong className="text-gray-900 dark:text-white">Experience:</strong> Real SaaS serving live clients</div>
                  <div><strong className="text-gray-900 dark:text-white">Approach:</strong> Quick learning, end-to-end thinking</div>
                </div>

                {/* Social Links */}
                <div className="border-t border-zinc-200 dark:border-zinc-600 pt-4">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-3">Connect Online</h5>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/llotze"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-700/50 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors group flex-1 justify-center"
                      aria-label="GitHub"
                    >
                      <Github size={20} className="text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      <span className="font-medium text-gray-900 dark:text-white text-sm">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-700/50 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors group flex-1 justify-center"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} className="text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      <span className="font-medium text-gray-900 dark:text-white text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="relative">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Send a Message</h3>
              
              {/* Success Overlay */}
              {isSuccess && (
                <div className="absolute inset-0 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-lg flex items-center justify-center z-10 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={32} className="text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white dark:bg-zinc-700/50 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white"
                      placeholder="Your Name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white dark:bg-zinc-700/50 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="8"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white dark:bg-zinc-700/50 border border-gray-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                {error && (
                  <div className="text-red-600 dark:text-red-400 text-sm">{error}</div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-5 py-2 text-gray-700 dark:text-gray-300 bg-zinc-50 dark:bg-zinc-800/30 rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="text-gray-400 dark:text-gray-400" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Lucas Lotze. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
