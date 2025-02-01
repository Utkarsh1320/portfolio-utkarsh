import { Helmet, HelmetProvider } from "react-helmet-async";
import { getArticles } from "../../services/apiArticles";

function Articles() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Utkarsh More | Articles</title>
      </Helmet>
      <div className="p-8 h-full flex flex-col overflow-hidden max-h-full bg-gray-900 text-white">
        <h1 className="pb-8 text-3xl font-semibold text-gray-200 flex-shrink-0">
          Experience
        </h1>

        <div className="space-y-6 overflow-y-auto flex-grow pr-4 max-h-full border border-gray-700 p-4 rounded-md bg-gray-800">
          <div>
            <h2 className="text-xl font-bold text-gray-300">Full Stack Developer Intern – KoCH Technologies, Waterloo</h2>
            <p className="text-sm text-gray-400">May 2024 – Present</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300">
              <li>Designed and implemented web applications using TypeScript, React.js, and Node.js for enterprise users.</li>
              <li>Created modular, reusable UI components while enhancing team collaboration features and improving user authentication mechanisms and web services like Microsoft Azure.</li>
              <li>Collaborated in Agile Scrum sprints, actively participating in sprint planning, daily standups, and sprint reviews.</li>
              <li>Built and optimized RESTful APIs and integrated Kubernetes for seamless deployment and scaling of applications.</li>
              <li>Wrote clean, testable code and implemented unit testing to ensure reliability and debugging code as needed.</li>
              <li>Contributed to CI/CD pipelines, solidifying a robust DevOps workflow including cross-site scripting.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-300">Software Developer – Techiebutler, Rajkot</h2>
            <p className="text-sm text-gray-400">Apr 2022 – May 2023</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300">
              <li>Developed full-stack web applications leveraging React, Node.js, and PostgreSQL for scalable, high-performance solutions.</li>
              <li>Experienced in designing, implementing, and managing Document Management Systems to streamline digital content organization and production support.</li>
              <li>Delivered operational support ensuring optimal performance and rapid issue resolution to minimize downtime.</li>
              <li>Reviewed team code to uphold high coding standards and industry best practices.</li>
              <li>Supported deployment pipelines with Docker and Kubernetes, ensuring stability in production environments.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-300">Web Designer – Associated Students Incorporated, LDRP</h2>
            <p className="text-sm text-gray-400">May 2021 – Feb 2022</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300">
              <li>Led UI development for responsive, mobile-optimized web applications using React.js, HTML5, CSS3, and JavaScript.</li>
              <li>Maintained and updated back-end services with Express.js and MongoDB.</li>
              <li>Conducted analytics, surveys, and developed tools for online assessments, computer networking using Agile methodologies.</li>
            </ul>
          </div>
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
