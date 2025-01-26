/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D3HHkzXb.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navigation, $ as $$Layout } from '../chunks/Navigation_BbTn8vLA.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function Hero() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "video",
        {
          ref: videoRef,
          className: "w-full h-full object-cover opacity-50",
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
          children: /* @__PURE__ */ jsx(
            "source",
            {
              src: isMobile ? "/herocx-mobile-portrait.mp4" : "/herocx-optimized-audio.mp4",
              type: "video/mp4"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleMuteToggle,
          className: "absolute bottom-6 right-6 z-50 p-3 bg-black/80 rounded-full hover:bg-black/90 transition-colors",
          "aria-label": isMuted ? "Unmute video" : "Mute video",
          children: isMuted ? /* @__PURE__ */ jsxs("svg", { className: "w-6 h-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" }),
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" })
          ] }) : /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600", children: "Welcome to CXperts" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed", children: "Elevating Customer Experience Through Innovation and Excellence" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#services",
            className: "px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25",
            children: "Explore Our Services"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact",
            className: "px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 border border-white/30",
            children: "Contact Us"
          }
        )
      ] })
    ] }) })
  ] });
}

function TrustedBy() {
  const logos = [
    { src: "/cx-logos/Redington_Logo.jpg", alt: "Redington" },
    { src: "/cx-logos/Orascom.png", alt: "Orascom" },
    { src: "/cx-logos/Hawana.png", alt: "Hawana" },
    { src: "/cx-logos/muriya.jpg", alt: "Muriya" },
    { src: "/cx-logos/jebel-safeh.jpg", alt: "Jebel Safeh" },
    { src: "/cx-logos/VOSKER_Logo.png", alt: "Vosker" },
    { src: "/cx-logos/big-black-lemon.png", alt: "Lemon" },
    { src: "/cx-logos/spiro.png", alt: "Spiro" },
    { src: "/cx-logos/spypoint.png", alt: "Spypoint" },
    // Duplicate logos for seamless loop
    { src: "/cx-logos/Redington_Logo.jpg", alt: "Redington" },
    { src: "/cx-logos/Orascom.png", alt: "Orascom" },
    { src: "/cx-logos/Hawana.png", alt: "Hawana" },
    { src: "/cx-logos/muriya.jpg", alt: "Muriya" },
    { src: "/cx-logos/jebel-safeh.jpg", alt: "Jebel Safeh" },
    { src: "/cx-logos/VOSKER_Logo.png", alt: "Vosker" },
    { src: "/cx-logos/big-black-lemon.png", alt: "Lemon" },
    { src: "/cx-logos/spiro.png", alt: "Spiro" },
    { src: "/cx-logos/spypoint.png", alt: "Spypoint" }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "py-12 bg-gradient-to-b from-[#0c0c1d] to-[#1a1a2f] relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#E114E5] to-[#9946FF]", children: "Trusted By Industry Leaders" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0c0c1d] to-transparent z-10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0c0c1d] to-transparent z-10" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden whitespace-nowrap", children: /* @__PURE__ */ jsx("div", { className: "inline-block animate-scroll", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-16 py-8", children: logos.map((logo, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-40 h-24 flex items-center justify-center bg-white/5 rounded-lg p-4 hover:bg-gradient-to-br from-[#4F46E5]/10 to-[#9946FF]/10 transition-all duration-300 border border-white/5 hover:border-white/10",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: logo.src,
                alt: logo.alt,
                className: "max-w-full max-h-full object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
              }
            )
          },
          index
        )) }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      ` })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CXperts - Elevating Customer Experience" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ibrahim/Work/cxpert2.0/src/components/Navigation.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ibrahim/Work/cxpert2.0/src/components/Hero.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "TrustedBy", TrustedBy, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ibrahim/Work/cxpert2.0/src/components/TrustedBy.jsx", "client:component-export": "default" })} </main> ` })}`;
}, "/home/ibrahim/Work/cxpert2.0/src/pages/index.astro", undefined);

const $$file = "/home/ibrahim/Work/cxpert2.0/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
