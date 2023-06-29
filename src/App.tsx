import "./App.css";
import { About, Footer, Hero, Looking, Navbar, PlanCard, Review } from "./components";

function App() {
  return (
    <div className="relative">
      <img src="/ellipse1.png" alt="" className="absolute -z-10" />
      <img src="/Polygon1.png" alt="" className="absolute -z-20" />
      <img src="/Polygon2.png" alt="" className="absolute -z-10 right-0" />

      <div className="px-44">
        <Navbar />
      </div>
      <Hero />
      <img src="/mic.png" className="absolute top-[525px] right-0" alt="" />
      <div className="px-40 mt-56">
        <About />
      </div>
      <img src="/podcast.png" alt="podcast" className="absolute bottom-[1300px] -z-10"/>
        <PlanCard />
        <Review />
        <Looking />
        <Footer />
        <img src="/Polygon3.png" alt="" className="absolute bottom-0 -z-10" />
    </div>
  );
}

export default App;
