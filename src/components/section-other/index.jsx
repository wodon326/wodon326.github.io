import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionOther = ({ other }) => {
  if (!other.length) return null;

  return (
    <Section title="Other">
      {other.map((item) => (
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

export default SectionOther;
