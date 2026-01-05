import {
  Github,
  ExternalLink,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Senti Mind",
    subtitle: "AI-Powered Twitter Sentiment Analysis Platform",
    technologies: [
      "React.js",
      "MongoDB",
      "Razorpay",
      "Perplexity API",
      "Node.js",
    ],
    description:
      "Built and launched an AI-powered platform that scrapes and analyzes Twitter data based on hashtags, handles, or search queries. Implemented authentication and role-based subscription plans (Free, Basic, Pro, Enterprise) using Razorpay. Features include PDF report downloads, tweet date filtering, and profile-based analysis history.",
    githubUrl: "https://github.com/Mahin-Touqeer/Senti-Mind",
    projectUrl: "https://www.sentimind.in",
    demoVideoUrl: null,
    images: ["/sentimind/1.png", "/sentimind/3.png", "/sentimind/5.png"],
    imagePosition: "right",
  },

  {
    id: 2,
    title: "Hive",
    subtitle: "AI-Native Knowledge Layer (HackQuest’25)",
    technologies: [
      "React.js",
      "Pinecone",
      "Notion API",
      "Google Docs API",
      "Embeddings",
    ],
    description:
      "Developed an AI-native knowledge system that unifies Google Docs and Notion into a single searchable memory layer. Implemented semantic search using embeddings stored in Pinecone, enabling natural language queries with contextual results. Built TeamSpace to allow admins to invite members and collaboratively query shared organizational knowledge.",
    githubUrl: "https://github.com/Echo-Hive/hive",
    projectUrl: "",
    demoVideoUrl: "",
    images: ["/Hive/1.png", "/Hive/3.png", "/Hive/4.png"],

    imagePosition: "left",
  },

  {
    id: 3,
    title: "VoyageVerse",
    subtitle: "Interactive Travel Planning Platform",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloudinary",
      "Mapbox API",
    ],
    description:
      "Built an interactive travel platform where users can create wishlists, share destinations, and post reviews. Implemented Firebase Authentication for secure login and Firestore for real-time wishlist updates. Integrated multiple APIs for weather, currency conversion, translation, maps, and media uploads.",
    githubUrl: "https://github.com/Mahin-Touqeer/VoyageVerse-Completed-",
    projectUrl:
      "https://mahin-touqeer.github.io/VoyageVerse-Completed-/VoyageVerse/views/destinations/home.html",
    demoVideoUrl: "",
    images: [
      "/VoyageVerse/1.png",
      "/VoyageVerse/2.png",
      "/VoyageVerse/3.png",
      "/VoyageVerse/4.png",
      "/VoyageVerse/5.png",
    ],
    imagePosition: "right",
  },

  {
    id: 4,
    title: "Spin A Yarn",
    subtitle: "Multiplayer AI-Assisted Storytelling Game",
    technologies: [
      "React.js",
      "Socket.io",
      "MongoDB",
      "Gemini API",
      "Real-time Systems",
    ],
    description:
      "Developed a multiplayer, AI-assisted storytelling game with real-time chat and turn-based gameplay. Users can create custom rooms with configurable genres, round limits, and timers. Added story history, reactions, and sharing features to improve engagement and replayability.",
    githubUrl: "",
    projectUrl: "",
    demoVideoUrl: "",
    images: ["/spinayarn/1.png", "/spinayarn/2.png", "/spinayarn/3.png"],
    imagePosition: "left",
  },
];

const actionBase =
  "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all focus:outline-none focus-visible:ring-2";

function ImageCarousel({ images }) {
  const slides = [images[images.length - 1], ...images, images[0]];
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const sliderRef = useRef(null);

  const next = () => {
    setIndex((i) => i + 1);
    setAnimate(true);
  };

  const prev = () => {
    setIndex((i) => i - 1);
    setAnimate(true);
  };

  // Handle seamless looping
  useEffect(() => {
    if (!animate) return;

    const handleTransitionEnd = () => {
      if (index === slides.length - 1) {
        // jumped past last real slide → snap to first
        setAnimate(false);
        setIndex(1);
      }
      if (index === 0) {
        // jumped before first real slide → snap to last
        setAnimate(false);
        setIndex(slides.length - 2);
      }
    };

    const node = sliderRef.current;
    node.addEventListener("transitionend", handleTransitionEnd);

    return () => node.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, animate, slides.length]);

  // Re-enable animation after snap
  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative overflow-hidden rounded-xl shadow-sm">
        <div
          ref={sliderRef}
          className={`flex ${
            animate ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Project screenshot ${i + 1}`}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:bg-white transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:bg-white transition"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Dots (real slides only) */}
      <div className="flex justify-center gap-1.5 mt-3">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i + 1 === index ? "bg-[#0a2936]" : "bg-[#0a2936]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <main className="bg-[#f8f7f1] text-[#0a2936]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24 py-20">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1
            // data-aos="fade-down"
            // data-aos-duration={750}
            className="text-3xl sm:text-4xl md:text-5xl font-bold fadeDown"
          >
            Projects
          </h1>
          <p
            // data-aos="fade-up"
            // data-aos-duration={750}
            className="mt-3 text-sm sm:text-lg text-[#0a2936] fadeUp"
          >
            A few projects that reflect my approach to problem-solving and
            system design.
          </p>
        </header>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project) => (
            <article
              key={project.id}
              data-aos="fade-up"
              data-aos-duration={750}
              data-aos-once="true"
              className={`flex flex-col ${
                project.imagePosition === "left"
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Carousel */}
              <div className="w-full lg:w-1/2">
                <ImageCarousel images={project.images} />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {project.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-white/70 text-[#0a2936]/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-[#0a2936]/80 mb-7 max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {!project.projectUrl ? null : (
                    <a
                      href={project.projectUrl}
                      className={`${actionBase} bg-[#0a2936] text-white hover:bg-[#0a2936]/90 focus-visible:ring-[#0a2936]/40`}
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  )}
                  {!project.githubUrl ? null : (
                    <a
                      href={project.githubUrl}
                      className={`${actionBase} bg-white border border-gray-200 text-[#0a2936] hover:border-gray-300`}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {!project.demoVideoUrl ? null : (
                    <a
                      href={project.demoVideoUrl}
                      className={`${actionBase} bg-white border border-gray-200 text-[#0a2936] hover:border-gray-300`}
                    >
                      <Play size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
