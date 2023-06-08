import { Container, Hero, Title, DivTitle, DivImg } from './styles'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';

export default function index() {
  const gradient = 'linear-gradient(60deg, #2CC887, #36c4b3)';
  
  return (
    <Container>
      <Hero>
      <DivTitle>
      <Title>
        <span style={{
        background: gradient,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}>A kind of diary</span> <br />  Find notes and quick tips on React js
      </Title>
      <p>A failed attempt to create a kind of documentation</p>
      <div>
        <button><a href="#">Gest Start</a></button>
        <button className='dark-btn'><a href="#">View on git</a></button>
      </div>
      </DivTitle>

      <DivImg>
        <div className='blue-blur'></div>
        <div className='blue-blur1'></div>
        <div className='green-blur'></div>
      </DivImg>
      </Hero>

      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Container>
  );
}
