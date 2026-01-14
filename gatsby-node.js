exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata {
      siteUrl: String
      name: String
      title: String
      description: String
      author: String
      email: String
      phone: String
      portfolioPdf: String
      github: String
      linkedin: String
      about: String
      research: [SectionItem]
      publications: [SectionItem]
      projects: [SectionItem]
      experience: [SectionItem]
      education: [SectionItem]
      awards: [SectionItem]
      skills: [SectionItem]
    }

    type SectionItem {
      name: String!
      description: String!
      link: String
    }
  `;
  createTypes(typeDefs);
};
