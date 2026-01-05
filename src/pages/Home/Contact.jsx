import { useState } from "react";
import { Github, Instagram, Linkedin, Send } from "lucide-react";
import { sendEmail } from "../../features/sendEmail";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    await sendEmail(formData.name, formData.email, formData.message);

    // const subject = encodeURIComponent(`Contact from ${formData.name}`);
    // const body = encodeURIComponent(
    //   `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    // );
    // window.location.href = `mailto:touqeermahin915@gmail.com?subject=${subject}&body=${body}`;

    // setTimeout(() => {
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
    // }, 500);
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-24 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Section */}
        <div className="flex flex-col">
          <h2
            data-aos="fade-up"
            data-aos-duration={750}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2936] mb-4 sm:mb-6 leading-tight"
          >
            Let's make something amazing together.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration={750}
            className="text-base sm:text-lg md:text-xl text-[#0a2936]/80 mb-4 sm:mb-6"
          >
            Have a question, opportunity, or just want to say hello? I'm always
            open to meaningful conversations.
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration={750}
            className="text-3xl font-bold text-[#0a2936] leading-tight"
          >
            Start by{" "}
            <span className="text-orange-500 underline decoration-2 underline-offset-4">
              saying hi
            </span>
          </h2>
        </div>

        {/* Right Section – Form */}
        <div
          // data-aos="fade-left"
          // data-aos-once="true"
          className="flex flex-col"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div data-aos="fade-up" data-aos-duration={750} data-aos-delay="50">
              <label className="text-sm font-medium mb-2 block">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`px-4 py-3 rounded-lg border bg-white w-full
                  ${
                    errors.name
                      ? "border-red-300"
                      : "border-gray-200 focus:border-[#28706a]"
                  }
                `}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div
              data-aos="fade-up"
              data-aos-duration={750}
              data-aos-delay="100"
            >
              <label className="text-sm font-medium mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`px-4 py-3 rounded-lg border bg-white w-full
                  ${
                    errors.email
                      ? "border-red-300"
                      : "border-gray-200 focus:border-[#28706a]"
                  }
                `}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div
              data-aos="fade-up"
              data-aos-duration={750}
              data-aos-delay="150"
            >
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`px-4 py-3 rounded-lg border bg-white w-full resize-y
                  ${
                    errors.message
                      ? "border-red-300"
                      : "border-gray-200 focus:border-[#28706a]"
                  }
                `}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              data-aos="fade-up"
              data-aos-duration={750}
              data-aos-delay="200"
              type="submit"
              disabled={isSubmitting}
              className="w-fit inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#28706a] text-white font-medium hover:bg-[#1f5a54] transition cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <span>✓ </span>
                  Sent
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div
        data-aos="fade-up"
        data-aos-duration="450"
        data-aos-delay="250"
        className="mt-16 sm:mt-20 text-center"
      >
        <p
          // data-aos-once="true"
          // data-aos-delay="300"
          className="text-base sm:text-lg text-[#0a2936]/70 font-medium mb-4"
        >
          Thanks for visiting 💝
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            // data-aos="fade-in"
            // data-aos-delay="500"
            // data-aos-duration="750"
            // data-aos-offset="200"
            // data-aos-once="true"
            href="https://www.linkedin.com/in/mahin-touqeer-6415b0320/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
        p-2
        rounded-full
        text-orange-500
        transition-all
        hover:bg-orange-50
        hover:scale-105
      "
          >
            <Linkedin size={22} />
          </a>

          <a
            // data-aos="fade-in"
            // data-aos-delay="500"
            // data-aos-duration="750"
            // data-aos-offset="200"
            // data-aos-once="true"
            href="https://www.instagram.com/mahin_touqeer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="
        p-2
        rounded-full
        text-orange-500
        transition-all
        hover:bg-orange-50
        hover:scale-105
      "
          >
            <Instagram size={22} />
          </a>

          <a
            // data-aos="fade-in"
            // data-aos-delay="500"
            // data-aos-duration="750"
            // data-aos-offset="200"
            // data-aos-once="true"
            href="https://github.com/Mahin-Touqeer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
        p-2
        rounded-full
        text-orange-500
        transition-all
        hover:bg-orange-50
        hover:scale-105
      "
          >
            <Github size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
