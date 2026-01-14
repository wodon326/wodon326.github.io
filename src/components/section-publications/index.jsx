import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const renderDescription = (text = '') => {
  const parts = text.split('**');
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={`b-${index}`}>{part}</strong>;
    }
    return part;
  });
};

const SectionPublications = ({ publications }) => {
  if (!publications.length) return null;

  return (
    <Section title="Publications">
      {publications.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={renderDescription(item.description)}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionPublications;
