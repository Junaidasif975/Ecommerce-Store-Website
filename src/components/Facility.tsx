import { facility } from "../Data Structure/Facility";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const Facility = () => {
  return (
    <section className="font-Family-Class pt-20 md:pt-0">
      <div className="bg-[#a4a3a3] w-full py-16">
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
          {facility.map((value, i) => {
            const Icon = value.icon;
            return (
              <SwiperSlide key={i}>
                <div className="border-r-gray-200 border-r-4 w-[250px] sm:w-[260px] h-40 flex justify-center items-center gap-6 px-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-700">
                  <Icon className="size-10 text-[#3788BB] font-extrabold" />
                  <div className="flex flex-col gap-2 text-center sm:text-left">
                    <h1 className="text-gray-800 font-bold text-[18px]">{value.title}</h1>
                    <span className="text-[15px] text-gray-600">{value.desc}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Facility;
