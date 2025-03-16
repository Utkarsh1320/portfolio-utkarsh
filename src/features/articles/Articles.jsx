import { Helmet, HelmetProvider } from "react-helmet-async";
import { getArticles } from "../../services/apiArticles";

function Articles() {
  const experiences = [
    {
      company: "KoCH Technologies",
      role: "Full Stack Developer",
      location: "Waterloo, Ontario, Canada (Remote)",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGf0isebxk9Hg/company-logo_200_200/company-logo_200_200/0/1712935959128/k_ch_logo?e=1750291200&v=beta&t=8G2XV-xQfYyW2zbAZKDjEzlMxje9DyskTZ5ofUGyHXg",
      date: "May 2024 - December 2024"
    },
    {
      company: "TechieButler",
      role: "Software Developer",
      location: "Rajkot, Gujarat, India",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHv4-41PRUJbA/company-logo_200_200/company-logo_200_200/0/1730869886719/techie_butler_logo?e=1750291200&v=beta&t=XBnSRBic-6k-EhTqAHzbAz6h-HZ9jf0XaB_bthxrkDM",
      date: "August 2021 - May 2023"
    },
    {
      company: "OrchaChat",
      role: "Frontend Developer",
      location: "Remote",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFKiRLxEGxx8w/company-logo_200_200/company-logo_200_200/0/1630632626283?e=1750291200&v=beta&t=RbNlTGL2YdyHHRGV4sp0zdKL3bwOe8hoe17Ic-Ub6TU",
      date: "July 2019 - December 2020"
    }
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
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="h-16"
                />
                <div className="ml-4">
                  <h2 className="text-base">{experience.role}</h2>
                  <h4 className="text-sm">{experience.company}</h4>
                  <h4 className="text-sm">{experience.location}</h4>
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