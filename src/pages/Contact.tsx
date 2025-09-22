import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentBudget: '',
    preferredRegions: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: "New York",
      address: "123 Wall Street, Floor 45",
      phone: "+1 (555) 123-4567",
      email: "ny@projectinvest.com",
      timezone: "EST",
      image: "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      city: "London",
      address: "456 Canary Wharf, Level 30",
      phone: "+44 20 7123 4567",
      email: "london@projectinvest.com",
      timezone: "GMT",
      image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      city: "Singapore",
      address: "789 Marina Bay, Tower 2",
      phone: "+65 6123 4567",
      email: "sg@projectinvest.com",
      timezone: "SGT",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const investmentRanges = [
    "Under $500K",
    "$500K - $1M",
    "$1M - $5M",
    "$5M - $10M",
    "Over $10M"
  ];

  const regions = [
    "North America",
    "Europe",
    "Asia Pacific",
    "Middle East",
    "Global Portfolio"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to start your international real estate investment journey? Our experts are here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Investment Journey</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="investmentBudget" className="block text-sm font-medium text-gray-700 mb-2">
                        Investment Budget
                      </label>
                      <select
                        id="investmentBudget"
                        name="investmentBudget"
                        value={formData.investmentBudget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      >
                        <option value="">Select budget range</option>
                        {investmentRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredRegions" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Investment Regions
                    </label>
                    <select
                      id="preferredRegions"
                      name="preferredRegions"
                      value={formData.preferredRegions}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select region</option>
                      {regions.map((region, index) => (
                        <option key={index} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your investment goals and any specific requirements..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-blue-700 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-3 text-blue-300" />
                    <div>
                      <div className="font-medium">+1 (555) 123-4567</div>
                      <div className="text-sm text-blue-200">24/7 Support</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-3 text-blue-300" />
                    <div>
                      <div className="font-medium">info@projectinvest.com</div>
                      <div className="text-sm text-blue-200">Response within 1 hour</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-6 w-6 mr-3 text-blue-300" />
                    <div>
                      <div className="font-medium">Live Chat Available</div>
                      <div className="text-sm text-blue-200">Mon-Fri, 9AM-6PM EST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-semibold text-green-800">Response Time</h3>
                </div>
                <p className="text-green-700">
                  We typically respond to all inquiries within 1-2 business hours. For urgent matters, 
                  please call us directly for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Offices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with our teams across major financial centers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={office.image} 
                  alt={office.city}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{office.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{office.timezone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;