import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './EducationStyles';

const Education = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Education</SectionTitle>
    <SectionText>
      <ListTitle>School: <SectionText style={{display: "inline-block", padding: 0}}>Middlesex University Singapore</SectionText></ListTitle>
      <ListTitle>Degree: <SectionText style={{display: "inline-block", padding: 0}}>Bachelor of Science in Computer Science</SectionText></ListTitle>
      <ListTitle>Start & End Date: <SectionText style={{display: "inline-block", padding: 0}}>Sep, 2018 ~ May, 2021</SectionText></ListTitle>
      Relevant Modules: Web Development, Software Engineering, Database Management, Data Structures and Algorithms, User Experience Design<br />
      Projects: Developed a full-stack web application as a final year project using ReactJS, NodeJS, and MySQL, achieving a 90% score for functionality and user experience.<br />
      Achievements: Received the Best Project Award for the final year project.
    </SectionText>
  </Section>
);

export default Education;
