import React, { useState } from 'react';
import { 
  Menu, X, ArrowRight, Mail, Phone, MapPin, 
  TrendingUp, Palette, Camera, Brush, Music,
  Award, Users, Target, Zap, Eye, Lightbulb,
  Instagram, Linkedin, Twitter, Github,
  ChevronRight, Star, Play
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic campaigns, SEO optimization, social media management, and analytics-driven growth strategies.",
      projects: "50+ Projects",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Brand identity, visual communications, and creative design solutions that capture attention.",
      projects: "100+ Designs",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography with expertise in composition, lighting, and visual storytelling.",
      projects: "200+ Photos",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Brush,
      title: "Photo Editing & Color Grading",
      description: "Advanced post-processing using color theory principles for stunning visual enhancement.",
      projects: "300+ Edits",
      color: "from-orange-500 to-red-500"
    }
  ];

  const skills = [
    { name: "Digital Marketing Strategy", level: 95 },
    { name: "Social Media Management", level: 92 },
    { name: "Adobe Creative Suite", level: 88 },
    { name: "Photography", level: 85 },
    { name: "Color Theory & Grading", level: 90 },
    { name: "Brand Development", level: 87 },
  ];

  const portfolioItems = [
    {
      category: "Digital Marketing",
      title: "E-commerce Growth Campaign",
      description: "Increased online sales by 150% through targeted social media advertising",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["SEO", "Social Media", "Analytics"]
    },
    {
      category: "Graphic Design",
      title: "Brand Identity Package",
      description: "Complete rebrand for tech startup including logo, collateral, and guidelines",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Branding", "Logo Design", "Print"]
    },
    {
      category: "Photography",
      title: "Product Photography Series",
      description: "Commercial product shots with advanced lighting and composition techniques",
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Commercial", "Lighting", "Product"]
    },
    {
      category: "Art",
      title: "Portrait Sketch Collection",
      description: "Hand-drawn portraits showcasing traditional sketching techniques",
      image: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Drawing", "Portraits", "Traditional"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CM</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Creative Marketer</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                  <Star className="w-5 h-5" />
                  <span>4+ Years Experience</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Creative Digital
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Marketer</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transforming brands through strategic marketing, stunning visuals, and creative storytelling. 
                  I blend data-driven marketing with artistic vision to create impactful digital experiences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
                  Download Resume
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <div className="text-white text-center space-y-4">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <Camera className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-xl font-bold">Creative Portfolio</div>
                      <div className="text-sm opacity-90">Marketing • Design • Art</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate digital marketer and creative professional with expertise spanning marketing strategy, 
              visual design, photography, and artistic expression.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">My Creative Journey</h3>
                <p className="text-gray-600 leading-relaxed">
                  With 4 years of experience in digital marketing, I've developed a unique perspective that combines 
                  analytical thinking with creative vision. My journey spans from strategic marketing campaigns to 
                  artistic pursuits including photography, graphic design, and traditional art forms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I specialize in color theory and color grading, bringing a photographer's eye to every project. 
                  Whether I'm crafting marketing strategies or creating visual content, I approach each challenge 
                  with creativity, precision, and a deep understanding of what resonates with audiences.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Strategic</div>
                  <div className="text-sm text-gray-600">Data-driven approach</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Eye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Visual</div>
                  <div className="text-sm text-gray-600">Design-focused mindset</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Creative</div>
                  <div className="text-sm text-gray-600">Innovative solutions</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Results</div>
                  <div className="text-sm text-gray-600">Performance-driven</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive creative and marketing solutions tailored to elevate your brand and engage your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600">{service.projects}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Services */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brush className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Art & Drawing</h3>
                  <p className="text-gray-600">Traditional sketching and digital art</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                From detailed portraits to creative illustrations, I bring artistic vision to life through 
                traditional and digital mediums, always focusing on composition and emotional impact.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Music & Audio</h3>
                  <p className="text-gray-600">Creative audio for multimedia projects</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Music adds soul to visual content. I create and curate audio experiences that complement 
                visual storytelling and enhance the overall impact of multimedia projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my best projects across digital marketing, design, photography, and creative arts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Create Something Amazing Together</h2>
                <p className="text-xl text-gray-300">
                  Ready to elevate your brand with strategic marketing and stunning visuals? 
                  Let's discuss your next project.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">hello@creativemarketer.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-300">Available Worldwide</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Project Type</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                    <option value="" className="bg-gray-900">Select a service</option>
                    <option value="marketing" className="bg-gray-900">Digital Marketing</option>
                    <option value="design" className="bg-gray-900">Graphic Design</option>
                    <option value="photography" className="bg-gray-900">Photography</option>
                    <option value="editing" className="bg-gray-900">Photo Editing</option>
                    <option value="art" className="bg-gray-900">Art & Drawing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CM</span>
              </div>
              <span className="text-xl font-bold">Creative Marketer</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Creative Marketer. All rights reserved.</p>
              <p className="text-sm mt-1">Crafted with passion for creative excellence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
