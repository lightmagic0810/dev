import React from 'react';
import { AiFillGithub, AiFillMail, AiFillProject } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      {/* <LinkList> */}
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+234-8117266403'>+234-8117266403</LinkItem>
        </LinkColumn> */}
        {/* <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href='mailto:lightmagicstar@hotmail.com'>lightmagicstar@hotmail.com</LinkItem>
        </LinkColumn>
      </LinkList> */}
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Solving Problems one code at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/lightmagic0810/portfolio'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='mailto:lightmagicstar@hotmail.com'>
          <AiFillMail size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://vercel.com/'>
          <AiFillProject size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
