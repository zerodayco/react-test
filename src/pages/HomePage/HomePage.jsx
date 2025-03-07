import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection.jsx';
import { Container } from '../../components/Container/Container.jsx';
import { Section } from '../../components/Section/Section.jsx';

const HomePage = () => {
  return (
    <div>
      <Section>
        <Container>
          <h2>Home page</h2>
          <div>
            <WelcomeSection />
            <AdvantagesSection />
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default HomePage;
