"use client";

import React, { useEffect } from "react";

interface CreditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreditModal({ isOpen, onClose }: CreditModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="credit-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
    >
      <div className="bg-white rounded-lg border border-slate-200 shadow-xl max-w-md w-full p-6 relative animate-in fade-in zoom-in-95 duration-150">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-sm font-semibold p-1 rounded hover:bg-slate-100 transition-colors cursor-pointer"
        >
          ✕
        </button>

        <div className="mb-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
            Project Credit
          </span>
          <h2
            id="credit-modal-title"
            className="text-lg font-bold text-slate-900 tracking-tight"
          >
            Dhrubo Roy Partho
          </h2>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            B.Sc. in Information and Communication Engineering
            <br />
            University of Rajshahi
          </p>
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-2 text-xs">
          <div className="flex items-center justify-between py-1">
            <span className="text-slate-500">Email</span>
            <a
              href="mailto:dhruboroypartho@gmail.com"
              className="text-slate-900 font-medium hover:underline truncate max-w-[220px]"
            >
              dhruboroypartho@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-slate-500">LinkedIn</span>
            <a
              href="https://linkedin.com/in/dhrubo-roy-partho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 font-medium hover:underline"
            >
              linkedin.com/in/dhrubo-roy-partho
            </a>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-slate-500">Architecture</span>
            <span className="text-slate-700 font-mono text-[11px]">
              100% Client-Side / Browser-Only
            </span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
