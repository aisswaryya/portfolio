import React from 'react';

import {
    Section,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section>
        <LeftSection>
            <SectionTitle main center>
                Hello! I'm Aish. <br />
            </SectionTitle>
            <SectionText>I design and build digital products. </SectionText>
            {/* <Button onClick={props.handleClick}>Learn More</Button> */}
        </LeftSection>
    </Section>
);

export default Hero;
