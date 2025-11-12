import { features } from "../Data Structure/Products"
const Feature=()=>{
    return(
       <section className="font-Family-Class pt-20">
        <div className="bg-blend-saturation bg-gray-50">
            <div className="flex flex-col py-25 gap-30">
              <div className="flex flex-col items-center gap-10">
        <h1 className="text-[40px] active:scale-x-125 md:hover:scale-x-125 transition duration-200 md:duration-1000 font-extrabold text-[#223655] relative before:absolute
          before:top-15 before:left-0 before:w-0 before:h-1 before:bg-[#002459] active:before:w-full md:hover:before:w-full
          before:transition-all before:duration-300 md:before:duration-1000">Our Products</h1>
        <p className="text-[18px] w-[70%] text-gray-800 font-medium">Explore Our Top-Rated & Most Popular Electronics of the Season — From Cutting-Edge
         Gadgets to Everyday Essentials, Handpicked Just for You.</p>
         </div>
        <div className="flex gap-15 justify-center flex-wrap ">
          {
            features.map((value,i)=>(
  <div  className="flex flex-col gap-8 items-center">
  <img src={value.image} alt="Mobile" className="w-50 h-45 rounded-2xl active:scale-110 md:hover:scale-110 transition duration-200 md:duration-1000 object-cover object-center" />
  <div className=" w-60 h-28 flex flex-col justify-center items-center gap-3 rounded-b-2xl">
    <span className="font-bold text-[#223655] text-[24px]">{value.name}</span>
    <span className="text-gray-800 font-medium text-[16px]">{value.Price}</span>
    <button className="bg-[#2E7AAE] active:scale-x-110 md:hover:scale-x-110 text-[18px] mt-2 text-white text-sm px-8 py-3 rounded-lg transition duration-200 md:duration-1000">
      Add to Cart 
    </button>
  </div>
</div>
))}
</div>
        </div>
        </div>
       </section>

    )
}
export default Feature