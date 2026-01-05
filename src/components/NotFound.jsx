import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section
      className=" flex items-center justify-center bg-[#f8f7f1] px-4"
      style={{
        minHeight: `calc(100vh - 96px)`,
      }}
    >
      <div
        className="text-center max-w-xl"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl font-bold text-[#194643] mb-4">
          4<span className="text-orange-500">0</span>4
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0a2936] mb-3">
          Page not found
        </h2>

        <p className="text-[#0a2936]/70 text-base sm:text-lg mb-8">
          The page you’re looking for doesn’t exist or has been moved. Let’s get
          you back on track.
        </p>

        {/* Action */}
        <Link
          to="/"
          className="
            inline-flex items-center gap-2
            px-6 py-3
            rounded-lg
            bg-[#194643]
            text-white
            font-medium
            shadow-sm
            hover:bg-[#143836]
            transition-all
          "
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
