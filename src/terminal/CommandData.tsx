import React from "react";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import { contactItems, skills, projectData, personalInfo } from "../data/userData";

export const commandData: Record<string, React.ReactNode> = {
  whoami: (
    <>
      <div>Welcome, Guest 👋</div>
      <span>
        Try typing <strong>help</strong> to get list of commands...
      </span>
    </>
  ),
  about: (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-4">
        <img
          src={personalInfo.avatarUrl}
          alt={personalInfo.alias}
          className="h-32 w-30 rounded-full border border-green-500"
        />
        <div>
          <div className="text-lg font-bold">Hi! I'm {personalInfo.alias}</div>
          <div className="text-sm text-green-300">
            {personalInfo.role}
          </div>
          <div className="text-sm flex flex-col gap-2 text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
            <span className="font-semibold flex flex-row items-center gap-1">
              <Github size={20} />
              <a
                href={contactItems.find(i => i.label === "GitHub")?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary font-bold"
              >
                aj-seven
              </a>
            </span>
            <span className="font-semibold flex flex-row items-center gap-1">
              <Linkedin size={20} />
              <a
                href={contactItems.find(i => i.label === "LinkedIn")?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary font-bold"
              >
                {personalInfo.name} ({personalInfo.alias})
              </a>
            </span>
          </div>
        </div>{" "}
      </div>
      <div>
        {personalInfo.aboutText1}
        <a
          href={personalInfo.collegeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-bold hover:underline"
        >
          {personalInfo.college}
        </a>
        {personalInfo.aboutText2}
      </div>
    </div>
  ),
  projects: (
    <>
      <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
        {projectData.map((project, index) => (
          <div className="rounded-xl p-6 bg-white/20 dark:bg-black/30 shadow-xs border border-gray-300 dark:border-gray-800 text-left transition">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.description || "No description provided."}
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-muted border border-gray-400 dark:border-gray-600 px-2 py-1 rounded-full text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:underline"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  ),
  skills: (
    <div className="flex flex-col gap-4">
      <div>
        🚀 <span className="font-semibold">Skills:</span>
      </div>
      {skills.map((categoryGroup, index) => (
        <div key={index} className="pl-2 border-l-2 border-gray-600">
          <div className="text-primary font-bold mb-3">{categoryGroup.category}</div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-accent">
            {categoryGroup.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <div className="p-1 rounded-md bg-white/20 dark:bg-black/30 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className={`w-4 h-4 object-contain ${item.invertDark ? "dark:invert" : ""
                      }`}
                  />
                </div>
                <span className="font-medium">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ),
  contact: (
    <>
      {contactItems.map(({ icon: Icon, label, value, href, color }, index) => (
        <div key={index} className="flex items-center gap-2">
          <Icon className={color} />
          <span>
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {value}
              </a>
            ) : (
              value
            )}
          </span>
        </div>
      ))}
    </>
  ),
  help: (
    <>
      🧠 Available commands:
      <ul className="list-disc ml-4">
        <li>whoami</li>
        <li>about</li>
        <li>themes</li>
        <li>projects</li>
        <li>skills</li>
        <li>contact</li>
        <li>glow on/off</li>
        <li>gui on</li>
        <li>clear</li>
        <li>help</li>
      </ul>
    </>
  ),
};
