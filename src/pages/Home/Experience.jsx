import { useEffect, useRef, useState } from "react";

function Experience() {
  const timelineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const updateLineHeight = () => {
      if (timelineRef.current) {
        setLineHeight(timelineRef.current.offsetHeight);
      }
    };

    updateLineHeight();
    window.addEventListener("resize", updateLineHeight);

    // Update after a short delay to ensure content is rendered
    const timer = setTimeout(updateLineHeight, 100);

    return () => {
      window.removeEventListener("resize", updateLineHeight);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative px-4 sm:px-6 lg:px-24 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 from-yellow-50/80 via-yellow-50/40 to-gray-50/80 -z-10 rounded-3xl"
        data-aos="fade-in"
      ></div>

      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2936] text-center mb-8 sm:mb-12 lg:mb-16"
        data-aos="fade"
        data-aos-duration="700"
        data-aos-delay="300"
      >
        <div className="w-6 sm:w-16 h-[3px] bg-orange-500 rounded-full inline-block relative -bottom-1" />
        My Work Experience
        <div className="w-6 sm:w-16 h-[3px] bg-orange-500 rounded-full inline-block relative -bottom-1" />
      </h2>

      {/* Timeline Container */}
      <div ref={timelineRef} className="relative max-w-5xl mx-auto">
        {/* Vertical Animated Line - Desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0">
          <svg
            className="timeline-line-desktop"
            width="2"
            height={lineHeight || "100%"}
            style={{ overflow: "visible" }}
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2={lineHeight || 0}
              stroke="#9ca3af"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="timeline-path"
            />
          </svg>
        </div>

        {/* Vertical Animated Line - Mobile */}
        <div className="md:hidden absolute left-4 top-0 bottom-0">
          <svg
            className="timeline-line-mobile"
            width="2"
            height={lineHeight || "100%"}
            style={{ overflow: "visible" }}
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2={lineHeight || 0}
              stroke="#9ca3af"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="timeline-path-mobile"
            />
          </svg>
        </div>

        {/* Experience Entries */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative flex flex-col md:flex-row items-start gap-4 sm:gap-6"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="750"
              data-aos-delay={index * 100}
            >
              {/* Left Side - Company & Dates (Desktop) */}
              <div
                className="hidden md:block w-1/2 pr-8 text-right"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay={index * 200 + 300}
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#0a2936] mb-2">
                  {exp.company}
                </h3>
                <p className="text-base text-gray-900 font-normal">
                  {exp.dates}
                </p>
              </div>

              {/* Timeline Marker - Desktop */}
              <div
                className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 items-center justify-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay={index * 200 + 500}
                data-aos-easing="ease-out-back"
              >
                <div
                  className={`w-5 h-5 ${exp.markerColor} rounded-full border-2 border-white shadow-lg`}
                ></div>
              </div>

              {/* Timeline Marker - Mobile */}
              <div
                className="md:hidden absolute left-4 transform -translate-x-1/2 z-10"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay={index * 200 + 500}
                data-aos-easing="ease-out-back"
              >
                <div
                  className={`w-4 h-4 ${exp.markerColor} rounded-full border-2 border-white shadow-lg`}
                ></div>
              </div>

              {/* Right Side - Title & Description (Desktop) */}
              <div
                className="hidden md:block w-1/2 pl-8"
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay={index * 200 + 300}
              >
                <h4 className="text-xl md:text-2xl font-bold text-[#0a2936] mb-3">
                  {exp.title}
                </h4>
                <p className="text-base text-gray-900 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Mobile Layout - Company, Dates, Title, Description */}
              <div
                className="md:hidden w-full pl-12"
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay={index * 200 + 300}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#0a2936] mb-1">
                  {exp.company}
                </h3>
                <p className="text-sm text-gray-600 font-normal mb-3">
                  {exp.dates}
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-[#0a2936] mb-2">
                  {exp.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

const experiences = [
  {
    id: 1,
    company: "Cyber Labs",
    dates: "Jan 2025 - Present",
    title: "Web developer",
    description:
      "Official Coding and Development club of IIT (ISM) Dhanbad.  focus on designing intuitive, user-centered interfaces that enhance the digital experiences created by our developers.",
    markerColor: "bg-[#28706a]",
  },
  {
    id: 2,
    company: "Anugat AI",
    dates: "August 2025",
    title: "Full Stack Developer Intern",
    description: `Built a scheduling system using Next.js and TypeScript, integrating with backend APIs to enable professors to publish availability and let attendees book slots that sync to Google Calendar.`,
    markerColor: "bg-[#eac243]",
  },
  // {
  //   id: 3,
  //   company: "Tech Solutions",
  //   dates: "Feb 2019 - Mar 2020",
  //   title: "Sr. Product Designer",
  //   description:
  //     "Find Product Photography Canada. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply.",
  //   markerColor: "bg-[#f26438]",
  // },
];
