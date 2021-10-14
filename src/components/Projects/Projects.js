import React from 'react';

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from './ProjectsStyles';
import {
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
    <Section nopadding id="works">
        <SectionDivider />
        <SectionTitle main>Works</SectionTitle>
        <GridContainer>
            {projects.map(({ id, image, title, tags, source, visit }) => (
                <BlogCard key={id}>
                    <Img src={image} />
                    <TitleContent>
                        <a href={source}>
                            <HeaderThree title>{title}</HeaderThree>
                        </a>
                    </TitleContent>
                    <div>
                        <TagList>
                            {tags.map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </TagList>
                    </div>
                    {/* <UtilityList>
                        <ExternalLinks href={visit}>Code</ExternalLinks>
                        <ExternalLinks href={visit}>Source</ExternalLinks>
                    </UtilityList> */}
                </BlogCard>
            ))}
        </GridContainer>
    </Section>
);

export default Projects;
