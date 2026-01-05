const services = [
  {
    title: "Full Stack Web Development",
    projects: "React · Node.js · MongoDB",
    color: "bg-[#28706a]",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "AI-Integrated Applications",
    projects: "Embeddings · LLM APIs · Semantic Search",
    color: "bg-[#eac243]",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Real-Time & Scalable Systems",
    projects: "Socket.io · Auth · Cloud Deployment",
    color: "bg-[#f26438]",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    ),
  },
];

function ServicesSection() {
  return (
    <section className="my-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-start text-[#0a2936]">
          {/* Left – Services */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                data-aos="fade-right"
                // data-aos-once="true"
                data-aos-delay={index * 20}
                data-aos-duration="750"
                className="
                    bg-white
                    p-6
                    border border-gray-200
                    shadow
                  "
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${service.color}`}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {service.icon}
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.projects}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right – Description */}
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              What do I help with?
            </h2>

            <div
              className="space-y-4 text-[#0a2936] leading-9 mb-10 font-semibold"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="750"
            >
              <p>
                I build full-stack web applications with a strong focus on clean
                architecture, scalability, and real-world usability. My work
                spans frontend development, backend APIs, authentication
                systems, and database design.
              </p>
              <p>
                I also specialize in integrating AI capabilities into
                applications — including semantic search, LLM-powered features,
                and real-time systems — turning complex ideas into usable,
                production-ready products.
              </p>
            </div>

            {/* Stats */}
            {/* <div
              className="flex gap-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="750"
            >
              <div>
                <p className="text-4xl sm:text-5xl font-bold">4+</p>
                <p className="text-sm text-gray-600 font-medium">
                  End-to-End Products Built
                </p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold">Top 7</p>
                <p className="text-sm text-gray-600 font-medium">
                  HackQuest’25 Ranking
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
