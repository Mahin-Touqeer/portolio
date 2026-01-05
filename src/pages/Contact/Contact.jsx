import { useState } from "react";
import { Linkedin, Mail, Send } from "lucide-react";
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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call or email service)
    try {
      // You can integrate with a service like Formspree, EmailJS, or your backend here
      await sendEmail(formData.name, formData.email, formData.message);

      // Optionally open mailto (comment out if using a service)
      // window.location.href = `mailto:touqeermahin915@gmail.com?subject=${subject}&body=${body}`;

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main
        className=" bg-[#f8f7f1] text-[#0a2936]"
        style={{
          minHeight: `calc(100vh - 96px)`,
        }}
      >
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-24 py-14 sm:py-18 lg:py-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#28706a]/10 mb-4">
              <Send className="w-8 h-8 text-[#28706a]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Message Sent
            </h1>
            <p className="text-base sm:text-lg text-[#0a2936]/80">
              Thank you for reaching out! I'll get back to you as soon as
              possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="
                inline-flex items-center gap-2
                px-6 py-3
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
                mt-4
              "
            >
              Send Another Message
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main
      className=" bg-[#f8f7f1] text-[#0a2936]"
      style={{
        minHeight: `calc(100vh - 96px)`,
      }}
    >
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-24 py-14 sm:py-18 lg:py-24">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16 space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-[#0a2936]/80 max-w-2xl mx-auto">
            Have a question, opportunity, or just want to say hello? I'm always
            open to meaningful conversations.
          </p>
        </header>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-[#0a2936] mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`
                px-4 py-3
                rounded-lg
                border
                bg-white
                text-[#0a2936]
                text-base
                transition-all
                focus:outline-none focus-visible:ring-2
                ${
                  errors.name
                    ? "border-red-300 focus-visible:ring-red-400/40"
                    : "border-gray-200 focus-visible:ring-[#28706a]/40 focus:border-[#28706a]"
                }
              `}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#0a2936] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`
                px-4 py-3
                rounded-lg
                border
                bg-white
                text-[#0a2936]
                text-base
                transition-all
                focus:outline-none focus-visible:ring-2
                ${
                  errors.email
                    ? "border-red-300 focus-visible:ring-red-400/40"
                    : "border-gray-200 focus-visible:ring-[#28706a]/40 focus:border-[#28706a]"
                }
              `}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-medium text-[#0a2936] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`
                px-4 py-3
                rounded-lg
                border
                bg-white
                text-[#0a2936]
                text-base
                resize-y
                transition-all
                focus:outline-none focus-visible:ring-2
                ${
                  errors.message
                    ? "border-red-300 focus-visible:ring-red-400/40"
                    : "border-gray-200 focus-visible:ring-[#28706a]/40 focus:border-[#28706a]"
                }
              `}
              placeholder="Tell me about your project, opportunity, or just say hello..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="text-sm text-red-600">{errors.submit}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              px-6 py-3
              rounded-lg
              bg-[#28706a]
              text-white
              font-medium
              shadow-sm
              hover:bg-[#1f5a54]
              hover:shadow
              transition-all
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-[#28706a]/40
              disabled:opacity-50
              disabled:cursor-not-allowed
              disabled:hover:bg-[#28706a]
            "
          >
            {isSubmitting ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <hr className="border-gray-200 my-8" />

        {/* Alternative Contact Methods */}
        <div className="text-center space-y-4">
          <p className="text-sm text-[#0a2936]/70">
            You can also reach me directly via LinkedIn or email.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <a
              href="https://www.linkedin.com/in/mahin-touqeer-6415b0320/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
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
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:touqeermahin915@gmail.com"
              aria-label="Email"
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
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
