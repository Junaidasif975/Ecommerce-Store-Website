import { useState } from "react";
import { product } from "../Data Structure/Feauture_Products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const Products = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section className="font-Family-Class flex flex-col items-center gap-20 py-30">
      <h1
        className="text-[40px] active:scale-x-125 md:hover:scale-x-125 transition duration-200 md:duration-1000 font-extrabold text-[#223655] relative 
        before:absolute before:top-15 before:left-0 before:w-0 before:h-1 before:bg-[#002459] active:before:w-full md:hover:before:w-full
        before:transition-all before:duration-200 md:before:duration-1000"
      >
        Feature Products
      </h1>
      <Swiper
        modules={[FreeMode, Autoplay]}
        loop={true}
        speed={3000}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={true}
        grabCursor={true}
        className="w-full px-5 sm:px-10"
        spaceBetween={20}
       breakpoints={{
  0: { slidesPerView: 1, spaceBetween: 10 },   
  480: { slidesPerView: 1.2, spaceBetween: 15 },  
  640: { slidesPerView: 2, spaceBetween: 20 },    
  768: { slidesPerView: 2.5, spaceBetween: 22 },  
  1024: { slidesPerView: 3, spaceBetween: 25 },  
  1280: { slidesPerView: 3.5, spaceBetween: 30 }, 
  1536: { slidesPerView: 4, spaceBetween: 35 },   
}}
      >
        {product.map((value, i) => (
          <SwiperSlide key={`${value.Product}-${i}`}>
            <div
              className="flex flex-col items-center group relative z-50"
              onClick={() =>
                window.innerWidth < 768 &&
                setActiveIndex(activeIndex === i ? null : i)
              }
            >
        
              <div className="w-72 sm:w-80 h-56 sm:h-60 bg-gray-200 border border-gray-400 rounded-t-2xl relative">
                <div className="flex gap-3 justify-center">
                  <div className="pt-8">
                    <img
                      src={value.Image}
                      alt=""
                      className="w-44 sm:w-50 active:scale-125 md:hover:scale-125 transition duration-200 md:duration-1000"
                    />
                  </div>
                  <div className="pt-5">
                    <div className="bg-black size-12 sm:size-15 rounded-full flex justify-center items-center">
                      <span className="text-white font-bold text-[14px] sm:text-[18px]">
                        {value.Status}
                      </span>
                    </div>
                  </div>
                </div>

              
                <div
                  className={`justify-center items-center absolute top-105 left-18 md:top-113 md:left-18 z-50 transition duration-200 md:duration-1000
                    ${
                      activeIndex === i
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }
                    md:opacity-0 md:group-hover:opacity-100 md:pointer-events-auto`}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                      if (window.innerWidth < 768) {
                        setActiveIndex(null); 
                      }
                    }}
                    className="bg-[#2E7AAE] py-2 sm:py-3 px-10 sm:px-13 text-[16px] sm:text-[20px] rounded-3xl font-bold text-white
                      active:scale-x-110 md:hover:scale-x-110 transition duration-200 md:duration-1000"
                  >
                    Add Cart
                  </button>
                </div>
              </div>
              <div className="bg-gray-800 w-72 sm:w-80 h-64 sm:h-72 flex flex-col items-center pt-8 sm:pt-10 gap-4 sm:gap-5 z-0">
                <span className="text-white text-[22px] sm:text-[30px] font-bold active:scale-105 md:hover:scale-105 transition-all duration-200 md:duration-700">
                  {value.Product}
                </span>
                <span className="text-gray-300 text-[18px] sm:text-[25px] font-medium active:scale-105 md:hover:scale-105 transition-all duration-200 md:duration-700">
                  {value.Genertion}
                </span>
                <span className="text-gray-300 text-[16px] sm:text-[20px] font-medium active:scale-105 md:hover:scale-105 transition-all duration-200 md:duration-700">
                  {value.price}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;
