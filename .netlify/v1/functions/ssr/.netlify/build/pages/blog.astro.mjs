/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_D3HHkzXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navigation, $ as $$Layout } from '../chunks/Navigation_BbTn8vLA.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const posts = [
    {
      title: "The Future of Customer Experience",
      excerpt: "Exploring how AI and automation are reshaping customer service...",
      date: "2024-01-20",
      category: "Technology",
      image: "/blog/future-cx.jpg"
    },
    {
      title: "Building Customer Trust in Digital Age",
      excerpt: "Key strategies for maintaining authentic customer relationships...",
      date: "2024-01-15",
      category: "Strategy",
      image: "/blog/trust.jpg"
    }
    // Add more blog posts here
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CXperts - Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ibrahim/Work/cxpert2.0/src/components/Navigation.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-16"> <div class="bg-gradient-to-b from-blue-900/20 to-black py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl md:text-5xl font-bold text-center text-white mb-8">
CXperts Blog
</h1> <p class="text-xl text-gray-300 text-center max-w-3xl mx-auto">
Insights and updates from the world of customer experience
</p> </div> </div> <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<article class="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <div class="flex justify-between items-center mb-4"> <span class="text-sm text-blue-400">${post.category}</span> <span class="text-sm text-gray-400">${post.date}</span> </div> <h2 class="text-xl font-semibold text-white mb-3">${post.title}</h2> <p class="text-gray-300 mb-4">${post.excerpt}</p> <a${addAttribute(`/blog/${post.title.toLowerCase().replace(/ /g, "-")}`, "href")} class="text-blue-400 hover:text-blue-300">
Read More →
</a> </div> </article>`)} </div> </section> </main> ` })}`;
}, "/home/ibrahim/Work/cxpert2.0/src/pages/blog.astro", undefined);

const $$file = "/home/ibrahim/Work/cxpert2.0/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
