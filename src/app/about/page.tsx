"use client";
import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";

const About = () => {
  return (
    <main className="min-h-screen bg-light-background mt-8">
      {/* Hero Section */}
      <AboutHero />
      {/* Our Story Section */}
      <AboutStory />
    </main>
  );
};

export default About;
