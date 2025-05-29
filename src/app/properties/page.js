import NavBar from "../../layout/nav";
import Hero from "../../component/properties/hero";
import Discover from "../../component/properties/discover";
import Properties from "../../component/properties/properties";
import Footer from "../../layout/footer";

export default function PropertiesPage() {
  return (
    <div>
      <div className="hero mx-auto">
        <NavBar />
        <Hero />
      </div>
      <Discover />
      <Properties />
      <Footer />
      
    </div>
  )
}
