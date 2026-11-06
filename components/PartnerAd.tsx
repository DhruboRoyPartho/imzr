"use client";

import React, { useEffect, useRef } from "react";

interface PartnerAdProps {
  className?: string;
}

export default function PartnerAd({ className = "" }: PartnerAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Safety guard: Never load or activate ad script if the image editor workspace is active
    if (typeof document === "undefined") return;
    if (document.body.getAttribute("data-editor-active") === "true") return;

    const container = containerRef.current;
    if (!container) return;

    // Prevent duplicate dynamic injection in the same container
    if (container.querySelector("script[data-partner-ad-dynamic='true']")) return;

    try {
      const script = document.createElement("script");
      script.setAttribute("data-partner-ad-dynamic", "true");
      script.type = "text/javascript";
      script.async = true;
      script.referrerPolicy = "no-referrer-when-downgrade";
      script.src =
        "//quarrelsomebitter.com/bhXlVes.dBGilF0uYHWuci/JeUm/9/uNZuUQlfk/PzTHck2bM/D/M/xrNoDaULtiNVz/YqwQMIz_E/0pOUQS";
      (script as unknown as { settings?: Record<string, unknown> }).settings = {};

      container.appendChild(script);
    } catch {
      // Graceful fallback if blocked by browser privacy protections
    }

    return () => {
      // Clean up injected script when component unmounts
      if (container) {
        const dynamicScript = container.querySelector(
          "script[data-partner-ad-dynamic='true']"
        );
        if (dynamicScript) {
          dynamicScript.remove();
        }
      }
    };
  }, []);

  return (
    <aside
      ref={containerRef}
      aria-label="Advertisement"
      className={`partner-ad-slot my-8 w-full flex flex-col items-center justify-center ${className}`}
    >
      <div className="w-full max-w-2xl mx-auto bg-slate-100/60 border border-slate-200/80 rounded-lg p-3 text-center">
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1 select-none">
          Sponsored / Advertisement
        </span>
        <div className="partner-ad-content min-h-[50px] flex items-center justify-center">
          {/* Inline script for crawler discovery and direct DOM execution */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(uul){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = uul || {};
s.src = "\\/\\/quarrelsomebitter.com\\/bhXlVes.dBGilF0uYHWuci\\/JeUm\\/9\\/uNZuUQlfk\\/PzTHck2bM\\/D\\/M\\/xrNoDaULtiNVz\\/YqwQMIz_E\\/0pOUQS";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
if (l && l.parentNode) {
  l.parentNode.insertBefore(s, l);
}
})({});`,
            }}
          />
        </div>
      </div>
    </aside>
  );
}
