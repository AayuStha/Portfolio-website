import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
      {subtitle && <p className="text-gray-400">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;