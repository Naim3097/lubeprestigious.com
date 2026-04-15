import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <img 
            src="/assets/LUBE PRESTIGIOUS LOGO.png" 
            alt="Lube Prestigious Logo" 
            className={`object-contain transition-all duration-500 ${scrolled ? 'h-10 brightness-100' : 'h-14 brightness-0 invert'}`} 
          />
        </a>
        <nav className={`hidden lg:flex gap-12 text-[11px] font-bold uppercase tracking-[0.25em] transition-colors duration-500 ${scrolled ? 'text-darkBlue' : 'text-white/90'}`}>
          <a href="#about" className="hover:text-lightBlue transition-all cursor-pointer">About</a>
          <a href="#partners" className="hover:text-lightBlue transition-all cursor-pointer">Partnerships</a>
          <a href="#sectors" className="hover:text-lightBlue transition-all cursor-pointer">Sectors We Serve</a>
        </nav>
        <a 
          href="#contact" 
          className={`hidden md:block uppercase tracking-[0.2em] font-bold text-[10px] transition-all duration-500 px-6 py-3 ${scrolled ? 'bg-darkBlue text-white hover:bg-lightBlue' : 'bg-white text-darkBlue hover:bg-white/90'}`}
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-end pt-32 pb-24 md:pb-32 px-6 md:px-12 overflow-hidden bg-darkBlue">
    {/* High-end immersive background image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=2000" 
        alt="Industrial Machinery" 
        className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-darkBlue/80 to-transparent"></div>
    </div>
    
    <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col justify-end">
      <div className="mb-12 md:mb-20">
        <p className="text-lightBlue font-bold tracking-[0.3em] uppercase text-[10px] md:text-sm mb-6 md:mb-10 max-w-xl leading-relaxed animate-fade-in-up">
          Where Every Drop Carries Prestige
        </p>
        <h1 className="text-white text-5xl md:text-6xl lg:text-8xl xl:text-[7rem] font-light tracking-tighter leading-[0.95] mb-8 md:mb-0">
          Distinguished<br/>
          <span className="text-gray-400 font-extralight italic">Lubrication</span><br/>
          Solutions.
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-24 border-t border-white/20 pt-8 mt-4">
        <p className="text-gray-300 text-sm md:text-lg font-light leading-relaxed max-w-xl">
          Since 2022, serving Central Malaysia as the distributor for Lubrimaxx Australia and a direct authorised reseller for Petron Malaysia, Shell, and Mobil.
        </p>
        <p className="text-white/60 uppercase tracking-[0.2em] text-[10px] font-bold max-w-[200px]">
          Car Workshops • Logistics • Industrial • Marine
        </p>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-white text-darkBlue relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
      
      <div className="lg:col-span-5 relative">
        <div className="aspect-[4/5] overflow-hidden bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
            alt="Laboratory Testing"
            className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-1000"
          />
        </div>
        <div className="absolute -bottom-8 -right-8 bg-darkBlue text-white p-10 hidden md:block">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-lightBlue mb-2">Established</p>
          <p className="text-4xl font-light tracking-tighter">2022</p>
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col gap-12 md:gap-16">
        <div>
          <p className="text-[10px] font-bold tracking-[0.3em] text-lightBlue uppercase mb-6">Corporate Profile</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-none mb-8">
            Quiet Distinction.
          </h2>
          <p className="text-xl md:text-3xl font-light leading-snug text-gray-900 tracking-tight max-w-2xl">
            Lube Prestigious Sdn Bhd operates as a refined force in Malaysia’s lubrication supply chain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-200">
          <div>
            <h4 className="text-lg font-normal mb-4 tracking-tight">Our Philosophy</h4>
            <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
              Our name reflects our approach: to deliver every product and partnership with professionalism, integrity, and quiet distinction.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-normal mb-4 tracking-tight flex items-center gap-3">
              <span className="w-6 h-[1px] bg-lightBlue inline-block"></span>
              100% SIRIM Certified
            </h4>
            <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
              Every single product we supply bears the official SIRIM sticker. Compliance is not a formality; it is our foundation of trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Partnerships = () => (
  <section id="partners" className="py-24 md:py-40 px-6 md:px-12 bg-gray-50 text-darkBlue relative">
    {/* Distinctive massive watermark in background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-gray-100 tracking-tighter whitespace-nowrap opacity-50 select-none z-0 pointer-events-none">
      PARTNERS
    </div>

    <div className="max-w-[1400px] mx-auto relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-8">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter">
          Uncompromised<br/>Alliances.
        </h2>
        <p className="text-[10px] font-bold tracking-[0.3em] text-lightBlue uppercase max-w-[250px] leading-relaxed">
          First-Line Products / Zero Intermediary Dilution
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-b border-gray-200">
        
        {/* Brand 1 */}
        <div className="group p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 hover:bg-white transition-colors duration-700 cursor-default flex flex-col justify-between min-h-[420px]">
          <div>
            <div className="h-16 mb-8 flex items-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <img src="/assets/logo_lubrimaxx.jpg" alt="Lubrimaxx Logo" className="h-full object-contain" />
            </div>
            <p className="text-gray-400 font-light text-lg mb-2 tracking-tight">Australia</p>
            <h3 className="text-4xl md:text-5xl font-light tracking-tighter text-gray-900 group-hover:text-[#1c92a2] transition-colors duration-500">Lubrimaxx</h3>
          </div>
          <div className="mt-12 group-hover:translate-x-2 transition-transform duration-700">
            <p className="text-darkBlue font-bold tracking-[0.2em] uppercase text-[10px] mb-3">Exclusive Distributor</p>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              Central Malaysia territory authority. Delivering authentic, high-performance Australian formulation directly to your workforce.
            </p>
          </div>
        </div>

        {/* Brand 2 */}
        <div className="group p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 hover:bg-white transition-colors duration-700 cursor-default flex flex-col justify-between min-h-[420px]">
          <div>
            <div className="h-16 mb-8 flex items-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <img src="/assets/logo_petron.png" alt="Petron Logo" className="h-full object-contain" />
            </div>
            <p className="text-gray-400 font-light text-lg mb-2 tracking-tight">Malaysia</p>
            <h3 className="text-4xl md:text-5xl font-light tracking-tighter text-gray-900 group-hover:text-blue-700 transition-colors duration-500">Petron</h3>
          </div>
          <div className="mt-12 group-hover:translate-x-2 transition-transform duration-700">
            <p className="text-darkBlue font-bold tracking-[0.2em] uppercase text-[10px] mb-3">Direct Authorised Reseller</p>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              Working directly with Petron to bring first-line quality to our partners without intermediary dilution, ensuring maximum engine fidelity.
            </p>
          </div>
        </div>

        {/* Brand 3 */}
        <div className="group p-10 md:p-16 hover:bg-white transition-colors duration-700 cursor-default flex flex-col justify-between min-h-[420px]">
          <div>
            <div className="h-16 mb-8 flex items-center gap-6 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Shell_logo.svg" alt="Shell Logo" className="h-full object-contain" />
              <div className="w-[1px] h-8 bg-gray-300"></div>
              <img src="/assets/logo_mobil.png" alt="Mobil Logo" className="h-8 object-contain" />
            </div>
            <p className="text-gray-400 font-light text-lg mb-2 tracking-tight">Global</p>
            <h3 className="text-4xl md:text-5xl font-light tracking-tighter text-gray-900 group-hover:text-[#fbbc00] transition-colors duration-500">Shell & Mobil</h3>
          </div>
          <div className="mt-12 group-hover:translate-x-2 transition-transform duration-700">
            <p className="text-darkBlue font-bold tracking-[0.2em] uppercase text-[10px] mb-3">Authorised Reseller</p>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              Providing legendary reliability and world-class performance from the globe’s most trusted lubricant brands for absolute peace of mind.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Sectors = () => {
  const sectors = [
    { 
      num: "01", title: "Car Workshops", 
      desc: "Passenger and light commercial vehicles.", 
      img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
    },
    { 
      num: "02", title: "Logistics", 
      desc: "Fleet maintenance and heavy-duty transport.", 
      img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"
    },
    { 
      num: "03", title: "Industrial", 
      desc: "Manufacturing, hydraulics, and compressors.", 
      img: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=800"
    },
    { 
      num: "04", title: "Marine", 
      desc: "Vessel engines and auxiliary systems.", 
      img: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800"
    },
  ];

  return (
    <section id="sectors" className="py-24 md:py-40 px-6 md:px-12 bg-white text-darkBlue">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[10px] font-bold tracking-[0.3em] text-lightBlue uppercase mb-6 text-center md:text-left">Sectors We Serve</p>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter mb-16 md:mb-24 text-center md:text-left">
          Global Power.<br/>Localised Expertise.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, idx) => (
            <div key={idx} className="group relative h-[450px] overflow-hidden flex flex-col justify-end p-8 cursor-default">
              <img 
                src={sector.img} 
                alt={sector.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-darkBlue/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>
              
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-[10px] font-bold tracking-widest text-lightBlue border border-lightBlue px-3 py-1 mb-4 inline-block bg-darkBlue/50 backdrop-blur-sm">
                  SECTOR {sector.num}
                </span>
                <h3 className="text-2xl font-light tracking-tight text-white mb-3">{sector.title}</h3>
                <p className="text-gray-300 font-light text-sm max-w-[200px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {sector.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-20 text-lg md:text-2xl font-light tracking-tight text-gray-500 max-w-4xl mx-auto md:mx-0 leading-relaxed">
          Whether you operate a three-bay workshop or a regional shipping line, Lube Prestigious Sdn Bhd brings you global lubricant power – certified, localised, and delivered with prestige.
        </p>
      </div>
    </section>
  );
};

const WhatsAppWidget = () => (
  <a 
    href="https://wa.me/60103834131" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[100] group flex items-center gap-0 overflow-hidden bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]"
  >
    {/* Very architectural, blocky styling adhering to "No Emoji/Classic Icon" aesthetic */}
    <span className="bg-[#25D366] text-white px-5 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 group-hover:bg-darkBlue">
      WhatsApp
    </span>
    <span className="bg-white text-darkBlue px-5 py-4 text-[10px] font-semibold tracking-[0.2em] uppercase max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-500 whitespace-nowrap">
      Message Us
    </span>
  </a>
);

