import { Helmet, HelmetProvider } from "react-helmet-async";
import react_icon from "../../assets/icons/react_icon.svg";
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import tailwind_icon from "../../assets/icons/tw-icon.svg";
import java from "../../assets/icons/java.svg";
import angular from "../../assets/icons/Angular.svg"
function About() {
  const techStack = [
    html_icon,
    css_icon,
    js_icon,
    react_icon,
    angular,
    tailwind_icon,
    java,
    // CI / CD,
    // Docker,
    // Kubernetes,
    // AWS,

  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Utkarsh More | About</title>
      </Helmet>
      <div className=" flex flex-col  items-center justify-center gap-y-4 sm:p-0 md:p-8 text-textColor xl:gap-y-8">
        <div className="flex flex-col items-center gap-x-48 xl:flex-row">
          <div className=" xl:order-2">
            <div className=" box border-4 border-accentColor xl:h-[300px] xl:w-[300px] "></div>
          </div>
          <div>
            <h1 className="text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
              Software Developer
            </h1>
            <h2 className="text-xl max-sm:hidden">
              Hi, I&apos;m Utkarsh More. A passionate Software Developer <br />{" "}
              based in Canada. 📍
            </h2>
          </div>
        </div>
        <div className="xl:flex xl:gap-x-20 ">
          <div className="order-1 space-y-4 text-center xl:w-1/2 ">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              About me:
            </h2>
            <p className="text-lg font-medium leading-tight text-slate-400 xl:text-xl">
              A dynamic and detail-oriented Software Developer experience in designing, developing,
              and deploying scalable web applications. Proficient in product development,
              leveraging modern frameworks and
              technologies to deliver robust solutions.
            </p>
          </div>
          <div className=" xl:w-1/2">
            <h3 className=" my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl ">
              Technologies I worked on!{" "}
            </h3>
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3">
              {techStack.map((item, i) => {
                return (
                  <img
                    className=" h-14 w-14 cursor-pointer rounded-full p-2  shadow-md  shadow-accentColor "
                    key={i}
                    src={item}
                    alt="tech-stack"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default About;
