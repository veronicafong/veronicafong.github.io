"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Linkedin, Download, Globe } from "lucide-react";
import { content, Language } from "@/data/portfolio";

export default function Home() {
  const [lang, setLang] = useState<Language>('fr');
  const t = content[lang];

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl rounded-full border border-white/20 bg-white/70 backdrop-blur-md shadow-sm transition-all hover:bg-white/80">
        <div className="px-6 h-14 flex items-center justify-between">
          <span className="font-serif text-xl font-semibold tracking-tight text-stone-800">VF</span>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-6 text-sm font-medium text-stone-600">
              <a href="#about" className="hover:text-stone-900 transition-colors">{t.nav.about}</a>
              <a href="#experience" className="hover:text-stone-900 transition-colors">{t.nav.experience}</a>
              <a href="#education" className="hover:text-stone-900 transition-colors">{t.nav.education}</a>
              <a href="#contact" className="hover:text-stone-900 transition-colors">{t.nav.contact}</a>
            </div>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors tracking-wide"
            >
              <Globe size={14} />
              <span>{lang === 'en' ? 'FR' : 'EN'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen Split */}
      <section className="relative min-h-screen flex items-center bg-stone-50 overflow-hidden">
        {/* Text Content - Left Side */}
        <div className="w-full lg:w-1/2 relative z-10 px-6 sm:px-12 lg:pl-32 lg:pr-16 pt-24 flex flex-col justify-center h-full">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 tracking-tight leading-[1.1]">
                {t.hero.title}
              </h1>
              <p className="text-xl sm:text-2xl text-stone-600 font-light leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>
            <p className="text-lg text-stone-600 max-w-xl leading-relaxed text-balance">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-stone-900 text-stone-50 rounded-full font-medium hover:bg-stone-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <Download size={18} />
                {t.nav.resume}
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-stone-200 text-stone-700 rounded-full font-medium hover:bg-stone-50 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <Mail size={18} />
                {t.hero.contactBtn}
              </a>
            </div>
          </div>
        </div>

        {/* Image - Right Side with Slant */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full hidden lg:block">
           <div 
             className="absolute inset-0 bg-stone-200 h-full w-full"
             style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
           >
             <Image
               src="/headshot.jpg"
               alt="Veronica Fong"
               fill
               className="object-cover"
               priority
             />
             <div className="absolute inset-0 bg-stone-900/10"></div>
           </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 pb-20 space-y-32">
        {/* About Section */}
        <section id="about" className="scroll-mt-32 space-y-8 animate-slide-up delay-100 pt-20">
          <h2 className="font-serif text-4xl font-bold text-stone-900 border-b border-stone-200 pb-6">{t.about.title}</h2>
          <div className="prose prose-stone prose-lg text-stone-600 leading-relaxed max-w-none">
            {t.about.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-32 space-y-10 animate-slide-up delay-200">
          <h2 className="font-serif text-4xl font-bold text-stone-900 border-b border-stone-200 pb-6">{t.experience.title}</h2>
          
          <div className="grid gap-8">
            {t.experience.items.map((item, index) => (
              <div key={index} className="group p-6 -mx-6 rounded-2xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-stone-100">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-stone-700 transition-colors">{item.role}</h3>
                  <span className="text-stone-500 font-medium text-sm bg-stone-100 px-3 py-1 rounded-full">{item.period}</span>
                </div>
                <div className="text-stone-700 font-medium mb-4">{item.company} • {item.location}</div>
                <ul className="list-disc list-outside ml-5 text-stone-600 space-y-2">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Experience Section */}
        <section id="additional-experience" className="scroll-mt-32 space-y-10 animate-slide-up delay-300">
          <h2 className="font-serif text-4xl font-bold text-stone-900 border-b border-stone-200 pb-6">{t.additionalExperience.title}</h2>
          
          <div className="grid gap-8">
            {t.additionalExperience.items.map((item, index) => (
              <div key={index} className="group p-6 -mx-6 rounded-2xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-stone-100">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-stone-700 transition-colors">{item.role}</h3>
                  <span className="text-stone-500 font-medium text-sm bg-stone-100 px-3 py-1 rounded-full">{item.period}</span>
                </div>
                <div className="text-stone-700 font-medium mb-4">
                  {item.company ? `${item.company} • ` : ''}{item.location}
                </div>
                {item.responsibilities.length > 0 && (
                  <ul className="list-disc list-outside ml-5 text-stone-600 space-y-2">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-32 space-y-10 animate-slide-up delay-300">
          <h2 className="font-serif text-4xl font-bold text-stone-900 border-b border-stone-200 pb-6">{t.education.title}</h2>
          
          <div className="grid gap-6">
            {t.education.items.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-stone-900">{item.degree}</h3>
                  <span className="text-stone-500 font-medium text-sm">{item.period}</span>
                </div>
                <div className="text-stone-700 font-medium text-lg">{item.school}</div>
                {item.details && <p className="text-stone-600 mt-2">{item.details}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32 space-y-10 animate-slide-up delay-300">
          <h2 className="font-serif text-4xl font-bold text-stone-900 border-b border-stone-200 pb-6">{t.skills.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">{t.skills.languagesTitle}</h3>
              <ul className="space-y-3 text-stone-600">
                {t.skills.languages.map((lang, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">{t.skills.hobbiesTitle}</h3>
              <ul className="space-y-3 text-stone-600">
                {t.skills.hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32 space-y-10 animate-slide-up delay-300">
          <h2 className="font-serif text-4xl font-bold text-stone-900 border-b border-stone-200 pb-6">{t.contact.title}</h2>
          <div className="bg-stone-900 text-stone-50 rounded-3xl p-8 sm:p-12 text-center sm:text-left relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <p className="text-xl text-stone-300 max-w-2xl leading-relaxed">
                {t.contact.text}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`mailto:${t.contact.email}`}
                  className="flex items-center justify-center gap-3 p-4 bg-white text-stone-900 rounded-xl hover:bg-stone-100 transition-colors font-medium"
                >
                  <Mail size={20} />
                  {t.contact.email}
                </a>
                
                <a 
                  href="https://linkedin.com/in/veronica-fong" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-stone-800 text-white border border-stone-700 rounded-xl hover:bg-stone-700 transition-colors font-medium"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-stone-200 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
          <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">VF</span>
          <p className="text-stone-500 text-sm">&copy; {new Date().getFullYear()} Veronica Fong. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
