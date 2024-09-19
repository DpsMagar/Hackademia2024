import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg leading-relaxed text-gray-700">
        Tutor Match is a platform connecting students with qualified tutors, allowing them to choose based on ratings, qualifications, and teaching performance. It addresses the unstructured freelancing market for tutors and offers flexible, accessible learning experiences.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Key Features:</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Personal Tutoring:</strong> On-demand sessions with flexible scheduling and 24/7 access to tutors from different time zones.</li>
        <li><strong>Tutor Profiles:</strong> Detailed profiles with qualifications, video demos, and ratings ensure accountability.</li>
        <li><strong>Personalized Recommendations:</strong> AI-driven suggestions help students find tutors that match their learning styles.</li>
        <li><strong>Freelancing Model:</strong> Tutors set their own rates and schedules, earning through a commission-based system.</li>
        <li><strong>Safety Measures:</strong> Verified tutors and secure payment systems create a safe learning environment.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Competitive Advantages:</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Transparency in tutor selection, customized learning experiences, and affordable pricing make Tutor Match an innovative solution for students seeking personalized education.
      </p>
    </div>
  );
}

export default About;
