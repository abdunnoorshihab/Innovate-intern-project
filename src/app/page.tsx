import Header from "./Home/Header";
import Discover from "./Home/DiscoverMore";
import FeaturedCollection from "./Home/FeaturedCollection";
import CarasolSection from "./Home/CarasolSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      
      <div className="container mx-auto px-20">
      </div>
      <div className="container mx-auto">
        <CarasolSection/>
        <FeaturedCollection />
        <Discover />
      </div>
    </div>
  );
}
