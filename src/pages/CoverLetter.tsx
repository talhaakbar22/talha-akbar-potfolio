
import React from 'react';
import CoverLetterTemplate from '../components/CoverLetterTemplate';

const CoverLetter = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Cover Letter Template</h1>
        <CoverLetterTemplate />
      </div>
    </div>
  );
};

export default CoverLetter;
