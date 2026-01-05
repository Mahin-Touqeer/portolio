import { ChevronRight, MoveRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      id: 3,
      category: "VoyageVerse",
      title: "Travel Wishlist Platform",
      bgColor: "bg-[#f26438]",
      imageUrl: "/VoyageVerse/6.png",
    },

    {
      id: 2,
      category: "Hive",
      title: "AI-Powered Chatbot",
      bgColor: "bg-[#eac243]",
      imageUrl: "/Hive/5.png",
    },
    {
      id: 1,
      category: "Senti Mind",
      title: "Twitter Sentiment Analysis",
      bgColor: "bg-[#28706a]",

      imageUrl: "/sentimind/4.png",
    },
  ];

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-24 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 sm:mb-12 flex flex-row items-center sm:justify-center gap-4 relative">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2936] mb-2">
            My Latest Works
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Perfect solution for digital experience.
          </p>
        </div>
        <a
          href="/projects"
          className="absolute right-0 top-1/10 text-red-600 text-sm sm:text-base md:text-lg font-medium hover:underline self-start sm:self-auto flex  justify-center items-center gap-1"
        >
          <span className="hidden sm:inline-block">Explore</span>
          More
          <MoveRight />
        </a>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12  rounded-full  items-center justify-center  transition-colors duration-200 cursor-pointer"
          aria-label="Scroll left"
        >
          <svg
            className="w-10 h-10 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Scrollable Container Wrapper with Fade Effects */}
        <div className="relative">
          {/* Left Fade Shadow */}
          <div className="absolute bg-white blur-sm left-0 top-0 bottom-4 w-2 -translate-x-2 z-10 pointer-events-none" />

          {/* Right Fade Shadow */}
          <div className="absolute bg-white blur-sm right-0 top-0 bottom-4 w-2 translate-x-2 z-10 pointer-events-none" />

          {/* Scrollable Projects Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 relative"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className={`${project.bgColor} p-4 min-w-[85%] sm:min-w-[70%] md:min-w-[45%] lg:min-w-100 shrink-0 shadow-lg`}
              >
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {project.category}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base font-medium">
                    {project.title}
                  </p>
                </div>

                <div className="relative bg-white/20 overflow-hidden backdrop-blur-sm">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-75 object-cover"
                  />
                </div>
              </div>
            ))}

            {/* View All Card */}
            <div className="bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 p-6 sm:p-8 md:p-10 min-w-[85%] sm:min-w-[70%] md:min-w-[45%] lg:min-w-[400px] shrink-0 shadow-lg flex flex-col items-center justify-center border border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                View All Projects
              </h3>
              <p className="text-gray-600 text-sm mb-6 sm:mb-8 text-center max-w-xs">
                Explore all my creative works and projects
              </p>
              <a
                href="/projects"
                className="px-3 sm:px-5 py-2 sm:py-3 bg-gray-900 hover:bg-gray-100 hover:text-gray-900 border border-gray-400 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                View All
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12  rounded-full  items-center justify-center  transition-colors duration-200  cursor-pointer"
          aria-label="Scroll right"
        >
          <svg
            className="w-10 h-10 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Scroll Indicators (for mobile) */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {projects.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300"
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
