import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Full-Stack expert who has mastered reactive user interfaces and acquired various complete skills in providing high-quality code services. <br />
        My strengths are mainly front-end and back-end development using React/Next along with relational/non-relational databases.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/lightmagic0810/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;