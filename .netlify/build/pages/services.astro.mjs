/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_D3HHkzXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navigation, $ as $$Layout } from '../chunks/Navigation_BbTn8vLA.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Services$1 = createComponent(($$result, $$props, $$slots) => {
  const services = {
    core: [
      {
        title: "Customer Support",
        description: "24/7 multilingual customer support across multiple channels including voice, email, chat, and social media."
      },
      {
        title: "Technical Support",
        description: "Expert technical assistance for software, hardware, and digital services."
      },
      {
        title: "Back Office Operations",
        description: "Efficient handling of data entry, processing, and administrative tasks."
      }
    ],
    specialized: [
      {
        title: "AI-Enhanced Solutions",
        description: "Integration of AI tools to optimize customer service operations and enhance efficiency."
      },
      {
        title: "Quality Assurance",
        description: "Comprehensive QA processes to maintain high service standards."
      },
      {
        title: "Training & Development",
        description: "Continuous training programs to keep our team updated with latest industry practices."
      }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section id="services" class="py-20 px-4 md:px-8"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600">
Our Services
</h2> <div class="space-y-16"> <div> <h3 class="text-2xl font-semibold mb-8 text-center text-blue-400">Core Services</h3> <div class="grid md:grid-cols-3 gap-8"> ${services.core.map((service) => renderTemplate`<div class="bg-white/5 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"> <h4 class="text-xl font-semibold mb-4 text-white">${service.title}</h4> <p class="text-gray-300">${service.description}</p> </div>`)} </div> </div> <div> <h3 class="text-2xl font-semibold mb-8 text-center text-blue-400">Specialized Services</h3> <div class="grid md:grid-cols-3 gap-8"> ${services.specialized.map((service) => renderTemplate`<div class="bg-white/5 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"> <h4 class="text-xl font-semibold mb-4 text-white">${service.title}</h4> <p class="text-gray-300">${service.description}</p> </div>`)} </div> </div> </div> </div> </section>`;
}, "/home/ibrahim/Work/cxpert2.0/src/components/Services.astro", undefined);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CXperts - Our Services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ibrahim/Work/cxpert2.0/src/components/Navigation.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-16"> <div class="bg-gradient-to-b from-blue-900/20 to-black py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl md:text-5xl font-bold text-center text-white mb-8">
Our Services
</h1> <p class="text-xl text-gray-300 text-center max-w-3xl mx-auto">
Comprehensive customer experience solutions tailored to your business needs
</p> </div> </div> ${renderComponent($$result2, "Services", $$Services$1, {})} </main> ` })}`;
}, "/home/ibrahim/Work/cxpert2.0/src/pages/services.astro", undefined);

const $$file = "/home/ibrahim/Work/cxpert2.0/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
