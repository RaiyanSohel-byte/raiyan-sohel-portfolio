import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiSend } from "react-icons/fi"; // Added Send Icon

export default function ContactFooter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

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
    setLoading(true);

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
          setSubmitted(true);
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
          setTimeout(() => setSubmitted(false), 5000);
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 lg:py-28 overflow-hidden bg-white dark:bg-[#0a0a0a]"
    >
      {/* --- Background Elements (Consistent Theme) --- */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* --- Left Column: Context & Info --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Let’s build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400">
                extraordinary.
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Whether you have a project in mind, need a consultant, or just
              want to say hi—I'm always open to discussing new ideas and
              opportunities.
            </p>

            {/* Contact Details Stack */}
            <div className="space-y-6">
              <ContactItem
                icon={FaEnvelope}
                title="Email Me"
                value="raiyansohel22@gmail.com"
                href="mailto:raiyansohel22@gmail.com"
              />
              <ContactItem
                icon={FaPhoneAlt}
                title="Call Me"
                value="+880 1790 839334"
                href="tel:+8801790839334"
              />
              <ContactItem
                icon={FaMapMarkerAlt}
                title="Location"
                value="Bangladesh (Remote Available)"
              />
            </div>

            {/* Socials Row */}
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 flex gap-5">
              <SocialBtn
                href="https://github.com/RaiyanSohel-byte"
                icon={FaGithub}
              />
              <SocialBtn
                href="https://www.linkedin.com/in/raiyan-sohel/"
                icon={FaLinkedin}
              />
              <SocialBtn href="https://x.com/RaiyanSohel1" icon={FaXTwitter} />
            </div>
          </motion.div>

          {/* --- Right Column: The Form --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glass Card Container */}
            <div className="bg-white/70 dark:bg-[#111]/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                  />
                </div>

                {/* Status Messages */}
                {error && (
                  <p className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    {error}
                  </p>
                )}
                {submitted && (
                  <p className="text-green-600 dark:text-green-400 text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Helper Components for cleaner code ---

const ContactItem = ({ icon: Icon, title, value, href }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-white/5 text-black dark:text-cyan-400 group-hover:bg-gray-600 group-hover:text-white transition-all duration-300">
      <Icon className="text-xl" />
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </p>
      {href ? (
        <a
          href={href}
          className="text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-blue-400 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {value}
        </p>
      )}
    </div>
  </div>
);

const SocialBtn = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-900 hover:text-gray-900 dark:hover:border-white dark:hover:text-white transition-all"
  >
    <Icon className="text-xl" />
  </a>
);
