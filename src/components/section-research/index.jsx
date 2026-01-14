import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionResearch = ({ research }) => {
  if (!research.length) return null;

  return (
    <Section title="Research Interests">
      {research.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default SectionResearch;
