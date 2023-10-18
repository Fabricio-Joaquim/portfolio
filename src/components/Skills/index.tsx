import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

import { SKILLS } from "./listSkills";

export const Skills = () => {
  const styleStars = {
    color: "yellow",
    fontSize: "2.5rem",
  };

  return (
    <section id="skills" className="flex flex-col p-1 hover:shadow-lg">
      <h2 className="text-3xl font-bold text-slate-400 bg-slate-900 p-5 rounded-xl">
        Habilidades
      </h2>
      <ul className="flex flex-wrap" data-testid="skills-list">
        {SKILLS.map(Skill => (
          <li
            key={Skill.name}
            className="my-2 flex items-center gap-2 flex-wrap lg:w-1/4 hover:bg-slate-800 transition-colors duration-300 ease-in-out"
            title={Skill.name}
          >
            <span
              title={Skill.name}
              className={twMerge(
                "p-5 mr-2 rounded-xl bg-slate-400 hover:saturate-200 transition-colors duration-300 ease-in-out",
                Skill.backgroundColor,
              )}
            >
              {Skill.icon}
            </span>
            {Array.from({ length: 5 }).map((_, index) => (
              <>
                {index < Skill.rank ? (
                  <AiFillStar {...styleStars} />
                ) : (
                  <AiOutlineStar {...styleStars} />
                )}
              </>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
};
