import React from 'react';
import {
    DiDatabase,
    DiFirebase,
    DiIllustrator,
    DiNodejs,
    DiReact,
    DiZend,
} from 'react-icons/di';
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents';
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
    <Section id="tech">
        <SectionDivider divider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            {' '}
            I've worked with a range of technologies in the web development
            world. From design to back-end.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>Front-end</ListTitle>
                    <ListParagraph>
                        {' '}
                        Experience with <br /> tools like React
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiDatabase size="3rem" />
                <ListContainer>
                    <ListTitle>Back-end</ListTitle>
                    <ListParagraph>
                        {' '}
                        Experience with <br /> tools like Node and databases
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiIllustrator size="3rem" />
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>
                        {' '}
                        Experience with <br /> tools like AdobeXD, InVision,
                        Figma
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
