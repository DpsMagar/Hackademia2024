import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-4">About Tutor Match</h1>
      <p className="text-center text-xl italic mb-8">
        "Empowering Students, Connecting Educators"
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Tutor Match is dedicated to connecting students with qualified tutors in a personalized and flexible way, transforming the learning experience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Flexible scheduling with on-demand tutoring.</li>
          <li>Detailed tutor profiles with ratings and video demos.</li>
          <li>AI-driven recommendations tailored to student needs.</li>
          <li>Affordable pricing from a wide range of subjects.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 leading-relaxed">
          We prioritize student empowerment and accountability through transparent ratings and recorded sessions. Join us in revolutionizing education!
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Us Today!</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Whether you're a student seeking knowledge or a tutor eager to teach, Tutor Match is the platform for you.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
