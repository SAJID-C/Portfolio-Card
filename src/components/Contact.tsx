"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { profileData } from "@/data/profile";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to deliver message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMessage(msg);
    }
  };

  const handleDirectEmail = () => {
    const mailto = `mailto:${profileData.socials.email}?subject=${encodeURIComponent(
      formData.subject || "Software Engineering Inquiry"
    )}&body=${encodeURIComponent(
      `Hi Engr. Md Sajid Chowdhury,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-cream-300/80 dark:border-dark-700/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-terracotta-500 uppercase">
            Communication
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 dark:text-cream-50 mt-2 tracking-tight">
            Let&apos;s build something useful<span className="text-terracotta-500">.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-400 mt-2 leading-relaxed">
            Whether you are interested in software development, technical education, collaboration or a professional opportunity, feel free to reach out.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 shadow-soft space-y-6">
              <h3 className="font-serif text-2xl font-medium text-charcoal-900 dark:text-cream-50">
                Direct Channels
              </h3>

              <div className="space-y-3">
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-cream-50 dark:bg-dark-800 border border-cream-200 dark:border-dark-700 hover:border-terracotta-400 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-terracotta-50 dark:bg-terracotta-900/30 text-terracotta-600 dark:text-terracotta-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-charcoal-500">Official Email</div>
                    <div className="text-sm font-semibold text-charcoal-900 dark:text-cream-50 group-hover:text-terracotta-500 transition-colors">
                      {profileData.socials.email}
                    </div>
                  </div>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-cream-50 dark:bg-dark-800 border border-cream-200 dark:border-dark-700 hover:border-terracotta-400 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-charcoal-500">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-charcoal-900 dark:text-cream-50 group-hover:text-terracotta-500 transition-colors">
                      md-sajid-chowdhury-b91790340
                    </div>
                  </div>
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-cream-50 dark:bg-dark-800 border border-cream-200 dark:border-dark-700 hover:border-terracotta-400 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-charcoal-100 dark:bg-dark-700 text-charcoal-900 dark:text-cream-100">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-charcoal-500">GitHub Repositories</div>
                    <div className="text-sm font-semibold text-charcoal-900 dark:text-cream-50 group-hover:text-terracotta-500 transition-colors">
                      github.com/SAJID-C
                    </div>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-cream-200 dark:border-dark-700 text-xs text-charcoal-500 dark:text-charcoal-400">
                Location: <span className="font-semibold text-charcoal-800 dark:text-cream-200">Bangladesh</span> (Available worldwide for remote collaborations)
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-charcoal-700 dark:text-cream-200 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm bg-cream-50 dark:bg-dark-900 border border-cream-300 dark:border-dark-700 text-charcoal-900 dark:text-cream-50 placeholder:text-charcoal-400 focus:outline-none focus:border-terracotta-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-charcoal-700 dark:text-cream-200 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm bg-cream-50 dark:bg-dark-900 border border-cream-300 dark:border-dark-700 text-charcoal-900 dark:text-cream-50 placeholder:text-charcoal-400 focus:outline-none focus:border-terracotta-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-charcoal-700 dark:text-cream-200 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity / Discussion"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-cream-50 dark:bg-dark-900 border border-cream-300 dark:border-dark-700 text-charcoal-900 dark:text-cream-50 placeholder:text-charcoal-400 focus:outline-none focus:border-terracotta-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-charcoal-700 dark:text-cream-200 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm bg-cream-50 dark:bg-dark-900 border border-cream-300 dark:border-dark-700 text-charcoal-900 dark:text-cream-50 placeholder:text-charcoal-400 focus:outline-none focus:border-terracotta-500 transition-colors resize-y"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Your message was sent successfully. Thank you for reaching out!</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex flex-col gap-2 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs">
                    <div className="flex items-center gap-2 font-medium">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage || "Unable to send message."}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleDirectEmail}
                      className="underline text-left font-mono hover:text-rose-600"
                    >
                      Click here to launch direct mail client instead &rarr;
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg bg-terracotta-500 hover:bg-terracotta-600 text-white transition-all disabled:opacity-50 shadow-sm"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
