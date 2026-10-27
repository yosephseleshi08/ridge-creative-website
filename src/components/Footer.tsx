/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-stone-50 text-stone-900 border-t border-stone-200 py-10 font-dmsans">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-600">
        <div>
          © 2026 Ridge Creative Web Studio. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5 font-medium">
          <span>Built with</span>
          <span className="text-red-500 text-sm" role="img" aria-label="love">❤️</span>
          <span>in Cleveland, Ohio.</span>
        </div>
      </div>
    </footer>
  );
}
