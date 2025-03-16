import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  const words = useMemo(() => ["Software Developer", "Full Stack Developer"], []);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      setSpeed(75);
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, speed);
    } else {
      setSpeed(150);
      timeout = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }, speed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Utkarsh More | Home</title>
      </Helmet>

      <div className="relative flex min-h-[75svh] items-center overflow-hidden">
        <div className="absolute left-10 z-10 gap-y-0 text-[12rem] font-extrabold leading-none text-bgText max-sm:hidden">
          <h1>I BUILD</h1>
          <h2>WEB Solutions</h2>
        </div>
        <div className="relative z-20 flex flex-col items-center gap-y-10 p-4 md:w-full md:flex-row md:items-center md:justify-between md:px-28">
          <div>
            <h2 className="text-3xl font-bold text-[#eee] md:text-5xl xl:text-8xl">
              Utkarsh More
            </h2>
            <div className="typewriter w-max">
              <h2 className="text-xl font-bold text-[#eee] md:text-3xl">
                {text}
              </h2>
            </div>
            <Link to="/projects">
              <button className="mt-10 bg-accentColor px-6 py-2.5 font-medium text-white md:px-9 md:text-xl xl:ml-16">
                View Work
              </button>
            </Link>
            <Link to="/contact">
              <button className="ml-3 border-2 border-accentColor px-5 py-2 text-textColor md:ml-6 md:px-8 md:text-xl">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Home;
