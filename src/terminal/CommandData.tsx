import React from "react";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import { Code2, GitBranch, Leaf, Server, BadgePercent } from "lucide-react";
import { fetchData, contactItems } from "../data/userData";
import { skills } from "../data/userData";

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
          href="https://www.sgiet.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-bold hover:underline"
        >
          SGIT - JNTUK
        </a>
        , a electronics and tech enthusiast. I'm currently learning web
        development and looking forward to becoming a full stack developer.
      </div>
    </div>
  ),
  projects: (
    <>
      🛠️ <span className="font-semibold">Projects:</span>
      <ul className="list-disc ml-4 space-y-2 mt-2">
        <li>
          <span className="font-medium text-accent">PostalMapper</span>
          <ul className="list-none ml-4 space-y-1">
            <li className="flex items-center gap-1">
              <ExternalLink />
              <a
                href="https://postal-mapper.vercel.app"
                className="hover:underline text-blue-400"
              >
                Live Demo
              </a>
            </li>
            <li className="flex items-center gap-1">
              <Github />
              <a
                href="https://github.com/aj-seven/postal-mapper"
                className="hover:underline text-blue-400"
              >
                GitHub Link
              </a>
            </li>
          </ul>
        </li>

        <li>
          <span className="font-medium text-accent">Sketchify</span>
          <ul className="list-none ml-4 space-y-1">
            <li className="flex items-center gap-1">
              <ExternalLink />
              <a
                href="https://sketchify-app.vercel.app"
                className="hover:underline text-blue-400"
              >
                Live Demo
              </a>
            </li>
            <li className="flex items-center gap-1">
              <Github />
              <a
                href="https://github.com/aj-seven/sketchify"
                className="hover:underline text-blue-400"
              >
                GitHub Link
              </a>
            </li>
          </ul>
        </li>

        <li>
          <span className="font-medium text-accent">Task Quest</span>
          <ul className="list-none ml-4 space-y-1">
            <li className="flex items-center gap-1">
              <ExternalLink />
              <a
                href="https://task-quest.pages.dev"
                className="hover:underline text-blue-400"
              >
                Live Demo
              </a>
            </li>
            <li className="flex items-center gap-1">
              <Github />
              <a
                href="https://github.com/aj-seven/task-quest"
                className="hover:underline text-blue-400"
              >
                GitHub Link
              </a>
            </li>
          </ul>
        </li>

        <li>
          <span className="font-medium text-accent">Android-Sysinfo</span>
          <ul className="list-none ml-4 space-y-1">
            <li className="flex items-center gap-1">
              <Github />
              <a
                href="https://github.com/aj-seven/Android-Sysinfo"
                className="hover:underline text-blue-400"
              >
                GitHub Link
              </a>
            </li>
          </ul>
        </li>
      </ul>
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
