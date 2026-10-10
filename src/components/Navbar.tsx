"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("sajid-portfolio-theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("sajid-portfolio-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("sajid-portfolio-theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Teaching", href: "#teaching" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-cream-50/90 dark:bg-dark-950/90 border-b border-cream-300/80 dark:border-dark-700/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Editorial Serif Style */}
          <Link
            href="#home"
            className="flex items-baseline gap-1 group focus:outline-none"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-charcoal-900 dark:text-cream-50 group-hover:text-terracotta-500 transition-colors">
              Md Sajid Chowdhury
            </span>
            <span className="text-terracotta-500 font-bold text-2xl">.</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal-600 dark:text-charcoal-300 hover:text-terracotta-500 dark:hover:text-terracotta-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl text-charcoal-600 dark:text-charcoal-300 hover:bg-cream-200 dark:hover:bg-dark-800 transition-all focus:outline-none"
            >
              {mounted && isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-charcoal-700" />
              )}
            </button>

            {/* Let's Talk CTA - Terracotta Button */}
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-terracotta-500 hover:bg-terracotta-600 dark:bg-terracotta-500 dark:hover:bg-terracotta-600 text-white transition-all shadow-sm"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="md:hidden p-2 rounded-lg text-charcoal-700 dark:text-cream-50 hover:bg-cream-200 dark:hover:bg-dark-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-cream-300 dark:border-dark-700 bg-cream-50 dark:bg-dark-950 px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-charcoal-700 dark:text-charcoal-200 hover:text-terracotta-500 py-1.5"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-terracotta-500 text-white hover:bg-terracotta-600 transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
