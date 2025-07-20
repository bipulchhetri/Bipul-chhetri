'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentService, setCurrentService] = useState(0)

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Business Owner",
      content: "Bipul transformed our online presence completely! Our website now generates 5x more leads than before. His custom design perfectly represents our brand.",
      rating: 5,
      // result: "500% Lead Increase"
    },
    {
      name: "Advocate Priya Thapa",
      role: "Law Firm Partner",
      content: "As a lawyer, I needed a professional website that builds trust. Bipul delivered exactly that - sophisticated design with perfect legal compliance.",
      rating: 5,
      // result: "Professional Excellence"
    },
    {
      name: "Amit Kumar",
      role: "Restaurant Owner",
      content: "Thanks to Bipul's SEO expertise, we're now #1 on Google for 'best restaurant Kolkata'. Our online orders increased 300% in just 2 months!",
      rating: 5,
      // result: "300% Revenue Growth"
    }
  ]

  const services = [
    {
      icon: "🎨",
      title: "Custom Website Design",
      description: "Stunning, conversion-focused websites tailored specifically for your business. Every pixel crafted to turn visitors into paying customers.",
      features: ["Unique Design", "Mobile Responsive", "Fast Loading", "Conversion Optimized"],
      price: "Starting ₹5,000",
      whatsapp: "https://wa.me/917363833189?text=Hi%20Bipul,%20I'm%20interested%20in%20Custom%20Website%20Design%20service"
    },
    {
      icon: "⚖️",
      title: "Website for Lawyers",
      description: "Professional legal websites that establish credibility and attract clients. Designed specifically for law firms and legal professionals.",
      features: ["Legal Compliance", "Professional Design",  "Case Studies"],
      price: "Starting ₹1,999",
      whatsapp: "https://wa.me/917363833189?text=Hi%20Bipul,%20I%20need%20a%20professional%20website%20for%20my%20law%20firm"
    },
    {
      icon: "📈",
      title: "SEO Consultant",
      description: "Dominate Google search results and get found by your ideal customers. Proven strategies that deliver top rankings and real business growth.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Monthly Reports"],
      price: "Starting ₹1200/hours",
      whatsapp: "https://wa.me/917363833189?text=Hi%20Bipul,%20I%20want%20to%20improve%20my%20website's%20Google%20ranking"
    }
  ]

  useEffect(() => {
    setIsLoaded(true)
    
    // Auto-slide testimonials on mobile
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    // Auto-slide services on mobile
    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 6000)

    return () => {
      clearInterval(testimonialInterval)
      clearInterval(serviceInterval)
    }
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Bipul<span className="text-cyan-400"> </span>Chhetri
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-cyan-400 transition-colors">About</a>
              <a href="#services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
              <a href="#testimonials" className="text-white hover:text-cyan-400 transition-colors">Reviews</a>
              <a href="https://wa.me/917363833189" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
              
            </div>
     
<div>

<a 
  href="https://wa.me/917363833189" 
  target="_blank" 
  rel="noopener noreferrer"
  class="fixed bottom-4 right-4 bg-[#25D366] text-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium hover:bg-[#1EBE54] transition duration-300 z-50 block md:hidden"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.81 11.81 0 0 0 12.01 0 11.9 11.9 0 0 0 0 12c0 2.1.55 4.16 1.6 5.97L0 24l6.25-1.63A11.84 11.84 0 0 0 12 24c6.63 0 12-5.37 12-12a11.85 11.85 0 0 0-3.48-8.52zM12 21.75c-1.82 0-3.6-.48-5.17-1.4l-.37-.22-3.7.96.99-3.59-.24-.38a9.79 9.79 0 0 1-1.48-5.14c0-5.42 4.41-9.83 9.83-9.83 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.87 6.94c0 5.42-4.41 9.83-9.83 9.83zm5.38-7.46c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15s-.77.98-.94 1.18c-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.66-2.06-.17-.3-.02-.45.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.59-.48-.51-.67-.52h-.57c-.2 0-.52.07-.8.37s-1.05 1.03-1.05 2.52c0 1.5 1.08 2.94 1.23 3.14.15.2 2.11 3.23 5.13 4.53.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.26-.2-.55-.35z"/>
  </svg>
  Chat on WhatsApp
</a>

</div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Outstanding Copywriting with Animation */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Turn Your Website Into A 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
                Money-Making Machine
              </span>
            </h1>
          </div>
          <div className="animate-slide-up delay-300">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              I'm <strong className="text-cyan-400">Bipul Chhetri</strong>, and I help businesses get <strong className="text-yellow-400">10x more customers</strong> through stunning websites that convert visitors into paying clients. No fluff, just results.
            </p>
          </div>
          <div className="animate-slide-up delay-500">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://wa.me/917363833189?text=Hi%20Bipul,%20I%20want%20to%20transform%20my%20business%20with%20a%20high-converting%20website" 
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>💬</span> Get Free Website Audit
              </a>
              <a href="#services" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                View My Services
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-gray-300">Websites Created</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-400">300%</div>
                <div className="text-gray-300">Avg. Lead Increase</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-yellow-400">24hrs</div>
                <div className="text-gray-300">SEO Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              <div className="relative w-70 h-80 mx-auto md:mx-0 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-cyan-100 to-purple-100 rounded-full flex items-center justify-center text-6xl font-bold text-slate-800">
                  <Image 
        src="/images/bipul.jpeg" 
        alt="My Local Image" 
        width={400} 
        height={300} 
        className='w-[300px] h-[300px] rounded-full'
      />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Meet Bipul Chhetri
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Hi there! I'm Bipul Chhetri, a passionate Web Developer and SEO specialist from India with 2+ years of experience building websites that not only look stunning but also drive real results.

</p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              As a freelancer, I'm on a mission to help businesses—big or small—stand out online. I craft clean, modern, and responsive websites with a focus on user experience, speed, and SEO, so your site doesn't just sit pretty—it works 24/7 to grow your business.

</p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My secret? I combine stunning design with proven psychology and cutting-edge SEO to create websites that work 24/7 to grow your business.
              </p>
              <a 
                href="https://wa.me/917363833189?text=Hi%20Bipul,%20I'd%20love%20to%20learn%20more%20about%20your%20services" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Let's Chat About Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Bipul Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Smart Business Owners Choose Bipul?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-purple-500/10 to-cyan-500/10 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Web Design</h3>
              <p className="text-gray-300 leading-relaxed">
                No templates, no shortcuts. Every website I create is 100% custom-built to reflect your brand's unique personality and convert your specific audience into customers.
              </p>
            </div>
            <div className="bg-gradient-to-b from-purple-500/10 to-cyan-500/10 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Legal Website Specialist</h3>
              <p className="text-gray-300 leading-relaxed">
                I understand the legal industry inside-out. From compliance requirements to client trust-building, I create lawyer websites that establish authority and attract high-value clients.
              </p>
            </div>
            <div className="bg-gradient-to-b from-purple-500/10 to-cyan-500/10 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">SEO Results Guaranteed</h3>
              <p className="text-gray-300 leading-relaxed">
                I don't just build websites - I build traffic magnets. My proven SEO strategies ensure your website dominates Google searches and brings you qualified leads every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Slider */}
      <section id="services" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Services That Transform Your Business
          </h2>
          
          {/* Desktop View - 3 Cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-900/50 to-purple-900/20 p-8 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-cyan-400 flex items-center justify-center">
                        <span className="mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-yellow-400 mb-6">{service.price}</div>
                  <a 
                    href={service.whatsapp}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
                  >
                    💬 WhatsApp Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Slider */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentService * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-b from-gray-900/50 to-purple-900/20 p-8 rounded-2xl border border-purple-500/20">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="text-cyan-400 flex items-center justify-center">
                              <span className="mr-2">✓</span>
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="text-2xl font-bold text-yellow-400 mb-6">{service.price}</div>
                        <a 
                          href={service.whatsapp}
                          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
                        >
                          💬 WhatsApp Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentService === index ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-12 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to 10X Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop losing customers to competitors with outdated websites. Let me create a stunning, high-converting website that works 24/7 to grow your business.
            </p>
            <div className="bg-black/30 p-6 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">🎁 Limited Time Offer</h3>
              <p className="text-lg text-white mb-4">
                Get a <strong className="text-yellow-400">FREE Website Audit</strong> + <strong className="text-green-400">30-minute strategy call</strong> worth ₹5,000 absolutely FREE!
              </p>
              <p className="text-sm text-gray-400">*Only 5 spots available this month</p>
            </div>
            <a 
              href="https://wa.me/917363833189?text=Hi%20Bipul,%20I%20want%20to%2010x%20my%20business%20with%20a%20high-converting%20website.%20Please%20give%20me%20the%20free%20audit!" 
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
            >
              💬 Claim Your FREE Audit Now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What My Clients Say
          </h2>
          
          {/* Desktop View - 3 Testimonials */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-900/50 to-purple-900/20 p-6 rounded-2xl border border-purple-500/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-green-400 font-semibold text-sm mt-2">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Slider */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-b from-gray-900/50 to-purple-900/20 p-6 rounded-2xl border border-purple-500/20">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">⭐</span>
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.content}"</p>
                      <div className="border-t border-gray-700 pt-4">
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                        <div className="text-green-400 font-semibold text-sm mt-2">{testimonial.result}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 px-4 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold text-white mb-4">
                Bipul<span className="text-cyan-400"></span>Chhetri
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Transforming businesses through stunning custom websites, professional lawyer sites, and expert SEO consulting. Let's make your business the #1 choice in your industry.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/bipulchhetri" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <span className="text-2xl"><Image 
        src="/images/bipul-chhetr-facebook.png" 
        alt="bipul chhetri facebook" 
        width={40} 
        height={40} 
      />
</span>
                </a>
                <a href="https://linkedin.com/in/bipulchhetri" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <span className="text-2xl"><Image 
        src="/images/bipul-chhetri-Whatsapp.png" 
        alt="bipul chhetri Whatsapp" 
        width={40} 
        height={40} 
      />
</span>
                </a>
                <a href="mailto:bipul@chhetri.dev" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <span className="text-2xl">
                  <Image 
        src="/images/bipul-chhetri -email.png" 
        alt="bipul chhetri email" 
        width={40} 
        height={40} 
      />

                  </span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Custom Website Design</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Lawyer Websites</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">SEO Consulting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-gray-400">📱 +91 73638 33189</p>
                <p className="text-gray-400">📧 bipul@chhetri.dev</p>
                <a 
                  href="https://wa.me/917363833189?text=Hi%20Bipul,%20I%20want%20to%20discuss%20my%20project"
                  className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors inline-block mt-2"
                >
                  💬 WhatsApp Me
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Bipul Chhetri - Expert Custom Website Developer & SEO Consultant | Making Businesses Successful Online
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  )
}
