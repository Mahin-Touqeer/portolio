function Skills() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-24 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto relative">
        <div className="px-0 sm:px-4 md:px-8 lg:px-24">
          {/* Title */}
          <h2
            data-aos="fade-down"
            data-aos-once="true"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 sm:mb-6"
          >
            Skills
          </h2>

          {/* Introduction */}
          {/* <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            className="text-xs sm:text-sm md:text-base text-gray-700 text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed px-2"
          >
            I am from India and currently living in Dhanbad. I am doing
            Bachelor's in Metallurgical engineering and I will graduate in 2025.
            I am a UI/UX designer and currently working as a freelancer.
          </p> */}

          {/* Skills Grid */}
          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            // data-aos-delay="150"
            // data-aos-once="true"
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                // data-aos="fade-in"
                // data-aos-delay={index * 80}
                // data-aos-anchor-placement="top-bottom"
                // data-aos-once="true"
                className="
                   relative
                  bg-white
                  p-3 sm:p-4 md:p-6
                  flex flex-col items-center justify-center
                  shadow-sm
                  border border-gray-200
                  aspect-square
                  w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36
                "
              >
                <div className="mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-900 uppercase text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

const skills = [
  {
    name: "HTML",
    icon: (
      <img
        src="/html.png"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      />
    ),
  },
  {
    name: "CSS",
    icon: (
      <img
        src="/css.png"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      />
    ),
  },
  {
    name: "JAVASCRIPT",
    icon: (
      <>
        <div className="js-gradient-glow w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="7"
              y="16"
              fill="#000"
              fontSize="10"
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
            >
              JS
            </text>
          </svg>
        </div>
      </>
    ),
  },
  {
    name: "REACT JS",
    icon: (
      <div className="circles w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
        <div></div>
        <div></div>
        <div></div>
        <span></span>
      </div>
    ),
  },
  {
    name: "GITHUB",
    icon: (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.49C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 18.07 6.14 18.07C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.16 21.49C19.13 20.17 22 16.42 22 12C22 6.48 17.52 2 12 2Z"
          fill="#181717"
        />
      </svg>
    ),
  },
  {
    name: "NODE JS",
    icon: <img src="/node.png" className=" h-10 sm:h-12 md:h-14" />,
  },
  {
    name: "FIREBASE",
    icon: <img src="/fire.png" className=" h-10  sm:h-12 md:h-14" />,
  },
  {
    name: "MONGODB",
    icon: <img src="/mongo.jpeg" className="h-10  sm:h-12  md:h-14" />,
  },
  {
    name: "Pinecone",
    icon: <img src="/pinecone.png" className="h-10  sm:h-12  md:h-14" />,
  },
  {
    name: "Socket.io",
    icon: <img src="/socketio.png" className="h-10  sm:h-12  md:h-14" />,
  },
  {
    name: "MySQL",
    icon: <img src="/mysql.png" className="h-10  sm:h-12  md:h-14" />,
  },
  {
    name: "Python",
    icon: <img src="/python.png" className="h-10  sm:h-12  md:h-14" />,
  },
  {
    name: "NEXT JS",
    icon: <img src="/nextjs.png" className="h-10  sm:h-12  md:h-14" />,
  },
  {
    name: "Razorpay",
    icon: <img src="/razorpay.png" className="h-10  sm:h-12  md:h-14" />,
  },
];
