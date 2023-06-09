import { Container, Hero, Title, DivTitle, DivImg } from "./styles";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";

export default function index() {
  const gradient = "linear-gradient(60deg, #2CC887, #36c4b3)";

  const gradientText = {
    background: gradient,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <Container>
      <Hero>
        <DivTitle>
          <Title>
            <span style={gradientText}>A kind of diary</span> <br /> Find notes
            and quick tips on React js
          </Title>
          <p>A failed attempt to create a kind of documentation</p>
          <div>
            <button>
              <a href="#">Gest Start</a>
            </button>
            <button className="dark-btn">
              <a href="https://github.com/otonielemanuel/random-page-react-note">
                View on git
              </a>
            </button>
          </div>
        </DivTitle>

        <DivImg>
          <div className="blue-blur"></div>
          <div className="blue-blur1"></div>
          <div className="blue-blur2"></div>
          <div className="green-blur2"></div>
          <div className="green-blur"></div>
        </DivImg>
      </Hero>

      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </Container>
  );
}
