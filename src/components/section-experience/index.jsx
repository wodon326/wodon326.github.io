import React from 'react';

import Section from '../section';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <div key={item.name} className="mb-6">
          <h3 className="pb-1 font-semibold text-gray-900">{item.name}</h3>
          <div className="space-y-1 text-md font-light text-gray-600">
            {item.description
              .split('\n')
              .map((line) => line.replace(/\s+$/, ''))
              .filter((line) => line.trim())
              .map((line) => {
                const indent = line.match(/^\s*/)?.[0].length || 0;
                const levelClass = indent >= 2 ? 'pl-10' : 'pl-5';

                return (
                  <div
                    key={`${item.name}-${line}`}
                    className={`flex items-start gap-2 ${levelClass}`}
                  >
                    <span className="leading-6">•</span>
                    <span>{line.trim().replace(/^[-•]\s*/, '')}</span>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default SectionExperience;
