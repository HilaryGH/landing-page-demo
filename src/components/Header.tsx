import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DollarSign, Briefcase, BarChart3 } from "lucide-react";
import { ArrowRight } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-purple-900">
      {/* Navbar */}
      <header className="golden-bg shadow sticky top-0 z-50 transition duration-300 h-[64px]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-2">
            <img
              src="icon for finance.png"
              alt="Hamlin Capital logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-purple-900">
              Hamlin-Capital
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-purple-900 text-lg font-medium">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:underline"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            {menuOpen ? (
              <X
                className="w-6 h-6 text-purple-900 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <Menu
                className="w-6 h-6 text-purple-900 cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden fixed top-[64px] left-0 right-0 bottom-0 z-40 golden-bg flex flex-col items-start px-6 py-8 space-y-4">
          {["Home", "About", "Services", "Contact"].map((text) => (
            <a
              key={text}
              href={`#${text.toLowerCase()}`}
              className="text-lg text-purple-900 border-b border-purple-400 pb-2 w-full"
              onClick={() => setMenuOpen(false)}
            >
              {text}
            </a>
          ))}
        </nav>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className=" rounded relative h-screen bg-[url('/hero-image.png')] bg-cover bg-center animate-pan"
      >
        {/* Transparent golden overlay */}
        <div className="absolute inset-0 golden-bg-transparent z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
          <h1 className="text-xl md:text-4xl font-bold mb-4 text-purple-900">
            Connecting Capital to Opportunity
          </h1>
          <p className="text-lg mb-6 text-purple-800">
            Empowering businesses with strategic financial solutions
          </p>
          <button className="relative shadow-md inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-white rounded group">
            {/* Background layer */}
            <span className="absolute inset-0 bg-purple-500 transition-all duration-500 ease-in-out group-hover:bg-[#FFD700] z-0"></span>

            {/* Foreground content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:text-purple-900 transition-colors duration-300">
              Get a Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mt-4 rounded golden-bg p-10 h-screen transition duration-300 flex flex-col-reverse md:flex-row items-center justify-between items-center text-center md:text-left gap-4 mx-auto"
      >
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl text-center font-bold mb-4">About Us</h2>
          <p className="text-purple-900">
            Our vision is to become a trusted investment banking partner by
            delivering tailored financial solutions. Our mission is to deliver
            comprehensive financial services with integrity and professionalism.
          </p>
        </div>

        {/* Emoji Spinner */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative w-60 h-60">
            <div className="absolute top-0 left-0 w-60 h-30 border-t-[12px] border-purple-600 border-l-transparent border-r-transparent rounded-t-full animate-spin origin-bottom"></div>
            <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-[6px] border-purple-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl">
              💰
            </div>
          </div>
        </div>
      </section>

      {/* Services */}

      <section
        id="services"
        className="mt-4 golden-bg p-10 text-center transition duration-300 min-h-screen flex flex-col items-center justify-center"
      >
        <h2 className="text-2xl font-bold mb-8 text-purple-900">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 justify-center max-w-screen-lg mx-auto">
          {[
            {
              icon: <DollarSign className="w-10 h-10 mb-4" />,
              title: "Fundraising",
              desc: "Equity and debt fundraising solutions tailored to your business needs.",
            },
            {
              icon: <Briefcase className="w-10 h-10 mb-4" />,
              title: "Mergers & Acquisitions",
              desc: "Expert guidance through complex deals to ensure maximum value.",
            },
            {
              icon: <BarChart3 className="w-10 h-10 mb-4" />,
              title: "Advisory Services",
              desc: "Asset management and strategic financial planning for long-term success.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-purple-500 text-white shadow-md rounded p-6 hover:scale-105 transform transition duration-300"
            >
              <div className="flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="golden-bg mt-4 h-screen p-10 text-center transition duration-300"
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="w-full max-w-md mx-auto bg-purple-400 p-6 rounded-lg shadow-md text-left text-[#333]">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 mb-4 rounded border border-[#333] text-black"
          />

          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 mb-4 rounded border border-[#333] text-black"
          />

          <label htmlFor="message" className="block font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-2 mb-4 rounded border border-[#333] text-black"
          ></textarea>

          <button
            type="submit"
            className=" golden-bg font-semibold px-4 py-2 rounded hover:bg-[#4B4B4B] hover:text-white hover:shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-purple-300 text-[#333] text-center p-4">
        &copy; {new Date().getFullYear()} Financial Services Demo. All rights
        reserved.
      </footer>
    </div>
  );
}

export default Header;
