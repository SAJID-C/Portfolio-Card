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

    // Client-side validation
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
      // Fallback: If server route has issues, open mail client
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
    <section id="contact" className="py-20 sm:py-28 border-t border-neutral-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
            Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mt-2 tracking-tight">
            Let&apos;s build something useful.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
            Whether you are interested in software development, technical education, collaboration or a professional opportunity, feel free to reach out.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-neutral-200/80 dark:border-white/[0.08] shadow-soft space-y-6">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Direct Channels
              </h3>

              <div className="space-y-3">
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/[0.06] hover:border-brand-500/40 hover:bg-neutral-100 dark:hover:bg-white/[0.06] transition-all group"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-500">Email Address</div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-brand-500 transition-colors">
                      {profileData.socials.email}
                    </div>
                  </div>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/[0.06] hover:border-brand-500/40 hover:bg-neutral-100 dark:hover:bg-white/[0.06] transition-all group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-500">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-brand-500 transition-colors">
                      md-sajid-chowdhury-b91790340
                    </div>
                  </div>
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/[0.06] hover:border-brand-500/40 hover:bg-neutral-100 dark:hover:bg-white/[0.06] transition-all group"
                >
                  <div className="p-2 rounded-lg bg-neutral-900/10 dark:bg-white/10 text-neutral-900 dark:text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-500">GitHub Repositories</div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-brand-500 transition-colors">
                      github.com/SAJID-C
                    </div>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] text-xs text-neutral-500 dark:text-neutral-400">
                Location: <span className="font-semibold text-neutral-800 dark:text-neutral-200">Bangladesh</span> (Available worldwide for remote collaborations)
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-neutral-200/80 dark:border-white/[0.08] shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity / Discussion"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-neutral-50 dark:bg-dark-900 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-brand-500 transition-colors resize-y"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Your message was sent successfully. Thank you for reaching out!</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex flex-col gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs">
                    <div className="flex items-center gap-2 font-medium">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage || "Unable to send message."}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleDirectEmail}
                      className="underline text-left font-mono hover:text-rose-500"
                    >
                      Click here to launch direct mail client instead &rarr;
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all disabled:opacity-50"
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
