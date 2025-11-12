
import Facility from "../components/Facility"
import Feature from "../components/products"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Products from "../components/Feature_Products"
import Footer from "../components/Footer"
const Home=()=>{
    return(
        <section>
         <Navbar/>
         <Header/>
           <Facility/>
         <Feature/>
         <Products/>
         <Footer />
        </section>
    )
}
export default Home