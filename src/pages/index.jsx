import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionAwards from '../components/section-awards';
import SectionEducation from '../components/section-education';
import SectionExperience from '../components/section-experience';
import SectionPublications from '../components/section-publications';
import SectionProjects from '../components/section-projects';
import SectionResearch from '../components/section-research';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const research = get(data, 'site.siteMetadata.research', false);
  const publications = get(data, 'site.siteMetadata.publications', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const education = get(data, 'site.siteMetadata.education', false);
  const awards = get(data, 'site.siteMetadata.awards', false);
  const skills = get(data, 'site.siteMetadata.skills', false);

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} />
      {about && <SectionAbout about={about} />}
      {education && education.length && (
        <SectionEducation education={education} />
      )}
      {research && research.length && <SectionResearch research={research} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {publications && publications.length && (
        <SectionPublications publications={publications} />
      )}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {awards && awards.length && <SectionAwards awards={awards} />}
      {skills && skills.length && <SectionSkills skills={skills} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        email
        phone
        portfolioPdf
        research {
          name
          description
        }
        education {
          name
          description
          link
        }
        publications {
          name
          description
          link
        }
        projects {
          name
          description
          link
        }
        experience {
          name
          description
          link
        }
        awards {
          name
          description
          link
        }
        skills {
          name
          description
        }
      }
    }
  }
`;
