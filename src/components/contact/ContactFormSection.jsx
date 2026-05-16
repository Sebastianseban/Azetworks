"use client";

import { useState } from "react";
import { FaArrowRight, FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa6";

const options = [
  "DEMS – Datacenter Exit Made Simple",
  "C2C – Cloud to Cloud Migration",
  "LRT – Legacy Re-platforming",
  "DBL – Database Liberation",
  "CNE – Cloud-Native Foundation",
  "PXO – Performance Optimization",
  "GAT – GenAI Transformation",
  "AAT – Agentic AI Transformation",
  "General Inquiry",
  "Partnership",
];

export default function ContactFormSection() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    interest: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", company: "", interest: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="px-4 sm:px-6 md:px-16 py-16 md:py-32 max-w-[1440px] mx-auto border-t border-[#47464a]/30 relative z-10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-8">
        <div className="col-span-1 lg:col-span-4 mb-4 lg:mb-0">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-white mb-4 sm:mb-6 leading-tight">
              Send us a message
            </h2>
            <p className="text-[#F5F5F3]/70 text-sm sm:text-base mb-8 md:mb-12 max-w-sm">
              We look forward to hearing from you. Fill out the form and our team will get back to you promptly.
            </p>

            <div className="flex flex-row flex-wrap lg:flex-col gap-6 sm:gap-10">
              <div className="group min-w-0">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#3A6FF7] mb-2 sm:mb-3">
                  EMAIL US
                </p>
                <a
                  href="mailto:support@azetworks.com"
                  className="inline-flex items-center gap-2 sm:gap-3 text-white hover:text-[#3A6FF7] transition-colors text-sm sm:text-lg break-words"
                >
                  <FaEnvelope className="text-[#3A6FF7] opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">support@azetworks.com</span>
                </a>
              </div>

              <div className="group min-w-0">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-2 sm:mb-3">
                  DIRECT ACCESS
                </p>
                <a
                  href="https://www.azetworks.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 sm:gap-3 text-white hover:text-emerald-400 transition-colors text-sm sm:text-lg break-words"
                >
                  <FaGlobe className="text-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                  <span className="truncate">www.azetworks.com</span>
                </a>
              </div>

              <div className="group min-w-0">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 mb-2 sm:mb-3">
                  NETWORK
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 sm:gap-3 text-white hover:text-purple-400 transition-colors text-sm sm:text-lg"
                >
                  <FaLinkedin className="text-purple-400 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-8 min-w-0">
          <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden min-w-0">
            {/* Form background glow */}
            <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#3A6FF7]/10 rounded-full blur-[60px] md:blur-[80px] pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-10 relative z-10 w-full min-w-0">
              <InputField 
                label="First Name *" 
                placeholder="Jane" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <InputField 
                label="Last Name *" 
                placeholder="Smith" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <InputField
                label="Work Email *"
                placeholder="jane@company.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <InputField
                label="Company"
                placeholder="Acme Corp"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />

              <div className="flex flex-col gap-2 sm:gap-3 md:col-span-2 group min-w-0">
                <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F3]/70 group-focus-within:text-[#3A6FF7] transition-colors truncate">
                  I'm interested in *
                </label>
                <div className="relative w-full min-w-0">
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full min-w-0 bg-black/20 border border-white/10 rounded-xl px-4 py-3 sm:py-4 focus:outline-none focus:border-[#3A6FF7] focus:ring-1 focus:ring-[#3A6FF7] transition-all appearance-none text-white text-sm sm:text-base truncate pr-10"
                  >
                    <option value="" disabled>Select a service area</option>
                    {options.map((option) => (
                      <option
                        key={option}
                        className="bg-[#1a1a1a] text-white"
                        value={option}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#F5F5F3]/50">
                    ▼
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:gap-3 md:col-span-2 group min-w-0">
                <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F3]/70 group-focus-within:text-[#3A6FF7] transition-colors truncate">
                  Tell us about your challenge *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Describe your current environment, the challenge you're facing..."
                  className="w-full min-w-0 bg-black/20 border border-white/10 rounded-xl px-4 py-3 sm:py-4 resize-none focus:outline-none focus:border-[#3A6FF7] focus:ring-1 focus:ring-[#3A6FF7] transition-all text-white placeholder:text-[#F5F5F3]/30 text-sm sm:text-base"
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pt-2 sm:pt-4 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-[#F5F5F3] transition-all transform hover:scale-105 w-full sm:w-auto shrink-0 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                    {status !== "loading" && <FaArrowRight className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                  
                  {status === "success" && (
                    <span className="text-emerald-400 text-sm font-semibold animate-pulse">
                      Message sent successfully!
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-red-400 text-sm font-semibold animate-pulse">
                      Failed to send. Please try again.
                    </span>
                  )}
                </div>

                <p className="text-[#F5F5F3]/50 text-[11px] sm:text-sm italic text-center sm:text-right mt-2 sm:mt-0 truncate">
                  We typically respond within one business day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  required = false
}) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 group min-w-0">
      <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F3]/70 group-focus-within:text-[#3A6FF7] transition-colors truncate">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full min-w-0 bg-black/20 border border-white/10 rounded-xl px-4 py-3 sm:py-4 focus:outline-none focus:border-[#3A6FF7] focus:ring-1 focus:ring-[#3A6FF7] transition-all placeholder:text-[#F5F5F3]/30 text-white text-sm sm:text-base"
      />
    </div>
  );
}