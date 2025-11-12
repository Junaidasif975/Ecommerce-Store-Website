const Header=()=>{
    return(
        <section className="md:py-20  font-Family-Class">
            <div className="flex flex-col gap-8 sm:flex-row justify-center items-center px-5">
        <div className="w-full md:w-1/2 pt-20">
        <div className="flex flex-col gap-6">
        <h1 className="font-bold w-full md:w-[90%] leading-7 sm:text- md:text-4xl lg:text-[40px] md:leading-11">  Discover the Latest <span className="text-cyan-300">Trend</span> in Shoping</h1>
        <p className=" font-light sm:text-[12px] md:text-[15px] lg-text-[20px]">  Shop your favorite brands and products with exclusive discounts and fast delivery.</p>
        <div className="flex justify-center">
        <button className="bg-[#2E7AAE] active:bg-[#07a0de] md:hover:bg-[#07a0de] text-white text-[16px] cursor-pointer
         px-5 py-2 rounded-3xl active:scale-x-110 md:hover:scale-x-110 transition duration-200 md:duration-700 ursor pointer xl:px-8 xl:py-4 xl:text-[20px]">Shop now</button>
</div>
        </div>
        </div>
        <div className="w-full md:w-1/2">
        <div className="shadow-gray-400 shadow-2xl active:scale-x-90 md:hover:scale-x-90 transition duration-200 md:duration-700">
         <img src="/assets/images/Header/banner.webp" alt="" className="" />
         </div>
        </div>
        </div>
        </section>
    )
}
export default Header 