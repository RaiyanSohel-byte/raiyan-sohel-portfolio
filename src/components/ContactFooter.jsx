import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactFooter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        publicKey
      )

      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 4000);
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-5 lg:px-0">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl mb-4 md:text-5xl font-bold text-black dark:text-white">
            Contact{" "}
            <span className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-gray-400">
              Me
            </span>{" "}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Have a project or idea? Send me a message and I’ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            {error && <p className="text-red-500">{error}</p>}
            {submitted && (
              <p className="text-green-500">Message sent successfully!</p>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-2 px-6 py-2  text-sm font-medium bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm hover:shadow-lg transform hover:scale-105 cursor-pointer"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto text-center my-32">
        <h2 className="text-4xl mb-4 md:text-5xl font-bold text-black dark:text-white">
          Contact{" "}
          <span className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-gray-400">
            Me
          </span>{" "}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Feel free to reach out via email, phone, or social media.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="text-cyan-500 text-3xl mb-3">
              <FaEnvelope />
            </div>
            <h3 className="font-semibold text-lg text-black dark:text-white mb-1">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              afnan19262@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="text-cyan-500 text-3xl mb-3">
              <FaPhoneAlt />
            </div>
            <h3 className="font-semibold text-lg text-black dark:text-white mb-1">
              Phone
            </h3>
            <p className="text-gray-600 dark:text-gray-300">+880 1790 839334</p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="text-cyan-500 text-3xl mb-3">
              <FaMapMarkerAlt />
            </div>
            <h3 className="font-semibold text-lg text-black dark:text-white mb-1">
              Location
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Bangladesh</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/RaiyanSohel-byte"
            target="_blank"
            className="hover:text-cyan-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/raiyan-sohel/"
            target="_blank"
            className="hover:text-cyan-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/RaiyanSohel1"
            target="_blank"
            className="hover:text-cyan-500 transition-colors"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
