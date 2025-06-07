
import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin, Users, Star, Phone, Mail, Instagram, Youtube, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY > 100);
      
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      benefits: [
        "2 Days Lunch & Refreshments",
        "FUNDA Welcome Kit",
        "Surprise Takeaways",
        "Certificate of Completion"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg bg-funda-deep-navy/30 border-b border-white/10">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Container */}
            <div className="bg-funda-royal-blue px-4 py-3 rounded-xl shadow-lg border border-funda-sky-blue/20">
              <div className="font-playfair text-2xl font-bold text-white">
                FUNDA
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
                  className={`relative px-4 py-2 rounded-full font-inter font-medium text-sm uppercase tracking-wide transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-funda-sky-blue text-funda-deep-navy shadow-lg'
                      : 'text-white hover:bg-funda-sky-blue hover:text-funda-deep-navy hover:shadow-lg'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-funda-deep-navy rounded-full" />
                  )}
                </button>
              ))}
              
              {/* Register Button */}
              <Button 
                onClick={() => scrollToSection('register')}
                className="ml-4 bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue text-white px-6 py-3 rounded-full font-inter font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105 border border-white/20"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "linear-gradient(rgba(10, 31, 68, 0.7), rgba(30, 58, 138, 0.8)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')"
          }}
        />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 lg:p-16 animate-fade-in rounded-3xl shadow-2xl">
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to <span className="text-funda-sky-blue">FUNDA</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-funda-pale-blue mb-4 font-medium">
              Confusion to cognition
            </p>
            <div className="bg-funda-royal-blue/80 backdrop-blur-sm px-6 py-4 rounded-2xl mb-8 border border-funda-sky-blue/30">
              <p className="text-xl lg:text-2xl text-white font-semibold">
                June 27 & 29 | 10 AM – 4 PM | VNRVJIET, Hyderabad
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => scrollToSection('register')}
                className="bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue text-white px-10 py-4 rounded-full font-inter font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/30"
              >
                Register Now
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                className="border-2 border-white text-white bg-transparent px-10 py-4 rounded-full font-inter font-bold text-lg transition-all duration-300 hover:bg-white hover:text-funda-deep-navy hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-white drop-shadow-lg" />
        </div>
      </section>

      {/* About FUNDA */}
      <section id="about" className="section-padding bg-funda-pale-blue">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-funda-deep-navy mb-8">About FUNDA</h2>
              <div className="space-y-6 text-funda-deep-navy text-lg lg:text-xl">
                <p className="font-semibold leading-relaxed">
                  <span className="text-funda-royal-blue font-bold text-xl">FUNDA—Flying Up Navigating Dreams and Aspirations</span>—guides you from post–12th confusion to clear branch & college choices.
                </p>
                <p className="font-medium leading-relaxed">
                  Our expert panels, college tours, and hands-on workshops equip you to choose the perfect branch & college with confidence and clarity.
                </p>
                <div className="pt-6">
                  <div className="inline-flex items-center bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue text-white font-bold text-lg px-6 py-3 rounded-2xl shadow-lg">
                    🚀 Navigating Dreams • 🎯 Dream Colleges • 🌟 Future-Ready
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
                  alt="Students learning together"
                  className="rounded-3xl shadow-2xl w-full border-4 border-white"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-funda-royal-blue/20 to-funda-sky-blue/20 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="event" className="section-padding bg-funda-deep-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-contain bg-center bg-no-repeat" style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M20,20 Q50,5 80,20 Q95,50 80,80 Q50,95 20,80 Q5,50 20,20\" fill=\"%2360A5FA\" opacity=\"0.1\"/></svg>')"
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-white text-center mb-16">Event Details</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="backdrop-blur-lg bg-white/95 border border-funda-sky-blue/30 p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300 shadow-2xl rounded-2xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-funda-royal-blue to-funda-sky-blue p-4 rounded-2xl mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-funda-deep-navy mb-4">When?</h3>
                <p className="text-funda-deep-navy text-lg font-semibold">
                  June 27 & 29<br />
                  <span className="text-funda-royal-blue">10 AM – 4 PM</span>
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-lg bg-white/95 border border-funda-sky-blue/30 p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300 shadow-2xl rounded-2xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-funda-royal-blue to-funda-sky-blue p-4 rounded-2xl mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-funda-deep-navy mb-4">Where?</h3>
                <div>
                  <p className="text-funda-deep-navy text-lg font-semibold mb-3">
                    VNRVJIET College<br />
                    <span className="text-funda-royal-blue">Pragathi Nagar, Hyderabad</span>
                  </p>
                  <Button 
                    onClick={openVenueMap}
                    className="bg-funda-royal-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-funda-sky-blue transition-colors"
                  >
                    View on Map
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-lg bg-white/95 border border-funda-sky-blue/30 p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300 shadow-2xl rounded-2xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-funda-royal-blue to-funda-sky-blue p-4 rounded-2xl mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-funda-deep-navy mb-4">Why?</h3>
                <p className="text-funda-deep-navy text-lg font-semibold">
                  Expert guidance on<br />
                  <span className="text-funda-royal-blue">branches & colleges</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="section-padding bg-funda-pale-blue">
        <div className="container-custom">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-center mb-6 text-funda-royal-blue">Choose Your FUNDA Pass</h2>
          <p className="text-center text-funda-deep-navy text-xl mb-16 font-semibold">Select the perfect plan for your family</p>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-3 bg-white rounded-2xl ${
                index === 1 ? 'border-funda-royal-blue shadow-xl scale-105' : 'border-funda-sky-blue/50 hover:border-funda-sky-blue'
              }`}>
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue text-white text-center py-2 font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <CardContent className="p-8 pt-12">
                  <h3 className="font-playfair text-2xl font-bold text-funda-deep-navy mb-3 text-center">
                    {plan.name}
                  </h3>
                  <p className="text-funda-deep-navy text-lg mb-6 font-semibold text-center">
                    {plan.description}
                  </p>
                  
                  <div className="mb-8 text-center">
                    <span className="text-funda-royal-blue font-bold text-4xl">₹{plan.price}</span>
                    <span className="text-gray-500 line-through ml-3 text-xl">₹{plan.originalPrice}</span>
                    <div className="bg-funda-sky-blue/20 text-funda-royal-blue font-bold text-sm px-3 py-1 rounded-full inline-block ml-2">
                      Save ₹{plan.originalPrice - plan.price}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-funda-deep-navy text-base font-semibold">
                        <span className="text-funda-royal-blue mr-3 font-bold text-lg">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => scrollToSection('register')}
                    className={`w-full py-4 font-bold text-lg rounded-xl transition-all duration-300 ${
                      index === 1 
                        ? 'bg-gradient-to-r from-funda-royal-blue to-funda-sky-blue text-white hover:shadow-xl hover:scale-105' 
                        : 'border-2 border-funda-royal-blue text-funda-royal-blue bg-white hover:bg-funda-royal-blue hover:text-white hover:shadow-xl'
                    }`}
                  >
                    Select & Register
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="section-padding bg-gradient-to-br from-funda-deep-navy via-funda-royal-blue to-funda-sky-blue">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-12">Register & Upload Payment Screenshot</h2>
            
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 lg:p-12 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
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
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-center mb-16 text-funda-deep-navy">Contact Us</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-funda-deep-navy mb-12">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <button 
                  onClick={openWhatsApp}
                  className="flex items-center w-full text-left hover:bg-funda-pale-blue p-6 rounded-2xl transition-all duration-300 group border border-funda-sky-blue/20 hover:border-funda-sky-blue hover:shadow-lg"
                >
                  <div className="bg-gradient-to-br from-funda-royal-blue to-funda-sky-blue p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-funda-deep-navy">Phone/WhatsApp</p>
                    <p className="text-funda-royal-blue text-lg font-semibold">9392617931</p>
                  </div>
                </button>
                
                <button 
                  onClick={openEmail}
                  className="flex items-center w-full text-left hover:bg-funda-pale-blue p-6 rounded-2xl transition-all duration-300 group border border-funda-sky-blue/20 hover:border-funda-sky-blue hover:shadow-lg"
                >
                  <div className="bg-gradient-to-br from-funda-royal-blue to-funda-sky-blue p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-funda-deep-navy">Email</p>
                    <p className="text-funda-royal-blue text-lg font-semibold">hello@fundaconnects.com</p>
                  </div>
                </button>
                
                <button 
                  onClick={openInstagram}
                  className="flex items-center w-full text-left hover:bg-funda-pale-blue p-6 rounded-2xl transition-all duration-300 group border border-funda-sky-blue/20 hover:border-funda-sky-blue hover:shadow-lg"
                >
                  <div className="bg-gradient-to-br from-funda-royal-blue to-funda-sky-blue p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-funda-deep-navy">Instagram</p>
                    <p className="text-funda-royal-blue text-lg font-semibold">@funda.connects</p>
                  </div>
                </button>
                
                <button 
                  onClick={openYoutube}
                  className="flex items-center w-full text-left hover:bg-funda-pale-blue p-6 rounded-2xl transition-all duration-300 group border border-funda-sky-blue/20 hover:border-funda-sky-blue hover:shadow-lg"
                >
                  <div className="bg-gradient-to-br from-funda-royal-blue to-funda-sky-blue p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform">
                    <Youtube className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-funda-deep-navy">YouTube</p>
                    <p className="text-funda-royal-blue text-lg font-semibold">FUNDA Connects</p>
                  </div>
                </button>
                
                <button 
                  onClick={openFacebook}
                  className="flex items-center w-full text-left hover:bg-funda-pale-blue p-6 rounded-2xl transition-all duration-300 group border border-funda-sky-blue/20 hover:border-funda-sky-blue hover:shadow-lg"
                >
                  <div className="bg-gradient-to-br from-funda-royal-blue to-funda-sky-blue p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform">
                    <Facebook className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-funda-deep-navy">Facebook</p>
                    <p className="text-funda-royal-blue text-lg font-semibold">/funda.connects</p>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-funda-pale-blue to-white p-8 rounded-3xl shadow-xl border border-funda-sky-blue/30">
                <h4 className="font-playfair text-2xl font-bold text-funda-deep-navy mb-6">We're Here to Help!</h4>
                <p className="text-funda-deep-navy text-lg font-semibold leading-relaxed">
                  For any queries about FUNDA, course selection, or registration, reach out to us via phone, email, or social media. We're here to help you navigate your dreams and achieve your aspirations!
                </p>
                <div className="mt-6 p-4 bg-funda-royal-blue/10 rounded-2xl">
                  <p className="text-funda-royal-blue font-bold text-lg">
                    🎯 From Confusion to Cognition - Let's Make It Happen!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-funda-deep-navy text-white py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-funda-royal-blue px-8 py-4 rounded-2xl inline-block mb-6 shadow-xl border border-funda-sky-blue/30">
              <div className="font-playfair text-3xl font-bold text-white">FUNDA</div>
            </div>
            <p className="text-funda-pale-blue text-xl mb-8 font-semibold">
              Confusion to cognition
            </p>
            <div className="flex justify-center space-x-8">
              <button onClick={openInstagram} className="group">
                <div className="bg-funda-royal-blue/20 p-4 rounded-2xl group-hover:bg-funda-sky-blue group-hover:scale-110 transition-all duration-300">
                  <Instagram className="w-8 h-8 text-funda-sky-blue group-hover:text-white" />
                </div>
              </button>
              <button onClick={openYoutube} className="group">
                <div className="bg-funda-royal-blue/20 p-4 rounded-2xl group-hover:bg-funda-sky-blue group-hover:scale-110 transition-all duration-300">
                  <Youtube className="w-8 h-8 text-funda-sky-blue group-hover:text-white" />
                </div>
              </button>
              <button onClick={openFacebook} className="group">
                <div className="bg-funda-royal-blue/20 p-4 rounded-2xl group-hover:bg-funda-sky-blue group-hover:scale-110 transition-all duration-300">
                  <Facebook className="w-8 h-8 text-funda-sky-blue group-hover:text-white" />
                </div>
              </button>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-funda-pale-blue text-lg font-semibold">
            © 2025 FUNDA. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
