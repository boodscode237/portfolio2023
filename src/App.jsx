import React, { useState } from "react";
import { portfolioData } from "./data";
import { Section } from "./components/Section";
import { SkillBadge } from "./components/SkillBadge";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const {
    profile,
    navigation,
    experience,
    publications,
    projects,
    education,
    skills,
  } = portfolioData;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
        <div className="lg:flex lg:space-x-8">
          <Sidebar
            profile={profile}
            navigation={navigation}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <main className="lg:w-2/3">
            {activeSection === "about" && (
              <Section title="About Me" id="about">
                <p className="text-gray-700 leading-relaxed">
                  {profile.summary}
                </p>
              </Section>
            )}

            {activeSection === "experience" && (
              <Section title="Experience" id="experience">
                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {job.title}
                        </h3>
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-md mt-2 sm:mt-0">
                          {job.date}
                        </span>
                      </div>
                      <p className="text-md font-medium text-gray-600 mb-3">
                        {job.company}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {activeSection === "publications" && (
              <Section title="Publications" id="publications">
                <div className="space-y-6">
                  {publications.map((pub, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold text-gray-900">
                        {pub.title}
                      </h3>
                      <p className="text-md italic text-gray-600 my-2">
                        {pub.venue} - {pub.year}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {pub.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {activeSection === "projects" && (
              <Section title="Key Projects" id="projects">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((proj, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md flex flex-col"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {proj.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap">
                        {proj.tech.map((t) => (
                          <SkillBadge key={t} skill={t} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {activeSection === "education" && (
              <Section title="Education" id="education">
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <div className="flex justify-between items-start flex-col sm:flex-row">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {edu.degree}
                        </h3>
                        <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-md font-medium text-gray-600">
                        {edu.institution}
                      </p>
                      {edu.description && (
                        <p className="text-gray-700 mt-2 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {activeSection === "skills" && (
              <Section title="Technical Skills" id="skills">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div
                    key={category}
                    className="mb-6 bg-white p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {category}
                    </h3>
                    <div className="flex flex-wrap">
                      {skillList.map((skill) => (
                        <SkillBadge key={skill} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </Section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
