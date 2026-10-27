/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// Authentic Official Instagram Icon with canonical gradient and camera glyph
export function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Instagram"
    >
      <defs>
        <radialGradient id="ig-grad" cx="20%" cy="100%" r="130%">
          <stop offset="0%" stopColor="#ffda77" />
          <stop offset="10%" stopColor="#fca939" />
          <stop offset="30%" stopColor="#ee2a7b" />
          <stop offset="60%" stopColor="#a307ba" />
          <stop offset="100%" stopColor="#3c5cd6" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
      <rect
        x="4.75"
        y="4.75"
        width="14.5"
        height="14.5"
        rx="4"
        stroke="#ffffff"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3.6" stroke="#ffffff" strokeWidth="1.7" />
      <circle cx="16.5" cy="7.5" r="1.1" fill="#ffffff" />
    </svg>
  );
}

// Authentic Official Facebook Icon (Official Meta Blue #1877F2 with official white 'f')
export function FacebookIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Facebook"
    >
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        d="M16.5 13.5H13.8V22H10.2V13.5H8.5V10.4H10.2V8.1C10.2 6.4 11.2 4.5 13.9 4.5C15 4.5 15.9 4.6 15.9 4.6V7.4H14.8C13.8 7.4 13.5 8 13.5 8.7V10.4H16.2L16.5 13.5Z"
        fill="#ffffff"
      />
    </svg>
  );
}

// Authentic Official Google Gmail Logo (Multi-color Google envelope M)
export function GmailIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Gmail"
    >
      <path
        d="M2 6.5C2 5.12 3.12 4 4.5 4H6L12 8.5L18 4H19.5C20.88 4 22 5.12 22 6.5V7.5L12 15L2 7.5V6.5Z"
        fill="#EA4335"
      />
      <path
        d="M22 6.5V17.5C22 18.88 20.88 20 19.5 20H17V9.5L22 6.5Z"
        fill="#4285F4"
      />
      <path
        d="M2 6.5V17.5C2 18.88 3.12 20 4.5 20H7V9.5L2 6.5Z"
        fill="#34A853"
      />
      <path
        d="M7 20H17V12L12 15.75L7 12V20Z"
        fill="#FBBC04"
      />
      <path
        d="M18 4L12 8.5L6 4H4.5C3.5 4 2.65 4.6 2.25 5.45L12 13L21.75 5.45C21.35 4.6 20.5 4 19.5 4H18Z"
        fill="#EA4335"
      />
    </svg>
  );
}
