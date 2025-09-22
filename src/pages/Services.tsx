import React from 'react';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  FileText, 
  Building, 
  Globe, 
  BarChart3, 
  Phone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Expert guidance on international real estate investments with comprehensive market analysis and personalized strategies.",
      features: [
        "Market research and analysis",
        "Investment strategy development",
        "Portfolio diversification planning",
        "Risk assessment and management"
      ],
      price: "Starting at $500/consultation"
    },
    {
      icon: Building,
      title: "Property Management",
      description: "Full-service property management across global markets ensuring optimal performance and hassle-free ownership.",
      features: [
        "Tenant screening and management",
        "Maintenance and repairs coordination",
        "Financial reporting and analytics",
        "Legal compliance management"
      ],
      price: "2-4% of rental income"
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "In-depth market intelligence and data analytics to identify emerging opportunities and market trends.",
      features: [
        "Real-time market data analysis",
        "Emerging market identification",
        "ROI projections and modeling",
        "Competitive landscape analysis"
      ],
      price: "Custom pricing available"
    },
    {
      icon: Shield,
      title: "Legal & Compliance",
      description: "Navigate complex international regulations with our legal experts ensuring compliant and secure transactions.",
      features: [
        "Legal documentation review",
        "Regulatory compliance guidance",
        "Tax optimization strategies",
        "International law expertise"
      ],
      price: "Starting at $1,000/transaction"
    },
    {
      icon: Users,
      title: "Wealth Management",
      description: "Comprehensive wealth management services tailored for high-net-worth individuals investing in real estate.",
      features: [
        "Portfolio construction",
        "Asset allocation strategies",
        "Tax-efficient structures",
        "Estate planning integration"
      ],
      price: "1% AUM annually"
    },
    {
      icon: Globe,
      title: "Global Network Access",
      description: "Leverage our extensive international network of partners, developers, and market specialists.",
      features: [
        "Exclusive deal access",
        "Local market expertise",
        "Developer relationships",
        "Professional network connections"
      ],
      price: "Included with premium services"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive assessment of your investment goals, risk tolerance, and financial situation."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Our experts create a customized investment strategy aligned with your objectives and market opportunities."
    },
    {
      step: "03",
      title: "Market Research",
      description: "Deep dive into target markets with thorough due diligence on properties and investment opportunities."
    },
    {
      step: "04",
      title: "Investment Execution",
      description: "Handle all aspects of the transaction from negotiation to closing with full legal and financial support."
    },
    {
      step: "05",
      title: "Ongoing Management",
      description: "Continuous monitoring and management of your investments with regular reporting and optimization."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate investment services designed to maximize your returns 
              while minimizing risk across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Investment Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial consultation to ongoing management, we provide end-to-end services for successful real estate investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-700" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 mb-4">{service.price}</p>
                  <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful outcomes for every client investment
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">Over $1.2B in successful transactions with an average ROI of 12.8% for our clients.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Expertise</h3>
                    <p className="text-gray-600">Deep knowledge of 25+ international markets with local partnerships worldwide.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Service</h3>
                    <p className="text-gray-600">Dedicated account managers providing tailored solutions for your unique investment goals.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional consultation"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-blue-700 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2,000+</div>
                  <div className="text-blue-100">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts to discuss your investment goals and discover opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Download Service Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;