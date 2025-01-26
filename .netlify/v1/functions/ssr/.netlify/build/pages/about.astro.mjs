/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent } from '../chunks/astro/server_D3HHkzXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navigation, $ as $$Layout } from '../chunks/Navigation_BbTn8vLA.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$About$1 = createComponent(($$result, $$props, $$slots) => {
  const aboutData = {
    overview: "CXperts is a leading Business Process Outsourcing (BPO) company based in Egypt, specializing in delivering exceptional customer experiences through innovative solutions.",
    mission: "To empower businesses with superior customer service solutions while creating meaningful employment opportunities in Egypt.",
    vision: "To be the most trusted partner in customer experience excellence, setting new standards in the BPO industry.",
    values: [
      "Excellence in Service",
      "Innovation & Adaptability",
      "People-First Approach",
      "Integrity & Transparency"
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20 px-4 md:px-8"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600">
About CXperts
</h2> <div class="grid md:grid-cols-2 gap-12"> <div class="space-y-8"> <div class="bg-white/5 backdrop-blur-lg p-6 rounded-xl"> <h3 class="text-xl font-semibold mb-4 text-blue-400">Overview</h3> <p class="text-gray-300">${aboutData.overview}</p> </div> <div class="bg-white/5 backdrop-blur-lg p-6 rounded-xl"> <h3 class="text-xl font-semibold mb-4 text-blue-400">Our Mission</h3> <p class="text-gray-300">${aboutData.mission}</p> </div> </div> <div class="space-y-8"> <div class="bg-white/5 backdrop-blur-lg p-6 rounded-xl"> <h3 class="text-xl font-semibold mb-4 text-blue-400">Our Vision</h3> <p class="text-gray-300">${aboutData.vision}</p> </div> <div class="bg-white/5 backdrop-blur-lg p-6 rounded-xl"> <h3 class="text-xl font-semibold mb-4 text-blue-400">Our Values</h3> <ul class="list-disc list-inside text-gray-300 space-y-2"> ${aboutData.values.map((value) => renderTemplate`<li>${value}</li>`)} </ul> </div> </div> </div> </div> </section>`;
}, "/home/ibrahim/Work/cxpert2.0/src/components/About.astro", undefined);

const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "CXperts was established with a vision to revolutionize customer experience"
    },
    {
      year: "2021",
      title: "Market Expansion",
      description: "Expanded operations to serve international markets and multiple industries"
    },
    {
      year: "2022",
      title: "Technology Integration",
      description: "Implemented AI-powered solutions and advanced analytics capabilities"
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Achieved significant growth and recognition in the BPO industry"
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched innovation center for developing cutting-edge CX solutions"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="timeline" class="py-20 px-4 md:px-8"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600">
Our Journey
</h2> <div class="relative"> <!-- Timeline line --> <div class="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-pink-600"></div> <div class="space-y-12"> ${milestones.map((milestone, index) => renderTemplate`<div${addAttribute(`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`, "class")}> <div class="flex-1 md:w-1/2"></div> <!-- Timeline dot --> <div class="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400"></div> <!-- Content --> <div${addAttribute(`flex-1 ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`, "class")}> <div class="bg-white/5 backdrop-blur-lg p-6 rounded-xl"> <div class="text-blue-400 text-2xl font-bold mb-2">${milestone.year}</div> <h3 class="text-xl font-semibold text-white mb-2">${milestone.title}</h3> <p class="text-gray-300">${milestone.description}</p> </div> </div> </div>`)} </div> </div> </div> </section>`;
}, "/home/ibrahim/Work/cxpert2.0/src/components/Timeline.astro", undefined);

const $$Markets = createComponent(($$result, $$props, $$slots) => {
  const markets = {
    regions: [
      "North America",
      "Europe",
      "Middle East",
      "Africa",
      "Asia Pacific"
    ],
    languages: [
      "English",
      "Arabic",
      "French",
      "German",
      "Spanish",
      "Italian"
    ],
    industries: [
      "Technology",
      "E-commerce",
      "Healthcare",
      "Financial Services",
      "Telecommunications",
      "Travel & Hospitality"
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section id="markets" class="py-20 px-4 md:px-8 bg-gradient-to-b from-blue-900/20 to-black"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600">
Markets & Languages
</h2> <div class="grid md:grid-cols-3 gap-12"> <div class="bg-white/5 backdrop-blur-lg p-8 rounded-xl"> <h3 class="text-2xl font-semibold mb-6 text-blue-400">Global Regions</h3> <ul class="space-y-3"> ${markets.regions.map((region) => renderTemplate`<li class="text-gray-300 flex items-center"> <span class="text-blue-400 mr-2">•</span> ${region} </li>`)} </ul> </div> <div class="bg-white/5 backdrop-blur-lg p-8 rounded-xl"> <h3 class="text-2xl font-semibold mb-6 text-blue-400">Languages</h3> <ul class="space-y-3"> ${markets.languages.map((language) => renderTemplate`<li class="text-gray-300 flex items-center"> <span class="text-blue-400 mr-2">•</span> ${language} </li>`)} </ul> </div> <div class="bg-white/5 backdrop-blur-lg p-8 rounded-xl"> <h3 class="text-2xl font-semibold mb-6 text-blue-400">Industries</h3> <ul class="space-y-3"> ${markets.industries.map((industry) => renderTemplate`<li class="text-gray-300 flex items-center"> <span class="text-blue-400 mr-2">•</span> ${industry} </li>`)} </ul> </div> </div> </div> </section>`;
}, "/home/ibrahim/Work/cxpert2.0/src/components/Markets.astro", undefined);

const $$Strengths = createComponent(($$result, $$props, $$slots) => {
  const strengths = [
    {
      title: "Global Reach",
      description: "Operating across multiple time zones with multilingual support capabilities",
      icon: "\u{1F30D}"
    },
    {
      title: "Technical Excellence",
      description: "State-of-the-art technology infrastructure and AI-powered solutions",
      icon: "\u26A1"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control processes and continuous improvement",
      icon: "\u2728"
    },
    {
      title: "Skilled Workforce",
      description: "Highly trained professionals with industry-specific expertise",
      icon: "\u{1F465}"
    },
    {
      title: "Scalable Solutions",
      description: "Flexible and scalable services that grow with your business",
      icon: "\u{1F4C8}"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer service and technical support",
      icon: "\u{1F504}"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="strengths" class="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-blue-900/20"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600">
Our Key Strengths
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${strengths.map((strength) => renderTemplate`<div class="bg-white/5 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"> <div class="text-4xl mb-4">${strength.icon}</div> <h3 class="text-xl font-semibold mb-3 text-white">${strength.title}</h3> <p class="text-gray-300">${strength.description}</p> </div>`)} </div> </div> </section>`;
}, "/home/ibrahim/Work/cxpert2.0/src/components/Strengths.astro", undefined);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CXperts - About Us" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ibrahim/Work/cxpert2.0/src/components/Navigation.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-16"> <div class="bg-gradient-to-b from-blue-900/20 to-black py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl md:text-5xl font-bold text-center text-white mb-8">
About CXperts
</h1> <p class="text-xl text-gray-300 text-center max-w-3xl mx-auto">
Learn about our journey, values, and commitment to excellence
</p> </div> </div> ${renderComponent($$result2, "About", $$About$1, {})} ${renderComponent($$result2, "Strengths", $$Strengths, {})} ${renderComponent($$result2, "Markets", $$Markets, {})} ${renderComponent($$result2, "Timeline", $$Timeline, {})} </main> ` })}`;
}, "/home/ibrahim/Work/cxpert2.0/src/pages/about.astro", undefined);

const $$file = "/home/ibrahim/Work/cxpert2.0/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
