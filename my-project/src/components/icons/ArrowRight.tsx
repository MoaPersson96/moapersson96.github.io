import React from "react";

// Moa
export function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      role="presentation"
      {...props}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
    );
  }