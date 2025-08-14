import { Helmet, HelmetProvider } from "react-helmet-async";
import { getArticles } from "../../services/apiArticles";
import kochLogo from '../../assets/icons/ExperienceIcons/k_ch_logo.jpeg';
import TechieButlerLogo from "../../assets/icons/ExperienceIcons/techie_butler_logo.jpeg"
import OrchaLogo from "../../assets/icons/ExperienceIcons/Orcha_chat.jpeg"

function Articles() {
  const experiences = [
    {
      company: "KoCH Technologies",
      role: "Full Stack Developer",
      location: "Waterloo, Ontario, Canada (Remote)",
      logo: kochLogo,
      date: "May 2024 - December 2024",
      skills: "Java, AWS, React, Postgres, Spring boot"
    },
    {
      company: "TechieButler",
      role: "Full Stack Engineer",
      location: "Rajkot, Gujarat, India",
      logo: TechieButlerLogo,
      date: "September 2022 - May 2023",
      skills: "Java, AWS, React, Postgres, Spring boot"
    },
    {
      company: "TechieButler",
      role: "Software Developer Intern",
      location: "Rajkot, Gujarat, India",
      logo: TechieButlerLogo,
      date: "August 2021 - September 2022",
      skills: "Java, AWS, React, Postgres, Spring boot"
    },
    {
      company: "OrchaChat",
      role: "Frontend Developer Intern",
      location: "Remote",
      logo: OrchaLogo,
      date: "July 2019 - December 2020",
      skills: "React.js, WebSockets, MaterialUI, TypeScript"
    },
    {
      company: "Tailbuds",
      role: "Full Stack Developer Intern",
      location: "Banglore, India",
      logo: null,
      date: "May 2019 - October 2019",
      skills: "Java, AWS, React, Postgres, Spring boot"
    },

  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Utkarsh More | Experience</title>
      </Helmet>
      <div className="min-h-screen w-full pb-5 px-4 bg-gray-900 text-white flex flex-col flex-grow">
        <h1 className="pb-8 text-3xl font-semibold text-gray-200 flex-shrink-0">
          Experience
        </h1>
        <div className="flex-1 overflow-y-auto bg-gray-800/50 rounded-lg p-4">
          {experiences.map((experience, index) => (
            <div key={index} className="flex items-center justify-between mb-4 last:mb-0 px-20">
              <div className="flex">
                {experience.logo ? (
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="h-16"
                  />
                ) : (
                  <div
                    className="h-16 w-16 bg-black rounded"
                    aria-label={`${experience.company} logo placeholder`}
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-base">{experience.role}</h2>
                  <h4 className="text-sm">{experience.company}</h4>
                  <h4 className="text-sm">{experience.location}</h4>
                  <h2 className="text-sm"> Skills : {experience.skills}</h2>
                </div>
              </div>
              <span className="text-sm text-gray-400">{experience.date}</span>
            </div>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
}

export async function loader() {
  const articles = await getArticles();
  return articles;
}

export default Articles;