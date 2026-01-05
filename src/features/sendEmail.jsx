import emailjs from "@emailjs/browser";
const {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
} = import.meta.env;

export const sendEmail = async (name, email, message) => {
  try {
    await emailjs.send(
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      {
        name,
        email,
        message,
      },
      VITE_EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
