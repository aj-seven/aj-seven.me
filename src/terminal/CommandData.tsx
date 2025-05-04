import React from "react";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import { fetchData, contactItems } from "../data/userData";
import { skills } from "../data/userData";
import { projectData } from "../data/userData";

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
          src="/assets/ME.jpg"
          alt="Aj7"
          className="h-32 w-30 rounded-full border border-green-500"
        />
        <div>
          <div className="text-lg font-bold">Hi! I'm Aj7</div>
          <div className="text-sm text-green-300">
            Aspiring Full Stack Developer
          </div>
          <div className="text-sm flex flex-col gap-2 text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
            <span className="font-semibold flex flex-row items-center gap-1">
              <Github size={20} />
              <a
                href="https://github.com/aj-seven"
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
                href="https://www.linkedin.com/in/aj-seven/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary font-bold"
              >
                Abdul Jaber (Aj7)
              </a>
            </span>
          </div>
        </div>{" "}
      </div>
      <div>
        I'm Abdul Jaber, a student at{" "}
        <a
          href="https://drsgiet.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-bold hover:underline"
        >
          Dr. SGIT
        </a>
        , a electronics and tech enthusiast. I'm currently learning web
        development and looking forward to becoming a full stack developer.
      </div>
    </div>
  ),
  projects: (
    <>
      <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
        {projectData.map((project, index) => (
          <div className="rounded-xl p-6 bg-white/30 dark:bg-white/5 shadow-xs border border-gray-400 dark:border-gray-600 text-left transition">
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
    <>
      🚀 <span className="font-semibold">Skills:</span>
      <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-accent">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <skill.icon className="w-5 h-5 text-primary" />
            <span className="font-medium">{skill.name}</span>
          </li>
        ))}
      </ul>
    </>
  ),
  fetch: (
    <>
      {fetchData.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-1 border-b last:border-none"
        >
          <span className="font-semibold text-sm sm:text-base">
            {item.label}:
          </span>
          <span className="text-right text-green-500">{item.value}</span>
        </div>
      ))}
    </>
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
        <li>fetch</li>
        <li>glow on/off</li>
        <li>gui on</li>
        <li>clear</li>
        <li>help</li>
      </ul>
    </>
  ),
};
