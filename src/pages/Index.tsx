import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin, Users, Star, Phone, Mail, Instagram, Youtube, Facebook, Sparkles, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsNavVisible(currentScrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'event', 'plans', 'register', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919392617931', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:hello@fundaconnects.com', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/funda.connects', '_blank');
  };

  const openYoutube = () => {
    window.open('https://youtube.com/@fundaconnects', '_blank');
  };

  const openFacebook = () => {
    window.open('https://facebook.com/funda.connects', '_blank');
  };

  const openVenueMap = () => {
    window.open('https://maps.app.goo.gl/EvL3Eq1b8CjnBA8p8', '_blank');
  };

  const pricingPlans = [
    {
      name: "Stride Solo",
      description: "Student only",
      price: 499,
      originalPrice: 699,
      icon: <Sparkles className="w-8 h-8" />,
      benefits: [
        "2 Days Lunch & Refreshments",
        "FUNDA Welcome Kit",
        "Surprise Takeaways",
        "Certificate of Completion"
      ]
    },
    {
      name: "Dynamic Duo",
      description: "Student + 1 Parent",
      price: 799,
      originalPrice: 999,
      icon: <Zap className="w-8 h-8" />,
      benefits: [
        "2 Days Lunch & Refreshments",
        "FUNDA Welcome Kit",
        "Surprise Takeaways",
        "Certificate of Completion"
      ]
    },
    {
      name: "Together Trio",
      description: "Student + 2 Parents",
      price: 999,
      originalPrice: 1299,
      icon: <Globe className="w-8 h-8" />,
      benefits: [
        "2 Days Lunch & Refreshments",
        "FUNDA Welcome Kit",
        "Surprise Takeaways",
        "Certificate of Completion"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden perspective-1000">
      {/* Enhanced 3D Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-funda-royal-blue/30 to-funda-sky-blue/30 rounded-full blur-3xl animate-pulse morphing-blob"
          style={{
            transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 0px) rotateX(${scrollY * 0.01}deg)`,
            top: '10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-l from-funda-sky-blue/25 to-funda-royal-blue/25 rounded-full blur-3xl animate-pulse morphing-blob"
          style={{
            transform: `translate3d(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px, 0px) rotateY(${scrollY * 0.02}deg)`,
            bottom: '20%',
            right: '15%',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-br from-white/20 to-funda-sky-blue/20 rounded-full blur-2xl floating"
          style={{
            transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0px)`,
            top: '60%',
            left: '5%'
          }}
        />
      </div>

      {/* Ultra-Modern 3D Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isNavVisible ? 'backdrop-blur-2xl bg-funda-deep-navy/20' : 'backdrop-blur-xl bg-funda-deep-navy/10'} border-b border-white/20 shadow-2xl transform-3d`}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* 3D Logo with Enhanced Effects */}
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 pulse-glow"></div>
              <div className="relative bg-gradient-to-r from-funda-royal-blue via-funda-sky-blue to-funda-royal-blue px-8 py-4 rounded-2xl shadow-2xl border border-white/30 transform perspective-1000 group-hover:scale-110 group-hover:rotateY-5 transition-all duration-500 holographic">
                <div className="font-playfair text-2xl font-bold text-white drop-shadow-2xl text-shadow-3d">
                  FUNDA
                </div>
              </div>
            </div>
            
            {/* Enhanced 3D Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-3">
              {[
                { name: 'HOME', id: 'home' },
                { name: 'ABOUT', id: 'about' },
                { name: 'EVENT', id: 'event' },
                { name: 'PLANS', id: 'plans' },
                { name: 'CONTACT', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 rounded-2xl font-inter font-medium text-sm uppercase tracking-wide transition-all duration-500 transform hover:scale-105 hover-3d ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-funda-sky-blue to-funda-royal-blue text-white shadow-2xl border border-white/30 neon-glow'
                      : 'text-white hover:bg-gradient-to-r hover:from-funda-sky-blue/30 hover:to-funda-royal-blue/30 hover:shadow-xl backdrop-blur-sm border border-white/10 glass-card'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-white rounded-full shadow-lg neon-glow" />
                  )}
                </button>
              ))}
              
              {/* Ultra-Modern 3D Register Button */}
              <div className="ml-8 relative group perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-funda-royal-blue via-funda-sky-blue to-funda-royal-blue rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pulse-glow"></div>
                <Button 
                  onClick={() => scrollToSection('register')}
                  className="relative bg-gradient-to-r from-funda-royal-blue via-funda-sky-blue to-funda-royal-blue text-white px-10 py-4 rounded-full font-inter font-bold text-sm uppercase tracking-wide transition-all duration-500 hover:shadow-2xl hover:scale-110 border border-white/30 backdrop-blur-sm transform-3d hover-3d holographic"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Ultra-Modern 3D Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden perspective-1000">
        <div 
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{
            backgroundImage: "linear-gradient(rgba(10, 31, 68, 0.85), rgba(30, 58, 138, 0.9)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')",
            transform: `translateZ(0) translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Enhanced 3D Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-4 h-4 bg-funda-sky-blue rounded-full animate-bounce shadow-2xl neon-glow" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-white rounded-full animate-bounce shadow-2xl" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-40 w-5 h-5 bg-funda-royal-blue rounded-full animate-bounce shadow-2xl neon-glow" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 left-1/2 w-2 h-2 bg-funda-sky-blue rounded-full floating"></div>
          <div className="absolute bottom-40 right-20 w-3 h-3 bg-white rounded-full floating" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="glass-card p-12 lg:p-20 animate-fade-in rounded-3xl shadow-2xl transform perspective-1000 hover:scale-105 transition-all duration-700 card-3d border-gradient">
            <h1 className="font-playfair text-6xl lg:text-8xl font-bold text-white mb-8 drop-shadow-2xl transform hover:scale-105 transition-all duration-500 text-shadow-3d">
              Welcome to <span className="bg-gradient-to-r from-funda-sky-blue via-white to-funda-sky-blue bg-clip-text text-transparent animate-pulse holographic">FUNDA</span>
            </h1>
            <p className="text-3xl lg:text-4xl text-funda-pale-blue mb-6 font-medium drop-shadow-lg">
              <span className="bg-gradient-to-r from-funda-sky-blue to-white bg-clip-text text-transparent">Confusion to cognition</span>
            </p>
            <div className="glass-dark px-8 py-6 rounded-3xl mb-12 border border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-500 card-3d">
              <p className="text-2xl lg:text-3xl text-white font-bold drop-shadow-lg">
                <Calendar className="inline w-8 h-8 mr-3" />
                June 27 & 29 | 10 AM – 4 PM | VNRVJIET, Hyderabad
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <div className="relative group perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pulse-glow"></div>
                <Button 
                  onClick={() => scrollToSection('register')}
                  className="relative bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue text-white px-12 py-6 rounded-full font-inter font-bold text-xl transition-all duration-500 hover:shadow-2xl hover:scale-110 border border-white/30 backdrop-blur-sm transform-3d hover-3d holographic"
                >
                  <Zap className="w-6 h-6 mr-3" />
                  Register Now
                </Button>
              </div>
              <div className="relative group perspective-1000">
                <div className="absolute inset-0 border-2 border-white rounded-full blur-sm opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <Button 
                  onClick={() => scrollToSection('about')}
                  className="relative border-3 border-white text-white bg-transparent/20 backdrop-blur-sm px-12 py-6 rounded-full font-inter font-bold text-xl transition-all duration-500 hover:bg-white hover:text-funda-deep-navy hover:scale-110 hover:shadow-2xl card-3d border-gradient"
                >
                  <Globe className="w-6 h-6 mr-3" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-4 rounded-full glass-card border border-white/20 shadow-2xl transform hover:scale-110 transition-all duration-300 card-3d">
            <ChevronDown className="w-12 h-12 text-white drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* Enhanced 3D About FUNDA */}
      <section id="about" className="section-padding bg-gradient-to-br from-funda-pale-blue via-white to-funda-pale-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-funda-royal-blue/10 via-transparent to-funda-sky-blue/10"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-up">
              <h2 className="font-playfair font-bold text-5xl lg:text-7xl bg-gradient-to-r from-funda-deep-navy to-funda-royal-blue bg-clip-text text-transparent mb-12 drop-shadow-sm text-shadow-3d">About FUNDA</h2>
              <div className="space-y-8 text-funda-deep-navy text-xl lg:text-2xl">
                <div className="glass-card bg-white/90 p-8 rounded-3xl shadow-2xl border border-funda-sky-blue/20 transform hover:scale-105 transition-all duration-500 card-3d border-gradient">
                  <p className="font-bold leading-relaxed">
                    <span className="bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue bg-clip-text text-transparent font-bold text-2xl">FUNDA—Flying Up Navigating Dreams and Aspirations</span>—guides you from post–12th confusion to clear branch & college choices.
                  </p>
                </div>
                <div className="glass-card bg-white/70 p-8 rounded-3xl shadow-xl border border-funda-sky-blue/20 transform hover:scale-105 transition-all duration-500 card-3d">
                  <p className="font-semibold leading-relaxed">
                    Our expert panels, college tours, and hands-on workshops equip you to choose the perfect branch & college with confidence and clarity.
                  </p>
                </div>
                <div className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative glass-dark text-white font-bold text-xl px-8 py-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 card-3d holographic">
                    <Sparkles className="inline w-6 h-6 mr-3" />
                    🚀 Navigating Dreams • 🎯 Dream Colleges • 🌟 Future-Ready
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative group perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-funda-royal-blue/30 to-funda-sky-blue/30 rounded-3xl blur-2xl transform rotate-6 group-hover:rotate-3 transition-all duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
                  alt="Students learning together"
                  className="relative rounded-3xl shadow-2xl w-full border-4 border-white transform hover:scale-105 transition-all duration-700 group-hover:-rotate-1 card-3d"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-funda-royal-blue/10 to-funda-sky-blue/10 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced 3D Event Details */}
      <section id="event" className="section-padding bg-gradient-to-br from-funda-deep-navy via-funda-royal-blue to-funda-deep-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-funda-sky-blue/20 via-transparent to-funda-royal-blue/20"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h2 className="font-playfair font-bold text-5xl lg:text-7xl text-white text-center mb-20 drop-shadow-2xl text-shadow-3d">
            <span className="bg-gradient-to-r from-white via-funda-sky-blue to-white bg-clip-text text-transparent holographic">Event Details</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Calendar,
                title: "When?",
                content: "June 27 & 29",
                subtitle: "10 AM – 4 PM",
                gradient: "from-funda-royal-blue to-funda-sky-blue"
              },
              {
                icon: MapPin,
                title: "Where?",
                content: "VNRVJIET College",
                subtitle: "Pragathi Nagar, Hyderabad",
                gradient: "from-funda-sky-blue to-funda-royal-blue",
                hasButton: true
              },
              {
                icon: Users,
                title: "Why?",
                content: "Expert guidance on",
                subtitle: "branches & colleges",
                gradient: "from-funda-royal-blue to-funda-sky-blue"
              }
            ].map((item, index) => (
              <div key={index} className="relative group perspective-1000">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700`}></div>
                <Card className="relative glass-card bg-white/95 border border-white/30 p-10 text-center animate-fade-in hover:scale-110 transition-all duration-700 shadow-2xl rounded-3xl transform perspective-1000 group-hover:-rotate-1 card-3d border-gradient">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${item.gradient} p-6 rounded-3xl mb-8 mx-auto w-24 h-24 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500 holographic`}>
                      <item.icon className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                    <h3 className="font-playfair text-3xl font-bold text-funda-deep-navy mb-6 drop-shadow-sm text-shadow-3d">{item.title}</h3>
                    <p className="text-funda-deep-navy text-xl font-bold mb-2">
                      {item.content}
                    </p>
                    <p className="text-funda-royal-blue text-lg font-semibold mb-6">
                      {item.subtitle}
                    </p>
                    {item.hasButton && (
                      <div className="relative group/btn perspective-1000">
                        <div className="absolute inset-0 bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue rounded-2xl blur-lg opacity-50 group-hover/btn:opacity-100 transition duration-500"></div>
                        <Button 
                          onClick={openVenueMap}
                          className="relative bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue text-white px-6 py-3 rounded-2xl font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20 card-3d holographic"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          View on Map
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced 3D Pricing Plans */}
      <section id="plans" className="section-padding bg-gradient-to-br from-funda-pale-blue via-white to-funda-pale-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-funda-royal-blue/5 via-transparent to-funda-sky-blue/5"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h2 className="font-playfair text-5xl lg:text-7xl font-bold text-center mb-8 bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue bg-clip-text text-transparent drop-shadow-sm text-shadow-3d">Choose Your FUNDA Pass</h2>
          <p className="text-center text-funda-deep-navy text-2xl mb-20 font-bold">Select the perfect plan for your family</p>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="relative group perspective-1000">
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index === 1 ? 'from-funda-royal-blue to-funda-sky-blue' : 'from-funda-sky-blue/50 to-funda-royal-blue/50'
                } rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700`}></div>
                
                <Card className={`relative overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border-4 bg-white/95 backdrop-blur-xl rounded-3xl transform perspective-1000 group-hover:scale-105 card-3d ${
                  index === 1 ? 'border-funda-royal-blue shadow-2xl scale-110 neon-glow' : 'border-funda-sky-blue/50 hover:border-funda-sky-blue'
                } border-gradient`}>
                  {index === 1 && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-funda-royal-blue via-funda-sky-blue to-funda-royal-blue text-white text-center py-3 font-bold text-sm uppercase tracking-wide shadow-lg holographic">
                      <Sparkles className="inline w-4 h-4 mr-2" />
                      MOST POPULAR
                      <Sparkles className="inline w-4 h-4 ml-2" />
                    </div>
                  )}
                  <CardContent className="p-10 pt-16">
                    <div className="text-center mb-8">
                      <div className={`bg-gradient-to-br ${
                        index === 1 ? 'from-funda-royal-blue to-funda-sky-blue' : 'from-funda-sky-blue to-funda-royal-blue'
                      } p-4 rounded-2xl mx-auto w-20 h-20 flex items-center justify-center shadow-2xl mb-6 transform group-hover:scale-110 transition-all duration-500 holographic`}>
                        <div className="text-white">
                          {plan.icon}
                        </div>
                      </div>
                      <h3 className="font-playfair text-3xl font-bold text-funda-deep-navy mb-4 text-shadow-3d">
                        {plan.name}
                      </h3>
                      <p className="text-funda-deep-navy text-xl mb-8 font-bold">
                        {plan.description}
                      </p>
                    </div>
                    
                    <div className="mb-10 text-center">
                      <span className="bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue bg-clip-text text-transparent font-bold text-5xl">₹{plan.price}</span>
                      <span className="text-gray-500 line-through ml-4 text-2xl">₹{plan.originalPrice}</span>
                      <div className="glass-card text-funda-royal-blue font-bold text-sm px-4 py-2 rounded-full inline-block ml-3 border border-funda-sky-blue/30">
                        Save ₹{plan.originalPrice - plan.price}
                      </div>
                    </div>

                    <ul className="space-y-6 mb-10">
                      {plan.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-funda-deep-navy text-lg font-bold">
                          <span className="bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue bg-clip-text text-transparent mr-4 font-bold text-xl">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="relative group/btn perspective-1000">
                      <div className={`absolute inset-0 ${
                        index === 1 
                          ? 'bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue' 
                          : 'border-2 border-funda-royal-blue'
                      } rounded-2xl blur-lg opacity-50 group-hover/btn:opacity-100 transition duration-500`}></div>
                      <Button 
                        onClick={() => scrollToSection('register')}
                        className={`relative w-full py-6 font-bold text-xl rounded-2xl transition-all duration-500 transform hover:scale-105 card-3d ${
                          index === 1 
                            ? 'bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue text-white hover:shadow-2xl border border-white/20 holographic' 
                            : 'border-3 border-funda-royal-blue text-funda-royal-blue bg-white hover:bg-gradient-to-r hover:from-funda-royal-blue hover:to-funda-sky-blue hover:text-white hover:shadow-2xl border-gradient'
                        }`}
                      >
                        <Zap className="w-5 h-5 mr-2" />
                        Select & Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced 3D Registration */}
      <section id="register" className="section-padding bg-gradient-to-br from-funda-deep-navy via-funda-royal-blue to-funda-sky-blue relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-transparent via-funda-royal-blue/20 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-16 drop-shadow-2xl text-shadow-3d">
              <span className="bg-gradient-to-r from-white via-funda-pale-blue to-white bg-clip-text text-transparent holographic">Register & Upload Payment Screenshot</span>
            </h2>
            
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-funda-sky-blue/20 rounded-3xl blur-2xl"></div>
              <div className="relative glass-card border border-white/30 p-12 lg:p-16 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700 card-3d">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 border-gradient">
                  <iframe 
                    src="https://tally.so/r/wLqWA2"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="FUNDA Registration Form"
                    className="rounded-2xl"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced 3D Contact */}
      <section id="contact" className="section-padding bg-gradient-to-br from-white via-funda-pale-blue to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-funda-royal-blue/5 via-transparent to-funda-sky-blue/5"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h2 className="font-playfair font-bold text-5xl lg:text-7xl text-center mb-20 bg-gradient-to-r from-funda-deep-navy to-funda-royal-blue bg-clip-text text-transparent drop-shadow-sm text-shadow-3d">Contact Us</h2>
          
          <div className="grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
            <div>
              <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-funda-deep-navy mb-16 text-shadow-3d">
                <span className="bg-gradient-to-r from-funda-deep-navy to-funda-royal-blue bg-clip-text text-transparent">Get In Touch</span>
              </h3>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Phone/WhatsApp", value: "9392617931", action: openWhatsApp },
                  { icon: Mail, title: "Email", value: "hello@fundaconnects.com", action: openEmail },
                  { icon: Instagram, title: "Instagram", value: "@funda.connects", action: openInstagram },
                  { icon: Youtube, title: "YouTube", value: "FUNDA Connects", action: openYoutube },
                  { icon: Facebook, title: "Facebook", value: "/funda.connects", action: openFacebook }
                ].map((contact, index) => (
                  <div key={index} className="relative group perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-funda-royal-blue/10 to-funda-sky-blue/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition duration-700"></div>
                    <button 
                      onClick={contact.action}
                      className="relative flex items-center w-full text-left glass-card bg-white/90 hover:bg-white/95 p-8 rounded-3xl transition-all duration-700 group border border-funda-sky-blue/20 hover:border-funda-sky-blue hover:shadow-2xl transform hover:scale-105 card-3d border-gradient"
                    >
                      <div className="bg-gradient-to-br from-funda-royal-blue to-funda-sky-blue p-5 rounded-2xl mr-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl holographic">
                        <contact.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-2xl text-funda-deep-navy">{contact.title}</p>
                        <p className="text-funda-royal-blue text-xl font-bold">{contact.value}</p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="relative group perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-funda-royal-blue/30 to-funda-sky-blue/30 rounded-3xl blur-2xl transform rotate-3 group-hover:rotate-1 transition-all duration-700"></div>
                <div className="relative glass-card p-12 rounded-3xl shadow-2xl border border-funda-sky-blue/30 transform hover:scale-105 transition-all duration-700 card-3d border-gradient">
                  <h4 className="font-playfair text-3xl font-bold text-funda-deep-navy mb-8 text-shadow-3d">We're Here to Help!</h4>
                  <p className="text-funda-deep-navy text-xl font-bold leading-relaxed mb-8">
                    For any queries about FUNDA, course selection, or registration, reach out to us via phone, email, or social media. We're here to help you navigate your dreams and achieve your aspirations!
                  </p>
                  <div className="relative group/cta perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-funda-royal-blue/20 to-funda-sky-blue/20 rounded-3xl blur-lg opacity-50 group-hover/cta:opacity-100 transition duration-500"></div>
                    <div className="relative p-6 glass-card border border-funda-sky-blue/30 rounded-3xl">
                      <p className="bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue bg-clip-text text-transparent font-bold text-2xl">
                        🎯 From Confusion to Cognition - Let's Make It Happen!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced 3D Footer */}
      <footer className="bg-gradient-to-br from-funda-deep-navy via-funda-royal-blue to-funda-deep-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-funda-sky-blue/20 via-transparent to-funda-royal-blue/20"></div>
        </div>
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="relative group inline-block perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue px-12 py-6 rounded-3xl mb-8 shadow-2xl border border-white/30 transform group-hover:scale-110 transition-all duration-500 holographic">
                <div className="font-playfair text-4xl font-bold text-white drop-shadow-lg text-shadow-3d">FUNDA</div>
              </div>
            </div>
            <p className="text-funda-pale-blue text-2xl mb-12 font-bold drop-shadow-lg">
              <span className="bg-gradient-to-r from-funda-pale-blue to-white bg-clip-text text-transparent">Confusion to cognition</span>
            </p>
            <div className="flex justify-center space-x-8">
              {[
                { icon: Instagram, action: openInstagram },
                { icon: Youtube, action: openYoutube },
                { icon: Facebook, action: openFacebook }
              ].map((social, index) => (
                <div key={index} className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <button onClick={social.action} className="relative group/btn">
                    <div className="glass-dark p-5 rounded-2xl group-hover/btn:bg-gradient-to-r group-hover/btn:from-funda-sky-blue group-hover/btn:to-funda-royal-blue group-hover/btn:scale-125 transition-all duration-500 border border-white/20 shadow-xl card-3d">
                      <social.icon className="w-10 h-10 text-funda-sky-blue group-hover/btn:text-white transition-colors duration-500" />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-12 text-center text-funda-pale-blue text-xl font-bold">
            <span className="bg-gradient-to-r from-funda-pale-blue to-white bg-clip-text text-transparent">
              © 2025 FUNDA. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