const Footer = () => (
  <footer id="contact" className="bg-darkBlue pt-24 md:pt-32 pb-12 px-6 md:px-12 text-white">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 border-b border-white/20 pb-20">
      
      <div className="md:col-span-4">
        <img src="/assets/LUBE PRESTIGIOUS LOGO.png" alt="Lube Prestigious Logo" className="h-16 object-contain mb-10 brightness-0 invert" />
        <h2 className="text-2xl font-light tracking-tighter mb-4">Every Drop<br/>Carries Prestige.</h2>
        <p className="text-gray-400 font-light text-sm max-w-xs leading-relaxed">
          The foundation of trust for central Malaysia’s automotive, logistics, industrial, and marine sectors.
        </p>
      </div>

      <div className="md:col-span-3 md:col-start-7">
        <p className="text-[10px] font-bold tracking-[0.3em] text-lightBlue uppercase mb-8">Headquarters</p>
        <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
          <span className="font-medium text-white block mb-1">Lube Prestigious Sdn Bhd</span>
          Reg No: 202201026971 (1472668-U)<br/><br/>
          55A, Jalan Bendahara 2/KS07,<br/>
          Taman Sejati, Off Jalan Raja Nong,<br/>
          41200 Klang, Selangor Darul Ehsan,<br/>
          Malaysia.
        </p>
      </div>

      <div className="md:col-span-3">
        <p className="text-[10px] font-bold tracking-[0.3em] text-lightBlue uppercase mb-8">Direct Contact</p>
        <div className="text-gray-300 font-light text-sm space-y-5">
          <p>
            <span className="block text-[9px] tracking-widest uppercase text-lightBlue mb-1">Representatives</span>
            Mr. Kelvin / Ms. Leong
          </p>
          <p>
            <span className="block text-[9px] tracking-widest uppercase text-lightBlue mb-1">Phone</span>
            <a href="tel:0103834131" className="hover:text-white transition-colors">010-383 4131</a><br/>
            <a href="tel:01139151491" className="hover:text-white transition-colors">011-3915 1491</a>
          </p>
          <p>
            <span className="block text-[9px] tracking-widest uppercase text-lightBlue mb-1">Email</span>
            <a href="mailto:lube.prestige@gmail.com" className="hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-1">lube.prestige@gmail.com</a>
          </p>
        </div>
      </div>

    </div>
    
    <div className="max-w-[1400px] mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 tracking-widest uppercase font-bold">
      <p>&copy; {new Date().getFullYear()} Lube Prestigious Sdn. Bhd.</p>
      <p className="mt-4 md:mt-0 opacity-70">All Rights Reserved.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 selection:bg-lightBlue selection:text-white bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Partnerships />
        <Sectors />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}