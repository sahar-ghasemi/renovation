"use client";
import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutValues from "./AboutValues";

const About = () => {
  return (
    <main className="min-h-screen bg-light-background mt-8">
      {/* Hero Section */}
      <AboutHero />
      {/* Our Story Section */}
      <AboutStory />
      {/* Values Section */}
      <AboutValues />
    </main>
  );
};

export default About;
