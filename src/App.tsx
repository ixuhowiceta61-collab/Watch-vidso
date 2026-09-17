import React, { useState } from 'react';
import { Play, Volume2, Maximize2, Clock, Sparkles } from 'lucide-react';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleThumbnailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPlaying((prev) => !prev);
  };

  return (
    <div
      id="main-container"
      className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between selection:bg-zinc-800 selection:text-zinc-100 font-sans antialiased"
    >
      {/* Top subtle navigation bar */}
      <header id="site-header" className="w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-tight text-zinc-200">
              Studio Vision
            </span>
          </div>
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
            Video Showcase
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
          
          {/* Header pill badge */}
          <div
            id="category-badge"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>Featured Overview</span>
          </div>

          {/* Title */}
          <h1
            id="page-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 max-w-2xl leading-[1.15] mb-4"
          >
            Crafting the Next Generation of Digital Experiences
          </h1>

          {/* Centered Video Thumbnail Placeholder */}
          <div className="w-full my-6 sm:my-8">
            <div
              id="video-thumbnail-container"
              onClick={handleThumbnailClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsPlaying((prev) => !prev);
                }
              }}
              aria-label="Video thumbnail preview"
              className="group relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/90 shadow-2xl transition-all duration-300 hover:border-zinc-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              {/* Background gradient & subtle grid pattern */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-zinc-800/60 via-zinc-900 to-zinc-950"
                aria-hidden="true"
              />
              
              <div
                className="absolute inset-0 opacity-20 bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:16px_16px]"
                aria-hidden="true"
              />

              {/* Decorative wave / abstract light graphics */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-72 h-72 rounded-full bg-zinc-700/20 blur-3xl filter transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Video status overlay elements */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-[11px] font-mono text-zinc-300 font-medium tracking-wide backdrop-blur-sm">
                  4K UHD
                </span>
                {isPlaying && (
                  <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60 text-[11px] font-mono text-emerald-400 font-medium backdrop-blur-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    NOW PLAYING
                  </span>
                )}
              </div>

              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-2 text-zinc-400">
                <div className="p-1.5 rounded-md bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-sm hover:text-zinc-200 transition-colors">
                  <Volume2 className="w-4 h-4" />
                </div>
                <div className="p-1.5 rounded-md bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-sm hover:text-zinc-200 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Centered Play Button */}
              <div
                id="play-button-container"
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
              >
                <div
                  id="play-icon-badge"
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                    isPlaying
                      ? 'bg-emerald-500 text-zinc-950 scale-105 ring-4 ring-emerald-500/20'
                      : 'bg-zinc-100 text-zinc-950 group-hover:bg-white group-hover:scale-110 ring-4 ring-white/10'
                  }`}
                >
                  <Play
                    className={`w-6 h-6 sm:w-7 sm:h-7 ml-0.5 transition-transform duration-300 ${
                      isPlaying ? 'fill-zinc-950' : 'fill-zinc-950'
                    }`}
                  />
                </div>
                <span className="mt-3 text-xs sm:text-sm font-medium text-zinc-300 tracking-wide drop-shadow group-hover:text-zinc-100 transition-colors">
                  {isPlaying ? 'Click to pause simulation' : 'Click to preview video'}
                </span>
              </div>

              {/* Bottom video duration & timeline bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent z-10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{isPlaying ? '01:14 / 04:30' : '04:30'}</span>
                </div>
                <span className="text-xs text-zinc-400 font-medium">
                  Chapter 1: Visual Design Systems
                </span>
              </div>

              {/* Progress bar line */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-zinc-800">
                <div
                  className={`h-full bg-zinc-300 transition-all duration-500 ${
                    isPlaying ? 'w-1/3 bg-emerald-400' : 'w-0 group-hover:w-1/4'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Sample Text Section */}
          <div id="sample-text-section" className="max-w-xl mx-auto space-y-3">
            <p
              id="sample-description"
              className="text-base sm:text-lg text-zinc-400 leading-relaxed"
            >
              Explore how thoughtful visual rhythm, balanced negative space, and responsive
              design principles unite to create natural and effortless user experiences across
              all modern mobile and desktop screens.
            </p>
            <p id="sample-caption" className="text-xs sm:text-sm text-zinc-500 font-normal">
              High-definition interactive demonstration with responsive layout scaling and dark theme adaptation.
            </p>
          </div>

          {/* Styled Action Button */}
          <div id="cta-container" className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3">
            <a
              id="main-action-button"
              href="https://www.profitableratecpmnetwork.com/y9p6dqs2cx?key=21f3070174e80f957ca91101e6246de6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-7 py-3 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-sm tracking-wide transition-all duration-200 hover:bg-white hover:shadow-lg hover:shadow-zinc-100/10 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Watch Full Video
            </a>
          </div>

        </div>
      </main>

      {/* Clean, minimal footer */}
      <footer id="site-footer" className="w-full border-t border-zinc-800/60 py-5 text-center text-xs text-zinc-500">
        <p>© 2026 Studio Vision. Designed for high performance and mobile clarity.</p>
      </footer>
    </div>
  );
}
