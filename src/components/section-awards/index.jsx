import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionAwards = ({ awards }) => {
  if (!awards.length) return null;

  return (
    <Section title="Awards">
      {awards.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionAwards;
