import { Linkedin, Github, Download } from "lucide-react";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mahin-touqeer-6415b0320/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Mahin-Touqeer",
    icon: Github,
    external: true,
  },
];

function About() {
  return (
    <main
      className=" bg-[#f8f7f1]  text-[#0a2936]"
      style={{
        minHeight: `calc(100vh - 96px)`,
      }}
      // className="min-h-[calc(100vh - var(--navbar-height))]
    >
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24 py-14 sm:py-18 lg:py-24">
        <div className="grid lg:grid-cols-2 items-start overflow-visible">
          {/* Profile */}
          <div className="relative flex justify-center lg:justify-center mb-16 md:mb-0 overflow-visible">
            <img
              data-aos="fade-in"
              data-aos-once="true"
              data-aos-duration={1000}
              data-aos-delay={450}
              src="/person/bg.png"
              alt=""
              className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[110%]  z-0 blur-xs"
            />
            <img
              data-aos="fade-in"
              data-aos-once="true"
              data-aos-duration={1000}
              data-aos-delay={150}
              src="/person/man2.png"
              alt="Mahin Touqeer"
              className="
                w-64 h-64 sm:w-96 sm:h-96 lg:w-108 lg:h-108 object-contain z-10
              "
            />
          </div>

          {/* Content */}
          <div className="space-y-8 ">
            <header className="space-y-3">
              <h1
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration={750}
                data-aos-delay={500}
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
              >
                About Me
              </h1>
            </header>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#0a2936]/90">
              <p
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration={750}
                data-aos-delay={650}
              >
                I’m Mahin Touqeer, born and brought up in Bongaigaon, Assam
              </p>
              <p
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration={750}
                data-aos-delay={800}
              >
                I am a student in Mineral & Metallurgical Engineering at IIT
                (ISM) Dhanbad
              </p>
              <p
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration={750}
                data-aos-delay={950}
              >
                I make Websites and Apps that are fast, responsive, and easy to
                use. I have fun in building and designing them.
              </p>

              <p
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration={750}
                data-aos-delay={1100}
              >
                <span className="text-orange-600">Email:</span>{" "}
                touqeermahin915@gmail.com
              </p>
              <p
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration={750}
                data-aos-delay={1250}
              >
                <span className="text-orange-600">Phone:</span> +91 69138 07306
              </p>
            </div>

            {/* Divider */}
            <hr
              // data-aos="fade-in"
              data-aos-once="true"
              // data-aos-duration={750}
              // data-aos-delay={1500}
              className="border-gray-400 fade1"
            />

            {/* Links */}
            <div
              // data-aos="fade-in"
              data-aos-once="true"
              //     data-aos-duration={750}
              //     data-aos-delay={1750}
              className="flex flex-wrap items-center gap-5 fade2"
            >
              {links.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="
                    inline-flex items-center gap-2 font-medium
                    text-[#0a2936]
                    hover:text-[#28706a]
                    transition-colors
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-[#28706a]/40
                    rounded-md
                  "
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </a>
              ))}

              {/* Resume */}
              <a
                href="/Mahin_Touqeer.pdf"
                download
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  border border-gray-200
                  bg-white
                  font-medium
                  text-[#0a2936]
                  shadow-sm
                  hover:text-[#28706a]
                  hover:shadow
                  transition-all
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-[#28706a]/40
                "
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
