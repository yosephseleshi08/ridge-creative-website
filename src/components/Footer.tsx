/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-slate-900/90 py-8 text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 Ridge Creative Web Studio. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Built with</span>
          <span className="text-white text-[11px]" role="img" aria-label="love">❤️</span>
          <span>in Cleveland, Ohio.</span>
        </div>
      </div>
    </footer>
  );
}
