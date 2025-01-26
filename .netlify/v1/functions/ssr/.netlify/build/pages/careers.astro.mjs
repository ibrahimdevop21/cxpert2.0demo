/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_D3HHkzXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navigation, $ as $$Layout } from '../chunks/Navigation_BbTn8vLA.mjs';
export { renderers } from '../renderers.mjs';

const $$Careers = createComponent(($$result, $$props, $$slots) => {
  const positions = [
    {
      title: "Customer Service Representative",
      department: "Customer Support",
      location: "Cairo, Egypt",
      type: "Full-time",
      description: "Join our team as a Customer Service Representative and help deliver exceptional customer experiences..."
    },
    {
      title: "Technical Support Specialist",
      department: "Technical Support",
      location: "Alexandria, Egypt",
      type: "Full-time",
      description: "We're looking for Technical Support Specialists to provide expert assistance to our clients..."
    },
    {
      title: "Team Leader",
      department: "Operations",
      location: "Cairo, Egypt",
      type: "Full-time",
      description: "Lead and inspire a team of customer service professionals while ensuring operational excellence..."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CXperts - Careers" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ibrahim/Work/cxpert2.0/src/components/Navigation.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-16"> <div class="bg-gradient-to-b from-blue-900/20 to-black py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl md:text-5xl font-bold text-center text-white mb-8">
Join Our Team
</h1> <p class="text-xl text-gray-300 text-center max-w-3xl mx-auto">
Build your career with CXperts and be part of our mission to deliver exceptional customer experiences
</p> </div> </div> <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid gap-8"> ${positions.map((position) => renderTemplate`<div class="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300"> <div class="flex flex-col md:flex-row md:items-center justify-between mb-4"> <h2 class="text-2xl font-semibold text-white">${position.title}</h2> <div class="flex flex-wrap gap-3 mt-2 md:mt-0"> <span class="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"> ${position.department} </span> <span class="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-sm"> ${position.location} </span> <span class="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm"> ${position.type} </span> </div> </div> <p class="text-gray-300 mb-4">${position.description}</p> <a${addAttribute(`/careers/${position.title.toLowerCase().replace(/ /g, "-")}`, "href")} class="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
Apply Now
</a> </div>`)} </div> </section> <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="bg-gradient-to-r from-blue-600/20 to-pink-600/20 rounded-xl p-8 text-center"> <h2 class="text-3xl font-bold text-white mb-4">Don't see a perfect match?</h2> <p class="text-gray-300 mb-6">
We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
</p> <a href="/contact" class="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
Contact Us
</a> </div> </section> </main> ` })}`;
}, "/home/ibrahim/Work/cxpert2.0/src/pages/careers.astro", undefined);

const $$file = "/home/ibrahim/Work/cxpert2.0/src/pages/careers.astro";
const $$url = "/careers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Careers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
