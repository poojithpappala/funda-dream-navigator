
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

  const testimonials = [
    {
      name: "Priya Sharma",
      college: "IIT Delhi - Computer Science",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "FUNDA helped me choose the perfect branch and college. The expert guidance was invaluable!",
      rating: 5
    },
    {
      name: "Arjun Reddy",
      college: "NIT Warangal - Electronics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "The college tours and workshops gave me clarity about my future. Highly recommended!",
      rating: 5
    },
    {
      name: "Sneha Patel",
      college: "IIIT Hyderabad - AI & ML",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "From confusion to confidence - FUNDA transformed my career decision process.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavVisible ? 'bg-funda-navy/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="font-playfair text-fluid-2xl font-bold text-funda-orange">
              FUNDA
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'About', 'Event', 'Plans', 'Benefits', 'Register', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-funda-orange transition-colors duration-300 font-inter font-medium"
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
            backgroundImage: "linear-gradient(rgba(13, 27, 42, 0.7), rgba(13, 27, 42, 0.7)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')"
          }}
        />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="glass-card p-8 lg:p-12 animate-fade-in">
            <h1 className="font-playfair text-fluid-4xl lg:text-6xl font-bold text-white mb-6">
              Welcome to FUNDA
            </h1>
            <p className="text-fluid-xl text-funda-sandstone mb-4">
              From Confusion to Cognition
            </p>
            <p className="text-fluid-lg text-funda-orange mb-8 font-semibold">
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
      <section id="about" className="section-padding bg-funda-sandstone">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="heading-secondary mb-6">About FUNDA</h2>
              <div className="space-y-6 text-funda-charcoal text-fluid-base">
                <p>
                  <span className="text-highlight">FUNDA—Flying Up Navigating Dreams and Aspirations</span>—turns the post-12th confusion into crystal-clear career paths.
                </p>
                <p>
                  Our expert panels, college tours, and hands-on workshops equip you to choose the perfect branch & college.
                </p>
                <p>
                  With years of experience guiding students, we understand the challenges you face. That's why we've created a comprehensive program that addresses every aspect of your career decision.
                </p>
                <div className="pt-4">
                  <span className="inline-block typing-effect text-funda-orange font-semibold text-fluid-lg">
                    Navigating Dreams • Fundamental Choices • Future-Ready
                  </span>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Students learning together"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="event" className="section-padding bg-funda-navy parallax-bg relative">
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
                <Calendar className="w-16 h-16 text-funda-orange mx-auto mb-6" />
                <h3 className="font-playfair text-fluid-xl font-semibold text-white mb-4">When?</h3>
                <p className="text-funda-sandstone text-fluid-base">
                  June 27 & 29<br />
                  10 AM – 4 PM
                </p>
              </CardContent>
            </Card>

            <Card className="glass-dark p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <MapPin className="w-16 h-16 text-funda-orange mx-auto mb-6" />
                <h3 className="font-playfair text-fluid-xl font-semibold text-white mb-4">Where?</h3>
                <p className="text-funda-sandstone text-fluid-base">
                  VNRVJIET College<br />
                  Pragathi Nagar, Hyderabad
                </p>
              </CardContent>
            </Card>

            <Card className="glass-dark p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <Users className="w-16 h-16 text-funda-orange mx-auto mb-6" />
                <h3 className="font-playfair text-fluid-xl font-semibold text-white mb-4">Why?</h3>
                <p className="text-funda-sandstone text-fluid-base">
                  Decide branch & college<br />
                  with expert insights
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-4">Choose Your FUNDA Pass</h2>
          <p className="text-center text-funda-charcoal text-fluid-lg mb-16">Select the perfect plan for your family</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-funda-orange">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-fluid-xl font-semibold text-funda-navy mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-funda-charcoal text-fluid-sm mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-funda-orange font-bold text-fluid-3xl">₹{plan.price}</span>
                    <span className="text-gray-500 line-through ml-2 text-fluid-lg">₹{plan.originalPrice}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-funda-charcoal text-fluid-sm">
                        <span className="text-funda-orange mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => scrollToSection('register')}
                    className="w-full border-2 border-funda-orange text-funda-orange hover:bg-funda-orange hover:text-white transition-all duration-300"
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

      {/* Benefits & Highlights */}
      <section id="benefits" className="section-padding bg-funda-sandstone">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-12">Why Choose FUNDA?</h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Users, title: "Expert Panels", desc: "Seasoned seniors & faculty" },
                  { icon: MapPin, title: "College Tours", desc: "On-campus walkthroughs" },
                  { icon: Star, title: "Live Q&A", desc: "Real-time branch guidance" },
                  { icon: Calendar, title: "Resource Guide", desc: "Smart tools & tips" }
                ].map((item, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="w-16 h-16 bg-funda-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-fluid-lg font-semibold text-funda-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-funda-charcoal text-fluid-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
                alt="FUNDA event highlights"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-8">Register Now</h2>
            <p className="text-funda-charcoal text-fluid-lg mb-12">
              Secure your spot at FUNDA and take the first step towards your engineering career
            </p>
            
            <div className="glass-card p-8 lg:p-12 bg-funda-sandstone/50">
              <p className="text-funda-charcoal text-fluid-base mb-8">
                Register & Upload Payment Screenshot
              </p>
              
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
                  ✅ Registration received! See you in June.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-funda-navy">
        <div className="container-custom">
          <h2 className="heading-secondary text-white text-center mb-16">Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-dark p-6 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-funda-sandstone text-fluid-sm mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <h4 className="font-playfair text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-funda-orange text-fluid-xs">
                    {testimonial.college}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-16">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-playfair text-fluid-xl font-semibold text-funda-navy mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-funda-orange mr-4" />
                  <div>
                    <p className="font-semibold text-funda-navy">Phone/WhatsApp</p>
                    <p className="text-funda-charcoal">9392617931</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-funda-orange mr-4" />
                  <div>
                    <p className="font-semibold text-funda-navy">Email</p>
                    <p className="text-funda-charcoal">hello@fundaconnects.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Instagram className="w-6 h-6 text-funda-orange mr-4" />
                  <div>
                    <p className="font-semibold text-funda-navy">Instagram</p>
                    <p className="text-funda-charcoal">@funda.connects</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Youtube className="w-6 h-6 text-funda-orange mr-4" />
                  <div>
                    <p className="font-semibold text-funda-navy">YouTube</p>
                    <p className="text-funda-charcoal">FUNDA Connects</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Facebook className="w-6 h-6 text-funda-orange mr-4" />
                  <div>
                    <p className="font-semibold text-funda-navy">Facebook</p>
                    <p className="text-funda-charcoal">/funda.connects</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-playfair text-fluid-xl font-semibold text-funda-navy mb-8">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-funda-navy font-semibold mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-funda-orange focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-funda-navy font-semibold mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-funda-orange focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-funda-navy font-semibold mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-funda-orange focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <Button className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-funda-navy text-white py-12">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-playfair text-fluid-2xl font-bold text-funda-orange mb-4">
                FUNDA
              </div>
              <p className="text-funda-sandstone text-fluid-sm">
                From Confusion to Cognition
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-fluid-sm">
                {['Home', 'About', 'Event', 'Plans', 'Benefits', 'Register', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="hover:text-funda-orange transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-fluid-sm text-funda-sandstone">
                <li>📞 9392617931</li>
                <li>✉️ hello@fundaconnects.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 hover:text-funda-orange cursor-pointer transition-colors duration-300" />
                <Youtube className="w-6 h-6 hover:text-funda-orange cursor-pointer transition-colors duration-300" />
                <Facebook className="w-6 h-6 hover:text-funda-orange cursor-pointer transition-colors duration-300" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-funda-sandstone text-fluid-sm">
            © 2025 FUNDA. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
