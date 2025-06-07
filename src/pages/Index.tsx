
import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin, Users, Star, Phone, Mail, Instagram, Youtube, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY > 100);
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
    },
    {
      name: "Family Foursome",
      description: "Student + 3 Family Members",
      price: 1299,
      originalPrice: 1599,
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
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavVisible ? 'bg-funda-deep-navy/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="font-playfair text-fluid-2xl font-bold text-funda-sky-blue">
              FUNDA
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'About', 'Event', 'Plans', 'Register', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-funda-sky-blue transition-colors duration-300 font-inter font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "linear-gradient(rgba(10, 31, 68, 0.7), rgba(10, 31, 68, 0.7)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')"
          }}
        />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="glass-card p-8 lg:p-12 animate-fade-in">
            <h1 className="font-playfair text-fluid-4xl lg:text-6xl font-bold text-white mb-6">
              Welcome to FUNDA
            </h1>
            <p className="text-fluid-xl text-funda-pale-blue mb-4">
              Confusion to cognition
            </p>
            <p className="text-fluid-lg text-funda-sky-blue mb-8 font-semibold">
              June 27 & 29 | 10 AM – 4 PM | VNRVJIET, Hyderabad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('register')}
                className="btn-primary"
              >
                Register Now
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                className="btn-secondary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About FUNDA */}
      <section id="about" className="section-padding bg-funda-pale-blue">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="heading-secondary mb-6">About FUNDA</h2>
              <div className="space-y-6 text-funda-deep-navy text-fluid-base">
                <p>
                  <span className="text-highlight">FUNDA—Flying Up Navigating Dreams and Aspirations</span>—guides you from post–12th confusion to clear branch & college choices.
                </p>
                <p>
                  Our expert panels, college tours, and hands-on workshops equip you to choose the perfect branch & college.
                </p>
                <div className="pt-4">
                  <span className="inline-block typing-effect text-funda-sky-blue font-semibold text-fluid-lg">
                    Navigating Dreams • Dream Colleges • Future-Ready
                  </span>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Students learning together"
                className="rounded-2xl shadow-2xl w-full"
                style={{ filter: 'sepia(20%) hue-rotate(200deg) saturate(70%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="event" className="section-padding bg-funda-deep-navy parallax-bg relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="container-custom relative z-10">
          <h2 className="heading-secondary text-white text-center mb-16">Event Details</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-dark p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <Calendar className="w-16 h-16 text-funda-sky-blue mx-auto mb-6" />
                <h3 className="font-playfair text-fluid-xl font-semibold text-white mb-4">When?</h3>
                <p className="text-funda-pale-blue text-fluid-base">
                  June 27 & 29<br />
                  10 AM – 4 PM
                </p>
              </CardContent>
            </Card>

            <Card className="glass-dark p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <MapPin className="w-16 h-16 text-funda-sky-blue mx-auto mb-6" />
                <h3 className="font-playfair text-fluid-xl font-semibold text-white mb-4">Where?</h3>
                <p className="text-funda-pale-blue text-fluid-base">
                  VNRVJIET College<br />
                  Pragathi Nagar, Hyderabad
                </p>
              </CardContent>
            </Card>

            <Card className="glass-dark p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <Users className="w-16 h-16 text-funda-sky-blue mx-auto mb-6" />
                <h3 className="font-playfair text-fluid-xl font-semibold text-white mb-4">Why?</h3>
                <p className="text-funda-pale-blue text-fluid-base">
                  Expert guidance on<br />
                  branches & colleges
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="section-padding bg-funda-pale-blue">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-3xl font-semibold text-center mb-4 text-funda-sky-blue">Choose Your FUNDA Pass</h2>
          <p className="text-center text-funda-deep-navy text-fluid-lg mb-16">Select the perfect plan for your family</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-funda-sky-blue bg-white">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-fluid-xl font-semibold text-funda-deep-navy mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-funda-deep-navy text-fluid-sm mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-funda-sky-blue font-bold text-fluid-3xl">₹{plan.price}</span>
                    <span className="text-gray-500 line-through ml-2 text-fluid-lg">₹{plan.originalPrice}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-funda-deep-navy text-fluid-sm">
                        <span className="text-funda-sky-blue mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => scrollToSection('register')}
                    className="w-full border-2 border-funda-royal-blue text-funda-deep-navy bg-white hover:bg-funda-sky-blue hover:text-white transition-all duration-300"
                    variant="outline"
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
      <section id="register" className="section-padding bg-funda-pale-blue">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-fluid-2xl font-semibold text-funda-deep-navy mb-8">Register & Upload Payment Screenshot</h2>
            
            <div className="glass-card p-8 lg:p-12 bg-white/50">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <iframe 
                  src="https://tally.so/r/wLqWA2"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="FUNDA Registration Form"
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </div>
              
              <div className="mt-8 p-4 bg-green-100 rounded-lg border border-green-300">
                <p className="text-green-800 font-semibold">
                  ✅ Registration received! See you soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-16">Contact Us</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-playfair text-fluid-xl font-semibold text-funda-deep-navy mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-funda-sky-blue mr-4" />
                  <div>
                    <p className="font-semibold text-funda-deep-navy">Phone/WhatsApp</p>
                    <p className="text-funda-deep-navy">9392617931</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-funda-sky-blue mr-4" />
                  <div>
                    <p className="font-semibold text-funda-deep-navy">Email</p>
                    <p className="text-funda-deep-navy">hello@fundaconnects.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Instagram className="w-6 h-6 text-funda-sky-blue mr-4" />
                  <div>
                    <p className="font-semibold text-funda-deep-navy">Instagram</p>
                    <p className="text-funda-deep-navy">@funda.connects</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Youtube className="w-6 h-6 text-funda-sky-blue mr-4" />
                  <div>
                    <p className="font-semibold text-funda-deep-navy">YouTube</p>
                    <p className="text-funda-deep-navy">FUNDA Connects</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Facebook className="w-6 h-6 text-funda-sky-blue mr-4" />
                  <div>
                    <p className="font-semibold text-funda-deep-navy">Facebook</p>
                    <p className="text-funda-deep-navy">/funda.connects</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-funda-deep-navy text-fluid-lg">
                For any queries, reach out to us via phone, email, or social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-funda-deep-navy text-white py-12">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="font-playfair text-fluid-2xl font-bold text-funda-sky-blue mb-4">
              FUNDA
            </div>
            <p className="text-funda-pale-blue text-fluid-sm mb-6">
              Confusion to cognition
            </p>
            <div className="flex justify-center space-x-6">
              <Instagram className="w-6 h-6 text-funda-sky-blue hover:text-funda-royal-blue cursor-pointer transition-colors duration-300" />
              <Youtube className="w-6 h-6 text-funda-sky-blue hover:text-funda-royal-blue cursor-pointer transition-colors duration-300" />
              <Facebook className="w-6 h-6 text-funda-sky-blue hover:text-funda-royal-blue cursor-pointer transition-colors duration-300" />
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-funda-pale-blue text-fluid-sm">
            © 2025 FUNDA. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
