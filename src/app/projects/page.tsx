"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const projects = [
    {
      title: "When the Doors Closed",
      description:
        "An econometric analysis of how contrasting COVID-19 lockdown policies in Colorado and Utah shaped unemployment.",
      link: "#",
      skills: ["Python", "R", "Econometrics", "Stata"],
    },
    {
      title: "Clustering Guide",
      description:
        "An interactive guide to clustering algorithms, including K-Means, Hierarchical Clustering, and DBSCAN.",
      link: "/guides/clustering",
      skills: ["Python", "scikit-learn", "Matplotlib", "Machine Learning"],
    },
    
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="block bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-sky-700/30 text-sky-200 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}