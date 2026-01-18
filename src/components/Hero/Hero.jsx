import "./Hero.css";
import  assets  from "../../assets/assets";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${assets.compBanner3})` }}
    >
      {/* Hero section uses background image only */}
    </section>
  );
};

export default Hero;