import React from 'react';

import Section from '../section';

const renderHighlightedText = (line) => {
  const content = line.trim().replace(/^[-•]\s*/, '');
  const pattern = /\[black\](.*?)\[\/black\]/g;
  const matches = Array.from(content.matchAll(pattern));

  if (!matches.length) return content;

  const parts = [];
  let lastIndex = 0;

  matches.forEach((match, index) => {
    const [fullMatch, highlighted] = match;
    const start = match.index || 0;

    if (start > lastIndex) {
      parts.push(content.slice(lastIndex, start));
    }

    parts.push(
      <span key={`highlight-${index}`} className="text-black">
        {highlighted}
      </span>
    );

    lastIndex = start + fullMatch.length;
  });

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts;
};

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
              .map((line, index) => {
                const indent = line.match(/^\s*/)?.[0].length || 0;
                const level = Math.floor(indent / 2);

                return (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex items-start gap-2"
                    style={{ paddingLeft: `${level * 1.25}rem` }}
                  >
                    <span className="leading-6">•</span>
                    <span>{renderHighlightedText(line)}</span>
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
