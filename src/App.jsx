import React, { useState } from 'react';

function scrollToSection(id) {
  if (typeof window !== 'undefined') {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location.trim()) {
      console.log(`Searching for: ${location}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#CAF0F8] text-[#03045E] font-sans">
      <header className="bg-white/90 backdrop-blur-md shadow-lg px-8 py-4 flex justify-between items-center fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full w-[95%] max-w-6xl">
  <div className="flex items-center space-x-2">
    <span className="text-2xl font-bold text-black">Groundwater<span className="text-blue-600">AI</span></span>
  </div>
  <nav className="flex space-x-6 text-sm font-medium text-gray-700">
    <button onClick={() => scrollToSection('home')} className="hover:text-black px-3 py-1 rounded-full border border-transparent hover:border-black">Home</button>
    <button onClick={() => scrollToSection('features')} className="hover:text-black px-3 py-1 rounded-full border border-transparent hover:border-black">Features</button>
    <button onClick={() => scrollToSection('charts')} className="hover:text-black px-3 py-1 rounded-full border border-transparent hover:border-black">Dashboard</button>
    <button onClick={() => scrollToSection('contact')} className="hover:text-black px-3 py-1 rounded-full border border-transparent hover:border-black">Contact</button>
  </nav>
  <div className="relative group">
    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Search</button>
    <div className="absolute top-full right-0 mt-2 w-80 p-4 bg-white rounded-xl shadow-lg hidden group-hover:block">
      <input
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full px-4 py-2 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#03045E]"
      />
      <button
        onClick={handleSearch}
        className="mt-2 w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600"
      >
        Go
      </button>
    </div>
  </div>
</header>

      <main>
        <section id="home" className="pt-36 px-8 md:px-16 py-20 text-center bg-[#CAF0F8]">
          <h2 className="text-4xl md:text-6xl font-bold text-[#03045E]">Groundwater Prediction Model</h2>
          <p className="mt-6 text-lg text-[#0077B6] max-w-xl mx-auto">
            Predicting groundwater levels using satellite data, climate trends, and machine learning models for sustainable water resource planning.
          </p>
          <div className="mt-8">
            <button onClick={() => scrollToSection('charts')} className="bg-[#00B4D8] text-white px-6 py-3 text-lg font-medium rounded-lg shadow hover:bg-[#0096C7]">
              Go to Dashboard
            </button>
          </div>
        </section>

        <section id="features" className="px-8 md:px-16 py-20 bg-[#ADE8F4]" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center text-[#03045E] mb-12">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard title="Satellite Data Integration" description="Uses GRACE, SMAP, and MODIS data to monitor groundwater changes globally." icon={<svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-blue-600' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M2 2l20 20M22 2L2 22' /></svg>} />
            <FeatureCard title="Climate-Driven Forecast" description="Combines temperature and precipitation data for more accurate predictions." icon={<svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-blue-600' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M12 2a10 10 0 100 20 10 10 0 000-20z' /></svg>} />
            <FeatureCard title="Interactive Map Visualization" description="Explore predicted groundwater levels on a map, updated in real-time." icon={<svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-blue-600' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M3 3h18v18H3z' /></svg>} />
          </div>
        </section>

        <section id="charts" className="px-8 md:px-16 py-20 bg-[#CAF0F8]">
          <h3 className="text-3xl font-bold text-center text-[#03045E] mb-12">Live Data Insights</h3>
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search dashboard location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-6 py-3 rounded-full w-96 border border-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#0077B6] text-[#03045E]"
            />
            <button
              onClick={handleSearch}
              className="ml-2 bg-[#00B4D8] text-white px-6 py-2 rounded shadow hover:bg-[#0096C7]"
            >
              Search
            </button>
          </div>
          <ChartSection />
          <MapSection />
        </section>

        <section id="contact" className="px-8 md:px-16 py-20 bg-[#ADE8F4] text-[#03045E]">
          <h3 className="text-3xl font-bold text-center mb-8">Let's Collaborate</h3>
          <p className="text-center max-w-xl mx-auto mb-6">
            Are you a researcher, developer, or policy maker? Join us in building sustainable water solutions.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#00B4D8] text-white font-semibold px-6 py-3 rounded hover:bg-[#0096C7]">Contact Us</button>
          </div>
        </section>
      </main>

      <footer className="bg-[#03045E] text-[#CAF0F8] px-8 py-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
    <div>
      <h4 className="text-lg font-semibold mb-2">About GroundwaterAI</h4>
      <p>We use satellite and climate data to model groundwater levels globally, helping communities and governments manage water resources sustainably.</p>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
      <ul className="space-y-1">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#features" className="hover:underline">Features</a></li>
        <li><a href="#charts" className="hover:underline">Dashboard</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2">Contact</h4>
      <p>Email: support@groundwaterai.org</p>
      <p>Phone: +1 (555) 123-4567</p>
      <p className="mt-2">© 2025 GroundwaterAI. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  );
}

const FeatureCard = ({ title, description, icon }) => (
  <div className="p-6 rounded-2xl border border-gray-300 bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-6">
    <div className="space-y-2 text-left flex-1">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-50 p-2 rounded-lg">
          {icon}
        </div>
        <h4 className="text-base font-semibold text-gray-800 tracking-tight">{title}</h4>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <ul className="list-disc list-inside text-xs text-gray-500 mt-2 space-y-1">
        <li>Real-time data integration</li>
        <li>AI-based forecasting</li>
        <li>High-resolution satellite support</li>
      </ul>
    </div>
    
  </div>
);

const ChartSection = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div className="bg-white p-6 rounded shadow">
      <h4 className="font-semibold text-lg mb-2 text-[#03045E]">Groundwater Storage</h4>
      <div className="w-full h-48 rounded-xl border border-gray-200 bg-[#F8F9FA] shadow-md text-center flex items-center justify-center text-[#03045E] font-medium tracking-wide">
        Line Chart Placeholder
      </div>
    </div>
    <div className="bg-white p-6 rounded shadow">
      <h4 className="font-semibold text-lg mb-2 text-[#03045E]">Temperature & Rainfall</h4>
      <div className="w-full h-48 rounded-xl border border-gray-200 bg-[#F8F9FA] shadow-md text-center flex items-center justify-center text-[#03045E] font-medium tracking-wide">
        Bar Chart Placeholder
      </div>
    </div>
  </div>
);

const MapSection = () => (
  <div className="mt-10 bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-md transition-opacity duration-700 animate-fade-in">
    <h4 className="font-semibold text-lg mb-4 text-[#03045E] text-center">Global Groundwater Map</h4>
    <div className="h-64 w-full bg-[#90E0EF]/30 rounded-lg text-center flex items-center justify-center text-[#03045E] backdrop-blur-md border border-white/30">
      Google Map Placeholder
    </div>
  </div>
);

export default App;