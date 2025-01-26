/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D3HHkzXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navigation, $ as $$Layout } from '../chunks/Navigation_BbTn8vLA.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CXperts - Contact Us" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ibrahim/Work/cxpert2.0/src/components/Navigation.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-16"> <div class="bg-gradient-to-b from-blue-900/20 to-black py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl md:text-5xl font-bold text-center text-white mb-8">
Contact Us
</h1> <p class="text-xl text-gray-300 text-center max-w-3xl mx-auto">
Get in touch with us to discuss how we can help improve your customer experience
</p> </div> </div> <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid md:grid-cols-2 gap-12"> <!-- Contact Form --> <div class="bg-white/5 backdrop-blur-lg rounded-xl p-8"> <h2 class="text-2xl font-semibold text-white mb-6">Send us a message</h2> <form class="space-y-6"> <div> <label for="name" class="block text-gray-300 mb-2">Name</label> <input type="text" id="name" name="name" class="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500" required> </div> <div> <label for="email" class="block text-gray-300 mb-2">Email</label> <input type="email" id="email" name="email" class="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500" required> </div> <div> <label for="subject" class="block text-gray-300 mb-2">Subject</label> <input type="text" id="subject" name="subject" class="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500" required> </div> <div> <label for="message" class="block text-gray-300 mb-2">Message</label> <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500" required></textarea> </div> <button type="submit" class="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
Send Message
</button> </form> </div> <!-- Contact Information --> <div class="space-y-8"> <div class="bg-white/5 backdrop-blur-lg rounded-xl p-8"> <h2 class="text-2xl font-semibold text-white mb-6">Contact Information</h2> <div class="space-y-4"> <div> <h3 class="text-blue-400 font-medium mb-2">Address</h3> <p class="text-gray-300">123 Business District, Cairo, Egypt</p> </div> <div> <h3 class="text-blue-400 font-medium mb-2">Email</h3> <a href="mailto:contact@cxperts.com" class="text-gray-300 hover:text-white">
contact@cxperts.com
</a> </div> <div> <h3 class="text-blue-400 font-medium mb-2">Phone</h3> <a href="tel:+20123456789" class="text-gray-300 hover:text-white">
+20 123 456 789
</a> </div> </div> </div> <div class="bg-white/5 backdrop-blur-lg rounded-xl p-8"> <h2 class="text-2xl font-semibold text-white mb-6">Office Hours</h2> <div class="space-y-2 text-gray-300"> <p>Monday - Friday: 9:00 AM - 6:00 PM</p> <p>Saturday: 10:00 AM - 4:00 PM</p> <p>Sunday: Closed</p> </div> </div> </div> </div> </section> </main> ` })}`;
}, "/home/ibrahim/Work/cxpert2.0/src/pages/contact.astro", undefined);

const $$file = "/home/ibrahim/Work/cxpert2.0/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
