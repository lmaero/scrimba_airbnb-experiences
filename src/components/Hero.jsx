import heroImage from "../../public/assets/images/photo-grid.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src={heroImage}
        alt="Multiple photos regarding different activities, like swimming or playing the guitar"
      />

      <h1 className="hero__title">Online Experiences</h1>
      <p className="hero__para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
