import React, { useState } from 'react';
import { MapPin, DollarSign, TrendingUp, Filter, Search, Building, Home, Building2 } from 'lucide-react';

const Properties = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const properties = [
    {
      id: 1,
      title: "Luxury Waterfront Condos",
      location: "Miami, USA",
      type: "residential",
      price: "$3.2M",
      roi: "11.5%",
      size: "2,500 sq ft",
      status: "available",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Prime Commercial Tower",
      location: "London, UK",
      type: "commercial",
      price: "$8.7M",
      roi: "10.2%",
      size: "15,000 sq ft",
      status: "available",
      image: "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Modern Office Complex",
      location: "Singapore",
      type: "commercial",
      price: "$12.5M",
      roi: "12.8%",
      size: "25,000 sq ft",
      status: "pre-sale",
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Luxury Resort Development",
      location: "Bali, Indonesia",
      type: "mixed",
      price: "$6.8M",
      roi: "13.2%",
      size: "5,000 sq ft",
      status: "available",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Tech Hub Office Space",
      location: "Berlin, Germany",
      type: "commercial",
      price: "$4.3M",
      roi: "9.8%",
      size: "8,500 sq ft",
      status: "sold",
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Premium Residential Complex",
      location: "Dubai, UAE",
      type: "residential",
      price: "$5.5M",
      roi: "11.8%",
      size: "3,200 sq ft",
      status: "available",
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const filters = [
    { value: 'all', label: 'All Properties', icon: Building2 },
    { value: 'residential', label: 'Residential', icon: Home },
    { value: 'commercial', label: 'Commercial', icon: Building },
    { value: 'mixed', label: 'Mixed Use', icon: Building2 }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesFilter = selectedFilter === 'all' || property.type === selectedFilter;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'pre-sale': return 'bg-blue-100 text-blue-800';
      case 'sold': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Properties</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover premium international real estate opportunities with exceptional ROI potential
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full lg:w-80 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex space-x-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedFilter(filter.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                      selectedFilter === filter.value
                        ? 'bg-blue-700 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <filter.icon className="h-4 w-4" />
                    <span>{filter.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No properties found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(property.status)}`}>
                        {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                      </span>
                    </div>
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

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Price:</span>
                        <span className="font-semibold text-blue-700">{property.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Size:</span>
                        <span className="text-sm">{property.size}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Expected ROI:</span>
                        <div className="flex items-center">
                          <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                          <span className="text-sm font-semibold text-green-600">{property.roi}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button 
                        className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium"
                        disabled={property.status === 'sold'}
                      >
                        {property.status === 'sold' ? 'Sold' : 'View Details'}
                      </button>
                      <button 
                        className="flex-1 border border-blue-700 text-blue-700 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium"
                        disabled={property.status === 'sold'}
                      >
                        {property.status === 'sold' ? 'N/A' : 'Inquire'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See What You're Looking For?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experts can help you find the perfect investment opportunity tailored to your goals and requirements.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Contact Our Experts
          </button>
        </div>
      </section>
    </div>
  );
};

export default Properties;