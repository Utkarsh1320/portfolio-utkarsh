function ContactSocials() {
  const socials = [
    {
      social: "email",
      un: "more.utkarsh@outlook.com",
      href: "mailto:more.utkarsh@outlook.com",
    },
    {
      social: "github",
      un: "utkarsh1320",
      href: "https://www.github.com/Utkarsh1320/",
    },
    {
      social: "linkedin",
      un: "Utkarsh More",
      href: "https://www.linkedin.com/in/utkarsh-more-dev1302",
    },
    {
      social: "instagram",
      un: "utkarsh13m",
      href: "/",
    },
    {
      social: "phone",
      un: "+1(437)-799-9939",
      href: "4377999939",
    }

  ];
  return (
    <div className="line-container flex flex-col">
      <p className="  text-3xl text-textColor">Reach Out Via Socials </p>
      <div className="flex flex-col space-y-2 pt-5">
        <p className="line text-base text-textColor md:text-2xl">
          .socials &#123;{" "}
        </p>
        {socials.map((social) => {
          return (
            <div className="  line text-base md:text-2xl" key={social.social}>
              <span className="pl-5 text-textColor md:pl-8">
                {social.social}:
              </span>
              <a
                className=" pl-2 text-base text-accentColor hover:underline md:text-2xl"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.un};
              </a>
            </div>
          );
        })}
        <p className="line text-base text-textColor md:text-2xl">&#125;</p>
      </div>
    </div>
  );
}

export default ContactSocials;
