import React from 'react';

import Section from '../section';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <div key={item.name} className="mb-6">
          <h3 className="pb-1 font-semibold text-gray-900">{item.name}</h3>
          <ul className="space-y-1 pl-5 text-md font-light text-gray-600 list-disc">
            {item.description
              .split('\n')
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line) => (
                <li key={`${item.name}-${line}`}>
                  {line.replace(/^[-•]\s*/, '')}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};

export default SectionExperience;
