import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="w-full max-w-6xl mx-auto px-6 py-6 rounded-t-2xl 
        bg-gradient-to-br from-[#1e3c72]/60 to-[#2a5298]/60 
        backdrop-blur-md border border-blue-400/20 
        shadow-[0_0_30px_rgba(0,0,255,0.1)] transition-all duration-300">

        <div className="flex flex-col items-center justify-center gap-3 text-blue-100 text-sm">

          {/* Center Text */}
          <p className="flex items-center gap-2 text-center">
            Made with <FaHeart className="text-pink-500 animate-pulse" /> by{" "}
            <span className="text-white font-semibold">Devesh Shukla</span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com/deveshs814"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition duration-200"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/devesh-shukla-1106a9214/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition duration-200"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
