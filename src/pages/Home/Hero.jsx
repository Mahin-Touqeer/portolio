import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-[#f8f7f1] hero">
      <section className="relative px-4 sm:px-6 lg:px-20 pt-16 sm:pt-8 lg:pt-16  max-w-7xl mx-auto">
        <div className="relative ">
          {/* Mobile/Tablet: Stack layout */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 ">
            {/* Left Content */}
            <div
              // data-aos="fade-up"
              // data-aos-once="true"
              className="z-10 flex flex-col w-full lg:w-1/2 lg:-mt-16"
            >
              <h1
                data-aos="fade-up"
                data-aos-duration={1000}
                // data-aos-delay="50"
                className="text-4xl md:mb-12 md:text-6xl font-bold text-[#0a2936] leading-tight sm:leading-snug lg:leading-tight"
              >
                Hello<span className="text-orange-500">.</span>
                <br />
                <span
                  // data-aos="fade-in"
                  // data-aos-duration="1000"
                  // data-aos-delay="150"
                  className="font-medium text-3xl md:text-4xl lg:text-4xl flex gap-2 sm:gap-3 items-end relative flex-wrap my-4"
                >
                  <div className="w-8 sm:w-12 md:w-16 lg:w-24 h-[2px] sm:h-[3px] bg-orange-500 rounded-full inline-block relative bottom-1 sm:bottom-2" />
                  I'm Mahin
                </span>
                <span
                  // data-aos="fade-up"
                  // data-aos-delay="250"
                  className="block sm:inline"
                >
                  Web developer
                </span>
              </h1>

              <div className="mt-4 flex mb-18 md:mb-0 sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/Mahin_Touqeer.pdf"
                  download
                  data-aos="fade-up"
                  data-aos-duration={750}
                  data-aos-delay="250"
                  // data-aos-delay="350"
                  className="text-white bg-orange-500 text-base sm:text-lg px-5 sm:px-6 py-3 sm:py-4 cursor-pointer transition-all duration-200 hover:bg-orange-600 hover:shadow-lg text-center sm:text-left"
                >
                  My Resume
                </a>

                <Link
                  to="/projects"
                  data-aos="fade-up"
                  data-aos-duration={750}
                  data-aos-delay="250"
                  className="border-2 font-semibold text-base sm:text-lg border-orange-500 text-orange-500 px-5 sm:px-6 py-3 sm:py-4 cursor-pointer transition-all duration-200 hover:text-white hover:bg-orange-500 hover:border-orange-600 text-center sm:text-left"
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative z-10 flex items-center justify-center lg:justify-center w-full lg:w-1/2">
              <div className="relative">
                <img
                  data-aos="fade-in"
                  data-aos-duration={1000}
                  data-aos-delay={450}
                  src="/person/bg.png"
                  alt=""
                  className="absolute -z-10 -top-5 sm:-top-8 left-1/2 transform -translate-x-1/2 w-[110%] max-w-none opacity-60 sm:opacity-100"
                />
                <img
                  data-aos="fade-in"
                  data-aos-duration={1000}
                  data-aos-delay={150}
                  src="/person/man2.png"
                  alt="Mahin"
                  className="w-64  lg:w-80 xl:w-96 h-auto rounded-lg object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
