import React, { useState } from 'react';

// Import necessary styles
import './TributePage.css';

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const TributePage = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const galleryImages = [
    "../images/elonmuskabout.jpg",
    "../images/elonmusk.jpg",
    "../images/marquee1.jpg",
    "../images/marquee2.jpg",
    "../images/marquee3.webp",
    "../images/marquee4.jpeg",  
    "../images/marquee5.jpg",  
    "../images/marquee6.jpg",  
    "../images/marquee7.webp",  
  ];

  return (
    <div className="tribute-page">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-1">
          <div className="logo text-3xl font-bold">EM</div>
          <div className="nav-links flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="flex items-center">
              <HomeIcon /> <span className="ml-2">Home</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="flex items-center">
              <InfoIcon /> <span className="ml-2">About</span>
            </button>
            <button onClick={() => scrollToSection('gallery')} className="flex items-center">
              <ImageIcon /> <span className="ml-2">Gallery</span>
            </button>
            <button onClick={() => scrollToSection('video')} className="flex items-center">
              <VideoIcon /> <span className="ml-2">Video</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2 pr-10">
            <h1 className="text-5xl font-bold mb-4">Elon Reeve Musk</h1>
            <p className="text-xl">When you struggle with a problem, that's when you understand it!</p>
          </div>
          <div className="w-1/2">
            <img 
src="../images/elonmusk.jpg"               alt="Hero" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center bg-gray-100">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2 mr-10">
            <img 
              // src="http://www.canyon-news.com/wp-content/uploads/2017/05/Elon-Musk.jpg" 
              src="../images/elonmuskabout.jpg" 
              alt="Introduction" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-4">About Elon Musk</h2>
            <p className="text-lg">
            Elon Reeve Musk is a businessman known for his key roles in the space company SpaceX and the automotive company Tesla, Inc. His other involvements include ownership of X Corp., the company that operates the social media platform X (formerly Twitter), and his role in the founding of the Boring Company, xAI, Neuralink, and OpenAI. Musk is the wealthiest individual in the world; as of November 2024, Forbes estimates his net worth to be US$ 323 billion.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section with Marquee and Hover Effect */}
      <section id="gallery" className="min-h-screen flex items-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Gallery</h2>
          <div className="marquee-container overflow-hidden relative">
            <div className="marquee flex space-x-6 animate-marquee">
              {galleryImages.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Gallery ${index + 1}`}
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                  className={`transition-transform duration-300 ease-in-out 
                    ${hoveredImage === index 
                      ? 'transform scale-125 z-10' 
                      : 'transform scale-100'
                    } h-64 w-64 object-cover rounded-lg`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="min-h-screen flex items-center bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Featured Video</h2>
          <div className="mx-auto w-2/4 h-[400px] flex items-center justify-center text-gray-600">
           <video controls width="250" height="300">
            <source src="../videos/elonmusk.mp4" type='video/mp4'></source>
           </video>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Tribute Page</h3>
            <p>© 2024 Your Tribute Page. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="flex items-center">
              <HomeIcon /> <span className="ml-2">Home</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="flex items-center">
              <InfoIcon /> <span className="ml-2">About</span>
            </button>
            <button onClick={() => scrollToSection('gallery')} className="flex items-center">
              <ImageIcon /> <span className="ml-2">Gallery</span>
            </button>
            <button onClick={() => scrollToSection('video')} className="flex items-center">
              <VideoIcon /> <span className="ml-2">Video</span>
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><LinkIcon /></a>
            <a href="#" className="hover:text-gray-300"><LinkIcon /></a>
            <a href="#" className="hover:text-gray-300"><LinkIcon /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TributePage;