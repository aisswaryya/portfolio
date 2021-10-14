import React from 'react';
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillMail,
    AiFillMediumCircle,
    AiFillMediumSquare,
    AiFillMessage,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            {/* <LinkList>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:aisswaryyakgm@gmail.com">
                        aisswaryyakgm@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList> */}
            <SocialIconsContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://medium.com">
                        <AiFillMediumCircle size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="mailto:aisswaryyakgm@gmail.com">
                        <AiFillMail size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
