import React from 'react';
import { ArrowRight, TrendingUp, Shield, Globe, Users, Building, MapPin, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Apartment Complex",
      location: "Dubai, UAE",
      price: "$2.5M",
      roi: "12.5%",
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Commercial Office Tower",
      location: "London, UK",
      price: "$8.2M",
      roi: "10.8%",
      image: "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Residential Development",
      location: "Toronto, Canada",
      price: "$5.1M",
      roi: "11.2%",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const stats = [
    { icon: Building, value: "500+", label: "Properties Managed" },
    { icon: Users, value: "2,000+", label: "Global Investors" },
    { icon: Globe, value: "25+", label: "Countries" },
    { icon: DollarSign, value: "$1.2B", label: "Assets Under Management" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Global Real Estate
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock premium international real estate investment opportunities with our expert guidance and comprehensive market insights across 25+ countries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/properties"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Investment Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover hand-picked properties with exceptional ROI potential across our global portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.roi} ROI
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-700">{property.price}</span>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-colors duration-300"
            >
              View All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Project Invest?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide unparalleled expertise and support for your international real estate investments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600 leading-relaxed">
                Access premium real estate markets across 25+ countries with our extensive international network and local expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Proven Returns</h3>
              <p className="text-gray-600 leading-relaxed">
                Our portfolio consistently delivers above-market returns with an average ROI of 12.8% across all investment categories.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Secure Investments</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive due diligence, legal protection, and ongoing property management ensure your investments are secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Investing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join more thousands of successful investors who trust Project Invest with their international real estate portfolio.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;