
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
      icon: <Sparkles className="w-6 h-6" />,
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
      icon: <Zap className="w-6 h-6" />,
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
      icon: <Globe className="w-6 h-6" />,
      benefits: [
        "2 Days Lunch & Refreshments",
        "FUNDA Welcome Kit",
        "Surprise Takeaways",
        "Certificate of Completion"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-100/40 to-blue-200/40 rounded-full blur-3xl floating-element"
          style={{
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0px)`,
            top: '10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-l from-blue-50/30 to-blue-100/30 rounded-full blur-3xl floating-element"
          style={{
            transform: `translate3d(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px, 0px)`,
            bottom: '20%',
            right: '15%',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Minimalistic Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isNavVisible ? 'nav-minimal' : 'bg-transparent'}`}>
        <div className="container-minimal px-6 sm:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-xl shadow-blue">
                <div className="font-bold text-xl text-white">
                  FUNDA
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
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
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Register Button */}
              <div className="ml-6">
                <button 
                  onClick={() => scrollToSection('register')}
                  className="btn-3d-primary"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center gradient-bg">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-800/10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="glass-minimal p-12 lg:p-16 fade-in-up">
            <h1 className="heading-minimal text-5xl lg:text-7xl mb-6">
              Welcome to <span className="text-gradient-blue">FUNDA</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-600 mb-4 font-medium">
              Confusion to cognition
            </p>
            <div className="glass-blue px-8 py-6 rounded-2xl mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl lg:text-2xl text-blue-800 font-semibold">
                <Calendar className="inline w-6 h-6 mr-3" />
                June 27 & 29 | 10 AM – 4 PM | VNRVJIET, Hyderabad
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => scrollToSection('register')}
                className="btn-3d-primary"
              >
                <Zap className="w-5 h-5 mr-2" />
                Register Now
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="btn-3d-secondary"
              >
                <Globe className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hover-lift">
          <div className="p-3 rounded-full glass-minimal">
            <ChevronDown className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </section>

      {/* About FUNDA */}
      <section id="about" className="section-padding bg-white relative">
        <div className="container-minimal relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-left">
              <h2 className="heading-minimal text-4xl lg:text-6xl text-gradient-blue mb-8">About FUNDA</h2>
              <div className="space-y-6 text-gray-700 text-lg lg:text-xl">
                <div className="card-3d-minimal">
                  <p className="font-semibold leading-relaxed">
                    <span className="text-gradient-blue font-bold text-xl">FUNDA—Flying Up Navigating Dreams and Aspirations</span>—guides you from post–12th confusion to clear branch & college choices.
                  </p>
                </div>
                <div className="card-3d-blue">
                  <p className="font-medium leading-relaxed text-blue-800">
                    Our expert panels, college tours, and hands-on workshops equip you to choose the perfect branch & college with confidence and clarity.
                  </p>
                </div>
                <div className="glass-blue p-6 rounded-2xl">
                  <p className="text-blue-700 font-semibold text-lg">
                    <Sparkles className="inline w-5 h-5 mr-2" />
                    🚀 Navigating Dreams • 🎯 Dream Colleges • 🌟 Future-Ready
                  </p>
                </div>
              </div>
            </div>
            <div className="fade-in-right">
              <div className="relative hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
                  alt="Students learning together"
                  className="rounded-2xl shadow-minimal w-full border border-gray-100"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="event" className="section-padding gradient-bg-blue relative">
        <div className="container-minimal relative z-10">
          <h2 className="heading-minimal text-4xl lg:text-6xl text-center mb-16 text-gradient-blue fade-in-up">
            Event Details
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "When?",
                content: "June 27 & 29",
                subtitle: "10 AM – 4 PM"
              },
              {
                icon: MapPin,
                title: "Where?",
                content: "VNRVJIET College",
                subtitle: "Pragathi Nagar, Hyderabad",
                hasButton: true
              },
              {
                icon: Users,
                title: "Why?",
                content: "Expert guidance on",
                subtitle: "branches & colleges"
              }
            ].map((item, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="card-3d-minimal text-center h-full">
                  <CardContent className="p-8">
                    <div className="icon-3d mx-auto w-16 h-16 flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="heading-minimal text-2xl mb-4">{item.title}</h3>
                    <p className="text-gray-800 text-xl font-semibold mb-2">
                      {item.content}
                    </p>
                    <p className="text-blue-600 text-lg font-medium mb-6">
                      {item.subtitle}
                    </p>
                    {item.hasButton && (
                      <button 
                        onClick={openVenueMap}
                        className="btn-3d-secondary"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        View on Map
                      </button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="section-padding bg-white relative">
        <div className="container-minimal relative z-10">
          <h2 className="heading-minimal text-4xl lg:text-6xl text-center mb-6 text-gradient-blue fade-in-up">Choose Your FUNDA Pass</h2>
          <p className="text-center text-gray-600 text-xl mb-16 fade-in-up" style={{ animationDelay: '0.2s' }}>Select the perfect plan for your family</p>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className={`card-3d-minimal overflow-hidden h-full ${
                  index === 1 ? 'border-blue-200 shadow-blue scale-105' : ''
                }`}>
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 font-semibold text-sm">
                      <Sparkles className="inline w-4 h-4 mr-2" />
                      MOST POPULAR
                      <Sparkles className="inline w-4 h-4 ml-2" />
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="icon-3d mx-auto w-16 h-16 flex items-center justify-center mb-6">
                        {plan.icon}
                      </div>
                      <h3 className="heading-minimal text-2xl mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 text-lg mb-6">
                        {plan.description}
                      </p>
                    </div>
                    
                    <div className="mb-8 text-center">
                      <span className="text-gradient-blue font-bold text-4xl">₹{plan.price}</span>
                      <span className="text-gray-400 line-through ml-3 text-xl">₹{plan.originalPrice}</span>
                      <div className="glass-blue text-blue-700 font-semibold text-sm px-3 py-1 rounded-full inline-block ml-3">
                        Save ₹{plan.originalPrice - plan.price}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-gray-700 font-medium">
                          <span className="text-blue-600 mr-3 font-bold">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => scrollToSection('register')}
                      className={index === 1 ? 'btn-3d-primary w-full' : 'btn-3d-secondary w-full'}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Select & Register
                    </button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="section-padding gradient-bg-blue relative">
        <div className="container-minimal relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-minimal text-4xl lg:text-6xl text-gradient-blue mb-12 fade-in-up">
              Register & Upload Payment Screenshot
            </h2>
            
            <div className="glass-minimal p-8 lg:p-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl p-6 shadow-minimal">
                <iframe 
                  src="https://tally.so/r/wLqWA2"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="FUNDA Registration Form"
                  className="rounded-xl"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-white relative">
        <div className="container-minimal relative z-10">
          <h2 className="heading-minimal text-4xl lg:text-6xl text-center mb-16 text-gradient-blue fade-in-up">Contact Us</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="fade-in-left">
              <h3 className="heading-minimal text-3xl text-gradient-blue mb-12">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Phone/WhatsApp", value: "9392617931", action: openWhatsApp },
                  { icon: Mail, title: "Email", value: "hello@fundaconnects.com", action: openEmail },
                  { icon: Instagram, title: "Instagram", value: "@funda.connects", action: openInstagram },
                  { icon: Youtube, title: "YouTube", value: "FUNDA Connects", action: openYoutube },
                  { icon: Facebook, title: "Facebook", value: "/funda.connects", action: openFacebook }
                ].map((contact, index) => (
                  <button 
                    key={index}
                    onClick={contact.action}
                    className="flex items-center w-full text-left card-3d-minimal p-6"
                  >
                    <div className="icon-3d mr-6">
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-xl text-gray-900">{contact.title}</p>
                      <p className="text-blue-600 text-lg font-medium">{contact.value}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center fade-in-right">
              <div className="card-3d-blue p-8">
                <h4 className="heading-minimal text-2xl mb-6">We're Here to Help!</h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  For any queries about FUNDA, course selection, or registration, reach out to us via phone, email, or social media. We're here to help you navigate your dreams and achieve your aspirations!
                </p>
                <div className="glass-blue p-6 rounded-2xl">
                  <p className="text-gradient-blue font-semibold text-xl">
                    🎯 From Confusion to Cognition - Let's Make It Happen!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 relative">
        <div className="container-minimal px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl mb-6 inline-block">
              <div className="font-bold text-3xl">FUNDA</div>
            </div>
            <p className="text-blue-100 text-xl mb-8">
              Confusion to cognition
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Instagram, action: openInstagram },
                { icon: Youtube, action: openYoutube },
                { icon: Facebook, action: openFacebook }
              ].map((social, index) => (
                <button 
                  key={index}
                  onClick={social.action} 
                  className="p-4 bg-white/10 rounded-xl hover-lift backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                >
                  <social.icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-blue-100">
            © 2025 FUNDA. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
