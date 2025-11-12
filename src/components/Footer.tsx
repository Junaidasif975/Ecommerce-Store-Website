import {
  FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaHome,FaInfoCircle,FaBoxOpen,FaEnvelope,FaQuestionCircle,FaShippingFast,FaUndoAlt,FaUserShield,FaMapMarkerAlt,FaFirefoxBrowser, FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="font-Family-Class bg-[#3B3B3C] text-gray-300">
      <div className="w-full flex flex-col gap-16 px-6 sm:px-10 md:px-20 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          <div className="md:w-[40%] flex flex-col gap-5">
            <span className="text-[25px] sm:text-[28px] md:text-[30px] text-white font-extrabold">
              Online Shopping Store
            </span>
            <p className="text-gray-300 font-medium text-[16px] sm:text-[18px] leading-relaxed md:w-[85%]">
              Your one-stop destination for the latest gadgets, smart devices, and innovative electronics. 
              Shop quality, shop confidence.
            </p>
            <div className="flex gap-4 pt-4">
              <FaFacebookF className="size-6 text-gray-300 hover:text-[#2E7AAE] transition-colors duration-300 cursor-pointer" />
              <FaTwitter className="size-6 text-gray-300 hover:text-[#1DA1F2] transition-colors duration-300 cursor-pointer" />
              <FaInstagram className="size-6 text-gray-300 hover:text-[#E1306C] transition-colors duration-300 cursor-pointer" />
              <FaYoutube className="size-6 text-gray-300 hover:text-[#FF0000] transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
          <div className="md:w-[25%] flex flex-col gap-5">
            <span className="text-[22px] text-white font-extrabold">
              Quick Links
            </span>
            <ul className="flex flex-col gap-3 text-[16px] sm:text-[18px] font-medium *:cursor-pointer">
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <FaHome /> Home
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <FaInfoCircle /> About Us
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <FaBoxOpen /> Products
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <FaEnvelope /> Contact Us
              </li>
            </ul>
          </div>
          <div className="md:w-[25%] flex flex-col gap-5">
            <span className="text-[22px] text-white font-extrabold">
              Policies
            </span>
            <ul className="flex flex-col gap-3 text-[16px] sm:text-[18px] font-medium *:cursor-pointer">
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <FaQuestionCircle /> FAQs
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <FaShippingFast /> Shipping Policy
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <FaUndoAlt /> Return Policy
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <FaUserShield /> Privacy Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-between items-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-white size-14 rounded-full flex justify-center items-center">
              <FaMapMarkerAlt className="size-6 text-gray-600" />
            </div>
            <span className="text-[20px] text-white font-extrabold">Address</span>
            <span className="text-[16px] text-gray-300 font-medium">
              123 Street, New York, USA
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-white size-14 rounded-full flex justify-center items-center">
              <FaEnvelope className="size-6 text-gray-600" />
            </div>
            <span className="text-[20px] text-white font-extrabold">Mail Us</span>
            <span className="text-[16px] text-gray-300 font-medium">
              info@example.com
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-white size-14 rounded-full flex justify-center items-center">
              <FaPhoneAlt className="size-6 text-gray-600" />
            </div>
            <span className="text-[20px] text-white font-extrabold">
              Telephone
            </span>
            <span className="text-[16px] text-gray-300 font-medium">
              (+012) 3456 7890
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-white size-14 rounded-full flex justify-center items-center">
              <FaFirefoxBrowser className="size-6 text-gray-600" />
            </div>
            <span className="text-[20px] text-white font-extrabold">
              Website
            </span>
            <span className="text-[16px] text-gray-300 font-medium">
              www.site.com
            </span>
          </div>
        </div>
        <div className="border-t border-gray-500 pt-6 flex flex-col items-center gap-3">
          <span className="text-white font-bold text-[15px] sm:text-[17px]">
            © YourSiteName 2024 | All Rights Reserved
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
