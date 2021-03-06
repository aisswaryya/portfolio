import Link from 'next/link';
import React from 'react';
import {
    AiFillCode,
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
    Anchor,
    Container,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
    Span,
} from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <Anchor>
                    <AiFillCode size="3rem" />
                    <Span>AM</Span>
                </Anchor>
            </Link>
        </Div1>
        <Div3>
            <li>
                <Link href="#works">
                    <NavLink>Works</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div3>
        {/* <Div3>
            <SocialIcons href="https://github.com">
                <AiFillGithub size="3rem" />
            </SocialIcons>
        </Div3> */}
    </Container>
);

export default Header;
