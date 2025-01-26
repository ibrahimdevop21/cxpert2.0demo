import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderHead, f as renderSlot, d as renderComponent, b as createAstro } from './astro/server_D3HHkzXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const quickLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" }
    ],
    services: [
      { name: "Customer Support", href: "/services#customer-support" },
      { name: "Technical Support", href: "/services#technical-support" },
      { name: "Back Office Operations", href: "/services#back-office" },
      { name: "AI Solutions", href: "/services#ai-solutions" },
      { name: "Quality Assurance", href: "/services#quality-assurance" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" }
    ]
  };
  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/cxperts", icon: "facebook" },
    { name: "Twitter", href: "https://twitter.com/cxperts", icon: "twitter" },
    { name: "LinkedIn", href: "https://linkedin.com/company/cxperts", icon: "linkedin" },
    { name: "Instagram", href: "https://instagram.com/cxperts", icon: "instagram" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gradient-to-b from-black to-blue-900/20 pt-12 mt-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Top section with logo and social links --> <div class="flex flex-col md:flex-row justify-between items-center mb-12"> <div class="mb-8 md:mb-0"> <img src="/cxpert.svg" alt="CXperts Logo" class="h-12 w-auto"> </div> <div class="flex space-x-6"> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-300"> ${link.icon === "facebook" && renderTemplate`<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"></path> </svg>`} ${link.icon === "twitter" && renderTemplate`<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path> </svg>`} ${link.icon === "linkedin" && renderTemplate`<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg>`} ${link.icon === "instagram" && renderTemplate`<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg>`} </a>`)} </div> </div> <!-- Main footer content --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12"> <!-- Company Info --> <div> <h3 class="text-lg font-semibold text-white mb-4">About CXperts</h3> <p class="text-gray-400 mb-4">
Leading provider of innovative customer experience solutions, empowering businesses to deliver exceptional service.
</p> <div class="space-y-2"> <p class="text-gray-400 flex items-center"> <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path> </svg> <a href="mailto:contact@cxperts.com" class="hover:text-white">
contact@cxperts.com
</a> </p> <p class="text-gray-400 flex items-center"> <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path> </svg> <a href="tel:+20123456789" class="hover:text-white">
+20 123 456 789
</a> </p> </div> </div> <!-- Quick Links --> <div> <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3> <ul class="space-y-2"> ${quickLinks.company.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-white transition-colors duration-300"> ${link.name} </a> </li>`)} </ul> </div> <!-- Services --> <div> <h3 class="text-lg font-semibold text-white mb-4">Our Services</h3> <ul class="space-y-2"> ${quickLinks.services.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-white transition-colors duration-300"> ${link.name} </a> </li>`)} </ul> </div> <!-- Legal --> <div> <h3 class="text-lg font-semibold text-white mb-4">Legal</h3> <ul class="space-y-2"> ${quickLinks.legal.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-white transition-colors duration-300"> ${link.name} </a> </li>`)} </ul> </div> </div> <!-- Bottom bar --> <div class="border-t border-gray-800 py-8"> <div class="text-center text-gray-400"> <p>&copy; ${currentYear} CXperts. All rights reserved.</p> </div> </div> </div> </footer>`;
}, "/home/ibrahim/Work/cxpert2.0/src/components/Footer.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="CXperts - Leading provider of innovative customer experience solutions"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/cxpert.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800"> <div class="relative z-0 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/ibrahim/Work/cxpert2.0/src/layouts/Layout.astro", undefined);

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("nav", { className: "fixed w-full z-50 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/cxpert.svg",
          alt: "CXperts Logo",
          className: "h-16 w-auto"
        }
      ) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxs("div", { className: "ml-10 flex items-baseline space-x-4", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/",
            className: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
            children: "Home"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/services",
            className: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
            children: "Services"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/about",
            className: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
            children: "About Us"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/blog",
            className: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
            children: "Blog"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/careers",
            className: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
            children: "Careers"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            className: "bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700",
            children: "Contact"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none",
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
            !isOpen ? /* @__PURE__ */ jsx(
              "svg",
              {
                className: "block h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 6h16M4 12h16M4 18h16"
                  }
                )
              }
            ) : /* @__PURE__ */ jsx(
              "svg",
              {
                className: "block h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M6 18L18 6M6 6l12 12"
                  }
                )
              }
            )
          ]
        }
      ) })
    ] }) }),
    isOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-lg", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/services",
          className: "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "Services"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/about",
          className: "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "About Us"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/blog",
          className: "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "Blog"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/careers",
          className: "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "Careers"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/contact",
          className: "bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "Contact"
        }
      )
    ] }) })
  ] });
}

export { $$Layout as $, Navigation as N };
