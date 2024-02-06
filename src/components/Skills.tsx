import React from "react";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "TailwindCSS",
  "SCSS",
  "Bootstrap",
  "MySQL",
  "Redux",
  "Framer Motion",
  "Git",
  "HTML5",
  "CSS",
];

const Skills = () => {
  return (
    <div className="skill flex flex-col justify-center gap-12">
      <h2 className="font-bold text-2xl justify-center">SKILLS</h2>
      <div className="flex flex-wrap gap-4">
        {SKILLS.map((item) => (
          <span
            key={item}
            className="rounded p-3 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
