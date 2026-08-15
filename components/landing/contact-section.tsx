"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "917417592469";
const EMAIL = "dhirajkhetwal1599@gmail.com";

const categories = [
  "AI Agent",
  "AI Voice Agent",
  "Custom Chatbot",
  "AI SaaS",
  "Business Automation",
  "Office Automation",
  "Workflow Automation",
  "Website Development",
  "3D Website",
  "Portfolio Website",
  "Software Development",
  "Other",
];

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: categories[0],
    build: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "New project request — VYRONEX",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone/WhatsApp: ${form.phone}`,
      form.company ? `Company: ${form.company}` : "",
      `Category: ${form.category}`,
      form.build ? `Looking to build: ${form.build}` : "",
      form.message ? `Details: ${form.message}` : "",
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span
            className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-foreground/20" />
            Start a project
          </span>
          <h2
            className={`text-4xl md:text-6xl lg:text-[96px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Let&apos;s automate
            <br />
            <span className="text-muted-foreground">your work.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-8 p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Name">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="contact-input"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="contact-input"
                />
              </Field>
              <Field label="Phone / WhatsApp">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 ..."
                  className="contact-input"
                />
              </Field>
              <Field label="Company / Organization (optional)">
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="contact-input"
                />
              </Field>
              <Field label="What do you want to build?">
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="contact-input"
                >
                  {categories.map((c) => (
                    <option key={c} value={c} className="bg-background text-foreground">
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="What are you looking to build?">
                <input
                  name="build"
                  value={form.build}
                  onChange={handleChange}
                  placeholder="e.g. a support chatbot"
                  className="contact-input"
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field label="Message / Project details">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what you want to automate or improve..."
                  className="contact-input resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 h-14 text-base font-medium rounded-full hover:bg-foreground/90 transition-colors group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitted ? "Request Sent" : "Send Project Request"}
              {!isSubmitted && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            </button>
          </form>

          {/* Direct contact options */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 border border-foreground/10 hover:border-foreground/30 bg-foreground/[0.02] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <MessageCircle className="w-6 h-6 mb-4 text-[#eca8d6]" />
              <span className="block font-medium mb-1">WhatsApp</span>
              <span className="text-sm text-muted-foreground">+91 74175 92469</span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className={`group p-8 border border-foreground/10 hover:border-foreground/30 bg-foreground/[0.02] transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <Mail className="w-6 h-6 mb-4 text-[#eca8d6]" />
              <span className="block font-medium mb-1">Email</span>
              <span className="text-sm text-muted-foreground break-all">{EMAIL}</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi VYRONEX, I'd like to book a call to discuss a project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 border border-foreground bg-foreground text-background transition-all duration-500 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <Phone className="w-6 h-6 mb-4" />
              <span className="block font-medium mb-1">Book a Call</span>
              <span className="text-sm opacity-70">Message us to schedule a time</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.contact-input) {
          width: 100%;
          background: transparent;
          border: 1px solid hsl(var(--border, 0 0% 100% / 0.1));
          border-color: color-mix(in oklab, currentColor 15%, transparent);
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: inherit;
          outline: none;
          border-radius: 0;
          transition: border-color 0.2s ease;
        }
        :global(.contact-input::placeholder) {
          color: color-mix(in oklab, currentColor 40%, transparent);
        }
        :global(.contact-input:focus) {
          border-color: currentColor;
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
