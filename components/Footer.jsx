import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#022b63] text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Section - Filter */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Filter</h3>
            <div className="text-white">
              <p className="text-md font-md tracking-wide">
                All EEERONK
              </p>
              <p className="text-sm mt-10 text-white/80">© 2024 american</p>
            </div>
          </div>

          {/* Center Section - About Us */}
          <div className="md:w-1/3 text-center">
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-md mb-2">About Us</p>
            <p className="text-md hover:text-gray-300 cursor-pointer">
              Contact
            </p>
          </div>
          {/* Right Section - Social Media */}
          <div className="md:w-1/3 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-end gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-[#95b9ec] rounded-full w-9 h-9 flex items-center justify-center hover:bg-white hover:text-[#0047AB] transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-[#95b9ec] rounded-full w-9 h-9 flex items-center justify-center hover:bg-white hover:text-[#0047AB] transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-[#95b9ec] rounded-full w-9 h-9 flex items-center justify-center hover:bg-white hover:text-[#0047AB] transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-[#95b9ec] rounded-full w-9 h-9 flex items-center justify-center hover:bg-white hover:text-[#0047AB] transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
